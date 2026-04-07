'use client';

import { motion } from 'framer-motion';

// ── Variants ───────────────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const staggerSlow = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const lineItem = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

// ── Data ───────────────────────────────────────────────────────────────────

const timeline = [
  { year: '1990', event: 'Founded Roots Graphics on Gandhi Jayanti — October 2nd' },
  { year: '1995', event: 'Exhibition visited by Late Ex. PM Shri V. P. Singh' },
  { year: '2001', event: 'Art show inaugurated by Shri S. H. Raza at Bajaj Bhavan Art Gallery' },
  { year: '2007', event: 'Performed Achal Bharai at Rashtrapati Bhavan for President Pratibha Tai Patil' },
  { year: '2019', event: "Gifted painting 'Sunrise' to Shri Ratan Tata" },
  { year: '2026', event: 'Met with Dilip Vengsarkar at MCA, Sharad Pawar Club, Bandra BKC' },
];

const poemLines = [
  'Jaha Chahat hai — Waha Rahat Hai',
  'Jaha Rahat hai — Waha Rasta Hai',
  'Jaha Rasta hai — Waha Vasta Hai',
  'Jaha Vasta hai — Waha Hakikat Hai',
  'Jaha Hakikat hai — Waha Dil Hai',
  'Dil hai to Insaan Hai',
  'Insaan hai to Sab Kuch Hai',
];

const jayantAwards = [
  '1st National Award',
  '1st State Award',
  '1st IOCL Award',
  'Bhartiya Kala Puraskar 2018',
  '9th International Contemporary Art Exhibition',
  'Participation — Tokyo, Japan',
];

const socialInitiatives = [
  {
    title: 'Free University for Deaf & Mute',
    desc: 'M. B. Parag envisions creating a world-class Deaf & Mute University at Stockholm, Sweden, along with a dedicated Film City and Film Industry for the hearing-impaired community.',
  },
  {
    title: 'Community Kitchens Worldwide',
    desc: 'Through benchmark art sales, funding free community kitchens globally in partnership with Ratan Tata Trust.',
  },
  {
    title: 'Free Multi-Specialty Hospitals',
    desc: 'Establishing free cancer and multi-specialty hospitals for tribal and rural communities across India.',
  },
];

const artInitiatives = [
  {
    title: 'Serigraph Auctions at Switzerland',
    desc: 'Auction of 12 benchmark-valued paintings through the most prestigious auction platforms in Switzerland.',
  },
  {
    title: 'NFT Platform',
    desc: 'Partnering with OpenSea to tokenize artworks, creating hourly revenue streams deposited directly to charitable beneficiaries.',
  },
  {
    title: 'IP Exchange',
    desc: 'Listing intellectual properties on exchanges in New York and Singapore, democratizing access to fine art investment globally.',
  },
];

const certsLeft = [
  'Valuation Certificate',
  'Provenance Certificate',
  'Ownership Certificate',
  'Authentic Exhibitor',
  'Incorporated in India 1990',
];

const certsRight = [
  'Authenticity Certificate of Paintings & Fine Art',
  'International Licence to Exhibit',
  'Established Benchmark Values Worldwide',
  'Art Hutch Incorporated 2011',
];

// ── Shared sub-components ──────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-body text-xs uppercase tracking-widest text-brand-orange">{children}</p>
  );
}

function GoldRule() {
  return <div className="w-16 h-px bg-brand-gold" />;
}

