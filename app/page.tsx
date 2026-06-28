import Navbar from "@/components/navbar/Navbar";
import Hero1 from "@/components/hero/Hero1";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero1 />


      <main className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">

          <h1 className="text-6xl font-extrabold">
            Find Your
            <span className="text-blue-600"> Dream Job</span>
          </h1>

          <p className="mt-6 text-xl text-gray-600">
            India's fastest growing hiring platform.
          </p>

          <button className="mt-8 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold hover:scale-105 transition">
            Explore Jobs →
          </button>

        </div>
      </main>
    </>
  );
}