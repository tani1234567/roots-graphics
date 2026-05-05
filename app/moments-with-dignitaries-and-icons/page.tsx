'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

const vipMoments = [
  {
    id: 203,
    title: 'Padmavibhushan Shri. Ram Sutar Ji',
    info: 'With Padmavibhusion Shri.Ram Sutar Ji Parag Mairal an Artist and World Conceptualist.',
    src: '/vip_clicks/Padmavibhusion .jpeg',
    orientation: 'landscape' as const,
  },
  {
    id: 204,
    title: 'Padmavibhushan Ram Sutar With Artistic Luminaries',
    info: 'Artist Jayant Mairal, Dr. Rajendra Jadhav, M.B. Parag, Padmavibhushan Shri Ram Sutar, and Raja Wagh Ji at an exclusive artistic gathering.',
    src: '/vip_clicks/Artist Jayant Mairal.jpeg',
    orientation: 'landscape' as const,
  },
  {
    id: 205,
    title: 'Meeting With Distinguished Artists & Cultural Icons',
    info: 'Jayant Mairal, Dr. Rajendra Jadhav, Parag Mairal, Padmavibhushan Ram Sutar, and Raja Wagh Ji in a momentous artistic celebration.',
    src: '/vip_clicks/Dr. Rajendra Jadhav.jpeg',
    orientation: 'landscape' as const,
  },
  {
    id: 206,
    title: 'M.B. Parag With Ram Sutar, Rajkumar Sharma & Raja Wagh Ji',
    info: 'M.B. Parag, Padmavibhushan Shri Ram Sutar, renowned artist Rajkumar Sharma, and cultural patron Raja Wagh Ji at an esteemed artistic forum.',
    src: '/vip_clicks/Raja Wagh Ji.jpeg',
    orientation: 'landscape' as const,
  },
  {
    id: 201,
    title: 'Y.B. Chavan Art Gallery',
    info: 'Y.B. Chavan Art Gallery',
    src: '/vip_clicks/Vpsingh.png',
    orientation: 'landscape' as const,
  },
  {
    id: 202,
    title: 'Y.B. Chavan Art Gallery',
    info: 'Y.B. Chavan Art Gallery',
    src: '/vip_clicks/Vijay_Tendulkar.png',
    orientation: 'landscape' as const,
  },
  {
    id: 101,
    title: 'M. B. Parag, Janin Sayed RAZA, Sayed Haydar RAZA & Arvind Inamdar',
    info: 'From Left Parag Mairal, Janin Sayed RAZA, Padmashree Sayed Haydar RAZA, and Late Former DGP of Maharashtra Shri. Arvind Inamdar.',
    src: '/vip_clicks/Janin Sayed RAZA.jpeg',
    orientation: 'landscape' as const,
  },
  {
    id: 102,
    title: 'Jayant Mairal With Padmashree Sayed Haydar RAZA',
    info: 'Jayant Mairal with Padmashree Sayed Haydar RAZA in artist meet organized by Parag Mairal at Nagpur.',
    src: '/vip_clicks/Sayed Haydar RAZA.jpeg',
    orientation: 'landscape' as const,
  },
  {
    id: 1,
    title: 'Ratan Tata Ji & M. B. Parag',
    info: 'Rainbow Painting with Ratan Tata Ji & Parag Mairal.',
    src: '/vip_clicks/Ratan Tata Ji .jpeg',
    orientation: 'portrait' as const,
  },
  {
    id: 2,
    title: 'Amitabh Bachchan Ji & M. B. Parag',
    info: 'Amitabh Bachchan Ji & Parag Mairal.',
    src: '/vip_clicks/Amitabh Bachchan Ji.jpeg',
    orientation: 'landscape' as const,
  },
  {
    id: 3,
    title: 'Ambassador Javier Paulinich',
    info: 'Ambassador of Peru Javier Paulinich & M. B. PARAG.',
    src: '/vip_clicks/Javier Paulinich.jpeg',
    orientation: 'portrait' as const,
  },
  {
    id: 4,
    title: 'Ashish Shelar Ji, Arun Sabnis Ji & M. B. Parag',
    info: 'Cabinet Cultural Minister of Maharashtra Mr. Ashish Shelar Ji, Chairman of Fulora Foundations Mr. Arun Sabnis Ji & Parag Mairal.',
    src: '/vip_clicks/Ashish Shelar Ji.jpeg',
    orientation: 'landscape' as const,
  },
  {
    id: 5,
    title: 'Karsan Ghavri Ji',
    info: 'Legendary Cricket Player Shri. Karsan Ghavri Ji.',
    src: '/vip_clicks/Karsan Ghavri.jpeg',
    orientation: 'landscape' as const,
  },
  {
    id: 6,
    title: 'Muthu Swami Iyer, M. B. Parag & Jayant Mairal',
    info: 'Guruvayur Temple Parag Mairal & Former International Football Player Mr. Muthu Swami Iyer and Jayant Mairal too.',
    src: '/vip_clicks/Muthu Swami Iyer.jpeg',
    orientation: 'portrait' as const,
  },
  {
    id: 7,
    title: 'Dilip Vengsarkar & M. B. Parag',
    info: 'Legendary Cricket Player Shri. Dilip Vengsarkar & Parag Mairal.',
    src: '/vip_clicks/Dilip Vengsarkar.jpeg',
    orientation: 'portrait' as const,
  },
  {
    id: 8,
    title: 'Hema Malini Ji',
    info: 'Legendary Film Actress Mrs. Hema Malini Ji.',
    src: '/vip_clicks/Hema Malini maam.jpeg',
    orientation: 'portrait' as const,
  },
  {
    id: 9,
    title: 'Minal Potnis',
    info: 'Minal Potnis.',
    src: '/vip_clicks/Minal Potnis.jpeg',
    orientation: 'portrait' as const,
  },
  {
    id: 10,
    title: 'Tej Sapru Ji',
    info: 'Tej Sapru Ji.',
    src: '/vip_clicks/Tej_Sapru.jpeg',
    orientation: 'portrait' as const,
  },
  {
    id: 11,
    title: 'Varsha Usgaonkar',
    info: 'Film Actress Varsha Usgaonkar.',
    src: '/vip_clicks/Varsha Usgaonkar.jpeg',
    orientation: 'portrait' as const,
  },
  {
    id: 12,
    title: 'Prem Chopra Ji, Mithun Singh Ji & M. B. Parag',
    info: 'Mr. Prem Chopra Ji, Artist Mithun Singh Ji & Parag Mairal.',
    src: '/vip_clicks/Prem Chopra Ji.jpeg',
    orientation: 'portrait' as const,
  },
  {
    id: 301,
    title: 'Architect Mr. Kaizar Kazi',
    info: 'Architect: Mr. Kaizar Kazi, Formerly Associate at Architect Mr. Hafeez Contractor.',
    src: '/vip_clicks/Kaizar Kazi.jpeg',
    orientation: 'portrait' as const,
  },
  {
    id: 302,
    title: 'Late Prof. Kashinath Salve Ji & Jayant Mairal',
    info: 'Late Prof. Kashinath Salve Ji & Jayant Mairal',
    src: '/vip_clicks/Kashinath Salve.jpeg',
    orientation: 'landscape' as const,
  },
  {
    id: 303,
    title: 'Architect Mr. Paul',
    info: 'Architect: Mr. Paul, London, UK',
    src: '/vip_clicks/Mr. Paul.jpeg',
    orientation: 'portrait' as const,
  },
  {
    id: 304,
    title: 'Leading Architect Mr. Shashi Prabhu Ji',
    info: 'Leading Architect Mr. Shashi Prabhu Ji., Wankhede Stadium, Churchgate, Mumbai.',
    src: '/vip_clicks/Shashi Prabhu Ji.jpeg',
    orientation: 'portrait' as const,
  },
  {
    id: 305,
    title: 'Sheriff Shri. Sadruddin Daya',
    info: "India's Biggest Art Collector's Late Sheriff Shri. Sadruddin Daya, Chairman Dawood Shoes Limited, Mumbai",
    src: '/vip_clicks/Sheriff Shri. Sadruddin Daya.jpeg',
    orientation: 'portrait' as const,
  },
  {
    id: 306,
    title: 'Air India Pilot Shri. Shrikant Gondane',
    info: 'Air India Pilot: Shri. Shrikant Gondane.',
    src: '/vip_clicks/Shrikant Gondane.jpeg',
    orientation: 'portrait' as const,
  },
];

