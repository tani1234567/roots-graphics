'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { paintings } from '@/data/paintings';

// ── Variants ───────────────────────────────────────────────────────────────

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' as const, delay },
  },
});

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

// ── Data ───────────────────────────────────────────────────────────────────

const collectors = [
  { name: 'Shri Ratan Tata',          role: 'Chairman Emeritus, Tata Group' },
  { name: 'Shri V.P. Singh',          role: 'Former Prime Minister of India' },
  { name: 'Smt. Pratibha Tai Patil',  role: 'Former President of India' },
  { name: 'Mr. Anand Mahindra',       role: 'Chairman, Mahindra Group' },
  { name: 'Larsen & Toubro',          role: 'Corporate Collection' },
  { name: 'Reliance Industries',      role: 'Corporate Collection' },
  { name: 'Bank of America',          role: 'Corporate Collection' },
  { name: 'Air India',                role: 'Corporate Collection' },
];

const pillars = [
  {
    icon: '◈',
    title: 'Funding',
    desc: "Channelling art's benchmark value toward global charitable causes",
  },
  {
    icon: '◉',
    title: 'Innovation',
    desc: 'Creating new models where 100% of proceeds go directly to those in need',
  },
  {
    icon: '◎',
    title: 'Opportunity',
    desc: 'Uplifting underprivileged communities through art, education, and healthcare',
  },
];

// ── Page ───────────────────────────────────────────────────────────────────

