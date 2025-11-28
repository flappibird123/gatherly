import prisma from '@/lib/db.ts';
import { convertToDate, convertToTime } from '@/lib/time/time';

export default async function Event({ params }) {
    //resolve id
    const resolvedParams = await params;
    const { id } = resolvedParams;

    if (!id) return <p className="text-center text-red-500 mt-10">No event ID provided</p>;

    const event = await prisma.event.findUnique({
        where: { id },
    });

    if (!event) return <p className="text-center text-gray-500 mt-10">Event not found</p>;

    const date = convertToDate(event.date);
    const time = convertToTime(event.date);

    return (
        <div className="max-w-3xl mx-auto mt-10 px-6">
            <div className="bg-white shadow-lg rounded-2xl p-8 border border-gray-100">
                <h1 className="text-3xl font-bold mb-4 text-gray-800">{event.title}</h1>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                    {event.description}
                </p>

                <div className="mt-6 flex flex-col gap-2 text-gray-600">
                    <p><span className="font-semibold text-gray-800">Date:</span> {date}</p>
                    <p><span className="font-semibold text-gray-800">Time:</span> {time}</p>
                </div>
            </div>
        </div>
    );
}
