import Stories from "./Stories";

function Feed() {
  return (
    <main className="grid grid-cols-1 md:grid-columns-2 md:max-w-3xl xl:grid-columns-3 xl:max-w-6xl mx-auto">
      <section className="col-span-2">
        {/* Stories */}
        <Stories />
        {/* Posts */}
      </section>

      <section>
        {/* Mini Profile */}
        {/* Suggestions */}
      </section>
    </main>
  );
}

export default Feed;
