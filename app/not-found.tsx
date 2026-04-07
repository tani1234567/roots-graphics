'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#f4ede2] flex items-center justify-center px-6 text-center"
    >
      <div className="flex flex-col items-center gap-4">
        <p className="font-display text-[7.5rem] sm:text-[10rem] leading-none text-brand-gold select-none">
          404
        </p>
        <h1 className="font-body text-2xl sm:text-3xl uppercase tracking-widest text-brand-navy">
          Page Not Found
        </h1>
        <Link
          href="/"
          className="mt-2 inline-block font-display text-2xl text-brand-navy hover:text-brand-orange transition-colors duration-300"
        >
          Back to Home
        </Link>
      </div>
    </motion.div>
  );
}
