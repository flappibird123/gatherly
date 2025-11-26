import EventDetails from "./EventDetails";

// This is the dynamic route page
export default async function EventPage({ params }) {
  // Safely unwrap params in dev and prod
  const resolvedParams = params?.then ? await params : params;
  const id = resolvedParams.id;

  // Fetch your event data (replace with your actual fetch function)
  const event = await fetchEventById(id);

  return <EventDetails event={event} />;
}

// Example fetch function
async function fetchEventById(id) {
  // Simulate API call
  // Replace with: await fetch(`/api/events/${id}`).then(res => res.json());
  return {
    id,
    name: `Event ${id}`,
    description: "This is a sample event description.",
    tags: ["sample", "event"],
  };
}
