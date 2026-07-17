import { FaBuilding } from "react-icons/fa";

function CompaniesPage() {
  return (
    <main className="flex min-h-[75vh] items-center justify-center bg-gradient-to-b from-slate-50 to-white px-4 py-20">
      <div className="max-w-2xl text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-500 text-3xl text-white shadow-xl">
          <FaBuilding />
        </div>

        <span className="mt-8 block text-sm font-semibold uppercase tracking-[0.22em] text-blue-600">
          HireX Companies
        </span>

        <h1 className="mt-4 text-4xl font-extrabold text-gray-900 sm:text-5xl">
          Explore Top Companies
        </h1>

        <p className="mt-5 text-lg leading-8 text-gray-500">
          Company profiles, hiring details, open jobs and employee insights
          will be added here.
        </p>
      </div>
    </main>
  );
}

export default CompaniesPage;