function FramePlaceholder({
  label,
  aspectClass = 'aspect-[3/4]',
}: {
  label: string;
  aspectClass?: string;
}) {
  return (
    <div
      className={`w-full ${aspectClass} flex items-center justify-center`}
      style={{
        background: '#111',
        border: '4px solid #C9A84C',
        boxShadow:
          'inset 0 0 0 3px #0D0D0D, inset 0 0 0 8px rgba(201,168,76,0.08), inset 0 0 30px rgba(0,0,0,0.5)',
      }}
    >
      <span
        className="font-display italic text-brand-gold text-xl text-center px-6"
        style={{ opacity: 0.2 }}
      >
        {label}
      </span>
    </div>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* ═══════════════════════════════════════════════════════
          SECTION 1 — PAGE HERO
      ══════════════════════════════════════════════════════════ */}
      <section className="bg-[#f4ede2] min-h-[50vh] flex items-end pb-16 pt-36 px-6 md:px-12">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center text-center gap-4"
          >
            <motion.p
              variants={fadeUp}
              className="font-body text-xs uppercase tracking-widest text-brand-gold"
            >
              About Us
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="font-display text-6xl text-brand-navy font-light"
            >
              The Story of Roots Graphics
            </motion.h1>
            <motion.div variants={fadeUp} className="w-20 h-px bg-brand-gold" />
            <motion.p variants={fadeUp} className="font-body text-sm text-gray-600">
              Fine Art Consultants &amp; World Conceptualists — Est. 1990, Mumbai
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 2 — COMPANY STORY
      ══════════════════════════════════════════════════════════ */}
      <section className="bg-brand-cream py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Frame placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <FramePlaceholder label="Roots Graphics" aspectClass="aspect-[3/4]" />
          </motion.div>

          {/* Copy */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-5"
          >
            <motion.div variants={fadeUp}>
              <SectionLabel>Our Roots</SectionLabel>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="font-display text-4xl text-brand-navy leading-tight"
            >
              Excellence Needs Roots
            </motion.h2>
            <motion.div variants={fadeUp}>
              <GoldRule />
            </motion.div>
            <motion.p variants={fadeUp} className="font-body text-gray-700 leading-relaxed">
              Roots Graphics was founded by noted art curator M. B. Parag on October 2, 1990 — the
              birthday of Mahatma Gandhi — with a singular mission: to give a platform to artists in
              India whose talents had been overlooked by established art institutions.
            </motion.p>
            <motion.p variants={fadeUp} className="font-body text-gray-700 leading-relaxed">
              Over three decades, artists launched and promoted by M. B. Parag have won national and
              international accolades, and have stood at the forefront of numerous social causes.
              Well-known Indian leaders and personalities have joined hands with Roots Graphics to
              support art and charitable initiatives alike.
            </motion.p>
            <motion.p variants={fadeUp} className="font-body text-gray-700 leading-relaxed">
              Among the luminaries who have engaged with Roots Graphics are the legendary S. H. Raza
              (Padmashri Award winner), Late M. F. Husain — the most celebrated Indian artist of the
              20th century — and industry icons such as Shri Ratan Tata and Shri Anand Mahindra.
            </motion.p>
          </motion.div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 3 — FOUNDER: M. B. PARAG
      ══════════════════════════════════════════════════════════ */}
      <section className="bg-white py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">

          {/* Centered header */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col items-center text-center gap-4 mb-16"
          >
            <motion.div variants={fadeUp}>
              <SectionLabel>Founder &amp; Chairman</SectionLabel>
            </motion.div>
            <motion.h2 variants={fadeUp} className="font-display text-5xl text-brand-navy">
              M. B. Parag
            </motion.h2>
            <motion.p variants={fadeUp} className="font-body text-sm text-brand-gold">
              Abstract Artist · Art Promoter · Philanthropist · World Conceptualist
            </motion.p>
            <motion.div variants={fadeUp}>
              <GoldRule />
            </motion.div>
          </motion.div>

          {/* Frame + bio */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <FramePlaceholder label="M. B. Parag" aspectClass="aspect-[3/4]" />
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col gap-5"
            >
              {[
                "Mr. Parag B. Mairal is an inspiring abstract artist and visionary philanthropist dedicated to promoting artistic talent and addressing critical social issues. As the founder of Roots Graphics, established on October 2, 1990, Parag has seamlessly integrated art with social responsibility, supporting underprivileged communities and advancing environmental sustainability.",
                "With a career spanning over three decades, Parag has gained national and international recognition. He has collaborated with renowned personalities including the late Padmasri S.H. Raza and Padmavibhushan M.F. Husain. His exhibitions have attracted notable patrons such as former Prime Minister Shri V. P. Singh and Shri Ratan Tata, who owns significant works including 'Rainbow' and 'Sunrise and Sunset.'",
                "Parag's philanthropic vision is extensive: establishing world-class educational institutions, providing free healthcare, creating community kitchens globally, and channelling 100% of donations directly to those who need them most.",
                "On January 3rd, Parag gifted a portrait painting to legendary senior film actor Shri Prem Chopra Ji at his residence, as an appreciation for his lifetime of entertainment to the world.",
                "In a remarkable spiritual journey, Parag performed 51 days of Pooja of Lord Krishna, Lord Ganesha, and Goddess Tulja Bhavani Mata Ji. On the 52nd day, September 25th, he travelled to Guruvayur Temple — Lord Krishna's temple — where four blank canvases were worshipped by the Chief Pujari. The Chairman of Guruvayur Temple subsequently performed the Pooja of these canvases, which were then painted on-site by both artists in a studio created within the temple premises.",
              ].map((para, i) => (
                <motion.p key={i} variants={fadeUp} className="font-body text-gray-700 leading-relaxed">
                  {para}
                </motion.p>
              ))}
            </motion.div>
          </div>

          {/* Timeline */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-20 max-w-2xl mx-auto"
          >
            <motion.h3
              variants={fadeUp}
              className="font-display text-3xl text-brand-navy text-center mb-10"
            >
              Key Milestones
            </motion.h3>

            <div className="relative">
              {/* Vertical gold line */}
              <div className="absolute left-4 top-1 bottom-1 w-px bg-brand-gold opacity-60" />

              <div className="flex flex-col gap-8">
                {timeline.map(({ year, event }) => (
                  <motion.div key={year} variants={fadeUp} className="relative pl-12">
                    {/* Orange dot centered on the line */}
                    <span className="absolute left-[10px] top-1.5 w-3 h-3 rounded-full bg-brand-orange border-2 border-brand-cream" />
                    <span className="font-body text-xs uppercase tracking-widest text-brand-gold block mb-1">
                      {year}
                    </span>
                    <p className="font-body text-gray-700 leading-relaxed">{event}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 4 — THE POEM
      ══════════════════════════════════════════════════════════ */}
      <section className="bg-[#f3ebdf] py-24 px-6 md:px-12">
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-8 text-center">

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-body text-xs uppercase tracking-widest text-brand-gold"
          >
            In His Own Words
          </motion.p>

          <motion.div
            variants={staggerSlow}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-3"
          >
            {poemLines.map((line, i) => (
              <motion.p
                key={i}
                variants={lineItem}
                className="font-display text-2xl md:text-3xl text-brand-navy italic font-light"
                style={{ lineHeight: 1.65 }}
              >
                {line}
              </motion.p>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-body text-sm text-brand-orange"
          >
            — M. B. Parag
          </motion.p>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 5 — CO-ARTIST: JAYANT B. MAIRAL
      ══════════════════════════════════════════════════════════ */}
      <section className="bg-brand-cream py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">

          {/* Centered header */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col items-center text-center gap-4 mb-16"
          >
            <motion.div variants={fadeUp}>
              <SectionLabel>In-House Fine Artist</SectionLabel>
            </motion.div>
            <motion.h2 variants={fadeUp} className="font-display text-5xl text-brand-navy">
              Jayant B. Mairal
            </motion.h2>
            <motion.p variants={fadeUp} className="font-body text-sm text-brand-gold">
              Fine Artist · 9 National Awards · Mixed Media Specialist
            </motion.p>
            <motion.div variants={fadeUp}>
              <GoldRule />
            </motion.div>
          </motion.div>

          {/* Bio (left) + Frame (right) — reversed for visual variety */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col gap-5"
            >
              {[
                "Mr. Jayant Bhalchandra Mairal completed his majors at the world-famous M.S. University, Baroda, and went on to win 9 national awards for his extraordinary works in mixed media. His paintings have been exhibited across India and internationally, including at Kanagawa, Tokyo, Japan, and in the 9th International Contemporary Art Exhibition.",
                "Jayant's work has been presented to the highest offices in the land — his painting 'Gau Mata (Cow Goddess)' was gifted to the spouse of the Former President of India, and 'Magic of Peacock and Horse Power' was presented to the President herself at Rashtrapati Bhavan.",
              ].map((para, i) => (
                <motion.p key={i} variants={fadeUp} className="font-body text-gray-700 leading-relaxed">
                  {para}
                </motion.p>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <FramePlaceholder label="Jayant B. Mairal" aspectClass="aspect-[3/4]" />
            </motion.div>
          </div>

          {/* Awards grid */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
          >
            {jayantAwards.map((award) => (
              <motion.div
                key={award}
                variants={fadeUp}
                className="bg-white px-5 py-4 flex items-center gap-3 border border-[#e2d5bd]"
              >
                <span className="text-brand-gold flex-shrink-0">◆</span>
                <span className="font-body text-sm text-brand-gold">{award}</span>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 6 — GLOBAL VISION
      ══════════════════════════════════════════════════════════ */}
      <section className="bg-[#efe8dc] py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col items-center text-center gap-4 mb-16"
          >
            <motion.p
              variants={fadeUp}
              className="font-body text-xs uppercase tracking-widest text-brand-gold"
            >
              Looking Ahead
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-display text-5xl text-brand-navy font-light"
            >
              Art as a Force for Global Change
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Social Initiatives */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col gap-4"
            >
              <motion.h3
                variants={fadeUp}
                className="font-display text-2xl text-brand-gold mb-2"
              >
                Social Initiatives
              </motion.h3>
              {socialInitiatives.map(({ title, desc }) => (
                <motion.div
                  key={title}
                  variants={fadeUp}
                  className="p-6"
                  style={{
                    background: 'rgba(255,255,255,0.86)',
                    border: '1px solid rgba(201,168,76,0.3)',
                  }}
                >
                  <h4 className="font-display text-xl text-brand-navy mb-2">{title}</h4>
                  <p className="font-body text-sm text-gray-700 leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Art Market Initiatives */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col gap-4"
            >
              <motion.h3
                variants={fadeUp}
                className="font-display text-2xl text-brand-gold mb-2"
              >
                Art Market Initiatives
              </motion.h3>
              {artInitiatives.map(({ title, desc }) => (
                <motion.div
                  key={title}
                  variants={fadeUp}
                  className="p-6"
                  style={{
                    background: 'rgba(255,255,255,0.86)',
                    border: '1px solid rgba(201,168,76,0.3)',
                  }}
                >
                  <h4 className="font-display text-xl text-brand-navy mb-2">{title}</h4>
                  <p className="font-body text-sm text-gray-700 leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 7 — CERTIFICATIONS
      ══════════════════════════════════════════════════════════ */}
      <section className="bg-brand-cream py-24 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col items-center text-center gap-4 mb-14"
          >
            <motion.h2
              variants={fadeUp}
              className="font-display text-4xl text-brand-navy"
            >
              Authentication &amp; Certification
            </motion.h2>
            <motion.div variants={fadeUp} className="w-16 h-px bg-brand-gold" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-2">

            {/* Left */}
            <motion.ul
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col gap-5"
            >
              {certsLeft.map((cert) => (
                <motion.li key={cert} variants={fadeUp} className="flex items-start gap-3">
                  <span className="text-brand-gold font-bold mt-0.5 flex-shrink-0 text-base">✓</span>
                  <span className="font-body text-gray-700">{cert}</span>
                </motion.li>
              ))}
            </motion.ul>

            {/* Right */}
            <motion.ul
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col gap-5"
            >
              {certsRight.map((cert) => (
                <motion.li key={cert} variants={fadeUp} className="flex items-start gap-3">
                  <span className="text-brand-gold font-bold mt-0.5 flex-shrink-0 text-base">✓</span>
                  <span className="font-body text-gray-700">{cert}</span>
                </motion.li>
              ))}
            </motion.ul>

          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="font-body text-gray-500 italic text-sm text-center mt-14"
          >
            All paintings come with full documentation. We create reputable owners of art.
          </motion.p>

        </div>
      </section>
    </motion.div>
  );
}