export default function MomentsWithDignitariesPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#123224]"
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
              Special Moments
            </p>
            <h1 className="font-display text-5xl md:text-6xl text-brand-navy mb-4">
              Moments With Dignitaries &amp; Icons
            </h1>
            <div className="w-16 h-px bg-brand-gold mx-auto mb-4" />
            <p className="font-body text-sm uppercase tracking-widest text-brand-orange">
              VIP, VVIP, and film personalities with Roots Graphics
            </p>
          </motion.div>

          {/* Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
            {vipMoments.map((moment) => (
              <motion.div
                key={moment.id}
                variants={item}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
                className="break-inside-avoid mb-6 bg-[#183A2B] transition-shadow duration-300 hover:shadow-[0_0_20px_rgba(201,168,76,0.25)]"
                style={{ border: '1px solid rgba(214,186,116,0.35)' }}
              >
                <div
                  className={`w-full relative ${moment.orientation === 'landscape' ? 'aspect-[4/3]' : 'aspect-[3/4]'}`}
                  style={{
                    background: '#FFFFFF',
                    borderBottom: '2px solid rgba(201,168,76,0.25)',
                  }}
                >
                  <Image
                    src={moment.src}
                    alt={moment.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-contain p-1"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-xl text-brand-navy mb-2">{moment.title}</h3>
                  <p className="font-body text-sm text-gray-500 leading-relaxed">{moment.info}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </motion.div>
  );
}
