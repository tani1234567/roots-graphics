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

const presidentialVisitPhotos = [
  {
    title: 'Traditional Achal Bharai to the President',
    description: 'M.B. Parag performs traditional Achal Bharai to the President Shri. Pratibha Tai Patil on occasion of Sharad Purnima',
    src: '/vip_clicks/Achal Bharai.png',
  },
  {
    title: "Presenting to the President's Spouse",
    description: "M.B. Parag giving traditional Shawl & Shrifal (Coconut) to the Hon. President's spouse Dr. Devisingh Shekawat",
    src: "/vip_clicks/President's spous.png",
  },
  {
    title: "Presenting to the President's Son",
    description: "M.B. Parag giving traditional Shawl & Shrifal (Coconut) to the Hon. President's son Mr. Rao Saheb Shekawat",
    src: "/vip_clicks/President's son.png",
  },
  {
    title: 'Gifting Gau Mata (Cow Goddess)',
    description: 'M.B. Parag & Jayant Mairal gifting painting titled "Gau Mata (Cow Goddess)"',
    src: '/vip_clicks/Cow Goddess.png',
  },
  {
    title: 'Gifting Magic of Peacock and Horse Power',
    description: 'M.B. Parag & Jayant Mairal gifting painting titled "Magic of Peacock and Horse Power"',
    src: '/vip_clicks/Peacock And Horse.png',
  },
];

export default function RashtrapatiVisitPage() {
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
              Historic Moment
            </p>
            <h1 className="font-display text-5xl md:text-6xl text-brand-navy mb-4">
              Rashtrapati Bhavan Visit
            </h1>
            <div className="w-16 h-px bg-brand-gold mx-auto mb-4" />
            <p className="font-body text-sm uppercase tracking-widest text-brand-gold">
              On occasion of Sharad Purnima — 25th October, 2007
            </p>
          </motion.div>

          {/* Photo grid */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {presidentialVisitPhotos.map((photo, idx) => (
              <motion.div
                key={idx}
                variants={item}
                className="bg-white overflow-hidden transition-shadow duration-300 hover:shadow-lg"
                style={{ border: '1px solid rgba(214,186,116,0.35)' }}
              >
                <div
                  className="w-full aspect-[4/3] relative flex items-center justify-center"
                  style={{ background: '#F5F5F5', borderBottom: '2px solid rgba(201,168,76,0.25)' }}
                >
                  <Image
                    src={photo.src}
                    alt={photo.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-contain p-1"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg text-brand-navy mb-2">{photo.title}</h3>
                  <p className="font-body text-sm text-gray-700 leading-relaxed">{photo.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </motion.div>
  );
}
