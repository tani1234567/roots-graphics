'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';


// ── Variants ───────────────────────────────────────────────────────────────

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: 'easeOut' as const, delay },
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


const vipMoments = [
  {
    id: 203,
    title: 'Padmavibhushan Shri. Ram Sutar Ji',
    info: 'With Padmavibhusion Shri.Ram Sutar Ji Parag Mairal an Artist and World Conceptualist.',
    src: '/vip_clicks/Padmavibhusion .jpeg',
    orientation: 'landscape' as const,
  },
  {
    id: 204,
    title: 'Padmavibhushan Ram Sutar With Artistic Luminaries',
    info: 'Artist Jayant Mairal, Dr. Rajendra Jadhav, M.B. Parag, Padmavibhushan Shri Ram Sutar, and Raja Wagh Ji at an exclusive artistic gathering.',
    src: '/vip_clicks/Artist Jayant Mairal.jpeg',
    orientation: 'landscape' as const,
  },
  {
    id: 205,
    title: 'Meeting With Distinguished Artists & Cultural Icons',
    info: 'Jayant Mairal, Dr. Rajendra Jadhav, Parag Mairal, Padmavibhushan Ram Sutar, and Raja Wagh Ji in a momentous artistic celebration.',
    src: '/vip_clicks/Dr. Rajendra Jadhav.jpeg',
    orientation: 'landscape' as const,
  },
  {
    id: 206,
    title: 'M.B. Parag With Ram Sutar, Rajkumar Sharma & Raja Wagh Ji',
    info: 'M.B. Parag, Padmavibhushan Shri Ram Sutar, renowned artist Rajkumar Sharma, and cultural patron Raja Wagh Ji at an esteemed artistic forum.',
    src: '/vip_clicks/Raja Wagh Ji.jpeg',
    orientation: 'landscape' as const,
  },
  {
    id: 201,
    title: 'Y.B. Chavan Art Gallery',
    info: 'Y.B. Chavan Art Gallery',
    src: '/vip_clicks/Vpsingh.png',
    orientation: 'landscape' as const,
  },
  {
    id: 202,
    title: 'Y.B. Chavan Art Gallery',
    info: 'Y.B. Chavan Art Gallery',
    src: '/vip_clicks/Vijay_Tendulkar.png',
    orientation: 'landscape' as const,
  },
  {
    id: 101,
    title: 'M. B. Parag, Janin Sayed RAZA, Sayed Haydar RAZA & Arvind Inamdar',
    info: 'From Left Parag Mairal, Janin Sayed RAZA, Padmashree Sayed Haydar RAZA, and Late Former DGP of Maharashtra Shri. Arvind Inamdar.',
    src: '/vip_clicks/Janin Sayed RAZA.jpeg',
    orientation: 'landscape' as const,
  },
  {
    id: 102,
    title: 'Jayant Mairal With Padmashree Sayed Haydar RAZA',
    info: 'Jayant Mairal with Padmashree Sayed Haydar RAZA in artist meet organized by Parag Mairal at Nagpur.',
    src: '/vip_clicks/Sayed Haydar RAZA.jpeg',
    orientation: 'landscape' as const,
  },
  {
    id: 1,
    title: 'Ratan Tata Ji & M. B. Parag',
    info: 'Rainbow Painting with Ratan Tata Ji & Parag Mairal.',
    src: '/vip_clicks/Ratan Tata Ji .jpeg',
    orientation: 'portrait' as const,
  },
  {
    id: 2,
    title: 'Amitabh Bachchan Ji & M. B. Parag',
    info: 'Amitabh Bachchan Ji & Parag Mairal.',
    src: '/vip_clicks/Amitabh Bachchan Ji.jpeg',
    orientation: 'landscape' as const,
  },
  {
    id: 3,
    title: 'Ambassador Javier Paulinich',
    info: 'Ambassador of Peru Javier Paulinich & M. B. PARAG.',
    src: '/vip_clicks/Javier Paulinich.jpeg',
    orientation: 'portrait' as const,
  },
  {
    id: 4,
    title: 'Ashish Shelar Ji, Arun Sabnis Ji & M. B. Parag',
    info: 'Cabinet Cultural Minister of Maharashtra Mr. Ashish Shelar Ji, Chairman of Fulora Foundations Mr. Arun Sabnis Ji & Parag Mairal.',
    src: '/vip_clicks/Ashish Shelar Ji.jpeg',
    orientation: 'landscape' as const,
  },
  {
    id: 5,
    title: 'Karsan Ghavri Ji',
    info: 'Legendary Cricket Player Shri. Karsan Ghavri Ji.',
    src: '/vip_clicks/Karsan Ghavri.jpeg',
    orientation: 'landscape' as const,
  },
  {
    id: 6,
    title: 'Muthu Swami Iyer, M. B. Parag & Jayant Mairal',
    info: 'Guruvayur Temple Parag Mairal & Former International Football Player Mr. Muthu Swami Iyer and Jayant Mairal too.',
    src: '/vip_clicks/Muthu Swami Iyer.jpeg',
    orientation: 'portrait' as const,
  },
  {
    id: 7,
    title: 'Dilip Vengsarkar & M. B. Parag',
    info: 'Legendary Cricket Player Shri. Dilip Vengsarkar & Parag Mairal.',
    src: '/vip_clicks/Dilip Vengsarkar.jpeg',
    orientation: 'portrait' as const,
  },
  {
    id: 8,
    title: 'Hema Malini Ji',
    info: 'Legendary Film Actress Mrs. Hema Malini Ji.',
    src: '/vip_clicks/Hema Malini maam.jpeg',
    orientation: 'portrait' as const,
  },
  {
    id: 9,
    title: 'Minal Potnis',
    info: 'Minal Potnis.',
    src: '/vip_clicks/Minal Potnis.jpeg',
    orientation: 'portrait' as const,
  },
  {
    id: 10,
    title: 'Tej Sapru Ji',
    info: 'Tej Sapru Ji.',
    src: '/vip_clicks/Tej_Sapru.jpeg',
    orientation: 'portrait' as const,
  },
  {
    id: 11,
    title: 'Varsha Usgaonkar',
    info: 'Film Actress Varsha Usgaonkar.',
    src: '/vip_clicks/Varsha Usgaonkar.jpeg',
    orientation: 'portrait' as const,
  },
  {
    id: 12,
    title: 'Prem Chopra Ji, Mithun Singh Ji & M. B. Parag',
    info: 'Mr. Prem Chopra Ji, Artist Mithun Singh Ji & Parag Mairal.',
    src: '/vip_clicks/Prem Chopra Ji.jpeg',
    orientation: 'portrait' as const,
  },
  {
    id: 301,
    title: 'Architect Mr. Kaizar Kazi',
    info: 'Architect: Mr. Kaizar Kazi, Formerly Associate at Architect Mr. Hafeez Contractor.',
    src: '/vip_clicks/Kaizar Kazi.jpeg',
    orientation: 'portrait' as const,
  },
  {
    id: 302,
    title: 'Late Prof. Kashinath Salve Ji & Jayant Mairal',
    info: 'Late Prof. Kashinath Salve Ji & Jayant Mairal',
    src: '/vip_clicks/Kashinath Salve.jpeg',
    orientation: 'landscape' as const,
  },
  {
    id: 303,
    title: 'Architect Mr. Paul',
    info: 'Architect: Mr. Paul, London, UK',
    src: '/vip_clicks/Mr. Paul.jpeg',
    orientation: 'portrait' as const,
  },
  {
    id: 304,
    title: 'Leading Architect Mr. Shashi Prabhu Ji',
    info: 'Leading Architect Mr. Shashi Prabhu Ji., Wankhede Stadium, Churchgate, Mumbai.',
    src: '/vip_clicks/Shashi Prabhu Ji.jpeg',
    orientation: 'portrait' as const,
  },
  {
    id: 305,
    title: 'Sheriff Shri. Sadruddin Daya',
    info: "India's Biggest Art Collector's Late Sheriff Shri. Sadruddin Daya, Chairman Dawood Shoes Limited, Mumbai",
    src: '/vip_clicks/Sheriff Shri. Sadruddin Daya.jpeg',
    orientation: 'portrait' as const,
  },
  {
    id: 306,
    title: 'Air India Pilot Shri. Shrikant Gondane',
    info: 'Air India Pilot: Shri. Shrikant Gondane.',
    src: '/vip_clicks/Shrikant Gondane.jpeg',
    orientation: 'portrait' as const,
  },
];



