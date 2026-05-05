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
    </motion.div>
  );
}
