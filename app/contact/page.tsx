'use client';

import { motion } from 'framer-motion';

// ── Variants ───────────────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

// ── Input shared class ─────────────────────────────────────────────────────

const inputClass =
  'w-full bg-transparent border-0 border-b-2 border-gray-300 focus:border-brand-orange focus:outline-none font-body text-brand-navy placeholder-gray-400 py-3 transition-colors duration-300 text-sm';

// ── Page ───────────────────────────────────────────────────────────────────

export default function ContactPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >

      {/* ═══════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════════ */}
      <section className="bg-[#102A1F] min-h-[40vh] flex items-center justify-center pt-28 pb-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center text-center gap-4"
          >
            <motion.h1
              variants={fadeUp}
              className="font-display text-5xl sm:text-6xl text-brand-navy font-light"
            >
              Get In Touch
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="font-body text-sm uppercase tracking-widest text-brand-gold"
            >
              We would love to hear from you
            </motion.p>
            <motion.div variants={fadeUp} className="w-20 h-px bg-brand-gold mt-1" />
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          MAIN — two columns
      ══════════════════════════════════════════════════════════ */}
      <section className="bg-brand-cream py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          {/* ── Left: Contact Info ─────────────────────────── */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            <motion.h2
              variants={fadeUp}
              className="font-display text-4xl text-brand-navy"
            >
              Reach Us
            </motion.h2>

            {/* Info cards */}
            <div className="flex flex-col gap-5">

              {/* Founder */}
              <motion.div
                variants={fadeUp}
                className="pl-4 border-l-2 border-brand-gold"
              >
                <p className="font-body text-xs uppercase tracking-widest text-brand-gold mb-1">
                  Founder
                </p>
                <p className="font-body text-brand-navy font-medium">M. B. Parag</p>
                <p className="font-body text-sm text-gray-500">World Conceptualist</p>
              </motion.div>

              {/* Email */}
              <motion.div
                variants={fadeUp}
                className="pl-4 border-l-2 border-brand-gold"
              >
                <p className="font-body text-xs uppercase tracking-widest text-brand-gold mb-1">
                  Email
                </p>
                <a
                  href="mailto:paragmairal123@gmail.com"
                  className="font-body text-brand-orange hover:underline break-all"
                >
                  paragmairal123@gmail.com
                </a>
              </motion.div>

              {/* Phone */}
              <motion.div
                variants={fadeUp}
                className="pl-4 border-l-2 border-brand-gold"
              >
                <p className="font-body text-xs uppercase tracking-widest text-brand-gold mb-1">
                  Mobile
                </p>
                <a
                  href="tel:+919820070620"
                  className="font-body text-brand-navy hover:text-brand-orange transition-colors duration-200 block"
                >
                  +91 9820070620
                </a>
                <a
                  href="tel:+919324531090"
                  className="font-body text-brand-navy hover:text-brand-orange transition-colors duration-200 block"
                >
                  +91 9324531090
                </a>
              </motion.div>

              {/* Address */}
              <motion.div
                variants={fadeUp}
                className="pl-4 border-l-2 border-brand-gold"
              >
                <p className="font-body text-xs uppercase tracking-widest text-brand-gold mb-1">
                  Address
                </p>
                <address className="font-body text-sm text-gray-700 not-italic leading-relaxed">
                  D-601, Swapnalok Apt., Old Nagardas Road, Mogra Pada, Andheri (East), Mumbai
                  {' '}— 400 069
                </address>
              </motion.div>

              {/* Telephone */}
              <motion.div
                variants={fadeUp}
                className="pl-4 border-l-2 border-brand-gold"
              >
                <p className="font-body text-xs uppercase tracking-widest text-brand-gold mb-1">
                  Telephone
                </p>
                <a
                  href="tel:+912228220506"
                  className="font-body text-brand-navy hover:text-brand-orange transition-colors duration-200"
                >
                  +91-22-28220506
                </a>
              </motion.div>

            </div>

            {/* Tagline */}
            <motion.div variants={fadeUp} className="flex flex-col gap-2 mt-2">
              <p className="font-display text-2xl text-brand-navy italic leading-snug">
                &ldquo;We Deliver Your Thoughts with Sacred Feelings&rdquo;
              </p>
              <p className="font-body text-sm text-gray-500 italic tracking-wide break-all">
                &ldquo;rgcreativepaintings@yahoo.com&rdquo;
              </p>
            </motion.div>
          </motion.div>

          {/* ── Right: Contact Form ────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <form
              action="mailto:paragmairal123@gmail.com"
              method="post"
              encType="text/plain"
              className="flex flex-col gap-7"
            >

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="name"
                  className="font-body text-xs uppercase tracking-widest text-gray-500"
                >
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="M. B. Parag"
                  className={inputClass}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="email"
                  className="font-body text-xs uppercase tracking-widest text-gray-500"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className={inputClass}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="subject"
                  className="font-body text-xs uppercase tracking-widest text-gray-500"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  placeholder="Artwork enquiry / Valuation / General"
                  className={inputClass}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="message"
                  className="font-body text-xs uppercase tracking-widest text-gray-500"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Tell us about your interest in the collection…"
                  className={`${inputClass} resize-none`}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-brand-orange text-white font-display text-xl py-4 tracking-wide hover:bg-[#D0903E] transition-colors duration-300 mt-2"
              >
                Send Message
              </button>

              <p className="font-body text-xs text-gray-400 text-center">
                Or reach out via email directly — we respond within 24 hours.
              </p>

            </form>
          </motion.div>

        </div>
      </section>

    </motion.div>
  );
}
