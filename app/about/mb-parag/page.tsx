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

const staggerSlow = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const lineItem = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

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

const specialAchievements = [
  {
    title: 'Meeting with the Birla Family',
    content: 'M. B. Parag spent a whole day with Late Legendary Philanthropist Shri. Basant Kumar Birla Ji & Mrs. Sarla Birla Ji, and their child Kumar Mangalam Birla (wearing Choti), performing continuous Abhishek on Lord Shiva in 1997-98 at their Prabhadevi Bungalow in Mumbai.',
  },
  {
    title: 'Jayant Mairal Paintings in Birla Collection',
    content: 'The Birla family purchased 2 exquisite Canvas Abstract Paintings of Jayant Mairal during this period. These works are now part of the permanent collection of Late Philanthropist Shri. Basant Kumar Birla Ji & Mrs. Sarla Birla Ji. This acquisition has opened doors to the Aditya Birla Group and Kumar Mangalam Birla Ji.',
  },
  {
    title: "Anand Mahindra's Acquisition",
    content: "Shri. Anand Mahindra Ji purchased 2 Paintings of Jayant Mairal outside of Birla Art Gallery in 1997-98, specifically for his Bedroom. During this transaction, Shri. Anand Mahindra Ji expressed that these paintings are \"Marvelous\" and valued the works at a minimum of Rs. 1-1.5 Lakhs during 1997-98.",
  },
  {
    title: 'Felicitation with Padmavibhushan Shri Ram Sutar',
    content: "Late Padmavibhushan Shri Ram Sutar, the legendary sculptor, was felicitated for his monumental achievement in creating the world's highest statue of Bharat Ratna Sardar Vallabhbhai Patel at Vadodara. In a remarkable celebration of artistic excellence, M.B. Parag was honoured alongside this master sculptor for his visionary contributions as a world-renowned artist and conceptualist, acknowledging his profound impact on the global art landscape.",
  },
];

const paragProfessionalHighlights = [
  '36 years in Art Paintings & Fine Art Industry',
  'Artist, Art Consultant, Art Promoter, Art Organizer & World Conceptualist',
  'Organized several exhibitions in India',
  'Valuations done for Rs. 650/- crores till date',
  'Took Interviews of Late Former P.M. V. P. Singh of India who had offered 2 days specifically to M. B. Parag',
  'First Citizen of India who performed "Achal Bharai" Programme of Former President of India Smt. Pratibha Tai Patil Shekhawat on 25th September 2007 at Rashtrapati Bhawan, New Delhi',
  'Due to immense experience & decades of research – have created new innovative concept - Launching 1st time in the World',
  'Aims for genuine Charities for the innovation, Progress, Peace, Achievements, Prosperity & to satisfy thrust & hungers of India and worldwide',
  'Charities for WHO, community Kitchens worldwide through Ratan Tata Trust, farmers, etc.',
  'Helping United Nations (UN) for Natural calamities',
  'Great Booster in the Field of: (1) Thrust & Hunger (2) Education & Research for Students (3) Sports (4) Health by Creating Multi-specialty Hospitals & Cancer Hospitals in Tribal & Rural Areas (5) Creating new Jobs for Youth & Senior Citizens (6) Senior Citizens Old Age Homes for the Needy & Poorest of Poor',
];

const exhibitions = [
  'Paintings & Artifacts Group Show "Pancham Sparsh" at Nagpur, 1991',
  'Group show at Y. B. Chawan Art Gallery, Nariman Point, Mumbai, 1992',
  'Group show at Y. B. Chawan Art Gallery, Nariman Point, Mumbai, 1993',
  'Pre-Opening of Leela Art Gallery, Leela Hotel, Marol, Mumbai, 1993',
  'Solo Art Exhibition of renowned Artist Jayant Bhalchandra Mairal at Jehangir Art Gallery, Kala Ghoda, Mumbai, 1995',
  'V. N. Designs Art Gallery, Sadar, Nagpur, 1996',
  'MSCI Charity Exhibition of Paintings at J. J. School of Arts, Mumbai, 1997',
  'Hotel Clark Khajuraho jointly with Jayant Bhalchandra Mairal, 1999',
  'Bajaj Art Gallery, Group Exhibition, Nariman Point, Mumbai, 2000',
  'ROOTS GRAPHICS ART GALLERY, Nagpur, 2010',
  'ROOTS GRAPHICS ART GALLERY, Nagpur, 2015',
];

