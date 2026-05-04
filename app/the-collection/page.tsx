'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { paintings } from '@/data/paintings';

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

export default function TheCollectionPage() {
  const featured = paintings.slice(0, 6);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#143526]"
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
            <h1 className="font-display text-5xl md:text-6xl text-brand-navy mb-4">The Collection</h1>
            <div className="w-16 h-px bg-brand-gold mx-auto mb-4" />
            <p className="font-body text-sm uppercase tracking-widest text-brand-gold">
              Selected Works by M. B. Parag &amp; Jayant B. Mairal
            </p>
          </motion.div>

          {/* Grid */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {featured.map((p) => {
              const galleryMatchedPainting =
                p.title === 'Human Relations I'
                  ? paintings.find((gp) => gp.title === 'Green Forest')
                  : p.title === 'Gau Mata (Cow Goddess)'
                    ? paintings.find((gp) => gp.title === 'Monkeys in the Jungle - Forest')
                    : p.title === 'Magic of Peacock and Horse Power'
                      ? paintings.find((gp) => gp.title === 'King of Forest - Jungle.')
                      : null;
              const displayPainting = galleryMatchedPainting ?? p;
              const isNarsimha      = p.title === 'Narsimha God with Celebrations of Victory';
              const isCouple        = p.title === 'Couple';
              const isUnity         = p.title === 'Unity';
              const isGanesha       = p.title === 'Different Forms & Faces of Lord Ganesha';
              const isHumanRelations = p.title === 'Human Relations I';
              const isGauMata       = p.title === 'Gau Mata (Cow Goddess)';
              const isMagicOfPeacock = p.title === 'Magic of Peacock and Horse Power';
              const hasImage = isNarsimha || isCouple || isUnity || isGanesha || isHumanRelations || isGauMata || isMagicOfPeacock;

              return (
                <motion.div
                  key={p.id}
                  variants={item}
                  whileHover={{ y: -4, transition: { duration: 0.25 } }}
                  className="cursor-pointer transition-shadow duration-300 hover:shadow-[0_0_20px_rgba(201,168,76,0.25)]"
                  style={{ background: '#183A2B', border: '1px solid rgba(214,186,116,0.35)' }}
                >
                  <div
                    className="w-full aspect-[4/3] flex items-center justify-center"
                    style={{
                      background: hasImage ? '#FFFFFF' : '#1D4733',
                      borderBottom: '2px solid rgba(201,168,76,0.25)',
                    }}
                  >
                    {isNarsimha ? (
                      <Image src="/photos/Narsimha_God.png" alt={p.title} className="w-full h-full object-contain" width={1200} height={900} />
                    ) : isCouple ? (
                      <Image src="/photos/Couple.png" alt={p.title} className="w-full h-full object-contain" width={1200} height={900} />
                    ) : isUnity ? (
                      <Image src="/photos/Unity.png" alt={p.title} className="w-full h-full object-contain" width={1200} height={900} />
                    ) : isGanesha ? (
                      <Image src="/photos/Different_Forms_&_Faces_of_Lord_Ganesha.png" alt={p.title} className="w-full h-full object-contain" width={1200} height={900} />
                    ) : isHumanRelations ? (
                      <Image src="/photos/Green_Forest.png" alt={p.title} className="w-full h-full object-contain" width={1200} height={900} />
                    ) : isGauMata ? (
                      <Image src="/photos/Monkeys_in_the_Jungle.png" alt={p.title} className="w-full h-full object-contain" width={1200} height={900} />
                    ) : isMagicOfPeacock ? (
                      <Image src="/photos/King_of_Forest.png" alt={p.title} className="w-full h-full object-contain" width={1200} height={900} />
                    ) : (
                      <span className="font-display text-lg italic text-brand-gold" style={{ opacity: 0.2 }}>[ artwork ]</span>
                    )}
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-xl text-brand-navy mb-1">{displayPainting.title}</h3>
                    <p className="font-body text-sm text-brand-orange mb-1">{displayPainting.artist}</p>
                    <p className="font-body text-xs text-gray-500">{displayPainting.year} · {displayPainting.medium}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Link to full gallery */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-14"
          >
            <Link
              href="/gallery"
              className="font-body text-sm uppercase tracking-widest border border-brand-gold text-brand-gold px-8 py-3 hover:bg-brand-gold hover:text-brand-dark transition-all duration-300"
            >
              View Full Gallery
            </Link>
          </motion.div>

        </div>
      </div>
    </motion.div>
  );
}
