'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="bg-[#143526] text-brand-navy px-6 md:px-12 pt-16 pb-8 border-t border-[#D6BA74]"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">

        {/* Column 1 — Brand */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <Image
              src="/icon.svg"
              alt="Roots Graphics logo"
              width={52}
              height={52}
              className="w-11 h-11 sm:w-12 sm:h-12 object-contain rounded-sm flex-shrink-0"
            />
            <span className="font-display text-2xl sm:text-3xl font-semibold tracking-[0.14em] sm:tracking-[0.2em] uppercase text-brand-navy">
              Roots Graphics
            </span>
          </div>
          <span className="font-body text-[10px] uppercase tracking-widest text-brand-gold">
            Excellence Needs Roots
          </span>
          <p className="font-body text-sm text-gray-600 leading-relaxed mt-3">
            Fine Art Consultants · Art Promoters · Organizers · Valuers · Advisors · Global Fine Arts Organization
          </p>
        </div>

        {/* Column 2 — Navigation */}
        <div className="flex flex-col gap-3">
          <h3 className="font-body text-[10px] uppercase tracking-widest text-brand-gold mb-1">
            Navigation
          </h3>
          <ul className="flex flex-col gap-3">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="font-body text-sm text-brand-navy hover:text-brand-orange transition-colors duration-300"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 — Contact */}
        <div className="flex flex-col gap-2">
          <h3 className="font-body text-[10px] uppercase tracking-widest text-brand-gold mb-1">
            Contact
          </h3>
          <p className="font-body text-sm text-brand-navy font-medium">
            M. B. Parag — Founder
          </p>
          <a
            href="mailto:paragmairal123@gmail.com"
            className="font-body text-sm text-gray-600 hover:text-brand-navy transition-colors duration-300"
          >
            paragmairal123@gmail.com
          </a>
          <a
            href="mailto:mbparag@rootsgraphics.com"
            className="font-body text-sm text-gray-600 hover:text-brand-navy transition-colors duration-300"
          >
            mbparag@rootsgraphics.com
          </a>
          <a
            href="tel:+919820070620"
            className="font-body text-sm text-gray-600 hover:text-brand-navy transition-colors duration-300"
          >
            +91 9820070620
          </a>
          <p className="font-body text-sm text-gray-600 leading-relaxed mt-1">
            D-601, Swapnalok Apt., Old Nagardas Road,<br />
            Mogra Pada, Andheri (E),<br />
            Mumbai - 400 069
          </p>
        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-12">
        <div
          className="px-5 py-5 text-center"
          style={{
            background: '#183A2B',
            border: '1px solid rgba(214,186,116,0.45)',
          }}
        >
          <p className="font-body text-xs uppercase tracking-widest text-brand-gold mb-2">
            Official Channel
          </p>
          <p className="font-display text-xl text-brand-navy mb-2">
            Videos, Interviews &amp; Speeches by Roots Graphics
          </p>
          <a
            href="https://www.youtube.com/@Art_Cult_By_RootsGraphics"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-sm text-brand-orange underline underline-offset-4 hover:text-brand-navy transition-colors duration-300 break-all"
          >
            https://www.youtube.com/@Art_Cult_By_RootsGraphics
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto mt-12">
        <div className="w-full h-px bg-brand-gold opacity-30 mb-6" />
        <p className="font-body text-xs text-gray-500 text-center">
          © 2025 Roots Graphics. All Rights Reserved.
        </p>
      </div>
    </motion.footer>
  );
}
