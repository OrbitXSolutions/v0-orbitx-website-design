"use client";

import { motion } from "framer-motion";
import {
  Search,
  FileText,
  Palette,
  Code,
  TestTube,
  Rocket,
} from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Discovery",
    description:
      "Stakeholder sessions to understand objectives, constraints, user roles, and operational requirements.",
    color: "#5B9BED",
  },
  {
    icon: FileText,
    number: "02",
    title: "Planning",
    description:
      "Define architecture, scope boundaries, milestones, and technical delivery roadmap.",
    color: "#3AA29E",
  },
  {
    icon: Palette,
    number: "03",
    title: "Design",
    description:
      "Design practical interfaces for business users, customers, and decision-makers across key journeys.",
    color: "#E87652",
  },
  {
    icon: Code,
    number: "04",
    title: "Development",
    description:
      "Implement secure, maintainable code with modular architecture and integration-ready components.",
    color: "#9B7ABF",
  },
  {
    icon: TestTube,
    number: "05",
    title: "Testing",
    description:
      "Validate functionality, performance, and reliability across devices and business-critical scenarios.",
    color: "#5B9BED",
  },
  {
    icon: Rocket,
    number: "06",
    title: "Launch & Support",
    description:
      "Controlled production rollout with post-launch support, monitoring, and iterative enhancement.",
    color: "#3AA29E",
  },
];

export function Process() {
  return (
    <section id="process" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#9B7ABF] text-sm font-medium uppercase tracking-wider">
            How We Work
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mt-4 mb-6 text-balance">
            Structured Delivery Process
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            A practical process built for clarity, accountability, and quality
            from planning to production.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-8 rounded-2xl bg-slate-50 border border-slate-200 group hover:bg-white hover:border-slate-300 hover:shadow-lg transition-all duration-300"
            >
              <div className="absolute top-8 right-8 text-6xl font-bold text-slate-100 group-hover:text-slate-200 transition-colors">
                {step.number}
              </div>

              <div className="relative z-10">
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors"
                  style={{ backgroundColor: `${step.color}15` }}
                >
                  <step.icon className="w-7 h-7" style={{ color: step.color }} />
                </div>

                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {step.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
