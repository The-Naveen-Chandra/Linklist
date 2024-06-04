export default function Home() {
  return (
    <main>
      <section className="pt-32">
        <div className="max-w-md mb-8">
          <h1 className="text-5xl font-bold">Your one link for everything.</h1>
          <h2 className="text-gray-500 text-xl mt-6">
            Share your links, social profiles, contact information and more on
            one page.
          </h2>
        </div>

        <form className="inline-flex items-center shadow-lg shadow-gray-500/20 rounded-full">
          <span className="bg-white py-4 pl-6 rounded-tl-full rounded-bl-full">
            linklist.to/
          </span>
          <input type="text" className="py-4" placeholder="username" />
          <button
            type="submit"
            className="bg-blue-500 text-white py-4 px-6 rounded-tr-full rounded-br-full"
          >
            Join for free
          </button>
        </form>
      </section>
    </main>
  );
}
