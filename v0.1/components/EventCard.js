import RSVPButton from "./RSVPButton";

export default function EventCard({ event = {} }) {
  const { title, description, date, location } = event;
  return (
    <div className="bg-white/80 backdrop-blur-sm shadow-md hover:shadow-lg transition-shadow rounded-xl p-6 border border-gray-200">
      <h2 className="text-2xl font-semibold text-gray-800 mb-3">
        {title}
      </h2>
      <p className="text-gray-600 mb-4 leading-relaxed">
        {description}
      </p>
      <div className="space-y-1">
        <p className="text-sm text-gray-700">
          <span className="font-medium">Date:</span> {date}
        </p>
        <p className="text-sm text-gray-700">
          <span className="font-medium">Location:</span> {location}
        </p>
      </div>
      <br />
      <RSVPButton />
    </div>
  );
}
