"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Building2,
  Brain,
  ShoppingCart,
  Globe,
  Lightbulb,
  Workflow,
  Network,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Corporate Websites",
    description:
      "Professional, high-performance websites built around your brand, market positioning, and lead generation goals.",
    features: [
      "Clear service and capability positioning",
      "SEO-friendly structure and speed",
      "Business value: stronger digital credibility",
    ],
    color: "#5B9BED",
  },
  {
    icon: Code2,
    title: "Custom Web Applications",
    description:
      "Tailored web applications designed around your workflows, approvals, and operational requirements.",
    features: [
      "Role-based access and permissions",
      "Secure architecture and maintainable codebase",
      "Business value: reduced manual operations",
    ],
    color: "#3AA29E",
  },
  {
    icon: Building2,
    title: "Business Management Systems",
    description:
      "Internal systems that centralize operations, data visibility, and process control across teams.",
    features: [
      "Operations and workflow management",
      "Reporting and process visibility",
      "Business value: improved efficiency and control",
    ],
    color: "#9B7ABF",
  },
  {
    icon: Workflow,
    title: "Customer Portals",
    description:
      "Self-service client portals for onboarding, support requests, document exchange, and account management.",
    features: [
      "Secure client access",
      "Streamlined communication flows",
      "Business value: better customer experience",
    ],
    color: "#E87652",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Platforms",
    description:
      "Commerce platforms that support product growth, reliable order flow, and operational scalability.",
    features: [
      "Payment and logistics integration",
      "Order and inventory workflows",
      "Business value: scalable online revenue channels",
    ],
    color: "#5B9BED",
  },
  {
    icon: Brain,
    title: "AI-Powered Solutions",
    description:
      "Practical AI capabilities integrated into real business workflows, not isolated demos.",
    features: [
      "Process automation and assistive AI",
      "Search, recommendations, and analytics",
      "Business value: faster decisions and operations",
    ],
    color: "#3AA29E",
  },
  {
    icon: Network,
    title: "API & System Integrations",
    description:
      "Connect your platform with ERP, CRM, payment, logistics, and third-party services through reliable integrations.",
    features: [
      "Secure API architecture",
      "Data synchronization and orchestration",
      "Business value: connected business systems",
    ],
    color: "#E87652",
  },
  {
    icon: Lightbulb,
    title: "Technical Consulting & Architecture",
    description:
      "Architecture advisory for organizations planning new digital platforms or modernizing legacy systems.",
    features: [
      "Solution architecture and roadmap",
      "Technology and delivery planning",
      "Business value: lower technical risk",
    ],
    color: "#9B7ABF",
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
            Custom Software Services For UAE Businesses
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            We design and build business-oriented platforms that align with real
            operations, growth plans, and enterprise standards.
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
