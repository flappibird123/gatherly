import EventCard from '../../components/EventCard'
import { getEvents } from '../../lib/events'

export default async function Events() {
    const events = await getEvents();
    return (
        <div>
            <h2 className="text-5xl font-bold text-center tracking-tight text-gray-800 py-6">
                Events
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {events.map(event => (
                    <div key={event.id} className="h-full">
                        <EventCard event={event} className="h-full" />
                    </div>
                ))}
            </div>
        </div>
    )
}
