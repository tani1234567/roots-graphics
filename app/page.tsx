'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';


// ── Variants ───────────────────────────────────────────────────────────────

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 48, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const, delay },
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
  const { scrollY } = useScroll();
  const heroY       = useTransform(scrollY, [0, 700], [0, -120]);
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);
  const bgY         = useTransform(scrollY, [0, 700], [0, 60]);

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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

        {/* ── Parallax background image ── */}
        <motion.div
          className="absolute inset-0 z-[1]"
          style={{ y: bgY }}
        >
          <Image
            src="/landing-bg.jpg"
            alt="Abstract art background"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center scale-110"
          />
        </motion.div>

        {/* ── Dark overlay for readability ── */}
        <div
          className="absolute inset-0 z-[2] pointer-events-none"
          style={{ background: 'rgba(8, 18, 12, 0.20)' }}
          aria-hidden="true"
        />

        {/* ── Radial centre glow ── */}
        <div
          className="absolute inset-0 z-[3] pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 60% 55% at center, rgba(201,168,76,0.18) 0%, transparent 70%)',
          }}
          aria-hidden="true"
        />

        {/* ── Edge vignette ── */}
        <div
          className="absolute inset-0 z-[4] pointer-events-none"
          style={{ boxShadow: 'inset 0 0 160px rgba(0,0,0,0.65)' }}
          aria-hidden="true"
        />

        {/* ── Frame wrapping hero content — z-[10] ── */}
        <motion.div
          className="relative z-[10] flex flex-col items-center text-center gap-4 px-10 py-10 md:px-16 md:py-12 mx-6"
          style={{
            y: heroY,
            opacity: heroOpacity,
            background: 'rgba(10, 28, 18, 0.75)',
            border: '5px solid #C9A84C',
            boxShadow:
              'inset 0 0 0 2px rgba(0,0,0,0.8), inset 0 0 0 5px rgba(201,168,76,0.28), 0 0 80px rgba(201,168,76,0.2), 0 20px 60px rgba(0,0,0,0.5)',
            backdropFilter: 'blur(3px)',
          }}
        >
          <span className="absolute top-2 left-2   block w-4 h-4 border-t-2 border-l-2 border-brand-gold opacity-70" />
          <span className="absolute top-2 right-2  block w-4 h-4 border-t-2 border-r-2 border-brand-gold opacity-70" />
          <span className="absolute bottom-2 left-2  block w-4 h-4 border-b-2 border-l-2 border-brand-gold opacity-70" />
          <span className="absolute bottom-2 right-2 block w-4 h-4 border-b-2 border-r-2 border-brand-gold opacity-70" />

          <motion.p
            variants={fadeUp(0)}
            initial="hidden"
            animate="visible"
            className="font-body text-xs md:text-sm uppercase tracking-widest text-brand-gold"
          >
            Established 1990 · Mumbai, India
          </motion.p>

          <motion.h1
            variants={fadeUp(0.18)}
            initial="hidden"
            animate="visible"
            className="font-display text-6xl md:text-7xl lg:text-8xl font-light tracking-wide text-white leading-none"
          >
            Roots Graphics
          </motion.h1>

          <motion.p
            variants={fadeUp(0.32)}
            initial="hidden"
            animate="visible"
            className="font-body text-lg md:text-xl italic text-brand-orange"
          >
            Excellence Needs Roots
          </motion.p>

          <motion.div
            variants={fadeUp(0.42)}
            initial="hidden"
            animate="visible"
            className="w-16 h-px bg-brand-gold"
          />

          <motion.p
            variants={fadeUp(0.52)}
            initial="hidden"
            animate="visible"
            className="font-body text-sm md:text-base tracking-wider text-gray-300"
          >
            Fine Art Consultants · Art Promoters · Valuers · World Conceptualist
          </motion.p>

          <motion.div variants={fadeUp(0.64)} initial="hidden" animate="visible">
            <Link
              href="/gallery"
              className="mt-1 inline-block font-body text-sm md:text-base uppercase tracking-widest text-white border border-white/70 px-8 py-3 transition-all duration-300 hover:bg-brand-orange hover:text-white hover:border-brand-orange"
            >
              Explore Our Collection
            </Link>
          </motion.div>

          <motion.div variants={fadeUp(0.76)} initial="hidden" animate="visible" className="mt-1">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              className="text-brand-gold"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </motion.div>
          </motion.div>
        </motion.div>

      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 2 — BRAND INTRO
      ══════════════════════════════════════════════════════════ */}
      <section className="bg-brand-cream py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="w-full aspect-[4/5] relative"
            style={{
              border: '4px solid #C9A84C',
              boxShadow: 'inset 0 0 40px rgba(0,0,0,0.6), 0 8px 32px rgba(0,0,0,0.12)',
              overflow: 'hidden',
            }}
          >
            <Image
              src="/photos/HomePageMain.jpeg"
              alt="Roots Graphics artwork display"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
            className="flex flex-col gap-5"
          >
            <p className="font-body text-xs uppercase tracking-widest text-brand-orange">Our Story</p>
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
          SECTION 6 — VISION STATEMENT
      ══════════════════════════════════════════════════════════ */}
      <section
        className="bg-[#123224] py-24 px-6 md:px-12"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(214,186,116,0.12) 1px, transparent 1px)',
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
          <motion.p variants={item} className="font-body text-xs uppercase tracking-widest text-brand-gold">
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
          <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6 w-full">
            {pillars.map(({ icon, title, desc }) => (
              <motion.div key={title} variants={item} className="flex flex-col items-center gap-3 text-center">
                <span className="text-brand-gold text-2xl">{icon}</span>
                <h3 className="font-display text-xl text-brand-navy">{title}</h3>
                <p className="font-body text-sm text-gray-600 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>



      {/* ═══════════════════════════════════════════════════════
          SECTION 7C — TRADEMARKS & BRAND LOGOS
      ══════════════════════════════════════════════════════════ */}
      <section className="bg-brand-cream py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl text-brand-navy mb-3">
              Our Brands &amp; Trademarks
            </h2>
            <p className="font-body text-sm uppercase tracking-widest text-brand-orange">
              Committed to Excellence and Global Humanity
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {/* Global Humanity Logo */}
            <motion.div
              variants={item}
              className="flex items-center justify-center p-8 bg-white"
              style={{ border: '2px solid rgba(214,186,116,0.35)' }}
            >
              <Image
                src="/photos/Global_Charity.jpeg"
                alt="Wheels of Peace, Prosperity, Happiness & Healthcare - Global Humanity"
                width={600}
                height={400}
                className="w-full h-auto object-contain max-h-[300px]"
              />
            </motion.div>

            {/* Roots Graphics & Art Hutch Logo */}
            <motion.div
              variants={item}
              className="flex items-center justify-center p-8 bg-white"
              style={{ border: '2px solid rgba(214,186,116,0.35)' }}
            >
              <Image
                src="/photos/Art_Hutch.jpeg"
                alt="Roots Graphics & Art Hutch - Always Creating Value for Art"
                width={600}
                height={400}
                className="w-full h-auto object-contain max-h-[300px]"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 8 — CTA BANNER
      ══════════════════════════════════════════════════════════ */}
      <section className="bg-[#0F2E22] py-24 px-6 md:px-12">
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
              className="font-body text-sm uppercase tracking-widest bg-brand-orange text-white px-8 py-3 transition-colors duration-300 hover:bg-[#D99C4C]"
            >
              View Gallery
            </Link>
            <Link
              href="/contact"
              className="font-body text-sm uppercase tracking-widest border border-brand-navy text-brand-navy px-8 py-3 transition-colors duration-300 hover:bg-brand-gold hover:text-brand-dark hover:border-brand-gold"
            >
              Get in Touch
            </Link>
          </div>
        </motion.div>
      </section>

    </motion.div>
  );
}
