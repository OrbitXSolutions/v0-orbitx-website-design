"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    name: "Zoolker",
    category: "Pet Care Services Platform",
    overview:
      "Service platform connecting pet owners with veterinary and pet care providers.",
    problem:
      "Users needed a faster way to discover and book trusted pet services.",
    solution:
      "Built a structured service directory with booking flows and streamlined user journeys.",
    technologies: ["Next.js", "TypeScript", "API integrations"],
    keyFeatures: ["Service discovery", "Booking flow", "Mobile-first UX"],
    impact:
      "Improved service discoverability and reduced friction in customer inquiries.",
    image: "/images/projects/zoolker.jpg",
    link: "https://www.zoolker.com",
    color: "#3AA29E",
  },
  {
    name: "Gold Checker",
    category: "Verification Services Platform",
    overview:
      "Professional digital presence for gold verification and inspection services.",
    problem:
      "The business needed stronger trust and clarity for high-value customer interactions.",
    solution:
      "Delivered a focused platform with clear service flows, trust messaging, and inquiry funnel.",
    technologies: ["Next.js", "Tailwind", "Performance optimization"],
    keyFeatures: ["Service detail pages", "Lead capture", "Trust-focused UX"],
    impact:
      "Strengthened brand credibility and improved qualified lead quality.",
    image: "/images/projects/gold-checker.jpg",
    link: "https://www.goldchecker.ae/",
    color: "#E87652",
  },
  {
    name: "MKL Fitout",
    category: "Corporate Website",
    overview:
      "Company website presenting fitout capabilities and project delivery standards.",
    problem:
      "The company required a digital profile that reflected enterprise-level execution.",
    solution:
      "Built a structured corporate site highlighting services, project types, and business strengths.",
    technologies: ["Next.js", "SEO architecture", "Responsive UI"],
    keyFeatures: ["Capability pages", "Project highlights", "Contact conversion paths"],
    impact:
      "Improved professionalism in online positioning for B2B opportunities.",
    image: "/images/projects/mkl-fitout.jpg",
    link: "https://mklfitout.com",
    color: "#5B9BED",
  },
  {
    name: "Rawad Al Tameer",
    category: "Construction Company Website",
    overview:
      "Corporate web platform for a construction business targeting institutional and commercial clients.",
    problem:
      "Needed a clearer digital presentation of capabilities and service reliability.",
    solution:
      "Designed a service-led website architecture with focused messaging for decision-makers.",
    technologies: ["Next.js", "Content strategy", "On-page SEO"],
    keyFeatures: ["Service architecture", "Portfolio highlights", "Inquiry funnels"],
    impact:
      "Provided a stronger online sales foundation for business development.",
    image: "/images/projects/rawad.jpg",
    link: "https://rawadaltameer.com",
    color: "#5B9BED",
  },
  {
    name: "No.5 Boutique",
    category: "Fashion E-Commerce Platform",
    overview:
      "E-commerce storefront for curated fashion products and premium product presentation.",
    problem:
      "The brand needed a cleaner online shopping flow and stronger product storytelling.",
    solution:
      "Built an e-commerce experience optimized for browsing, trust, and conversion.",
    technologies: ["Next.js", "E-commerce integrations", "Responsive UI"],
    keyFeatures: ["Category structure", "Product pages", "Checkout-friendly UX"],
    impact:
      "Enabled a more consistent and conversion-focused online sales journey.",
    image: "/images/projects/makhit.jpg",
    link: "https://www.no5boutique.com/",
    color: "#3AA29E",
  },
  {
    name: "WeDoo Hub",
    category: "Multi-Category E-Commerce",
    overview:
      "Online commerce platform supporting diverse lifestyle products and campaigns.",
    problem:
      "The business needed a scalable storefront structure for category expansion.",
    solution:
      "Implemented a scalable commerce UX with clean product navigation and mobile-first experience.",
    technologies: ["Next.js", "Commerce stack", "Performance tuning"],
    keyFeatures: ["Scalable catalog", "Responsive storefront", "Promotion-ready UI"],
    impact:
      "Improved scalability of product presentation and customer purchase flow.",
    image: "/images/projects/wedoo.jpg",
    link: "https://wedoohub.com",
    color: "#5B9BED",
  },
  {
    name: "WeHandU",
    category: "Home Services Marketplace",
    overview:
      "Service marketplace connecting households with vetted home service providers.",
    problem:
      "Users needed a reliable way to discover and request home services from one platform.",
    solution:
      "Built a marketplace flow balancing service discovery, trust signals, and request submission.",
    technologies: ["Next.js", "Marketplace workflows", "API-driven architecture"],
    keyFeatures: ["Service categories", "Request funnel", "Provider-focused structure"],
    impact:
      "Created a scalable foundation for service demand and provider onboarding.",
    image: "/images/projects/wehandu.jpg",
    link: "https://wehandu.com",
    color: "#E87652",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#3AA29E] text-sm font-medium uppercase tracking-wider">
            Our Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mt-4 mb-6 text-balance">
            Project Case Studies
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Selected client projects that demonstrate our approach to solving
            real business challenges with practical, scalable technology.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative overflow-hidden rounded-2xl bg-white border border-slate-200 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-100 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={`${project.name} case study preview`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
              </div>

              <div className="p-6">
                <span 
                  className="text-xs font-medium uppercase tracking-wider"
                  style={{ color: project.color }}
                >
                  {project.category}
                </span>
                <h3 className="text-lg font-semibold text-slate-900 mt-2 mb-2">
                  {project.name}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-3">
                  {project.overview}
                </p>
                <p className="text-slate-700 text-sm mb-2">
                  <span className="font-medium text-slate-900">Business Problem:</span>{" "}
                  {project.problem}
                </p>
                <p className="text-slate-700 text-sm mb-2">
                  <span className="font-medium text-slate-900">Solution:</span>{" "}
                  {project.solution}
                </p>
                <p className="text-slate-700 text-sm mb-3">
                  <span className="font-medium text-slate-900">Impact:</span>{" "}
                  {project.impact}
                </p>
                <p className="text-xs uppercase tracking-wider text-slate-500 mb-2">
                  Technologies
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-xs uppercase tracking-wider text-slate-500 mb-2">
                  Key Features
                </p>
                <ul className="space-y-1.5 mb-4">
                  {project.keyFeatures.map((feature) => (
                    <li key={feature} className="text-sm text-slate-600 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: project.color }} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium transition-colors"
                  style={{ color: project.color }}
                >
                  Live Preview
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
