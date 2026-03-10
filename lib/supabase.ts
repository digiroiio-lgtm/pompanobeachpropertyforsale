import { createBrowserClient } from '@supabase/ssr';
import { createServerClient as createSSRServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

/**
 * Supabase Table Schemas:
 *
 * properties:
 *   id uuid primary key
 *   address text, city text, state text, zip text, neighborhood text
 *   price numeric, beds int, baths numeric, sqft int, lot_size int
 *   year_built int, property_type text, description text
 *   features text[], images text[], lat numeric, lng numeric
 *   hoa_fee numeric, tax_amount numeric, days_on_market int
 *   status text, is_waterfront bool, has_pool bool, has_garage bool
 *   garage_spaces int, listing_date date, mls_number text
 *   agent_name text, agent_phone text, created_at timestamptz
 *
 * favorites:
 *   id uuid primary key
 *   property_id uuid references properties(id)
 *   user_id uuid references auth.users(id)
 *   created_at timestamptz
 *
 * leads:
 *   id uuid primary key
 *   name text, email text, phone text, message text
 *   property_id uuid references properties(id)
 *   type text, created_at timestamptz
 *
 * email_alerts:
 *   id uuid primary key
 *   email text, filters jsonb, frequency text, created_at timestamptz
 */

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? '';

export function createClient() {
  return createBrowserClient(supabaseUrl, supabaseAnonKey);
}

export async function createServerClient() {
  const cookieStore = await cookies();
  return createSSRServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value, options }) => {
          cookieStore.set(name, value, options);
        });
      },
    },
  });
}
