import EventCard from '../../components/EventCard'


export default function Events() {
    const events = prisma.event.findMany();
    return (
        <div>
            <h2 className="text-5xl font-bold text-center tracking-tight text-gray-800 py-6">
                Events
            </h2>
            
        </div>
    )
}
