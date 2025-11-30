import { SearchBar } from '../components/Search'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-12">

      {/* Header Section */}
      <div className="text-center max-w-2xl mb-12">
        <h1 className="text-5xl font-extrabold text-black mb-4 ">
          Gatherly
        </h1>
        <h2 className="text-2xl font-semibold text-black mb-6 ">
          Discover Local Events Near You
        </h2>
        <h3 className="text-black text-base md:text-lg leading-relaxed drop-shadow-[0_1px_8px_rgba(0,0,0,0.3)]">
          Gatherly is a modern platform connecting communities through local events. 
          Discover, share, and RSVP to gatherings effortlessly, fostering meaningful connections 
          in a sleek, user-friendly, and intuitive environment.
        </h3>
      </div>

      {/* Buttons Section */}
      <div className="flex gap-6 mb-12 flex-wrap justify-center">
        <Link
          href="/events"
          className="bg-white text-black px-6 py-3 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Find Events
        </Link>
        <Link
          href="/sign-in"
          className="border-2 border-white text-black px-6 py-3 rounded-xl font-medium hover:bg-white hover:text-[#a6c1ee] transition-colors duration-300"
        >
          Join Now!
        </Link>
      </div>

      {/* Search Bar Section */}
      <div className="w-full max-w-lg">
        <SearchBar
          className="w-full rounded-2xl px-4 py-3 shadow-lg focus:outline-none focus:ring-2 focus:ring-[#fbc2eb] placeholder-gray-400 text-gray-800"
        />
      </div>
    </div>
  )
}