export default function MBParagPage() {
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
              Founder &amp; Chairman
            </motion.p>
            <motion.h1 variants={fadeUp} className="font-display text-6xl text-brand-navy font-light">
              M. B. Parag
            </motion.h1>
            <motion.div variants={fadeUp} className="w-20 h-px bg-brand-gold" />
            <motion.p variants={fadeUp} className="font-body text-sm text-gray-600">
              Abstract Artist · Art Promoter · Philanthropist · World Conceptualist
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Bio */}
      <section className="bg-white py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col items-center text-center gap-2 mb-10"
          >
            <motion.div variants={fadeUp} className="flex flex-col items-center gap-1">
              <a href="mailto:paragmairal123@gmail.com" className="font-body text-sm text-gray-600 hover:text-brand-navy transition-colors duration-300">
                paragmairal123@gmail.com
              </a>
              <a href="mailto:mbparag@rootsgraphics.com" className="font-body text-sm text-gray-600 hover:text-brand-navy transition-colors duration-300">
                mbparag@rootsgraphics.com
              </a>
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
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
                  src="/photos/MBparag.jpeg"
                  alt="M. B. Parag"
                  width={1000}
                  height={1300}
                  className="w-full h-full object-contain p-2"
                />
              </div>
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

          {/* Special Achievements */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-14"
          >
            <motion.h3 variants={fadeUp} className="font-display text-3xl text-brand-navy text-center mb-8">
              Special Achievements
            </motion.h3>
            <div className="grid grid-cols-1 gap-6">
              {specialAchievements.map((a) => (
                <motion.div
                  key={a.title}
                  variants={fadeUp}
                  className="p-6"
                  style={{ background: 'rgba(16, 42, 31, 0.92)', border: '1px solid rgba(201,168,76,0.3)' }}
                >
                  <h4 className="font-display text-xl text-brand-navy mb-2">{a.title}</h4>
                  <p className="font-body text-sm text-gray-700 leading-relaxed">{a.content}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Professional Highlights */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-20"
          >
            <motion.h3 variants={fadeUp} className="font-display text-3xl text-brand-navy text-center mb-8">
              Professional Highlights
            </motion.h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {paragProfessionalHighlights.map((h) => (
                <motion.div
                  key={h}
                  variants={fadeUp}
                  className="bg-brand-cream px-5 py-4 flex items-start gap-3 border border-[#D6BA74]"
                >
                  <span className="text-brand-gold flex-shrink-0 mt-0.5">◆</span>
                  <span className="font-body text-sm text-gray-700 leading-relaxed">{h}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Exhibition History */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-20"
          >
            <motion.h3 variants={fadeUp} className="font-display text-3xl text-brand-navy text-center mb-8">
              Exhibition History
            </motion.h3>
            <div className="grid grid-cols-1 gap-3">
              {exhibitions.map((e, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  className="flex items-start gap-4 pb-3 border-b border-gray-200 last:border-b-0"
                >
                  <span className="text-brand-orange font-display font-bold flex-shrink-0 text-lg mt-0.5">{idx + 1}.</span>
                  <span className="font-body text-gray-700 leading-relaxed pt-0.5">{e}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-20 max-w-2xl mx-auto"
          >
            <motion.h3 variants={fadeUp} className="font-display text-3xl text-brand-navy text-center mb-10">
              Key Milestones
            </motion.h3>
            <div className="relative">
              <div className="absolute left-4 top-1 bottom-1 w-px bg-brand-gold opacity-60" />
              <div className="flex flex-col gap-8">
                {timeline.map(({ year, event }) => (
                  <motion.div key={year} variants={fadeUp} className="relative pl-12">
                    <span className="absolute left-[10px] top-1.5 w-3 h-3 rounded-full bg-brand-orange border-2 border-brand-cream" />
                    <span className="font-body text-xs uppercase tracking-widest text-brand-gold block mb-1">{year}</span>
                    <p className="font-body text-gray-700 leading-relaxed">{event}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* The Poem */}
      <section className="bg-[#123224] py-24 px-6 md:px-12">
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
    </motion.div>
  );
}
