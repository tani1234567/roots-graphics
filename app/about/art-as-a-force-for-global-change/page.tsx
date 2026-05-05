'use client';

import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const socialInitiatives = [
  {
    title: 'Free University for Deaf & Dump - Hearing and Speech Impared',
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
  {
    title: 'Free Community Kitchens & Multi-Speciality Hospitals',
    desc: 'Free Community Kitchen with Aditya Birla Foundation too, and free multi-speciality hospitals in India and across the whole world.',
  },
  {
    title: '100 Countries Free Education Vision',
    desc: '100 Countries Free Education University and 100 Countries Free Deaf & Dump i.e. hearing and speech impaired free education university, along with Film Industry, Film Institute, and Film City in 100 countries and in many metropolitan cities of India. Also for physically handicapped university and blind university. For normal regular students, free education university first at Muscat, Oman, then spreading over 100 countries of the globe.',
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
  {
    title: 'Zurich Serigraph & Prints Auctions',
    desc: 'Auctions of all benchmark values of paintings and serigraphs at Zurich, Switzerland, including prints auctions too.',
  },
  {
    title: 'International Trading Platform Revenue Model',
    desc: 'International trading platform programming by BlackRock Company, USA with a 30% weekly revenue model for 1 year, 1 month, and 1 day, with a one-month holiday.',
  },
  {
    title: 'Ownership & Allocation Structure',
    desc: '10% ownership of paintings, 10% mediators, and 10% UNO.',
  },
];

export default function GlobalChangePage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero */}
      <section className="bg-[#102A1F] min-h-[40vh] flex items-end pb-16 pt-36 px-6 md:px-12">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center text-center gap-4"
          >
            <motion.p variants={fadeUp} className="font-body text-xs uppercase tracking-widest text-brand-gold">
              Looking Ahead
            </motion.p>
            <motion.h1 variants={fadeUp} className="font-display text-5xl md:text-6xl text-brand-navy font-light">
              Art as a Force for Global Change
            </motion.h1>
            <motion.div variants={fadeUp} className="w-20 h-px bg-brand-gold" />
            <motion.p variants={fadeUp} className="font-body text-sm text-gray-600">
              Social initiatives &amp; art market innovations driving real-world impact
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Initiatives */}
      <section className="bg-[#143526] py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Social Initiatives */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col gap-4"
            >
              <motion.h2 variants={fadeUp} className="font-display text-2xl text-brand-gold mb-2">
                Social Initiatives
              </motion.h2>
              {socialInitiatives.map(({ title, desc }) => (
                <motion.div
                  key={title}
                  variants={fadeUp}
                  className="p-6"
                  style={{ background: 'rgba(16, 42, 31, 0.92)', border: '1px solid rgba(201,168,76,0.3)' }}
                >
                  <h3 className="font-display text-xl text-brand-navy mb-2">{title}</h3>
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
              <motion.h2 variants={fadeUp} className="font-display text-2xl text-brand-gold mb-2">
                Art Market Initiatives
              </motion.h2>
              {artInitiatives.map(({ title, desc }) => (
                <motion.div
                  key={title}
                  variants={fadeUp}
                  className="p-6"
                  style={{ background: 'rgba(16, 42, 31, 0.92)', border: '1px solid rgba(201,168,76,0.3)' }}
                >
                  <h3 className="font-display text-xl text-brand-navy mb-2">{title}</h3>
                  <p className="font-body text-sm text-gray-700 leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </div>
      </section>
    </motion.div>
  );
}
