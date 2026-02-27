"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "../../public/toblogsAIe.png";

export default function Headers() {
  return (
    <header className="w-full bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 shadow-lg border-b border-slate-800">
      
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src={logo}
            alt="toblogs AI"
            width={180}
            height={60}
            priority
            className="object-contain"
          />
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          
          <Link href="/blog" className="hover:text-white transition">
            Read Blog
          </Link>

          <Link href="/about" className="hover:text-white transition">
            About Us
          </Link>

          <Link href="/services" className="hover:text-white transition">
            Services
          </Link>

          {/* CTA Button */}
          <Link
            href="/post-blog"
            className="ml-4 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold shadow-md hover:scale-105 transition"
          >
            Post Blog
          </Link>
        </nav>

      </div>
    </header>
  );
}