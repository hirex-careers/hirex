const categories = [
  { name: "Software Development", jobs: "2,450 Jobs", icon: "💻" },
  { name: "Data Science", jobs: "1,280 Jobs", icon: "📊" },
  { name: "Marketing", jobs: "980 Jobs", icon: "📢" },
  { name: "Sales", jobs: "1,150 Jobs", icon: "💼" },
  { name: "Finance", jobs: "850 Jobs", icon: "💰" },
  { name: "Healthcare", jobs: "1,020 Jobs", icon: "🏥" },
];

export default function Categories() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">
          Browse by Category
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-8"
            >
              <div className="text-5xl">{cat.icon}</div>

              <h3 className="text-2xl font-bold mt-5">
                {cat.name}
              </h3>

              <p className="text-gray-500 mt-2">
                {cat.jobs}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}