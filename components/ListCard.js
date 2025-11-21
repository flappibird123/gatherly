export default function ListCard({ event }) {
const { title, description , date, location } = event;
  return (
    <div className="bg-white shadow-md rounded-xl p-6 max-w-md mx-auto hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
      <h3 className="text-gray-600 mb-4">{description}</h3>
      <p className="text-gray-500 text-sm">{date} at {location}</p>
    </div>
  );
}
