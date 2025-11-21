import listings from '../../../public/listings.json'

export async function GET() {
    return new Response(JSON.stringify(listings), {
    headers: { 'Content-Type': 'application/json' }
  });
}