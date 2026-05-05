"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl shadow-slate-200">
              <Image
                src="/images/about-team.jpg"
                alt="OrbitX Solutions Team"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent" />
            </div>

            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-8 -right-4 md:right-8 bg-white border border-slate-200 rounded-xl p-6 shadow-xl max-w-[240px]"
            >
              <div className="text-4xl font-bold text-[#5B9BED] mb-1">10+</div>
              <div className="text-sm text-slate-600">
                Years of delivering excellence in the UAE
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#3AA29E] text-sm font-medium uppercase tracking-wider">
              About OrbitX
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mt-4 mb-6">
              Your Partner in
              <br />
              <span className="text-[#5B9BED]">Digital Excellence</span>
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                OrbitX Solutions is a Dubai-based software house focused on
                delivering high-quality digital platforms. We specialize in
                custom web development, enterprise systems, and AI-powered
                solutions.
              </p>
              <p>
                Our team combines technical expertise with a deep understanding
                of business needs in the UAE market. We help
                organizations—from startups to government entities—build
                scalable systems and achieve digital transformation.
              </p>
              <p>
                With a commitment to quality and innovation, we&apos;ve
                successfully delivered over 50 projects, helping businesses
                across the region grow and thrive in the digital age.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-[#5B9BED]">50+</div>
                <div className="text-sm text-slate-500">Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#3AA29E]">30+</div>
                <div className="text-sm text-slate-500">
                  Happy Clients
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#E87652]">100%</div>
                <div className="text-sm text-slate-500">Satisfaction</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
