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

const jayantAwards = [
  '1st National Award',
  '1st State Award',
  '1st IOCL Award',
  'Bhartiya Kala Puraskar 2018',
  '9th International Contemporary Art Exhibition',
  'Participation — Tokyo, Japan',
  '7th All India Graphic Exhibition, Hyderabad (1982)',
  'Maharashtra State Exhibition of Art, Bombay (1993)',
  'Chitrakala Mahavidhyalaya, Nagpur (1983)',
  'All India Art Exhibition, Mahakoshal Kala Parishad, Raipur (1984–1985)',
  'Graphic 83 All India Exhibition of Prints, Chandigarh (1984)',
  'Maharashtra State Silver Jubilee Exhibition, Bombay (1985)',
  'All India Exhibition of Art, Manipur (1985)',
  'Certificate of Merit, All India Youth Art Exhibition, Calcutta (1987)',
  'Biographics in Volume-5 Asian / American Who\'s Who',
];

const oneManShows = [
  { gallery: 'Y.B. Chavan Art Gallery, Bombay', years: '1992 and 1993' },
  { gallery: 'Leela Art Gallery, Hotel Leela Kempinski, Bombay', years: '1993' },
  { gallery: 'Roots Graphics Art Gallery, Nagpur', years: '1994' },
  { gallery: 'Jahangir Art Gallery, Mumbai', years: '1995' },
  { gallery: 'V.N. Design Art Gallery, Nagpur', years: '1995' },
  { gallery: 'Clark Khajurao', years: '1999' },
];

const groupShows = [
  { event: 'Affordable Art at Artist Centre, Bombay', year: '1993' },
  { event: 'Monsoon Shows at Jahangir Art Gallery, Bombay', year: '1994' },
  { event: 'MSSI Show at Y.B. Chavan Art Gallery, Mumbai', year: '1999' },
  { event: 'Bajaj Art Gallery, Mumbai', year: '2001' },
  { event: 'Mahakalpa Artist Academy, Chitnavis Centre, Nagpur', year: 'April 2022' },
  { event: 'Mahakalpa Artist Academy – Azadi Ka Amrit Mahotsav, Central Museum, Nagpur', year: 'August 2022' },
];

const restorationWork = 'Restoration of famous paintings by great artists of India for Maharashtra Rajya Police Mukhyalaya.';

