'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { paintings } from '@/data/paintings';

// ── Types & constants ──────────────────────────────────────────────────────

type Painting = (typeof paintings)[number];

const FILTERS = ['All Works', 'M. B. Parag', 'Jayant B. Mairal'] as const;

// ── Variants ───────────────────────────────────────────────────────────────

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

const cardItem = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' as const } },
};

// ── Sub-components ─────────────────────────────────────────────────────────

function PaintingCard({
  painting,
  index,
  onClick,
}: {
  painting: Painting;
  index: number;
  onClick: () => void;
}) {
  return (
    <motion.div
      variants={cardItem}
      whileHover={{ y: -4, transition: { duration: 0.25 } }}
      onClick={onClick}
      className="break-inside-avoid mb-6 cursor-pointer bg-white group transition-shadow duration-300 hover:shadow-xl"
      style={{ border: '1px solid rgba(201,168,76,0.18)' }}
    >
      {/* Frame placeholder — alternating aspect ratio for masonry feel */}
      <div
        className={`w-full ${index % 2 === 0 ? 'aspect-[4/3]' : 'aspect-[4/5]'} flex items-center justify-center`}
        style={{
          background: '#111',
          border: '3px solid #C9A84C',
          boxShadow:
            'inset 0 0 0 8px rgba(201,168,76,0.06), inset 0 0 20px rgba(0,0,0,0.5)',
        }}
      >
        <span
          className="font-display italic text-brand-gold text-lg text-center px-6"
          style={{ opacity: 0.3 }}
        >
          {painting.title}
        </span>
      </div>

      {/* Info */}
      <div className="p-5">
        <h3 className="font-display text-xl font-medium text-brand-navy mb-1">
          {painting.title}
        </h3>
        <p className="font-body text-sm text-brand-orange mb-1">{painting.artist}</p>
        <p className="font-body text-xs text-gray-500 mb-3">
          {painting.year} · {painting.medium} · {painting.size}
        </p>
        <p className="font-body text-sm text-gray-600 leading-relaxed line-clamp-3 mb-4">
          {painting.description}
        </p>
        <span className="font-body text-xs uppercase tracking-wider text-brand-orange flex items-center gap-1.5 group-hover:gap-3 transition-all duration-300">
          View Details <span aria-hidden="true">→</span>
        </span>
      </div>
    </motion.div>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────

export default function GalleryPage() {
  const [filter, setFilter] = useState<string>('All Works');
  const [lightboxId, setLightboxId] = useState<number | null>(null);

  const filtered =
    filter === 'All Works'
      ? paintings
      : paintings.filter((p) => p.artist === filter);

  const lightboxIndex =
    lightboxId !== null ? filtered.findIndex((p) => p.id === lightboxId) : -1;

  const lightboxPainting = lightboxIndex !== -1 ? filtered[lightboxIndex] : null;

  const goNext = () => {
    if (lightboxIndex !== -1) {
      setLightboxId(filtered[(lightboxIndex + 1) % filtered.length].id);
    }
  };

  const goPrev = () => {
    if (lightboxIndex !== -1) {
      setLightboxId(
        filtered[(lightboxIndex - 1 + filtered.length) % filtered.length].id,
      );
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* ═══════════════════════════════════════════════════════
          PAGE HEADER
      ══════════════════════════════════════════════════════════ */}
      <section className="bg-[#f4ede2] min-h-[40vh] flex items-end pb-14 pt-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="flex flex-col items-center text-center gap-4"
          >
            {/* Breadcrumb */}
            <p className="font-body text-xs text-brand-gold tracking-widest">
              <Link href="/" className="hover:text-brand-orange transition-colors duration-200">
                Home
              </Link>
              <span className="mx-2 opacity-40">/</span>
              Gallery
            </p>

            <h1 className="font-display text-6xl text-brand-navy font-light">
              The Collection
            </h1>

            <p className="font-body text-sm uppercase tracking-widest text-brand-orange">
              Works by M. B. Parag &amp; Jayant B. Mairal
            </p>

            <div className="w-20 h-px bg-brand-gold mt-1" />
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          FILTER TABS
      ══════════════════════════════════════════════════════════ */}
      <div className="sticky top-20 z-40 bg-brand-cream border-b border-gray-200/80">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center gap-6 md:gap-8 py-4 overflow-x-auto">
          {FILTERS.map((f) => {
            const isActive = filter === f;
            return (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`relative shrink-0 font-body text-sm uppercase tracking-wider pb-1.5 transition-colors duration-300 ${
                  isActive
                    ? 'text-brand-orange'
                    : 'text-gray-500 hover:text-brand-navy'
                }`}
              >
                {f}
                {isActive && (
                  <motion.span
                    layoutId="filter-underline"
                    className="absolute bottom-0 left-0 w-full h-px bg-brand-gold"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════
          GALLERY GRID — CSS columns masonry
      ══════════════════════════════════════════════════════════ */}
      <section className="bg-brand-cream px-6 md:px-12 py-12">
        <div className="max-w-7xl mx-auto">
          {filtered.length === 0 ? (
            <p className="font-body text-gray-400 text-center py-20">
              No works found.
            </p>
          ) : (
            <motion.div
              key={filter}
              variants={stagger}
              initial="hidden"
              animate="visible"
              className="columns-1 sm:columns-2 lg:columns-3 gap-6"
            >
              {filtered.map((painting, idx) => (
                <PaintingCard
                  key={painting.id}
                  painting={painting}
                  index={idx}
                  onClick={() => setLightboxId(painting.id)}
                />
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          LIGHTBOX
      ══════════════════════════════════════════════════════════ */}
      <AnimatePresence>
        {lightboxPainting && (
          <motion.div
            key="lightbox-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4 md:px-20"
            style={{ background: 'rgba(13,13,13,0.96)' }}
            onClick={(e) => {
              if (e.target === e.currentTarget) setLightboxId(null);
            }}
          >
            {/* Close */}
            <button
              onClick={() => setLightboxId(null)}
              className="absolute top-5 right-6 text-white hover:text-brand-orange transition-colors duration-200 text-4xl leading-none z-10"
              aria-label="Close lightbox"
            >
              &times;
            </button>

            {/* Prev */}
            <button
              onClick={goPrev}
              className="absolute left-3 md:left-6 text-white hover:text-brand-gold transition-colors duration-200 z-10 p-3 text-5xl leading-none"
              aria-label="Previous painting"
            >
              &#8249;
            </button>

            {/* Next */}
            <button
              onClick={goNext}
              className="absolute right-3 md:right-6 text-white hover:text-brand-gold transition-colors duration-200 z-10 p-3 text-5xl leading-none"
              aria-label="Next painting"
            >
              &#8250;
            </button>

            {/* Content — re-animates on each painting change */}
            <motion.div
              key={lightboxPainting.id}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.28, ease: 'easeOut' }}
              className="flex flex-col items-center gap-6 w-full max-w-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Frame placeholder */}
              <div
                className="w-full aspect-[4/3] flex items-center justify-center"
                style={{
                  maxWidth: '70vw',
                  background: '#111',
                  border: '4px solid #C9A84C',
                  boxShadow:
                    'inset 0 0 0 3px #0D0D0D, inset 0 0 0 6px rgba(201,168,76,0.18), 0 0 60px rgba(201,168,76,0.08)',
                }}
              >
                <span
                  className="font-display text-2xl italic text-brand-gold text-center px-8"
                  style={{ opacity: 0.3 }}
                >
                  {lightboxPainting.title}
                </span>
              </div>

              {/* Info */}
              <div className="text-center flex flex-col items-center gap-2 px-4">
                <h2 className="font-display text-4xl text-white">
                  {lightboxPainting.title}
                </h2>
                <p className="font-body text-sm text-brand-gold tracking-wide">
                  {lightboxPainting.artist} &nbsp;·&nbsp; {lightboxPainting.year} &nbsp;·&nbsp;{' '}
                  {lightboxPainting.medium} &nbsp;·&nbsp; {lightboxPainting.size}
                </p>
                <p className="font-body text-sm text-gray-300 leading-relaxed max-w-xl mt-1">
                  {lightboxPainting.description}
                </p>
              </div>

              {/* Counter */}
              <p className="font-body text-xs uppercase tracking-widest text-gray-600">
                {lightboxIndex + 1} &nbsp;/&nbsp; {filtered.length}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ═══════════════════════════════════════════════════════
          BOTTOM CTA
      ══════════════════════════════════════════════════════════ */}
      <section className="bg-[#efe8dc] py-20 px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto text-center flex flex-col items-center gap-5"
        >
          <h2 className="font-display text-4xl text-brand-navy leading-tight">
            Interested in acquiring a work?
          </h2>
          <p className="font-body text-gray-600 leading-relaxed">
            Contact us to learn more about our collection, valuation services, and
            authentication certificates.
          </p>
          <Link
            href="/contact"
            className="mt-2 inline-block font-body text-sm uppercase tracking-widest text-brand-navy border border-brand-navy px-8 py-3 transition-all duration-300 hover:bg-brand-orange hover:text-white hover:border-brand-orange"
          >
            Get in Touch
          </Link>
        </motion.div>
      </section>
    </motion.div>
  );
}
