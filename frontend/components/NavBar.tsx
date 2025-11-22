'use client';
import Link from 'next/link';
import LanguageSwitcher from './LanguageSwitcher';
import { useState } from 'react';

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center gap-4">
        <Link href="/" className="flex items-center">
          <img src="/logo.png" alt="ABC Co." className="h-8 mr-2" />
          <span className="font-bold">ABC Co.</span>
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-6">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <Link href="/products" className="hover:text-blue-600">Product</Link>
        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
        <Link href="/news" className="hover:text-blue-600">News</Link>
        <Link href="/about" className="hover:text-blue-600">About us</Link>
        <Link href="/contact" className="hover:text-blue-600">Contact us</Link>
        <LanguageSwitcher />
      </nav>

      {/* Mobile menu button */}
      <div className="md:hidden">
        <button onClick={() => setOpen(!open)} className="p-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute left-4 right-4 top-16 bg-white p-4 rounded shadow md:hidden">
          <nav className="flex flex-col gap-3 text-lg">
            <Link href="/" onClick={() => setOpen(false)} className="py-1">Home</Link>
            <Link href="/products" onClick={() => setOpen(false)} className="py-1">Product</Link>
            <Link href="/blog" onClick={() => setOpen(false)} className="py-1">Blog</Link>
            <Link href="/news" onClick={() => setOpen(false)} className="py-1">News</Link>
            <Link href="/about" onClick={() => setOpen(false)} className="py-1">About us</Link>
            <Link href="/contact" onClick={() => setOpen(false)} className="py-1">Contact us</Link>
            
            <div className="pt-2">
              <LanguageSwitcher />
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