export default function HomePage() {
  const featured = paintings.slice(0, 6);

  return (
    <motion.div
      className="overflow-x-hidden"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >

      {/* ═══════════════════════════════════════════════════════
          SECTION 1 — HERO
      ══════════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen bg-[#f4ede2] flex items-center justify-center overflow-hidden">

        {/* Ornate painting-frame placeholder (absolutely behind content) */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          aria-hidden="true"
        >
          <div
            className="relative"
            style={{
              width: '70vw',
              height: '60vh',
              border: '6px solid #C9A84C',
              boxShadow:
                'inset 0 0 0 3px #0D0D0D, inset 0 0 0 6px rgba(201,168,76,0.35), 0 0 80px rgba(201,168,76,0.06)',
            }}
          >
            {/* Decorative inner corners */}
            <span className="absolute top-2 left-2  block w-5 h-5 border-t-2 border-l-2 border-brand-gold opacity-60" />
            <span className="absolute top-2 right-2 block w-5 h-5 border-t-2 border-r-2 border-brand-gold opacity-60" />
            <span className="absolute bottom-2 left-2  block w-5 h-5 border-b-2 border-l-2 border-brand-gold opacity-60" />
            <span className="absolute bottom-2 right-2 block w-5 h-5 border-b-2 border-r-2 border-brand-gold opacity-60" />
          </div>
        </div>

        {/* Soft radial overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(255,255,255,0.35) 0%, rgba(229,217,199,0.75) 100%)',
          }}
          aria-hidden="true"
        />

        {/* Hero content — staggered on mount */}
        <div className="relative z-10 flex flex-col items-center text-center gap-5 px-6">
          <motion.p
            variants={fadeUp(0)}
            initial="hidden"
            animate="visible"
            className="font-body text-[11px] uppercase tracking-widest text-brand-gold"
          >
            Established 1990 · Mumbai, India
          </motion.p>

          <motion.h1
            variants={fadeUp(0.12)}
            initial="hidden"
            animate="visible"
            className="font-display text-7xl md:text-8xl lg:text-9xl font-light tracking-wide text-brand-navy leading-none"
          >
            Roots Graphics
          </motion.h1>

          <motion.p
            variants={fadeUp(0.24)}
            initial="hidden"
            animate="visible"
            className="font-body text-xl italic text-brand-orange"
          >
            Excellence Needs Roots
          </motion.p>

          <motion.div
            variants={fadeUp(0.32)}
            initial="hidden"
            animate="visible"
            className="w-20 h-px bg-brand-gold"
          />

          <motion.p
            variants={fadeUp(0.4)}
            initial="hidden"
            animate="visible"
            className="font-body text-sm tracking-wider text-gray-600"
          >
            Fine Art Consultants · Art Promoters · Valuers · World Conceptualist
          </motion.p>

          <motion.div variants={fadeUp(0.5)} initial="hidden" animate="visible">
            <Link
              href="/gallery"
              className="mt-2 inline-block font-body text-sm uppercase tracking-widest text-brand-navy border border-brand-navy px-8 py-3 transition-all duration-300 hover:bg-brand-orange hover:text-white hover:border-brand-orange"
            >
              Explore Our Collection
            </Link>
          </motion.div>

          {/* Bouncing scroll chevron */}
          <motion.div variants={fadeUp(0.62)} initial="hidden" animate="visible" className="mt-2">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
              className="text-brand-gold"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </motion.div>
          </motion.div>
        </div>

      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 2 — BRAND INTRO
      ══════════════════════════════════════════════════════════ */}
      <section className="bg-brand-cream py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Left — Painting frame placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="w-full aspect-[4/5] relative"
            style={{
              background: '#111',
              border: '4px solid #C9A84C',
              boxShadow: 'inset 0 0 40px rgba(0,0,0,0.6), 0 8px 32px rgba(0,0,0,0.12)',
            }}
          >
            <span
              className="absolute inset-0 flex items-center justify-center font-display text-2xl italic text-brand-gold"
              style={{ opacity: 0.3 }}
            >
              Roots Graphics Collection
            </span>
          </motion.div>

          {/* Right — Story copy */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
            className="flex flex-col gap-5"
          >
            <p className="font-body text-xs uppercase tracking-widest text-brand-orange">
              Our Story
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-brand-navy leading-tight">
              Where Art Meets Purpose
            </h2>
            <div className="w-16 h-px bg-brand-gold" />
            <p className="font-body text-gray-700 leading-relaxed">
              Founded on the birthday of Mahatma Gandhi — October 2, 1990 — Roots Graphics was
              born with a singular purpose: to give India&apos;s overlooked artistic talents the platform
              they deserve, and to ensure Indian art is not only appreciated worldwide, but that
              artists receive their rightful recognition.
            </p>
            <p className="font-body text-gray-700 leading-relaxed">
              Over three decades, we have built relationships with luminaries of Indian art, culture,
              and industry — from the legendary S.H. Raza and M.F. Husain, to Shri Ratan Tata,
              Shri V.P. Singh, and the halls of Rashtrapati Bhavan.
            </p>
          </motion.div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 3 — FEATURED PAINTINGS GRID
      ══════════════════════════════════════════════════════════ */}
      <section className="bg-[#efe8dc] py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-14"
          >
            <h2 className="font-display text-5xl text-brand-navy mb-3">The Collection</h2>
            <p className="font-body text-sm uppercase tracking-widest text-brand-gold">
              Selected Works by M. B. Parag &amp; Jayant B. Mairal
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {featured.map((p) => (
              <motion.div
                key={p.id}
                variants={item}
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
                className="cursor-pointer transition-shadow duration-300 hover:shadow-[0_0_20px_rgba(201,168,76,0.25)]"
                style={{ background: '#FFFFFF', border: '1px solid rgba(201,168,76,0.28)' }}
              >
                {/* Artwork placeholder */}
                <div
                  className="w-full aspect-[4/3] flex items-center justify-center"
                  style={{ background: '#f3ecdf', borderBottom: '2px solid rgba(201,168,76,0.25)' }}
                >
                  <span
                    className="font-display text-lg italic text-brand-gold"
                    style={{ opacity: 0.2 }}
                  >
                    [ artwork ]
                  </span>
                </div>

                {/* Info */}
                <div className="p-5">
                  <h3 className="font-display text-xl text-brand-navy mb-1">{p.title}</h3>
                  <p className="font-body text-sm text-brand-orange mb-1">{p.artist}</p>
                  <p className="font-body text-xs text-gray-500">
                    {p.year} · {p.medium}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 4 — VISION STATEMENT
      ══════════════════════════════════════════════════════════ */}
      <section
        className="bg-[#f3ebdf] py-24 px-6 md:px-12"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(26,26,46,0.06) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      >
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center flex flex-col items-center gap-8"
        >
          <motion.p
            variants={item}
            className="font-body text-xs uppercase tracking-widest text-brand-gold"
          >
            Our Vision
          </motion.p>

          <motion.blockquote
            variants={item}
            className="font-display text-3xl md:text-4xl lg:text-5xl text-brand-navy font-light italic leading-relaxed"
          >
            &ldquo;We do not merely sell fine art. We strive to create reputable owners of art —
            and to use the power of creativity to fund innovation, support the underprivileged, and
            solve humanity&rsquo;s greatest challenges.&rdquo;
          </motion.blockquote>

          <motion.p variants={item} className="font-body text-sm text-brand-orange">
            — M. B. Parag, Founder
          </motion.p>

          {/* Three Pillars */}
          <motion.div
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6 w-full"
          >
            {pillars.map(({ icon, title, desc }) => (
              <motion.div
                key={title}
                variants={item}
                className="flex flex-col items-center gap-3 text-center"
              >
                <span className="text-brand-gold text-2xl">{icon}</span>
                <h3 className="font-display text-xl text-brand-navy">{title}</h3>
                <p className="font-body text-sm text-gray-600 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 5 — NOTABLE RECOGNITION
      ══════════════════════════════════════════════════════════ */}
      <section className="bg-brand-cream py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-14"
          >
            <h2 className="font-display text-4xl text-brand-navy">
              Collected &amp; Celebrated By
            </h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {collectors.map(({ name, role }) => (
              <motion.div
                key={name}
                variants={item}
                className="bg-white shadow-sm p-5 flex flex-col gap-1"
              >
                <span className="font-display text-lg text-brand-navy leading-snug">{name}</span>
                <span className="font-body text-xs text-gray-500">{role}</span>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 6 — CTA BANNER
      ══════════════════════════════════════════════════════════ */}
      <section className="bg-[#f2e3d3] py-24 px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center flex flex-col items-center gap-7"
        >
          <h2 className="font-display text-4xl md:text-5xl text-brand-navy leading-tight">
            Discover the World of Roots Graphics
          </h2>
          <p className="font-body text-gray-700 text-base max-w-xl">
            Explore over three decades of fine art, conceptual paintings, and creative expression
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <Link
              href="/gallery"
              className="font-body text-sm uppercase tracking-widest bg-brand-orange text-white px-8 py-3 transition-colors duration-300 hover:bg-[#d86a1d]"
            >
              View Gallery
            </Link>
            <Link
              href="/contact"
              className="font-body text-sm uppercase tracking-widest border border-brand-navy text-brand-navy px-8 py-3 transition-colors duration-300 hover:bg-brand-navy hover:text-white"
            >
              Get in Touch
            </Link>
          </div>
        </motion.div>
      </section>

    </motion.div>
  );
}
