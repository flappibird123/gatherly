

export default function RSVPButton({ id }) {
  return (
    <div
      href={`/events/${id}`}
      className="
        inline-block 
        px-6 py-3 
        bg-white 
        text-gray-800 
        font-semibold 
        rounded-xl 
        shadow-md 
        transition 
        duration-200 
        hover:shadow-lg 
        hover:bg-gray-50 
        active:scale-95
        border border-gray-200
      "
    >
      I'm In!
    </div>
  );
}
