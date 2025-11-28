import RSVPButton from "../Buttons/RSVPButton";

export default function EventCard({ id, title, description, date, location, time }) {
  return (
    <div className="flex flex-col justify-between bg-white/80 backdrop-blur-sm shadow-md hover:shadow-lg transition-shadow rounded-xl p-6 border border-gray-200 h-full">
      <div className="relative z-10 flex-1">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">{title}</h2>

        {/* Truncate description */}
        <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
          {description}
        </p>

        <div className="space-y-1">
          <p className="text-sm text-gray-700">
            <span className="font-medium">Date:</span> {date}
          </p>
          <p className="text-sm text-gray-700">
            <span className="font-medium">Time:</span> {time}
          </p>
          <p className="text-sm text-gray-700">
            <span className="font-medium">Location:</span> {location}
          </p>
        </div>
      </div>

      <div className="mt-4">
        <RSVPButton id={id} />
      </div>
    </div>
  );
}
