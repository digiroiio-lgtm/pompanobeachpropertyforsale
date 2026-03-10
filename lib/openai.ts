import OpenAI from 'openai';
import type { SearchFilters, PropertyType } from '@/types';

const apiKey = process.env.OPENAI_API_KEY;

export const openai = apiKey ? new OpenAI({ apiKey }) : null;

export interface ParsedSearchResult {
  filters: SearchFilters;
  summary: string;
}

const MOCK_PARSE_RESULT: ParsedSearchResult = {
  filters: {
    minPrice: 400000,
    maxPrice: 800000,
    beds: 3,
    propertyType: ['house'],
    pool: true,
  },
  summary: "3+ bedroom homes with a pool between $400K–$800K",
};

/**
 * Parses a natural language property search query into structured SearchFilters.
 * Falls back to a mock response when OPENAI_API_KEY is not configured.
 */
export async function parsePropertySearch(query: string): Promise<ParsedSearchResult> {
  if (!openai) {
    // Return a mock result based on simple keyword detection
    const lower = query.toLowerCase();
    const filters: SearchFilters = {};

    if (lower.includes('waterfront') || lower.includes('water front')) {
      filters.waterfront = true;
    }
    if (lower.includes('pool')) {
      filters.pool = true;
    }
    if (lower.includes('luxury') || lower.includes('million')) {
      filters.minPrice = 1000000;
      filters.propertyType = ['luxury'];
    }
    if (lower.includes('condo') || lower.includes('condominium')) {
      filters.propertyType = ['condo'];
    }
    if (lower.includes('new construction') || lower.includes('brand new')) {
      filters.propertyType = ['new-construction'];
    }
    const bedsMatch = lower.match(/(\d)\s*(?:bed|bedroom)/);
    if (bedsMatch) {
      filters.beds = parseInt(bedsMatch[1]);
    }
    const minMatch = lower.match(/\$(\d+)k?\s*(?:to|-)/i);
    if (minMatch) {
      const val = parseInt(minMatch[1]);
      filters.minPrice = lower.includes('k') ? val * 1000 : val;
    }

    return {
      filters,
      summary: `Results matching: "${query}"`,
    };
  }

  const systemPrompt = `You are a real estate search assistant for Pompano Beach, Florida.
Parse the user's natural language search query into structured JSON filters.
Return ONLY valid JSON with this structure (all fields optional):
{
  "filters": {
    "minPrice": number,
    "maxPrice": number,
    "beds": number (minimum bedrooms),
    "baths": number (minimum bathrooms),
    "propertyType": array of: "house"|"condo"|"townhouse"|"villa"|"waterfront"|"luxury"|"new-construction"|"land",
    "waterfront": boolean,
    "pool": boolean,
    "newConstruction": boolean,
    "neighborhood": string,
    "minSqft": number,
    "maxSqft": number
  },
  "summary": string (short human-readable description of search)
}`;

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: query },
      ],
      temperature: 0.1,
      response_format: { type: 'json_object' },
    });

    const content = response.choices[0]?.message?.content ?? '{}';
    const parsed = JSON.parse(content) as ParsedSearchResult;

    if (!parsed.filters) {
      return MOCK_PARSE_RESULT;
    }

    // Validate property types
    const validTypes: PropertyType[] = [
      'house', 'condo', 'townhouse', 'villa', 'waterfront', 'luxury', 'new-construction', 'land',
    ];
    if (parsed.filters.propertyType) {
      parsed.filters.propertyType = parsed.filters.propertyType.filter((t) =>
        validTypes.includes(t)
      );
    }

    return parsed;
  } catch {
    return MOCK_PARSE_RESULT;
  }
}
