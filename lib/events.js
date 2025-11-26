export async function getEvents() {
    const res = await fetch('http://localhost:3000/api/events');
    if (!res.ok) throw new Error('Failed to fetch events');
    return res.json();
}