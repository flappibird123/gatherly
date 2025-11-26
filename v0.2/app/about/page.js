import Link from 'next/link'

export default function About() {
  return (
    <section className="py-20 px-6 md:px-24">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold text-gray-900 mb-6">
          About Gatherly
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          Gatherly is a platform designed to connect people with the events and experiences that matter most to them. From local meetups to community workshops, Gatherly makes it easy to discover, join, and participate in events that bring people together.
        </p>
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h3>
          <p className="text-gray-700 text-lg">
            Our mission is simple: to help people build meaningful connections through shared experiences. We believe that attending events should be effortless, fun, and enriching, and Gatherly provides the tools to make that happen.
          </p>
        </div>
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h3>
          <p className="text-gray-700 text-lg mb-4">
            Browse local events tailored to your interests. Join or RSVP with a single click. Engage with organizers and other attendees to make every event memorable.
          </p>
          <p className="text-gray-700 text-lg">
            Whether you're looking to network, learn a new skill, or just have fun, Gatherly provides an intuitive and seamless experience to discover opportunities near you.
          </p>
        </div>
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Features</h3>
          <ul className="text-gray-700 text-lg list-disc list-inside space-y-2">
            <li>Personalized event recommendations based on your interests</li>
            <li>Easy RSVP and event management</li>
            <li>Connect with organizers and attendees directly</li>
            <li>Discover hidden local gems and community experiences</li>
          </ul>
        </div>

        {/* Call to Action */}
        <div className="mt-8">
          <Link
            href="/events"
            className="inline-block px-8 py-4 bg-purple-600 text-white font-semibold rounded-lg shadow-lg hover:bg-purple-700 transition"
          >
            Explore Events Now
          </Link>
        </div>
      </div>
    </section>
  );
}