export default function JayantMairalPage() {
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
              In-House Fine Artist
            </motion.p>
            <motion.h1 variants={fadeUp} className="font-display text-6xl text-brand-navy font-light">
              Jayant B. Mairal
            </motion.h1>
            <motion.div variants={fadeUp} className="w-20 h-px bg-brand-gold" />
            <motion.p variants={fadeUp} className="font-body text-sm text-gray-600">
              Fine Artist · 9 National Awards · Mixed Media Specialist
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Bio */}
      <section className="bg-brand-cream py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col gap-5"
            >
              {[
                "Jayant Bhalchandra Mairal is a conceptual abstract artist whose work explores structure, continuity, and the relationship between form and thought. His practice is rooted in the belief that art should extend beyond visual appeal, engaging with space, perception, and layered interpretation.",
                "He completed his majors at the Faculty of Fine Arts, M.S. University, Baroda, and went on to receive nine national awards for his work in mixed media, reflecting both technical depth and conceptual clarity.",
                "Working primarily within the abstract domain, his compositions are developed through a layered process that balances intuitive expression with deliberate construction. His works often explore movement, contrast, and compositional rhythm, resulting in pieces that invite individual interpretation while maintaining a distinct visual identity.",
                "His paintings have been exhibited across India and internationally, including in Kanagawa, Tokyo, Japan, and as part of the 9th International Contemporary Art Exhibition. In addition, his body of work includes several group shows and one-man exhibitions, contributing to a sustained and evolving artistic practice.",
                "Jayant's works have also been presented at prominent national platforms. His painting 'Gau Mata (Cow Goddess)' was gifted to the spouse of the Former President of India, while 'Magic of Peacock and Horse Power' was presented to the President at Rashtrapati Bhavan.",
                "He has also contributed to the restoration of renowned artworks at the Police Headquarters in Mumbai, reflecting his engagement with preservation and respect for established artistic heritage.",
                "Through Roots Graphics, his artistic direction extends into creating works suited for curated environments—including private collections, corporate spaces, and institutional settings—where art becomes an integral part of the spatial narrative.",
                "His approach remains focused on clarity of concept, disciplined execution, and the creation of artworks that hold both visual presence and enduring relevance.",
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
              <div
                className="w-full aspect-[3/4]"
                style={{
                  background: '#FFFFFF',
                  border: '4px solid #C9A84C',
                  boxShadow: 'inset 0 0 0 3px #FFFFFF, inset 0 0 0 8px rgba(201,168,76,0.08), 0 8px 26px rgba(0,0,0,0.12)',
                  overflow: 'hidden',
                }}
              >
                <Image
                  src="/photos/Jayant.jpeg"
                  alt="Jayant B. Mairal"
                  width={1000}
                  height={1300}
                  className="w-full h-full object-contain p-2"
                />
              </div>
            </motion.div>
          </div>

          {/* Awards */}
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
                className="bg-white px-5 py-4 flex items-center gap-3 border border-[#D6BA74]"
              >
                <span className="text-brand-gold flex-shrink-0">◆</span>
                <span className="font-body text-sm text-brand-gold">{award}</span>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* One Man Shows */}
      <section className="bg-[#102A1F] py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <p className="font-body text-xs uppercase tracking-widest text-brand-gold mb-3">
              Exhibitions
            </p>
            <h2 className="font-display text-5xl text-brand-navy mb-4">One Man Shows</h2>
            <div className="w-20 h-px bg-brand-gold mx-auto" />
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {oneManShows.map((show, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                className="bg-white/10 backdrop-blur-sm border border-[#D6BA74]/30 rounded-lg p-6 hover:border-[#D6BA74]/60 transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,168,76,0.15)]"
              >
                <div className="flex items-start gap-4">
                  <span className="text-brand-gold text-2xl flex-shrink-0">◈</span>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-lg text-brand-navy mb-2">{show.gallery}</h3>
                    <p className="font-body text-sm text-brand-orange tracking-wide">{show.years}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Group Shows */}
      <section className="bg-brand-cream py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <p className="font-body text-xs uppercase tracking-widest text-brand-orange mb-3">
              Collective Exhibitions
            </p>
            <h2 className="font-display text-5xl text-brand-navy mb-4">Group Shows</h2>
            <div className="w-20 h-px bg-brand-gold mx-auto" />
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {groupShows.map((show, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                className="bg-white border-l-4 border-brand-gold px-6 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] transition-all duration-300"
              >
                <h3 className="font-body text-base text-brand-navy flex-1">{show.event}</h3>
                <span className="inline-block font-display text-sm font-semibold text-brand-orange whitespace-nowrap px-4 py-2 bg-[#D6BA74]/10 rounded">
                  {show.year}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Restoration Work */}
      <section className="bg-[#102A1F] py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <p className="font-body text-xs uppercase tracking-widest text-brand-gold mb-3">
              Specialized Services
            </p>
            <h2 className="font-display text-5xl text-brand-navy mb-4">Restoration Work</h2>
            <div className="w-20 h-px bg-brand-gold mx-auto" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl mx-auto"
          >
            <div
              className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-lg border border-[#D6BA74]/40 rounded-xl p-8 md:p-12 text-center"
              style={{ boxShadow: '0 8px 32px rgba(201,168,76,0.15)' }}
            >
              <div className="text-5xl text-brand-gold mb-6">✦</div>
              <p className="font-body text-lg text-gray-300 leading-relaxed">
                {restorationWork}
              </p>
              <div className="mt-8 pt-8 border-t border-[#D6BA74]/30">
                <p className="font-body text-xs uppercase tracking-widest text-brand-gold">
                  Heritage Preservation & Art Conservation
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
