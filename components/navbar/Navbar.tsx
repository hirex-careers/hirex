"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}

<Link href="/" className="flex items-center gap-3">

  <Image
    src="/images/logo.png"
    alt="HireX Logo"
    width={52}
    height={52}
    priority
  />

  <div>
    <h1 className="text-3xl font-extrabold tracking-tight">
      Hire<span className="text-blue-600">X</span>
    </h1>

    <p className="text-sm text-gray-500">
      India's Smart Hiring Platform
    </p>
  </div>

</Link>
        {/* Menu */}
        <nav className="hidden md:flex gap-8 font-medium">
          <Link href="/">Home</Link>
          <Link href="/jobs">Jobs</Link>
          <Link href="/companies">Companies</Link>
          <Link href="/dashboard">Dashboard</Link>
        </nav>

        {/* Buttons */}
        <div className="flex gap-3">
          <Link
            href="/login"
            className="px-5 py-2 rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-50 transition"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="px-5 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90 transition"
          >
            Register
          </Link>
        </div>

      </div>
    </header>
  );
}