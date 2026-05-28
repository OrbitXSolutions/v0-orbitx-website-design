"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";

export function Contact() {
  return (
    <section
      id="contact"
      className="py-24 md:py-32 relative overflow-hidden bg-slate-50"
    >
      {/* Subtle pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,_#E2E8F0_1px,_transparent_1px),linear-gradient(to_bottom,_#E2E8F0_1px,_transparent_1px)] bg-[size:3rem_3rem] opacity-30" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#E87652] text-sm font-medium uppercase tracking-wider">
            Get Started
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mt-4 mb-6 text-balance">
            Let&apos;s Build Your Next
            <br />
            <span className="text-[#5B9BED]">Digital Platform</span>
          </h2>
          <p className="text-slate-600 text-lg mb-10 max-w-2xl mx-auto">
            Ready to transform your business with a custom digital solution? Get
            in touch with our team to discuss your project.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/971509700715?text=Hi%20OrbitX%2C%20I%27d%20like%20to%20discuss%20a%20project"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 bg-[#5B9BED] text-white rounded-xl font-medium text-base hover:bg-[#4A8AD8] transition-all flex items-center gap-2 w-full sm:w-auto justify-center shadow-lg shadow-[#5B9BED]/20"
            >
              Start Your Project
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://wa.me/971509700715"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-slate-900 rounded-xl font-medium text-base hover:bg-slate-100 transition-all border border-slate-200 flex items-center gap-2 w-full sm:w-auto justify-center shadow-sm"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              WhatsApp Contact
            </a>
          </div>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 pt-16 border-t border-slate-200"
        >
          <p className="text-slate-500 text-sm mb-8">
            Trusted by businesses across the UAE
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {[
              { name: "Enterprise", color: "#5B9BED" },
              { name: "Government", color: "#3AA29E" },
              { name: "E-commerce", color: "#E87652" },
              { name: "Healthcare", color: "#9B7ABF" },
              { name: "Finance", color: "#5B9BED" },
            ].map((sector) => (
              <span
                key={sector.name}
                className="font-medium text-sm"
                style={{ color: sector.color }}
              >
                {sector.name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
