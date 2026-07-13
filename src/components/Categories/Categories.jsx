import CategoryCard from "./CategoryCard";

const categories = [
  { title: "Software Development", jobs: "12,540", icon: "code" },
  { title: "Data Science", jobs: "8,240", icon: "data" },
  { title: "Marketing", jobs: "6,120", icon: "marketing" },
  { title: "UI / UX Design", jobs: "4,580", icon: "design" },
];

function Categories() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="text-blue-600 font-semibold uppercase tracking-widest">
            Browse Categories
          </span>

          <h2 className="mt-3 text-5xl font-bold text-gray-900">
            Popular Categories
          </h2>

          <p className="mt-4 text-gray-500 text-lg">
            Discover thousands of opportunities across top industries.
          </p>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {categories.map((item) => (
            <CategoryCard key={item.title} {...item} />
          ))}

        </div>

      </div>

    </section>
  );
}

export default Categories;