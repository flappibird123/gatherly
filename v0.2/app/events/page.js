import Link from 'next/link';
import prisma from '@/lib/db.ts'
import EventCard from '@/components/EventCard';

export default async function Events() {
  const events = await prisma.event.findMany();
  const placeHolderDate = "00/00/0000"
  const placeHolderLocation = "00 Example St Suburb"

  return (
    <div>
      <h2 className="text-5xl font-bold text-center tracking-tight text-gray-800 py-6">
        Events
      </h2>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <Link href={`/events/${event.id}`}>
              <EventCard id={event.id} title={event.title} description={event.description} location={placeHolderLocation} date={placeHolderDate}/>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
