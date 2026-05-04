'use client';

import { motion } from 'framer-motion';

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

const collectors = [
  { name: 'Late Legendary Philanthropist Shri Basant Kumar Birla Ji', role: 'Notable Patron' },
  { name: 'Kotak Finance Limited, Mr. Uday Kotak', role: 'Mumbai' },
  { name: 'Swaraj Shipping, Surinder Paul', role: 'Mumbai' },
  { name: 'Legendary Late Film Star Vinod Khanna Ji', role: 'Notable Patron' },
  { name: 'Lloyds Steel, Mukesh Gupta, Rakesh Gupta', role: 'Mumbai' },
  { name: 'Lloyds Finance Limited', role: 'Mumbai' },
  { name: 'Leela Penta Hotels (Now Leela Hotels)', role: 'Mumbai' },
  { name: 'Viceroy Palace Heights Hotels', role: 'Hyderabad' },
  { name: 'Director General of Police', role: 'Mumbai, Maharashtra' },
  { name: 'Bank of India', role: 'H.O. Nariman Point, Mumbai' },
  { name: 'Switzerland', role: 'International Collection' },
  { name: 'Germany', role: 'International Collection' },
  { name: 'Bahrain', role: 'International Collection' },
  { name: 'DGP Anti-corruption', role: 'Mumbai' },
  { name: 'Police Officers Mess', role: 'Worli, Mumbai' },
  { name: 'Regency Hotel', role: 'Mumbai' },
  { name: 'Medley Pharmaceuticals Ltd', role: 'Mumbai' },
  { name: 'Lupin Laboratories Ltd', role: 'Mumbai' },
  { name: 'Elder Pharmaceuticals Ltd', role: 'Mumbai' },
  { name: 'Neco Group, Late Shri Basantlal Shaw Jaiswal', role: 'Nagpur' },
  { name: 'Navneet Automobiles, Mr. Bharat Seth', role: 'Nagpur' },
  { name: 'Architect Mr. Ashok Mokha Ji', role: 'Nagpur' },
  { name: 'Mr. Ghatate', role: 'Civil Lines, Nagpur' },
  { name: 'Amin Tyres', role: 'Nagpur' },
  { name: 'Former Minister Shri Satish Chaturvedi Ji', role: 'Nagpur' },
  { name: 'Late Former MLA Madhukar Wasnik', role: 'Notable Patron' },
  { name: 'Mansingh Hotel', role: 'Nagpur' },
  { name: 'Evershine Builders', role: 'Mumbai' },
  { name: 'Dr. Sunil Mirpurry', role: 'Warden Road, Mumbai' },
  { name: 'Asha Bhosle', role: 'Mumbai' },
  { name: 'T Series, Kishan Kumar', role: 'Mumbai' },
  { name: 'Malmo Exports, Mr. Imtiaz Malkani', role: 'Mumbai' },
  { name: 'Pinakin Patel, Interior Designers', role: 'Alibagh' },
  { name: 'Usha Mirchandani', role: 'Warden Road, Mumbai' },
  { name: 'Architect Mr. Zahir Cassum, Talati Panthaky Associates Pvt Ltd', role: 'Mumbai' },
  { name: 'Architect Mr. Naushir Devetri, Talati Panthaky Partners LLP', role: 'Mumbai' },
  { name: 'Jain Irrigation', role: 'Jalgaon' },
  { name: 'Art Director of Jain Irrigation & Jain Pipes Mr. Vikas Malhara', role: 'Notable Patron' },
  { name: 'ATN TV Channel', role: 'Mumbai' },
  { name: 'Plus TV Channel', role: 'Media' },
  { name: 'Architect Mr. Hafeez Contractor', role: 'Mumbai' },
  { name: 'Mrs. Rubi Anand', role: 'Director' },
  { name: 'Bank of America : In 1994.', role: 'International Bank' },
];

export default function CollectedCelebratedPage() {
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
            <h1 className="font-display text-5xl md:text-6xl text-brand-navy mb-4">
              Collected &amp; Celebrated By
            </h1>
            <div className="w-16 h-px bg-brand-gold mx-auto" />
          </motion.div>

          {/* Grid */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {collectors.map(({ name, role }) => (
              <motion.div
                key={name}
                variants={item}
                className="bg-[#173F2D] shadow-sm p-5 flex flex-col gap-1 border border-brand-gold/30"
              >
                <span className="font-display text-lg text-brand-navy leading-snug">{name}</span>
                <span className="font-body text-xs text-gray-500">{role}</span>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </motion.div>
  );
}
