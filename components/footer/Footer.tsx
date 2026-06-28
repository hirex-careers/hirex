import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-14">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        <div>
          <div className="flex items-center gap-3">
  <Image
    src="/images/logo.png"
    alt="HireX"
    width={55}
    height={55}
  />

  <div>
    <h2 className="text-3xl font-bold">
      Hire<span className="text-blue-500">X</span>
    </h2>

    <p className="text-gray-400 text-sm">
      India's Smart Hiring Platform
    </p>
  </div>
</div>

          <p className="text-gray-400 mt-4">
            Find Jobs. Get Hired. Faster.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">
            Company
          </h3>

          <ul className="space-y-3 text-gray-400">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/jobs">Jobs</Link></li>
            <li><Link href="/companies">Companies</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">
            Support
          </h3>

          <ul className="space-y-3 text-gray-400">
            <li>Email Support</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">
            Contact
          </h3>

          <p className="text-gray-400">
            📧 hirex.careers@gmail.com
          </p>

          <p className="text-gray-400 mt-2">
            🇮🇳 India
          </p>
        </div>

      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500">
        © 2026 HireX. All Rights Reserved.
      </div>

    </footer>
  );
}