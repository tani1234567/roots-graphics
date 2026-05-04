'use client';

import { motion } from 'framer-motion';

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

const storyHighlights = [
  {
    year: '1961-62',
    title: 'Meeting Pandit Jawaharlal Nehru',
    description: 'A 45-variety rose garland crafted by our mother was presented to Jawaharlal Nehru, Chacha Nehru, during his visit to Wardha. The flowers included rare black roses and green roses from our family garden.',
  },
  {
    year: '1980',
    title: 'Encounter with Indira Gandhi Ji',
    description: "During my 12th standard, I had the profound privilege of meeting India's Prime Minister Indira Gandhi. Our conversation, lasting nearly ten minutes, became a defining moment in my life. I shared with her my admiration for her remarkable leadership and expressed that she stood as \"number one in the world\"—a sentiment rooted in my deep respect for her vision and integrity. When she asked why, I explained how her leadership exemplified excellence that few could match globally. I also mentioned my collection of autographs from legendary cricketers including Lala Amarnath, Sunil Gavaskar, and Bishan Singh Bedi, and made a light-hearted comparison, placing Atal Bihari Vajpayee as second, admiring his powerful oratory and respectful demeanor. She responded with warmth and encouragement, offering me her autograph with great grace. This encounter was all the more meaningful given my father's—Late Prof. Shri Bhalchandra Bhaskar Mairal's—close association with her office, where he drafted important state correspondence. Though she had once offered him an MLA ticket in recognition of his intellect and integrity, he respectfully declined, as his calling lay in academics and service, not politics.",
  },
  {
    year: '1991',
    title: 'Walking with Rajiv Gandhi',
    description: 'Had the honour of walking closely beside Rajiv Gandhi during his historic Sadbhavana Yatra in Nagpur, starting from Panchsheel Square.',
  },
  {
    year: '1993',
    title: 'Meeting Bal Thackeray',
    description: 'Met the legendary leader Bal Thackeray. He wrote a special article about us in the Marathi magazine Marmik.',
  },
  {
    year: '2010',
    title: 'Supporting Global Cyclist Saurabh Dahal',
    description: 'Supported and promoted world-tour cyclist Saurabh Dahal from Nepal. Introduced him to Nitin Gadkari and organized his journey to Gujarat with a ceremonial flag-off by Uddhav Thackeray.',
  },
];

export default function StoryBoardOfIndiaPage() {
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
            <p className="font-body text-xs uppercase tracking-widest text-brand-gold mb-3">
              Our Heritage
            </p>
            <h1 className="font-display text-5xl md:text-6xl text-brand-navy mb-4">
              Story Board of India
            </h1>
            <div className="w-16 h-px bg-brand-gold mx-auto mb-4" />
            <p className="font-body text-sm text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Connectivity for Our Beloved Nation, India
            </p>
          </motion.div>

          {/* Intro paragraphs */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto mb-16"
          >
            <motion.p variants={item} className="font-body text-gray-700 leading-relaxed mb-5">
              In 1962, my father was a Professor of English at G. S. College of Commerce in Wardha, Maharashtra, near Nagpur. Wardha is a sacred and historic place, home to Sevagram Ashram, where Mahatma Gandhi lived and worked. On such a pure and inspiring land, my parents created a beautiful garden of 45 varieties of roses, including rare black and green roses.
            </motion.p>
            <motion.p variants={item} className="font-body text-gray-700 leading-relaxed">
              Our mother carried water on her head from nearly a quarter kilometre every day, nurturing every plant with love and care. It was in this sacred place that our family&apos;s journey with India&apos;s greatest leaders began — moments that shaped our values and commitment to the nation.
            </motion.p>
          </motion.div>

          {/* Timeline cards */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {storyHighlights.map((highlight, idx) => (
              <motion.div
                key={idx}
                variants={item}
                className="p-6 border-l-4"
                style={{ borderColor: '#C9A84C', background: 'rgba(16, 42, 31, 0.6)' }}
              >
                <span className="inline-block px-3 py-1 text-xs uppercase tracking-widest text-brand-navy bg-brand-gold rounded-full font-bold">
                  {highlight.year}
                </span>
                <h4 className="font-display text-xl text-brand-navy mt-4 mb-2">{highlight.title}</h4>
                <p className="font-body text-sm text-gray-600 leading-relaxed">{highlight.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Closing note */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-16 p-8 text-center"
            style={{ background: 'rgba(201, 168, 76, 0.08)', border: '1px solid rgba(201,168,76,0.2)' }}
          >
            <p className="font-body text-gray-600 text-sm leading-relaxed max-w-2xl mx-auto">
              Through these encounters and experiences, we have remained committed to contributing to our beloved nation, India. Though financial constraints have at times limited our efforts, the spirit of service, connectivity, and nation-building has always guided our path. Our story is India&apos;s story — a testament to the values that unite us all.
            </p>
          </motion.div>

        </div>
      </div>
    </motion.div>
  );
}