// ── Page ───────────────────────────────────────────────────────────────────

export default function HomePage() {

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
      <section
        className="relative min-h-screen bg-brand-cream flex items-center justify-center overflow-hidden"
      >

        {/* ── Layer C: Centre spotlight — z-[6] ── */}
        <div
          className="absolute inset-0 z-[6] pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 58% 50% at center, rgba(214,186,116,0.2) 0%, rgba(16,42,31,0.08) 52%, transparent 72%)',
          }}
          aria-hidden="true"
        />

        {/* ── Layer D: Edge vignette — z-[7] ── */}
        <div
          className="absolute inset-0 z-[7] pointer-events-none"
          style={{ boxShadow: 'inset 0 0 130px rgba(3,10,7,0.5)' }}
          aria-hidden="true"
        />

        {/* ── Frame wrapping hero content — z-[10] ── */}
        <motion.div
          className="relative z-[10] flex flex-col items-center text-center gap-4 px-10 py-10 md:px-16 md:py-12 mx-6"
          animate={{ scale: [1, 1.003, 1], opacity: [0.96, 1, 0.96] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            background: '#133726',
            border: '5px solid #C9A84C',
            boxShadow:
              'inset 0 0 0 2px #0D0D0D, inset 0 0 0 5px rgba(201,168,76,0.32), 0 0 60px rgba(201,168,76,0.1)',
          }}
        >
          <span className="absolute top-2 left-2   block w-4 h-4 border-t-2 border-l-2 border-brand-gold opacity-60" />
          <span className="absolute top-2 right-2  block w-4 h-4 border-t-2 border-r-2 border-brand-gold opacity-60" />
          <span className="absolute bottom-2 left-2  block w-4 h-4 border-b-2 border-l-2 border-brand-gold opacity-60" />
          <span className="absolute bottom-2 right-2 block w-4 h-4 border-b-2 border-r-2 border-brand-gold opacity-60" />
          <motion.p
            variants={fadeUp(0)}
            initial="hidden"
            animate="visible"
            className="font-body text-xs md:text-sm uppercase tracking-widest text-brand-gold"
          >
            Established 1990 · Mumbai, India
          </motion.p>

          <motion.h1
            variants={fadeUp(0.12)}
            initial="hidden"
            animate="visible"
            className="font-display text-6xl md:text-7xl lg:text-8xl font-light tracking-wide text-brand-navy leading-none"
          >
            Roots Graphics
          </motion.h1>

          <motion.p
            variants={fadeUp(0.24)}
            initial="hidden"
            animate="visible"
            className="font-body text-lg md:text-xl italic text-brand-orange"
          >
            Excellence Needs Roots
          </motion.p>

          <motion.div
            variants={fadeUp(0.32)}
            initial="hidden"
            animate="visible"
            className="w-16 h-px bg-brand-gold"
          />

          <motion.p
            variants={fadeUp(0.4)}
            initial="hidden"
            animate="visible"
            className="font-body text-sm md:text-base tracking-wider text-gray-500"
          >
            Fine Art Consultants · Art Promoters · Valuers · World Conceptualist
          </motion.p>

          <motion.div variants={fadeUp(0.5)} initial="hidden" animate="visible">
            <Link
              href="/gallery"
              className="mt-1 inline-block font-body text-sm md:text-base uppercase tracking-widest text-brand-navy border border-brand-navy px-8 py-3 transition-all duration-300 hover:bg-brand-orange hover:text-white hover:border-brand-orange"
            >
              Explore Our Collection
            </Link>
          </motion.div>

          <motion.div variants={fadeUp(0.62)} initial="hidden" animate="visible" className="mt-1">
            <motion.div
              animate={{ y: [0, 7, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
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
          SECTION 3 — VIP / VVIP MOMENTS
      ══════════════════════════════════════════════════════════ */}
      <section className="bg-[#123224] py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-14"
          >
            <p className="font-body text-xs uppercase tracking-widest text-brand-gold mb-3">
              Special Moments
            </p>
            <h2 className="font-display text-5xl text-brand-navy mb-3">
              Moments With Dignitaries &amp; Icons
            </h2>
            <p className="font-body text-sm uppercase tracking-widest text-brand-orange">
              VIP, VVIP, and film personalities with Roots Graphics
            </p>
          </motion.div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
            {vipMoments.map((moment) => (
              <motion.div
                key={moment.id}
                variants={item}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
                className="break-inside-avoid mb-6 bg-[#183A2B] transition-shadow duration-300 hover:shadow-[0_0_20px_rgba(201,168,76,0.25)]"
                style={{ border: '1px solid rgba(214,186,116,0.35)' }}
              >
                <div
                  className={`w-full relative ${moment.orientation === 'landscape' ? 'aspect-[4/3]' : 'aspect-[3/4]'}`}
                  style={{
                    background: '#FFFFFF',
                    borderBottom: '2px solid rgba(201,168,76,0.25)',
                  }}
                >
                  <Image
                    src={moment.src}
                    alt={moment.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-contain p-1"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-xl text-brand-navy mb-2">{moment.title}</h3>
                  <p className="font-body text-sm text-gray-500 leading-relaxed">{moment.info}</p>
                </div>
              </motion.div>
            ))}
          </div>
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
