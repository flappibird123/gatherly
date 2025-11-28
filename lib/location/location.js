

export async function locationExists(location) {
    if (!location || location.trim().length < 3) return false;

    const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
        location
    )}&format=json&limit=1`;

    try {
        const res = await fetch(url, {
            headers: {
                "User-Agent": "gatherly-app/1.0" // required by Nominatim rules
            }
        });

        if (!res.ok) return false;

        const data = await res.json();

        // if array has at least 1 result -> location exists
        return data.length > 0;
    } catch (err) {
        console.error("Location validation error:", err);
        return false;
    }
}
