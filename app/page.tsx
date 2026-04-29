'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform, useMotionValue } from 'framer-motion';
import type { MotionValue } from 'framer-motion';
import { paintings } from '@/data/paintings';

// ── Variants ───────────────────────────────────────────────────────────────

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: 'easeOut' as const, delay },
  },
});

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

// ── Data ───────────────────────────────────────────────────────────────────

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
];

const pillars = [
  {
    icon: '◈',
    title: 'Funding',
    desc: "Channelling art's benchmark value toward global charitable causes",
  },
  {
    icon: '◉',
    title: 'Innovation',
    desc: 'Creating new models where 100% of proceeds go directly to those in need',
  },
  {
    icon: '◎',
    title: 'Opportunity',
    desc: 'Uplifting underprivileged communities through art, education, and healthcare',
  },
];

const presidentialVisitPhotos = [
  {
    title: 'Traditional Achal Bharai to the President',
    description: 'M.B. Parag performs traditional Achal Bharai to the President Shri. Pratibha Tai Patil on occasion of Sharad Purnima',
    src: '/vip_clicks/Achal Bharai.png',
  },
  {
    title: 'Presenting to the President\'s Spouse',
    description: 'M.B. Parag giving traditional Shawl & Shrifal (Coconut) to the Hon. President\'s spouse Dr. Devisingh Shekawat',
    src: '/vip_clicks/President\'s spous.png',
  },
  {
    title: 'Presenting to the President\'s Son',
    description: 'M.B. Parag giving traditional Shawl & Shrifal (Coconut) to the Hon. President\'s son Mr. Rao Saheb Shekawat',
    src: '/vip_clicks/President\'s son.png',
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

const storyHighlights = [
  {
    year: '1961-62',
    title: 'Meeting Pandit Jawaharlal Nehru',
    description: 'A 45-variety rose garland crafted by our mother was presented to Jawaharlal Nehru, Chacha Nehru, during his visit to Wardha. The flowers included rare black roses and green roses from our family garden.',
  },
  {
    year: '1980',
    title: 'Encounter with Indira Gandhi Ji',
    description: 'Met India\'s former Prime Minister Indira Gandhi in 12th standard. Spent nearly ten minutes in conversation, shared admiration for her leadership, and received her autograph.',
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

const vipMoments = [
  {
    id: 101,
    title: 'M. B. Parag, Janin Sayed RAZA, Sayed Haydar RAZA & Arvind Inamdar',
    info: 'From Left M. B. PARAG alias Parag Mairal, Janin Sayed RAZA, Padmashree Sayed Haydar RAZA, and Late Former DGP of Maharashtra Shri. Arvind Inamdar.',
    src: '/vip_clicks/Janin Sayed RAZA.jpeg',
  },
  {
    id: 102,
    title: 'Jayant Mairal With Padmashree Sayed Haydar RAZA',
    info: 'Jayant Mairal with Padmashree Sayed Haydar RAZA in artist meet organized by M.B. PARAG alias Parag Mairal at Nagpur.',
    src: '/vip_clicks/Sayed Haydar RAZA.jpeg',
  },
  {
    id: 1,
    title: 'Ratan Tata Ji & M. B. Parag',
    info: 'Rainbow Painting with Ratan Tata Ji & M. B. Parag Alias Parag Mairal.',
    src: '/vip_clicks/Ratan Tata Ji .jpeg',
  },
  {
    id: 2,
    title: 'Amitabh Bachchan Ji & M. B. Parag',
    info: 'Amitabh Bachchan Ji & M.B. PARAG Alias Parag Mairal.',
    src: '/vip_clicks/Amitabh Bachchan Ji.jpeg',
  },
  {
    id: 3,
    title: 'Ambassador Javier Paulinich',
    info: 'Ambassador of Peru Javier Paulinich & M. B. PARAG.',
    src: '/vip_clicks/Javier Paulinich.jpeg',
  },
  {
    id: 4,
    title: 'Ashish Shelar Ji, Arun Sabnis Ji & M. B. Parag',
    info: 'Cabinet Cultural Minister of Maharashtra Mr. Ashish Shelar Ji, Chairman of Fulora Foundations Mr. Arun Sabnis Ji & M. B. PARAG Alias Parag Mairal.',
    src: '/vip_clicks/Ashish Shelar Ji.jpeg',
  },
  {
    id: 5,
    title: 'Karsan Ghavri Ji',
    info: 'Legendary Cricket Player Shri. Karsan Ghavri Ji.',
    src: '/vip_clicks/Karsan Ghavri.jpeg',
  },
  {
    id: 6,
    title: 'Muthu Swami Iyer, M. B. Parag & Jayant Mairal',
    info: 'Guruvayur Temple M. B. PARAG Alias Parag Mairal & Former International Football Player Mr. Muthu Swami Iyer and Jayant Mairal too.',
    src: '/vip_clicks/Muthu Swami Iyer.jpeg',
  },
  {
    id: 7,
    title: 'Dilip Vengsarkar & M. B. Parag',
    info: 'Legendary Cricket Player Shri. Dilip Vengsarkar & M. B. PARAG Alias Parag Mairal.',
    src: '/vip_clicks/Dilip Vengsarkar.jpeg',
  },
  {
    id: 8,
    title: 'Hema Malini Ji',
    info: 'Legendary Film Actress Mrs. Hema Malini Ji.',
    src: '/vip_clicks/Hema Malini maam.jpeg',
  },
  {
    id: 9,
    title: 'Minal Potnis',
    info: 'Minal Potnis.',
    src: '/vip_clicks/Minal Potnis.jpeg',
  },
  {
    id: 10,
    title: 'Tej Sapru Ji',
    info: 'Tej Sapru Ji.',
    src: '/vip_clicks/Tej_Sapru.jpeg',
  },
  {
    id: 11,
    title: 'Varsha Usgaonkar',
    info: 'Film Actress Varsha Usgaonkar.',
    src: '/vip_clicks/Varsha Usgaonkar.jpeg',
  },
  {
    id: 12,
    title: 'Prem Chopra Ji, Mithun Singh Ji & M. B. Parag',
    info: 'Mr. Prem Chopra Ji, Artist Mithun Singh Ji & M. B. PARAG Alias Parag Mairal.',
    src: '/vip_clicks/Prem Chopra Ji.jpeg',
  },
];

const dignitaryLetters = [
  {
    id: 1,
    title: 'Amitabh Bachchan Ji Letter (21 Nov 2025, 2:10 PM)',
    info: '“21st of November, 2025 is the most delightful moment of my life” — letter from legendary film actor Mr. Amitabh Bachchan Ji at 2:10 PM.',
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

// ── Floating artwork cards — hero background layer ─────────────────────────
// group drives the scroll-parallax direction:
//   top-left / top / top-right  → scatter upward + outward on scroll
//   right / left                → scatter sideways
//   bottom-* / bottom           → scatter downward + outward on scroll
type ParallaxGroup =
  | 'top-left' | 'top' | 'top-right'
  | 'right'
  | 'bottom-right' | 'bottom' | 'bottom-left'
  | 'left';

const floatingArtworks: Array<{
  id: number; title: string; artist: string;
  top: string; left: string; rotate: number;
  startX: number; startY: number;
  delay: number; w: number; h: number; floatDur: number;
  group: ParallaxGroup;
}> = [
  { id: 0,  title: 'Unity',             artist: 'Jayant B. Mairal', top: '6%',  left: '1%',  rotate: -14, startX: -220, startY: -130, delay: 0.15, w: 130, h: 100, floatDur: 3.8, group: 'top-left' },
  { id: 1,  title: 'Winning Horse With the Owner', artist: 'M.B. Parag', top: '15%', left: '9%',  rotate:   9, startX: -180, startY: -190, delay: 0.32, w: 148, h: 116, floatDur: 4.2, group: 'top-left' },
  { id: 2,  title: 'Sunrise',           artist: 'M. B. Parag',      top: '2%',  left: '29%', rotate:  -6, startX:    0, startY: -220, delay: 0.20, w: 138, h: 108, floatDur: 3.5, group: 'top' },
  { id: 3,  title: 'Couple',            artist: 'Jayant B. Mairal', top: '2%',  left: '56%', rotate:   5, startX:    0, startY: -220, delay: 0.42, w: 138, h: 108, floatDur: 4.6, group: 'top' },
  { id: 4,  title: "Rhinoceros Winner's of the Battle.", artist: 'M.B. Parag', top: '14%', left: '76%', rotate: -10, startX:  180, startY: -190, delay: 0.27, w: 148, h: 116, floatDur: 3.9, group: 'top-right' },
  { id: 5,  title: 'Narsimha God',      artist: 'M. B. Parag',      top: '5%',  left: '87%', rotate:  13, startX:  220, startY: -130, delay: 0.40, w: 130, h: 100, floatDur: 4.3, group: 'top-right' },
  { id: 6,  title: 'Magic of Peacock',  artist: 'Jayant B. Mairal', top: '31%', left: '88%', rotate:  -8, startX:  260, startY:    0, delay: 0.55, w: 142, h: 112, floatDur: 4.0, group: 'right' },
  { id: 7,  title: 'Celebrations in Dense Forest.', artist: 'M.B. Parag',      top: '58%', left: '87%', rotate:  11, startX:  260, startY:    0, delay: 0.70, w: 136, h: 106, floatDur: 3.7, group: 'right' },
  { id: 8,  title: 'Narsimha God',      artist: 'M. B. Parag',      top: '82%', left: '79%', rotate: -13, startX:  200, startY:  170, delay: 0.37, w: 130, h: 100, floatDur: 4.4, group: 'bottom-right' },
  { id: 9,  title: 'Unity',             artist: 'Jayant B. Mairal', top: '88%', left: '40%', rotate:   7, startX:    0, startY:  220, delay: 0.60, w: 138, h: 108, floatDur: 3.6, group: 'bottom' },
  { id: 10, title: 'Couple',            artist: 'Jayant B. Mairal', top: '82%', left: '3%',  rotate:  12, startX: -200, startY:  170, delay: 0.48, w: 130, h: 100, floatDur: 4.1, group: 'bottom-left' },
  { id: 11, title: 'Sunrise',           artist: 'M. B. Parag',      top: '40%', left: '1%',  rotate:  -7, startX: -260, startY:    0, delay: 0.63, w: 142, h: 112, floatDur: 4.5, group: 'left' },
  { id: 12, title: 'Magic of Peacock',  artist: 'Jayant B. Mairal', top: '65%', left: '2%',  rotate:  10, startX: -260, startY:    0, delay: 0.80, w: 136, h: 106, floatDur: 3.4, group: 'left' },
];

const floatingArtworkImages = [
  '/photos/Green_Forest.png',
  '/photos/Celebrations_in_Dense_Forest.png',
  '/photos/Narsimha_God.png',
  '/photos/Couple.png',
  '/photos/Monkeys_in_the_Jungle.png',
  '/photos/Winning_Horse.png',
  '/photos/Rhinoceros.png',
  '/photos/King_of_Forest.png',
  '/photos/Blossoming_Forest.png',
  "/photos/King's_Kingdom.png",
  '/photos/Dense_Forest.png',
  "/photos/Winner's_of_Battle_II.png",
  "/photos/Winner's_of_Battle_III.png",
];

// ── Page ───────────────────────────────────────────────────────────────────

export default function HomePage() {
  const featured = paintings.slice(0, 6);
  const heroRef  = useRef<HTMLElement>(null);

  // ── Scroll progress through the hero section (0 = top, 1 = bottom leaving) ──
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  // ── Per-group scroll parallax transforms ──
  const topY       = useTransform(scrollYProgress, [0, 1], [0, -110]); // top cards scatter up
  const botY       = useTransform(scrollYProgress, [0, 1], [0,  110]); // bottom scatter down
  const midY       = useTransform(scrollYProgress, [0, 1], [0,  -55]); // side cards drift up
  const leftX      = useTransform(scrollYProgress, [0, 1], [0,  -50]); // left scatter left
  const rightX     = useTransform(scrollYProgress, [0, 1], [0,   50]); // right scatter right
  const noX        = useMotionValue(0);                                 // no horizontal drift

  // Overall card layer fades as hero scrolls away
  const cardsOpacity = useTransform(scrollYProgress, [0, 0.45, 0.85], [1, 0.65, 0]);

  // Map group → { y, x } motion values
  const parallaxMap: Record<ParallaxGroup, { y: MotionValue<number>; x: MotionValue<number> }> = {
    'top-left':     { y: topY,  x: leftX  },
    'top':          { y: topY,  x: noX    },
    'top-right':    { y: topY,  x: rightX },
    'right':        { y: midY,  x: rightX },
    'bottom-right': { y: botY,  x: rightX },
    'bottom':       { y: botY,  x: noX    },
    'bottom-left':  { y: botY,  x: leftX  },
    'left':         { y: midY,  x: leftX  },
  };

  return (
    <motion.div
      className="overflow-x-hidden"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >

      {/* ═══════════════════════════════════════════════════════
          SECTION 1 — HERO
      ══════════════════════════════════════════════════════════ */}
      <section
        ref={heroRef}
        className="relative min-h-screen bg-brand-cream flex items-center justify-center overflow-hidden"
      >

        {/* ── Layer A: Floating artwork cards (z-[2], desktop only) ── */}
        <motion.div
          className="absolute inset-0 pointer-events-none z-[2] hidden lg:block"
          style={{ opacity: cardsOpacity }}
          aria-hidden="true"
        >
          {floatingArtworks.map((card) => {
            const { y: scrollY, x: scrollX } = parallaxMap[card.group];
            const artworkSrc = floatingArtworkImages[card.id % floatingArtworkImages.length];
            return (
              <motion.div
                key={card.id}
                className="absolute"
                style={{ top: card.top, left: card.left, y: scrollY, x: scrollX }}
              >
                {/* Entry animation: flies in from edge, rotates to resting angle */}
                <motion.div
                  initial={{
                    opacity: 0,
                    x: card.startX,
                    y: card.startY,
                    rotate: card.rotate * 0.25,
                  }}
                  animate={{
                    opacity: 0.86,
                    x: 0,
                    y: 0,
                    rotate: card.rotate,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 48,
                    damping: 16,
                    delay: card.delay,
                    opacity: { duration: 0.55, ease: 'easeOut', delay: card.delay },
                  }}
                >
                  {/* Continuous gentle float */}
                  <motion.div
                    animate={{ y: [-6, 6, -6] }}
                    transition={{
                      duration: card.floatDur,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: card.delay + 1.4,
                    }}
                  >
                    {/* Mini painting frame */}
                    <div
                      style={{
                        width: card.w,
                        height: card.h,
                        background: 'linear-gradient(145deg, #1d1508 0%, #0e0a04 55%, #16100a 100%)',
                        border: '2px solid #C9A84C',
                        boxShadow:
                          '0 8px 32px rgba(0,0,0,0.55), inset 0 0 24px rgba(0,0,0,0.65), 0 0 0 1px rgba(201,168,76,0.12)',
                        position: 'relative',
                        overflow: 'hidden',
                      }}
                    >
                      <div style={{ position: 'absolute', inset: '5px', border: '1px solid rgba(201,168,76,0.2)' }} />
                      <div
                        style={{
                          position: 'absolute',
                          inset: 0,
                          background: 'radial-gradient(ellipse at 28% 32%, rgba(201,168,76,0.14) 0%, transparent 62%)',
                        }}
                      />
                      <span className="absolute top-[7px] left-[7px]   block w-[9px] h-[9px] border-t border-l border-[#C9A84C] opacity-55" />
                      <span className="absolute top-[7px] right-[7px]  block w-[9px] h-[9px] border-t border-r border-[#C9A84C] opacity-55" />
                      <span className="absolute bottom-[7px] left-[7px]  block w-[9px] h-[9px] border-b border-l border-[#C9A84C] opacity-55" />
                      <span className="absolute bottom-[7px] right-[7px] block w-[9px] h-[9px] border-b border-r border-[#C9A84C] opacity-55" />
                      <div className="absolute inset-[6px] overflow-hidden">
                        <Image
                          src={artworkSrc}
                          alt={card.title}
                          fill
                          sizes="180px"
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* ── Layer B: Centrepiece frame — z-[4], filled with hero bg so cards hide behind it ── */}
        <div
          className="absolute inset-0 z-[4] flex items-center justify-center pointer-events-none"
          aria-hidden="true"
        >
          <motion.div
            className="relative"
            animate={{ scale: [1, 1.003, 1], opacity: [0.96, 1, 0.96] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              width: 'clamp(320px, 64vw, 980px)',
              height: 'clamp(300px, 56vh, 680px)',
              background: '#133726',                      /* same as hero bg — masks cards behind */
              border: '5px solid #C9A84C',
              boxShadow:
                'inset 0 0 0 2px #0D0D0D, inset 0 0 0 5px rgba(201,168,76,0.32), 0 0 60px rgba(201,168,76,0.1)',
            }}
          >
            <span className="absolute top-2 left-2   block w-4 h-4 border-t-2 border-l-2 border-brand-gold opacity-60" />
            <span className="absolute top-2 right-2  block w-4 h-4 border-t-2 border-r-2 border-brand-gold opacity-60" />
            <span className="absolute bottom-2 left-2  block w-4 h-4 border-b-2 border-l-2 border-brand-gold opacity-60" />
            <span className="absolute bottom-2 right-2 block w-4 h-4 border-b-2 border-r-2 border-brand-gold opacity-60" />
          </motion.div>
        </div>

        {/* ── Layer C: Centre spotlight — z-[6] ── */}
        <div
          className="absolute inset-0 z-[6] pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 58% 50% at center, rgba(214,186,116,0.2) 0%, rgba(16,42,31,0.08) 52%, transparent 72%)',
          }}
          aria-hidden="true"
        />

        {/* ── Layer D: Edge vignette — z-[7] ── */}
        <div
          className="absolute inset-0 z-[7] pointer-events-none"
          style={{ boxShadow: 'inset 0 0 130px rgba(3,10,7,0.5)' }}
          aria-hidden="true"
        />

        {/* ── Layer E: Hero content — z-[10] ── */}
        <div className="relative z-[10] flex flex-col items-center text-center gap-4 px-8 pt-8 md:pt-10">
          <motion.p
            variants={fadeUp(0)}
            initial="hidden"
            animate="visible"
            className="font-body text-xs md:text-sm uppercase tracking-widest text-brand-gold"
          >
            Established 1990 · Mumbai, India
          </motion.p>

          <motion.h1
            variants={fadeUp(0.12)}
            initial="hidden"
            animate="visible"
            className="font-display text-6xl md:text-7xl lg:text-8xl font-light tracking-wide text-brand-navy leading-none"
          >
            Roots Graphics
          </motion.h1>

          <motion.p
            variants={fadeUp(0.24)}
            initial="hidden"
            animate="visible"
            className="font-body text-lg md:text-xl italic text-brand-orange"
          >
            Excellence Needs Roots
          </motion.p>

          <motion.div
            variants={fadeUp(0.32)}
            initial="hidden"
            animate="visible"
            className="w-16 h-px bg-brand-gold"
          />

          <motion.p
            variants={fadeUp(0.4)}
            initial="hidden"
            animate="visible"
            className="font-body text-sm md:text-base tracking-wider text-gray-500"
          >
            Fine Art Consultants · Art Promoters · Valuers · World Conceptualist
          </motion.p>

          <motion.div variants={fadeUp(0.5)} initial="hidden" animate="visible">
            <Link
              href="/gallery"
              className="mt-1 inline-block font-body text-sm md:text-base uppercase tracking-widest text-brand-navy border border-brand-navy px-8 py-3 transition-all duration-300 hover:bg-brand-orange hover:text-white hover:border-brand-orange"
            >
              Explore Our Collection
            </Link>
          </motion.div>

          <motion.div variants={fadeUp(0.62)} initial="hidden" animate="visible" className="mt-1">
            <motion.div
              animate={{ y: [0, 7, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
              className="text-brand-gold"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </motion.div>
          </motion.div>
        </div>

      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 2 — BRAND INTRO
      ══════════════════════════════════════════════════════════ */}
      <section className="bg-brand-cream py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="w-full aspect-[4/5] relative"
            style={{
              border: '4px solid #C9A84C',
              boxShadow: 'inset 0 0 40px rgba(0,0,0,0.6), 0 8px 32px rgba(0,0,0,0.12)',
              overflow: 'hidden',
            }}
          >
            <Image
              src="/photos/HomePageMain.jpeg"
              alt="Roots Graphics artwork display"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
            className="flex flex-col gap-5"
          >
            <p className="font-body text-xs uppercase tracking-widest text-brand-orange">Our Story</p>
            <h2 className="font-display text-4xl md:text-5xl text-brand-navy leading-tight">
              Where Art Meets Purpose
            </h2>
            <div className="w-16 h-px bg-brand-gold" />
            <p className="font-body text-gray-700 leading-relaxed">
              Founded on the birthday of Mahatma Gandhi — October 2, 1990 — Roots Graphics was
              born with a singular purpose: to give India&apos;s overlooked artistic talents the platform
              they deserve, and to ensure Indian art is not only appreciated worldwide, but that
              artists receive their rightful recognition.
            </p>
            <p className="font-body text-gray-700 leading-relaxed">
              Over three decades, we have built relationships with luminaries of Indian art, culture,
              and industry — from the legendary S.H. Raza and M.F. Husain, to Shri Ratan Tata,
              Shri V.P. Singh, and the halls of Rashtrapati Bhavan.
            </p>
          </motion.div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 3 — VIP / VVIP MOMENTS
      ══════════════════════════════════════════════════════════ */}
      <section className="bg-[#123224] py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-14"
          >
            <p className="font-body text-xs uppercase tracking-widest text-brand-gold mb-3">
              Special Moments
            </p>
            <h2 className="font-display text-5xl text-brand-navy mb-3">
              Moments With Dignitaries &amp; Icons
            </h2>
            <p className="font-body text-sm uppercase tracking-widest text-brand-orange">
              VIP, VVIP, and film personalities with Roots Graphics
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {vipMoments.map((moment) => (
              <motion.div
                key={moment.id}
                variants={item}
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
                className="bg-[#183A2B] transition-shadow duration-300 hover:shadow-[0_0_20px_rgba(201,168,76,0.25)]"
                style={{ border: '1px solid rgba(214,186,116,0.35)' }}
              >
                <div
                  className="w-full aspect-[3/4] relative"
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
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 4 — LETTERS FROM DIGNITARIES
      ══════════════════════════════════════════════════════════ */}
      <section className="bg-brand-cream py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-14"
          >
            <p className="font-body text-xs uppercase tracking-widest text-brand-orange mb-3">
              Official Correspondence
            </p>
            <h2 className="font-display text-5xl text-brand-navy mb-3">
              Letters From Dignitaries &amp; Icons
            </h2>
            <p className="font-body text-sm uppercase tracking-widest text-brand-gold">
              Appreciation letters and acknowledgements received by Roots Graphics
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
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
                  style={{
                    background: '#FFFFFF',
                    borderBottom: '2px solid rgba(201,168,76,0.25)',
                  }}
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
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 5 — FEATURED PAINTINGS GRID
      ══════════════════════════════════════════════════════════ */}
      <section className="bg-[#143526] py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-14"
          >
            <h2 className="font-display text-5xl text-brand-navy mb-3">The Collection</h2>
            <p className="font-body text-sm uppercase tracking-widest text-brand-gold">
              Selected Works by M. B. Parag &amp; Jayant B. Mairal
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
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
              const isNarsimha = p.title === 'Narsimha God with Celebrations of Victory';
              const isCouple = p.title === 'Couple';
              const isUnity = p.title === 'Unity';
              const isGanesha = p.title === 'Different Forms & Faces of Lord Ganesha';
              const isHumanRelations = p.title === 'Human Relations I';
              const isGauMata = p.title === 'Gau Mata (Cow Goddess)';
              const isMagicOfPeacock = p.title === 'Magic of Peacock and Horse Power';
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
                    background:
                      isNarsimha ||
                      isCouple ||
                      isUnity ||
                      isGanesha ||
                      isHumanRelations ||
                      isGauMata ||
                      isMagicOfPeacock
                        ? '#FFFFFF'
                        : '#1D4733',
                    borderBottom: '2px solid rgba(201,168,76,0.25)',
                  }}
                >
                  {isNarsimha ? (
                    <Image
                      src="/photos/Narsimha_God.png"
                      alt={p.title}
                      className="w-full h-full object-contain"
                      width={1200}
                      height={900}
                    />
                  ) : isCouple ? (
                    <Image
                      src="/photos/Couple.png"
                      alt={p.title}
                      className="w-full h-full object-contain"
                      width={1200}
                      height={900}
                    />
                  ) : isUnity ? (
                    <Image
                      src="/photos/Unity.png"
                      alt={p.title}
                      className="w-full h-full object-contain"
                      width={1200}
                      height={900}
                    />
                  ) : isGanesha ? (
                    <Image
                      src="/photos/Different_Forms_&_Faces_of_Lord_Ganesha.png"
                      alt={p.title}
                      className="w-full h-full object-contain"
                      width={1200}
                      height={900}
                    />
                  ) : isHumanRelations ? (
                    <Image
                      src="/photos/Green_Forest.png"
                      alt={p.title}
                      className="w-full h-full object-contain"
                      width={1200}
                      height={900}
                    />
                  ) : isGauMata ? (
                    <Image
                      src="/photos/Monkeys_in_the_Jungle.png"
                      alt={p.title}
                      className="w-full h-full object-contain"
                      width={1200}
                      height={900}
                    />
                  ) : isMagicOfPeacock ? (
                    <Image
                      src="/photos/King_of_Forest.png"
                      alt={p.title}
                      className="w-full h-full object-contain"
                      width={1200}
                      height={900}
                    />
                  ) : (
                    <span className="font-display text-lg italic text-brand-gold" style={{ opacity: 0.2 }}>
                      [ artwork ]
                    </span>
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

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 6 — VISION STATEMENT
      ══════════════════════════════════════════════════════════ */}
      <section
        className="bg-[#123224] py-24 px-6 md:px-12"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(214,186,116,0.12) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      >
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center flex flex-col items-center gap-8"
        >
          <motion.p variants={item} className="font-body text-xs uppercase tracking-widest text-brand-gold">
            Our Vision
          </motion.p>
          <motion.blockquote
            variants={item}
            className="font-display text-3xl md:text-4xl lg:text-5xl text-brand-navy font-light italic leading-relaxed"
          >
            &ldquo;We do not merely sell fine art. We strive to create reputable owners of art —
            and to use the power of creativity to fund innovation, support the underprivileged, and
            solve humanity&rsquo;s greatest challenges.&rdquo;
          </motion.blockquote>
          <motion.p variants={item} className="font-body text-sm text-brand-orange">
            — M. B. Parag, Founder
          </motion.p>
          <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6 w-full">
            {pillars.map(({ icon, title, desc }) => (
              <motion.div key={title} variants={item} className="flex flex-col items-center gap-3 text-center">
                <span className="text-brand-gold text-2xl">{icon}</span>
                <h3 className="font-display text-xl text-brand-navy">{title}</h3>
                <p className="font-body text-sm text-gray-600 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 7 — NOTABLE RECOGNITION
      ══════════════════════════════════════════════════════════ */}
      <section className="bg-brand-cream py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-14"
          >
            <h2 className="font-display text-4xl text-brand-navy">Collected &amp; Celebrated By</h2>
          </motion.div>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {collectors.map(({ name, role }) => (
              <motion.div key={name} variants={item} className="bg-[#173F2D] shadow-sm p-5 flex flex-col gap-1 border border-brand-gold/30">
                <span className="font-display text-lg text-brand-navy leading-snug">{name}</span>
                <span className="font-body text-xs text-gray-500">{role}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 7 — STORY BOARD OF INDIA
      ══════════════════════════════════════════════════════════ */}
      <section className="bg-[#143526] py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <p className="font-body text-xs uppercase tracking-widest text-brand-gold mb-3">
              Our Heritage
            </p>
            <h2 className="font-display text-5xl text-brand-navy mb-4">
              Story Board of India
            </h2>
            <p className="font-body text-sm text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Connectivity for Our Beloved Nation, India
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mb-16"
          >
            <motion.p
              variants={item}
              className="font-body text-gray-700 leading-relaxed mb-5"
            >
              In 1962, my father was a Professor of English at G. S. College of Commerce in Wardha, Maharashtra, near Nagpur. Wardha is a sacred and historic place, home to Sevagram Ashram, where Mahatma Gandhi lived and worked. On such a pure and inspiring land, my parents created a beautiful garden of 45 varieties of roses, including rare black and green roses.
            </motion.p>
            <motion.p
              variants={item}
              className="font-body text-gray-700 leading-relaxed"
            >
              Our mother carried water on her head from nearly a quarter kilometre every day, nurturing every plant with love and care. It was in this sacred place that our family&apos;s journey with India&apos;s greatest leaders began — moments that shaped our values and commitment to the nation.
            </motion.p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {storyHighlights.map((highlight, idx) => (
              <motion.div
                key={idx}
                variants={item}
                className="p-6 border-l-4"
                style={{
                  borderColor: '#C9A84C',
                  background: 'rgba(16, 42, 31, 0.6)',
                }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <span className="inline-block px-3 py-1 text-xs uppercase tracking-widest text-brand-navy bg-brand-gold rounded-full font-bold">
                      {highlight.year}
                    </span>
                  </div>
                </div>
                <h4 className="font-display text-xl text-brand-navy mt-4 mb-2">
                  {highlight.title}
                </h4>
                <p className="font-body text-sm text-gray-600 leading-relaxed">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-16 p-8 text-center"
            style={{
              background: 'rgba(201, 168, 76, 0.08)',
              border: '1px solid rgba(201,168,76,0.2)',
            }}
          >
            <p className="font-body text-gray-600 text-sm leading-relaxed max-w-2xl mx-auto">
              Through these encounters and experiences, we have remained committed to contributing to our beloved nation, India. Though financial constraints have at times limited our efforts, the spirit of service, connectivity, and nation-building has always guided our path. Our story is India&apos;s story — a testament to the values that unite us all.
            </p>
          </motion.div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 7B — PRESIDENTIAL VISIT TO RASHTRAPATI BHAVAN
      ══════════════════════════════════════════════════════════ */}
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
              Historic Moment
            </p>
            <h2 className="font-display text-5xl text-brand-navy mb-4">
              Rashtrapati Bhavan Visit
            </h2>
            <p className="font-body text-sm uppercase tracking-widest text-brand-gold">
              On occasion of Sharad Purnima — 25th October, 2007
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {presidentialVisitPhotos.map((photo, idx) => (
              <motion.div
                key={idx}
                variants={item}
                className="bg-white overflow-hidden transition-shadow duration-300 hover:shadow-lg"
                style={{ border: '1px solid rgba(214,186,116,0.35)' }}
              >
                {/* Image */}
                <div
                  className="w-full aspect-[4/3] relative flex items-center justify-center"
                  style={{
                    background: '#F5F5F5',
                    borderBottom: '2px solid rgba(201,168,76,0.25)',
                  }}
                >
                  <Image
                    src={photo.src}
                    alt={photo.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-contain p-1"
                  />
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-display text-lg text-brand-navy mb-2">
                    {photo.title}
                  </h3>
                  <p className="font-body text-sm text-gray-700 leading-relaxed">
                    {photo.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 7C — TRADEMARKS & BRAND LOGOS
      ══════════════════════════════════════════════════════════ */}
      <section className="bg-brand-cream py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl text-brand-navy mb-3">
              Our Brands &amp; Trademarks
            </h2>
            <p className="font-body text-sm uppercase tracking-widest text-brand-orange">
              Committed to Excellence and Global Humanity
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {/* Global Humanity Logo */}
            <motion.div
              variants={item}
              className="flex items-center justify-center p-8 bg-white"
              style={{ border: '2px solid rgba(214,186,116,0.35)' }}
            >
              <Image
                src="/photos/Global_Charity.jpeg"
                alt="Wheels of Peace, Prosperity, Happiness & Healthcare - Global Humanity"
                width={600}
                height={400}
                className="w-full h-auto object-contain max-h-[300px]"
              />
            </motion.div>

            {/* Roots Graphics & Art Hutch Logo */}
            <motion.div
              variants={item}
              className="flex items-center justify-center p-8 bg-white"
              style={{ border: '2px solid rgba(214,186,116,0.35)' }}
            >
              <Image
                src="/photos/Art_Hutch.jpeg"
                alt="Roots Graphics & Art Hutch - Always Creating Value for Art"
                width={600}
                height={400}
                className="w-full h-auto object-contain max-h-[300px]"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 8 — CTA BANNER
      ══════════════════════════════════════════════════════════ */}
      <section className="bg-[#0F2E22] py-24 px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center flex flex-col items-center gap-7"
        >
          <h2 className="font-display text-4xl md:text-5xl text-brand-navy leading-tight">
            Discover the World of Roots Graphics
          </h2>
          <p className="font-body text-gray-700 text-base max-w-xl">
            Explore over three decades of fine art, conceptual paintings, and creative expression
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <Link
              href="/gallery"
              className="font-body text-sm uppercase tracking-widest bg-brand-orange text-white px-8 py-3 transition-colors duration-300 hover:bg-[#D99C4C]"
            >
              View Gallery
            </Link>
            <Link
              href="/contact"
              className="font-body text-sm uppercase tracking-widest border border-brand-navy text-brand-navy px-8 py-3 transition-colors duration-300 hover:bg-brand-gold hover:text-brand-dark hover:border-brand-gold"
            >
              Get in Touch
            </Link>
          </div>
        </motion.div>
      </section>

    </motion.div>
  );
}
