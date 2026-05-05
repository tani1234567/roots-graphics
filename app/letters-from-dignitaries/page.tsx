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
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
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

          {/* Critical Appreciation Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-20"
          >
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center mb-14"
            >
              <p className="font-body text-xs uppercase tracking-widest text-brand-orange mb-3">
                Professional Perspective
              </p>
              <h2 className="font-display text-5xl text-brand-navy mb-3">
                Critical Appreciation
              </h2>
              <p className="font-body text-sm uppercase tracking-widest text-brand-gold">
                Expert Commentary on the Artist's Vision and Legacy
              </p>
            </motion.div>

            {/* Testimonial Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-lg overflow-hidden"
              style={{
                border: '2px solid rgba(214,186,116,0.4)',
                boxShadow: '0 12px 40px rgba(0,0,0,0.08)',
              }}
            >
              <div className="h-1 bg-gradient-to-r from-brand-gold via-brand-orange to-brand-gold" />

              <div className="px-8 md:px-12 py-10 md:py-14">
                {/* Opening Quote */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="mb-8"
                >
                  <blockquote className="font-display text-2xl md:text-3xl text-brand-navy italic leading-relaxed">
                    "I paint objects as I think them, not as I see them."
                  </blockquote>
                  <p className="font-body text-sm text-gray-600 mt-2">
                    — Pablo Picasso
                  </p>
                </motion.div>

                {/* Main Content */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="space-y-5 mb-10"
                >
                  {[
                    "This is what the greatest artist of the century, Pablo Picasso said about his art. Such an art is meant to disturb your tranquility and not to reassure you and that is what precisely Jayant Mairal does through his paintings.",
                    "Born in the orange city and heart of India, Nagpur, the impact of Jayant's paintings is not merely on eyes. It makes you think, sit up, ponder and sometimes perplexes too. Certainly his painting is a spontaneous reaction to a passing moment captured by his soul on the canvas.",
                    "Jayant Mairal, a young artist of repute and a well-known name in Central India has always been a rebel. After passing from M.S. University, Baroda in 1985, Jayant has been continuously trying to express his innermost feelings with force combining colours, lines and form.",
                    "They say that paintings can be regarded as portable commodities bought for prestige or pleasure for those who have lots of money to throw. But Jayant's paintings are far removed from such a culture.",
                    "Recipient of nine national awards, he has held so far six one-man shows in various cities of India and abroad, like Mumbai, Nagpur, Delhi, Chandigarh and Tokyo apart from several exhibitions including group shows.",
                    "Michelangelo once said that a good painting is the music and melody which intellect only can appreciate. Paintings of Jayant are meant for those who are subtle, deep and have a penetrating mind.",
                    "He can create magic and convey feelings through the basic ingredients of line and shape, rhythm and pattern, light and shade and colour and texture.",
                    "His paintings at the level of vision can be a stimulus, a challenge, an inexhaustible enjoyment or even an enigma.",
                    "Apart from paintings, he has done work in wood etchings, graphics, line-cut and lithographs too.",
                    "He has handled various subjects deftly with his brush, from politics to meditation, nature, moods, utilities, animals and birds too.",
                    "Now with his experiences coupled with talent, Jayant descends on the great town of art and architecture of India — Khajuraho.",
                    "The temples of Khajuraho are a part of India's undiminished legend. Thousands of visitors flock to see these temples and stop and admire the soul of India which had no taboo for any branch of knowledge under the sun. That was the spirit of India.",
                    "What a fine place to hold a show of paintings.",
                    "Jayant is back again for his 7th one-man show at Khajuraho at Hotel Clarks — another prestigious place.",
                    "It is certain that the distinguished visitors will find his paintings both fascinating and stimulating like the part of the land from which he comes — vibrant, warm & appealing.",
                  ].map((para, idx) => (
                    <motion.p
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 + idx * 0.02 }}
                      className="font-body text-gray-700 leading-relaxed text-base"
                    >
                      {para}
                    </motion.p>
                  ))}
                </motion.div>

                {/* Author */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="pt-8 border-t border-[#D6BA74]/30"
                >
                  <p className="font-display text-2xl text-brand-navy mb-2">
                    Late Former DGP Shri Arvind Inamdar
                  </p>
                  <p className="font-body text-sm uppercase tracking-widest text-brand-gold">
                    Former Director General of Police, Maharashtra
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </motion.div>
  );
}
