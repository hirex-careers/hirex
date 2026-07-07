import CategoryCard from "./CategoryCard";

const categories = [
  { title: "Software Development", jobs: 2450, icon: "code" },
  { title: "Data Science", jobs: 860, icon: "data" },
  { title: "Marketing", jobs: 1200, icon: "marketing" },
  { title: "UI/UX Design", jobs: 740, icon: "design" },
];

function Categories() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold">
            Popular Categories
          </h2>

          <p className="text-gray-500 mt-3">
            Explore jobs by your favourite domain.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((item) => (
            <CategoryCard
              key={item.title}
              title={item.title}
              jobs={item.jobs}
              icon={item.icon}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Categories;