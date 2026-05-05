'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const homeSections = [
  { href: '/moments-with-dignitaries-and-icons', label: 'Moments With Dignitaries & Icons' },
  { href: '/letters-from-dignitaries',           label: 'Letters From Dignitaries & Icons' },
  { href: '/the-collection',                     label: 'The Collection' },
  { href: '/collected-celebrated',               label: 'Collected & Celebrated By' },
  { href: '/story-board-of-india',               label: 'Story Board of India' },
  { href: '/rashtrapati-bhavan-visit',           label: 'Rashtrapati Bhavan Visit' },
];

const aboutSections = [
  { href: '/about/mb-parag',                          label: 'M. B. Parag' },
  { href: '/about/jayant-b-mairal',                   label: 'Jayant B. Mairal' },
  { href: '/about/art-as-a-force-for-global-change',  label: 'Art as a Force for Global Change' },
];

const navLinks = [
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen]               = useState(false);
  const [dropdownOpen, setDropdownOpen]       = useState(false);
  const [aboutDropdownOpen, setAboutDropdown] = useState(false);
  const [scrolled, setScrolled]               = useState(false);
  const pathname = usePathname();
  const isHome   = pathname === '/';
  const isAbout  = pathname === '/about' || pathname.startsWith('/about/');
  const dropRef      = useRef<HTMLLIElement>(null);
  const aboutDropRef = useRef<HTMLLIElement>(null);

  const isActiveRoute = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  useEffect(() => { setMenuOpen(false); setDropdownOpen(false); setAboutDropdown(false); }, [pathname]);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 55);
    handler();
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
      if (aboutDropRef.current && !aboutDropRef.current.contains(e.target as Node)) {
        setAboutDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isTransparent = isHome && !scrolled;

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 w-full px-4 sm:px-6 md:px-12 py-2 md:py-3 flex items-center justify-between gap-4 transition-all duration-500 ease-in-out ${
          isTransparent
            ? 'bg-brand-cream/50 border-b border-[#D6BA74]/50 backdrop-blur-sm'
            : 'bg-brand-cream/95 backdrop-blur-sm border-b border-[#D6BA74]'
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 min-w-0 pr-2">
          <div
            className="h-[55px] w-[55px] sm:h-[60px] sm:w-55px] md:h-[55px] md:w-[60px] rounded-full p-2 shadow-[0_2px_10px_rgba(0,0,0,0.15)] ring-1 ring-[#D6BA74]/60 flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: '#FFFFFF' }}
          >
            <Image
              src="/photos/root-graphics-logo.png"
              alt="Roots Graphics logo"
              width={48}
              height={48}
              className="h-[90%] w-[90%] object-contain"
              priority
            />
          </div>
          <div className="flex flex-col min-w-0">
            <div className="relative inline-block pb-1">
              <span className="font-display text-lg sm:text-2xl md:text-2xl font-semibold tracking-[0.14em] sm:tracking-[0.2em] md:tracking-[0.25em] text-brand-navy uppercase whitespace-nowrap">
                Roots Graphics
              </span>
              <span className="absolute bottom-0 left-0 w-full h-px bg-brand-orange" />
            </div>
            <span className="hidden sm:block font-body text-[10px] uppercase tracking-widest text-brand-gold mt-1">
              Excellence Needs Roots
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {/* Home with dropdown */}
          <li ref={dropRef} className="relative" onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
            <button
              onClick={() => setDropdownOpen((v) => !v)}
              className={`relative group font-body text-sm uppercase tracking-wider pb-0.5 transition-colors duration-300 flex items-center gap-1 ${
                isHome ? 'text-brand-orange' : 'text-brand-navy'
              }`}
            >
              Home
              <svg
                width="10" height="10" viewBox="0 0 10 10" fill="none"
                className={`transition-transform duration-200 mt-px ${dropdownOpen ? 'rotate-180' : ''}`}
              >
                <path d="M1 3l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className={`absolute bottom-0 left-0 h-px bg-brand-orange w-full transition-transform duration-300 origin-left ${isHome ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
            </button>

            <AnimatePresence>
              {dropdownOpen && (
                <motion.ul
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-3 min-w-[260px] bg-brand-cream border border-[#D6BA74]/60 shadow-lg z-50 py-2"
                >
                  <li className="px-4 py-2">
                    <Link
                      href="/"
                      onClick={() => setDropdownOpen(false)}
                      className="font-body text-xs uppercase tracking-widest text-brand-gold hover:text-brand-orange transition-colors duration-200"
                    >
                      Go to Home
                    </Link>
                  </li>
                  <li className="mx-4 my-1 h-px bg-[#D6BA74]/40" />
                  {homeSections.map((s) => (
                    <li key={s.href}>
                      <Link
                        href={s.href}
                        onClick={() => setDropdownOpen(false)}
                        className={`block px-4 py-2.5 font-body text-sm hover:bg-[#D6BA74]/15 hover:text-brand-orange transition-colors duration-200 ${
                          pathname === s.href ? 'text-brand-orange' : 'text-brand-navy'
                        }`}
                      >
                        {s.label}
                      </Link>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </li>

          {/* About with dropdown */}
          <li ref={aboutDropRef} className="relative" onMouseEnter={() => setAboutDropdown(true)} onMouseLeave={() => setAboutDropdown(false)}>
            <button
              onClick={() => setAboutDropdown((v) => !v)}
              className={`relative group font-body text-sm uppercase tracking-wider pb-0.5 transition-colors duration-300 flex items-center gap-1 ${
                isAbout ? 'text-brand-orange' : 'text-brand-navy'
              }`}
            >
              About
              <svg
                width="10" height="10" viewBox="0 0 10 10" fill="none"
                className={`transition-transform duration-200 mt-px ${aboutDropdownOpen ? 'rotate-180' : ''}`}
              >
                <path d="M1 3l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className={`absolute bottom-0 left-0 h-px bg-brand-orange w-full transition-transform duration-300 origin-left ${isAbout ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
            </button>

            <AnimatePresence>
              {aboutDropdownOpen && (
                <motion.ul
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-3 min-w-[280px] bg-brand-cream border border-[#D6BA74]/60 shadow-lg z-50 py-2"
                >
                  <li className="px-4 py-2">
                    <Link
                      href="/about"
                      onClick={() => setAboutDropdown(false)}
                      className="font-body text-xs uppercase tracking-widest text-brand-gold hover:text-brand-orange transition-colors duration-200"
                    >
                      Go to About page
                    </Link>
                  </li>
                  <li className="mx-4 my-1 h-px bg-[#D6BA74]/40" />
                  {aboutSections.map((s) => (
                    <li key={s.href}>
                      <Link
                        href={s.href}
                        onClick={() => setAboutDropdown(false)}
                        className={`block px-4 py-2.5 font-body text-sm hover:bg-[#D6BA74]/15 hover:text-brand-orange transition-colors duration-200 ${
                          pathname === s.href ? 'text-brand-orange' : 'text-brand-navy'
                        }`}
                      >
                        {s.label}
                      </Link>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </li>

          {/* Other links */}
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
            className="fixed inset-0 z-[100] bg-brand-cream flex flex-col items-center justify-center overflow-y-auto py-16"
          >
            <button
              className="absolute top-6 right-6 text-brand-navy text-4xl leading-none hover:text-brand-orange transition-colors duration-300"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              &times;
            </button>

            <div
              className="w-[100px] h-[100px] rounded-full p-3 mb-8 shadow-[0_2px_12px_rgba(0,0,0,0.18)] ring-1 ring-[#D6BA74]/60 flex items-center justify-center"
              style={{ backgroundColor: '#FFFFFF' }}
            >
              <Image
                src="/photos/root-graphics-logo.png"
                alt="Roots Graphics logo"
                width={80}
                height={80}
                className="w-[72%] h-[72%] object-contain"
              />
            </div>

            <ul className="flex flex-col items-center gap-8 w-full px-8">
              {/* Home link */}
              <li className="text-center">
                <Link
                  href="/"
                  onClick={() => setMenuOpen(false)}
                  className={`font-display text-5xl uppercase tracking-[0.15em] transition-colors duration-300 ${
                    isHome ? 'text-brand-orange' : 'text-brand-navy hover:text-brand-orange'
                  }`}
                >
                  Home
                </Link>
                {/* Section sub-links */}
                <ul className="mt-4 flex flex-col items-center gap-3">
                  {homeSections.map((s) => (
                    <li key={s.href}>
                      <Link
                        href={s.href}
                        onClick={() => setMenuOpen(false)}
                        className={`font-body text-sm uppercase tracking-widest transition-colors duration-200 ${
                          pathname === s.href ? 'text-brand-orange' : 'text-brand-navy hover:text-brand-orange'
                        }`}
                      >
                        {s.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

              <li className="w-24 h-px bg-[#D6BA74]/50" />

              {/* About link */}
              <li className="text-center">
                <Link
                  href="/about"
                  onClick={() => setMenuOpen(false)}
                  className={`font-display text-5xl uppercase tracking-[0.15em] transition-colors duration-300 ${
                    isAbout ? 'text-brand-orange' : 'text-brand-navy hover:text-brand-orange'
                  }`}
                >
                  About
                </Link>
                <ul className="mt-4 flex flex-col items-center gap-3">
                  {aboutSections.map((s) => (
                    <li key={s.href}>
                      <Link
                        href={s.href}
                        onClick={() => setMenuOpen(false)}
                        className={`font-body text-sm uppercase tracking-widest transition-colors duration-200 ${
                          pathname === s.href ? 'text-brand-orange' : 'text-brand-navy hover:text-brand-orange'
                        }`}
                      >
                        {s.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

              <li className="w-24 h-px bg-[#D6BA74]/50" />

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
