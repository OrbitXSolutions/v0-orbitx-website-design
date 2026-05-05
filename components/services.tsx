"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Building2,
  Brain,
  ShoppingCart,
  Globe,
  Lightbulb,
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Custom Web Development",
    description:
      "Build high-performance, scalable web applications tailored to business needs.",
    features: [
      "Custom architecture (no templates)",
      "Secure & scalable systems",
      "Next.js & .NET solutions",
    ],
    color: "#5B9BED",
  },
  {
    icon: Building2,
    title: "Enterprise Systems Development",
    description:
      "Design and build complex systems for organizations and government entities.",
    features: [
      "Workflow automation",
      "Role-based architecture",
      "High scalability",
    ],
    color: "#3AA29E",
  },
  {
    icon: Brain,
    title: "AI-Powered Solutions",
    description:
      "Integrate AI into business workflows for smarter operations.",
    features: ["AI automation", "Smart analytics", "Intelligent systems"],
    color: "#9B7ABF",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Development",
    description:
      "Build modern online stores with conversion-focused design.",
    features: ["Custom checkout", "Payment integration", "Admin dashboards"],
    color: "#E87652",
  },
  {
    icon: Globe,
    title: "Business Websites & Platforms",
    description:
      "Professional websites designed to convert visitors into customers.",
    features: ["High-end UI/UX", "SEO-ready", "Fast performance"],
    color: "#5B9BED",
  },
  {
    icon: Lightbulb,
    title: "Digital Transformation & Consulting",
    description:
      "Help businesses move into digital systems and optimize processes.",
    features: ["System planning", "Process optimization", "Tech consulting"],
    color: "#3AA29E",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 relative bg-slate-50">
      {/* Subtle pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,_#E2E8F0_1px,_transparent_1px),linear-gradient(to_bottom,_#E2E8F0_1px,_transparent_1px)] bg-[size:3rem_3rem] opacity-30" />
      
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#5B9BED] text-sm font-medium uppercase tracking-wider">
            What We Do
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mt-4 mb-6 text-balance">
            Enterprise-Grade Solutions
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            We deliver custom software solutions that drive business growth and
            digital transformation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-8 rounded-2xl bg-white border border-slate-200 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-100 transition-all duration-300"
            >
              <div className="relative z-10">
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors"
                  style={{ backgroundColor: `${service.color}15` }}
                >
                  <service.icon className="w-7 h-7" style={{ color: service.color }} />
                </div>

                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {service.title}
                </h3>

                <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-sm text-slate-600"
                    >
                      <span 
                        className="w-1.5 h-1.5 rounded-full" 
                        style={{ backgroundColor: service.color }}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
