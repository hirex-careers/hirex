"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-xl">
            H
          </div>

          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Hire<span className="text-blue-600">X</span>
            </h1>
            <p className="text-xs text-gray-500">
              Find Jobs. Get Hired.
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