import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const leadSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  message: z.string().optional(),
  propertyId: z.string().optional(),
  type: z.enum(['schedule_showing', 'request_info', 'general']).default('general'),
});

export async function POST(request: NextRequest) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  const result = leadSchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json(
      { error: 'Validation failed', details: result.error.flatten() },
      { status: 422 }
    );
  }

  const lead = {
    ...result.data,
    id: `lead-${Date.now()}`,
    createdAt: new Date().toISOString(),
  };

  // In production, this would be saved to Supabase
  console.log('[Lead submitted]', lead);

  return NextResponse.json(
    { message: 'Lead submitted successfully', id: lead.id },
    { status: 201 }
  );
}
