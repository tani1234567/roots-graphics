'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

const dignitaryLetters = [
  {
    id: 1,
    title: 'Amitabh Bachchan Ji Letter (21 Nov 2025, 2:10 PM)',
    info: '"21st of November, 2025 is the most delightful moment of my life" — letter from legendary film actor Mr. Amitabh Bachchan Ji at 2:10 PM.',
    src: '/letters/Amitabh B.jpeg',
  },
  {
    id: 2,
    title: 'Appreciation by Late Former DGP Shri Arvind Inamdar',
    info: 'Official appreciation letter from Late Former DGP Shri Arvind Inamdar.',
    src: '/letters/Arvind Inamdar.jpeg',
  },
  {
    id: 3,
    title: 'Letter from Shri Banwarilal Purohit',
    info: 'Letter from Honorable Shri Banwarilal Purohit, Editor of Daily English newspaper Hitvada and presently Governor of Punjab.',
    src: '/letters/Banwarilal Purohit.jpeg?v=2',
  },
  {
    id: 4,
    title: 'Letter from G. K. Das (Secretary to President)',
    info: 'Official correspondence from G. K. Das, Secretary to the President.',
    src: '/letters/GKDas.png',
  },
  {
    id: 5,
    title: 'Letter from Amir Adam Khan (Dubai, U.A.E.)',
    info: 'Letter from Amir Adam Khan, Dubai – U.A.E.',
    src: '/letters/Amir Khan.jpeg',
  },
  {
    id: 6,
    title: 'Letter from Sami Khatib (Medley Pharmaceuticals Ltd)',
    info: 'Letter from Sami Khatib, Chairman & MD of Medley Pharmaceuticals Ltd.',
    src: '/letters/Medley.png',
  },
  {
    id: 7,
    title: 'Letter from Tata Trusts by Ratan Tata Ji',
    info: 'Official letter from Tata Trusts by Ratan Tata Ji.',
    src: '/letters/Tata_Trust.png',
  },
];

export default function LettersFromDignitariesPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-brand-cream"
    >
      <div className="pt-32 pb-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">


          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <p className="font-body text-xs uppercase tracking-widest text-brand-orange mb-3">
              Official Correspondence
            </p>
            <h1 className="font-display text-5xl md:text-6xl text-brand-navy mb-4">
              Letters From Dignitaries &amp; Icons
            </h1>
            <div className="w-16 h-px bg-brand-gold mx-auto mb-4" />
            <p className="font-body text-sm uppercase tracking-widest text-brand-gold">
              Appreciation letters and acknowledgements received by Roots Graphics
            </p>
          </motion.div>

          {/* Grid */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {dignitaryLetters.map((letter) => (
              <motion.div
                key={letter.id}
                variants={item}
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
                className="bg-white transition-shadow duration-300 hover:shadow-[0_0_20px_rgba(201,168,76,0.25)]"
                style={{ border: '1px solid rgba(214,186,116,0.35)' }}
              >
                <div
                  className="w-full aspect-[4/3] relative"
                  style={{ background: '#FFFFFF', borderBottom: '2px solid rgba(201,168,76,0.25)' }}
                >
                  <Image
                    src={letter.src}
                    alt={letter.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-contain p-1"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-xl text-brand-navy mb-2">{letter.title}</h3>
                  <p className="font-body text-sm text-gray-600 leading-relaxed">{letter.info}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </motion.div>
  );
}
