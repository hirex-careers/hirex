export default function Categories() {
  const categories = [
    "Software Development",
    "Data Science",
    "Marketing",
    "Sales",
    "HR",
    "Finance",
    "Healthcare",
    "Customer Support",
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-4xl font-bold text-center">
          Explore Categories
        </h2>

        <p className="text-center text-gray-500 mt-3">
          Choose your preferred career path
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {categories.map((category) => (
            <div
              key={category}
              className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition cursor-pointer"
            >
              <h3 className="font-semibold">{category}</h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}