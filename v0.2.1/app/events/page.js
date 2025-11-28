import Link from 'next/link';
import prisma from '@/lib/db.ts';
import EventCard from '@/components/EventCard';

export default async function Events() {
  //get all posts
  const events = await prisma.event.findMany();
  //get post count
  const eventsCount = await prisma.event.count();
  //placeholder values
  const placeHolderDate = "00/00/0000";
  const placeHolderLocation = "00 Example St Suburb";

  return (
    <div className="px-6 py-10">
      <h2 className="text-5xl font-bold text-center tracking-tight text-gray-800 py-6">
        Events ({eventsCount})
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {events.map((event) => (
          //link to individual post page
          <Link key={event.id} href={`/events/${event.id}`}>
            <EventCard
              id={event.id}
              title={event.title}
              description={event.description}
              location={placeHolderLocation}
              date={placeHolderDate}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
