"use client";

import { motion } from "framer-motion";
import { Shield, Zap, Target, Users, CheckCircle2 } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Custom-Built Solutions",
    description:
      "Every platform is engineered around your workflows, approvals, and business model, not pre-built themes.",
    color: "#5B9BED",
  },
  {
    icon: Zap,
    title: "Enterprise-Level Architecture",
    description:
      "Architecture decisions are made for long-term stability, integration readiness, and operational scale.",
    color: "#E87652",
  },
  {
    icon: Target,
    title: "Scalable & Secure Systems",
    description:
      "Security, performance, and maintainability are treated as core requirements from day one.",
    color: "#3AA29E",
  },
  {
    icon: Users,
    title: "Strong Technical Expertise",
    description:
      "Our team combines deep engineering practice with practical delivery for UAE organizations.",
    color: "#9B7ABF",
  },
];

const benefits = [
  "Architecture-first delivery",
  "Full ownership of your codebase",
  "API-first integration mindset",
  "Structured delivery governance",
  "Long-term maintainability",
  "UAE market and operations context",
];

export function WhyOrbitX() {
  return (
    <section id="why-orbitx" className="py-24 md:py-32 relative bg-slate-50">
      {/* Subtle pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,_#E2E8F0_1px,_transparent_1px),linear-gradient(to_bottom,_#E2E8F0_1px,_transparent_1px)] bg-[size:3rem_3rem] opacity-30" />
      
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#5B9BED] text-sm font-medium uppercase tracking-wider">
              Why OrbitX
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mt-4 mb-6">
              Trusted Technical Partner
              <br />
              <span className="text-[#3AA29E]">For Complex Digital Delivery</span>
            </h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              OrbitX helps businesses build digital platforms that support real
              operations, growth, and long-term maintainability, not short-term
              demos.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#3AA29E] flex-shrink-0" />
                  <span className="text-slate-700 text-sm">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-300"
              >
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${reason.color}15` }}
                >
                  <reason.icon className="w-6 h-6" style={{ color: reason.color }} />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {reason.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
