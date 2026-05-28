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
              Built For Business-Critical
              <br />
              <span className="text-[#5B9BED]">Digital Systems</span>
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                OrbitX Solutions is a Dubai-based software house focused on
                delivering custom websites, systems, and digital platforms for
                businesses and enterprises across the UAE.
              </p>
              <p>
                Our team combines technical expertise with a deep understanding
                of business operations, compliance expectations, and scalable
                software architecture. We work with organizations that need
                reliable digital products, not temporary fixes.
              </p>
              <p>
                Our engineering background spans modern web delivery, .NET
                ecosystems, cloud deployments, and integration-led architecture
                for evolving business requirements.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-[#5B9BED]">10+</div>
                <div className="text-sm text-slate-500">Years Engineering Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#3AA29E]">UAE</div>
                <div className="text-sm text-slate-500">
                  Market Understanding
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#E87652]">.NET + Next.js</div>
                <div className="text-sm text-slate-500">Modern Delivery Stack</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
