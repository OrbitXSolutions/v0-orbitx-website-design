"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-white">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,_#E2E8F0_1px,_transparent_1px),linear-gradient(to_bottom,_#E2E8F0_1px,_transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#5B9BED]/10 text-[#5B9BED] text-sm font-medium border border-[#5B9BED]/20">
                <span className="w-2 h-2 rounded-full bg-[#3AA29E] animate-pulse" />
                Dubai-Based Software House
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 leading-tight tracking-tight mb-6 text-balance"
            >
              Building Scalable{" "}
              <span className="text-[#5B9BED]">Digital Platforms</span> for Modern
              Businesses
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg md:text-xl text-slate-600 max-w-xl mb-10 text-pretty"
            >
              Custom web platforms, AI solutions, and enterprise systems
              tailored for growth. We help businesses in the UAE transform
              digitally.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row items-start gap-4"
            >
              <a
                href="https://wa.me/971504887551?text=Hi%20OrbitX%2C%20I%27d%20like%20to%20discuss%20a%20project"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 bg-[#5B9BED] text-white rounded-xl font-medium text-base hover:bg-[#4A8AD8] transition-all flex items-center gap-2 shadow-lg shadow-[#5B9BED]/20"
              >
                Start Your Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <Link
                href="#projects"
                className="px-8 py-4 bg-white text-slate-900 rounded-xl font-medium text-base hover:bg-slate-50 transition-all border border-slate-200 flex items-center gap-2 shadow-sm"
              >
                <Play className="w-4 h-4" />
                View Our Work
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {[
                { value: "50+", label: "Projects Delivered", color: "#5B9BED" },
                { value: "10+", label: "Years Experience", color: "#3AA29E" },
                { value: "100%", label: "Client Satisfaction", color: "#E87652" },
                { value: "UAE", label: "Based in Dubai", color: "#9B7ABF" },
              ].map((stat, index) => (
                <div key={index} className="text-left">
                  <div className="text-2xl md:text-3xl font-bold mb-1" style={{ color: stat.color }}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-500">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative hidden lg:block"
          >
            <div className="relative h-[600px] w-full">
              {/* Main image */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl shadow-slate-200">
                <Image
                  src="/images/hero-dashboard.jpg"
                  alt="Enterprise software dashboard"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
              </div>

              {/* Floating card 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="absolute -left-8 top-1/4 bg-white rounded-xl p-4 shadow-xl border border-slate-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#3AA29E]/10 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-[#3AA29E]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-slate-900">
                      Project Delivered
                    </div>
                    <div className="text-xs text-slate-500">
                      Just now
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating card 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                className="absolute -right-4 bottom-1/4 bg-white rounded-xl p-4 shadow-xl border border-slate-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#5B9BED]/10 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-[#5B9BED]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-slate-900">
                      Performance
                    </div>
                    <div className="text-xs text-[#3AA29E] font-medium">
                      +127% Growth
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-slate-300 flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-[#5B9BED]"
          />
        </div>
      </motion.div>
    </section>
  );
}
