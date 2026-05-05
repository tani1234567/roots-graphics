'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

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
  imageSrc,
}: {
  label: string;
  aspectClass?: string;
  imageSrc?: string;
}) {
  const hasImage = Boolean(imageSrc);
  return (
    <div
      className={`w-full ${aspectClass} flex items-center justify-center`}
      style={{
        background: hasImage ? '#FFFFFF' : '#111',
        border: '4px solid #C9A84C',
        boxShadow: hasImage
          ? 'inset 0 0 0 3px #FFFFFF, inset 0 0 0 8px rgba(201,168,76,0.08), 0 8px 26px rgba(0,0,0,0.12)'
          : 'inset 0 0 0 3px #0D0D0D, inset 0 0 0 8px rgba(201,168,76,0.08), inset 0 0 30px rgba(0,0,0,0.5)',
      }}
    >
      {hasImage ? (
        <Image
          src={imageSrc!}
          alt={label}
          width={1000}
          height={1300}
          className="w-full h-full object-contain p-2"
        />
      ) : (
        <span className="font-display italic text-brand-gold text-xl text-center px-6" style={{ opacity: 0.2 }}>
          {label}
        </span>
      )}
    </div>
  );
}

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
      <section className="bg-[#102A1F] min-h-[50vh] flex items-end pb-16 pt-36 px-6 md:px-12">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center text-center gap-4"
          >
            <motion.p variants={fadeUp} className="font-body text-xs uppercase tracking-widest text-brand-gold">
              About Us
            </motion.p>
            <motion.h1 variants={fadeUp} className="font-display text-6xl text-brand-navy font-light">
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

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <FramePlaceholder
              label="Roots Graphics"
              aspectClass="aspect-[3/4]"
              imageSrc="/photos/HomePageMain.jpeg"
            />
          </motion.div>

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
            <motion.h2 variants={fadeUp} className="font-display text-4xl text-brand-navy leading-tight">
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
          SECTION 3 — CERTIFICATIONS
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
            <motion.h2 variants={fadeUp} className="font-display text-4xl text-brand-navy">
              Authentication &amp; Certification
            </motion.h2>
            <motion.div variants={fadeUp} className="w-16 h-px bg-brand-gold" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-2">
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

      {/* ═══════════════════════════════════════════════════════
          SECTION 4 — ANCESTRAL LEGACY & HERITAGE
      ══════════════════════════════════════════════════════════ */}
      <section className="bg-[#102A1F] py-24 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col items-center text-center gap-4 mb-16"
          >
            <motion.p variants={fadeUp} className="font-body text-xs uppercase tracking-widest text-brand-gold">
              Ancestral Heritage
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-display text-4xl md:text-5xl text-brand-navy">
              Legacy of Service &amp; Philanthropy
            </motion.h2>
            <motion.div variants={fadeUp} className="w-16 h-px bg-brand-gold" />
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <motion.div
              variants={fadeUp}
              className="p-8"
              style={{ background: 'rgba(255, 255, 255, 0.06)', border: '1px solid rgba(201,168,76,0.3)' }}
            >
              <h3 className="font-display text-2xl text-brand-navy mb-4">Ancestral Heritage</h3>
              <p className="font-body text-sm text-gray-300 leading-relaxed mb-4">
                The legacy of service runs deep in the Mairal family. M. B. Parag&apos;s ancestor,{' '}
                <span className="text-brand-gold font-semibold">Gopal Rao Mairal</span>, served as the
                Dewan of Vadodara from{' '}
                <span className="text-brand-gold font-semibold">March 22, 1871 to 1872</span>, a position
                of great responsibility and trust during the princely state era.
              </p>
              <p className="font-body text-sm text-gray-300 leading-relaxed">
                This pioneering spirit of serving the community and contributing to society has been passed
                down through generations, inspiring M. B. Parag&apos;s own vision of using art and
                philanthropy as forces for global change.
              </p>
              <a
                href="https://share.google/QquTZUE3toJL6vvNX"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 font-body text-sm uppercase tracking-widest text-brand-orange hover:text-brand-gold transition-colors duration-200"
              >
                Learn More →
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="p-8"
              style={{ background: 'rgba(255, 255, 255, 0.06)', border: '1px solid rgba(201,168,76,0.3)' }}
            >
              <h3 className="font-display text-2xl text-brand-navy mb-4">Spiritual Contribution</h3>
              <p className="font-body text-sm text-gray-300 leading-relaxed mb-4">
                M. B. Parag has continued this legacy of giving by contributing to the construction and
                support of the{' '}
                <span className="text-brand-gold font-semibold">Shri Dhundiraj Ganpati Temple</span>{' '}
                through generous donations and charitable initiatives. This sacred temple stands as a
                testament to the family&apos;s commitment to spiritual and community welfare.
              </p>
              <p className="font-body text-sm text-gray-300 leading-relaxed">
                The temple serves as a beacon of faith and prosperity for the community, embodying the
                values of generosity, devotion, and social responsibility that have defined the Mairal
                family for generations.
              </p>
              <a
                href="https://share.google/VKPcJ8FWRFKYsSx3P"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 font-body text-sm uppercase tracking-widest text-brand-orange hover:text-brand-gold transition-colors duration-200"
              >
                Discover More →
              </a>
            </motion.div>
          </motion.div>

        </div>
      </section>
    </motion.div>
  );
}
