import Link from 'next/link';
import prisma from '@/lib/db.ts';
import EventCard from '@/components/Event/EventCard';
import { convertToDate, convertToTime } from '@/lib/time/time';
import { getAllEvents } from '@/lib/prisma/search';
import { getEventCount } from '@/lib/prisma/count';

export default async function Events() {
  //get all posts
  const events = await getAllEvents();
  //get post count
  const eventsCount = await getEventCount();

  return (
    <div className="px-6 py-10">
      <h2 className="text-5xl font-bold tracking-tight text-gray-800 py-6">
        Events
      </h2>
      <p className="pb-4">Showing {eventsCount} {eventsCount > 1 ? "events" : "event"}</p>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {events.map((event) => (

          <Link key={event.id} href={`/events/${event.id}`}>
            <EventCard
              id={event.id}
              title={event.title}
              description={event.description}
              location={event.location}
              date={convertToDate(event.date)}
              time={convertToTime(event.date)}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
