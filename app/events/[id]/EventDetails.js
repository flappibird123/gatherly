"use client";

export default function EventDetails({ event }) {
  // Make sure frame is an array before calling join
  const tags = Array.isArray(event?.tags) ? event.tags.join(", ") : "";

  return (
    <div className="p-4 border rounded shadow">
      <h1 className="text-2xl font-bold">{event?.name}</h1>
      <p>ID: {event?.id}</p>
      <p>Tags: {tags}</p>
      <p>{event?.description}</p>
    </div>
  );
}
