export default function About() {
  return (
    <div className="min-h-screen flex justify-center px-6 py-20">
      <div className="max-w-3xl w-full bg-white shadow-md rounded-2xl p-10 space-y-10">
        
        <h1 className="text-4xl font-bold text-center text-gray-800">
          About Gatherly
        </h1>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            Gatherly is your go-to platform for discovering, sharing, and connecting
            with local events and community activities. Whether you're looking for a
            weekend workshop, a live music performance, a local meetup, or a hidden
            gem in your neighborhood, Gatherly makes it easy to find experiences that
            matter to you.
          </p>

          <p>
            Our mission is simple: to bring communities closer together. By connecting 
            people with the events happening around them, we aim to foster meaningful 
            interactions, spark new interests, and help everyone feel more connected 
            to the world right outside their door.
          </p>
        </div>

        <div className="bg-gray-100 rounded-xl p-6 space-y-4">
          <p className="font-semibold text-gray-800">With Gatherly, you can:</p>

          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>
              <strong>Discover</strong> events near you with ease.
            </li>
            <li>
              <strong>Stay updated</strong> on the latest happenings in your community.
            </li>
            <li>
              <strong>Share</strong> events and invite friends effortlessly.
            </li>
          </ol>
        </div>

        <div className="text-gray-700 leading-relaxed">
          <p>
            We believe that great experiences are often just around the corner. 
            Gatherly exists to make sure you never miss them. Join us and explore 
            the community in a whole new way.
          </p>
        </div>
      </div>
    </div>
  );
}
