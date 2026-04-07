'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isActiveRoute = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50 w-full bg-brand-cream/95 backdrop-blur-sm border-b border-[#dbcdb6] px-4 sm:px-6 md:px-12 py-2 md:py-3 flex items-center justify-between gap-4"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 min-w-0 pr-2">
          <Image
            src="/photos/root-graphics-logo.png"
            alt="Roots Graphics logo"
            width={48}
            height={48}
            className="h-9 w-9 sm:h-10 sm:w-10 md:h-11 md:w-11 object-contain rounded-sm flex-shrink-0"
            priority
          />
          <div className="flex flex-col min-w-0">
            <div className="relative inline-block pb-1">
              <span className="font-display text-lg sm:text-2xl md:text-3xl font-semibold tracking-[0.14em] sm:tracking-[0.2em] md:tracking-[0.25em] text-brand-navy uppercase whitespace-nowrap">
                Roots Graphics
              </span>
              <span className="absolute bottom-0 left-0 w-full h-px bg-brand-orange" />
            </div>
            <span className="hidden sm:block font-body text-[10px] uppercase tracking-widest text-brand-gold mt-1.5">
              Excellence Needs Roots
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(({ href, label }) => {
            const isActive = isActiveRoute(href);
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`relative group font-body text-sm uppercase tracking-wider pb-0.5 transition-colors duration-300 ${
                    isActive ? 'text-brand-orange' : 'text-brand-navy'
                  }`}
                >
                  {label}
                  <span
                    className={`absolute bottom-0 left-0 h-px bg-brand-orange w-full transition-transform duration-300 origin-left ${
                      isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <span className="w-6 h-px bg-brand-navy block" />
          <span className="w-6 h-px bg-brand-navy block" />
          <span className="w-6 h-px bg-brand-navy block" />
        </button>
      </motion.nav>

      {/* Mobile Fullscreen Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="fixed inset-0 z-[100] bg-brand-cream flex flex-col items-center justify-center"
          >
            <button
              className="absolute top-6 right-6 text-brand-navy text-4xl leading-none hover:text-brand-orange transition-colors duration-300"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              &times;
            </button>

            <Image
              src="/photos/root-graphics-logo.png"
              alt="Roots Graphics logo"
              width={80}
              height={80}
              className="w-20 h-20 object-contain mb-8 rounded-md"
            />

            <ul className="flex flex-col items-center gap-10">
              {navLinks.map(({ href, label }) => {
                const isActive = isActiveRoute(href);
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      onClick={() => setMenuOpen(false)}
                      className={`font-display text-5xl uppercase tracking-[0.15em] transition-colors duration-300 ${
                        isActive ? 'text-brand-orange' : 'text-brand-navy hover:text-brand-orange'
                      }`}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
