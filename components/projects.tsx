"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    name: "Zoolker",
    category: "Pet Care Platform",
    description:
      "Connects pet owners with veterinary services through a clean and accessible digital experience.",
    image: "/images/projects/zoolker.jpg",
    color: "#3AA29E",
  },
  {
    name: "Gold Checker",
    category: "Gold Verification Platform",
    description:
      "A trusted platform for gold checking services with a simple and professional interface.",
    image: "/images/projects/gold-checker.jpg",
    color: "#E87652",
  },
  {
    name: "MKL Fitout",
    category: "Interior & Fitout Website",
    description:
      "Corporate website showcasing fitout services and business capabilities.",
    image: "/images/projects/mkl-fitout.jpg",
    color: "#5B9BED",
  },
  {
    name: "Amr Fitness",
    category: "Fitness Website",
    description:
      "A modern platform presenting training programs and coaching services.",
    image: "/images/projects/amr-fitness.jpg",
    color: "#E87652",
  },
  {
    name: "Honna La Honna",
    category: "Community Platform",
    description:
      "A structured and elegant digital platform focused on community engagement.",
    image: "/images/projects/honna.jpg",
    color: "#9B7ABF",
  },
  {
    name: "Rawad Al Tameer",
    category: "Construction Website",
    description:
      "Professional site presenting construction services and company expertise.",
    image: "/images/projects/rawad.jpg",
    color: "#5B9BED",
  },
  {
    name: "Eleva Boutique",
    category: "E-commerce Store",
    description: "Elegant online boutique for fashion and product display.",
    image: "/images/projects/eleva.jpg",
    color: "#9B7ABF",
  },
  {
    name: "Makhit Al Dar",
    category: "Tailoring Services",
    description: "Service website for tailoring and fashion business.",
    image: "/images/projects/makhit.jpg",
    color: "#3AA29E",
  },
  {
    name: "WeDoo Hub",
    category: "E-commerce Platform",
    description: "Lifestyle product platform with modern shopping experience.",
    image: "/images/projects/wedoo.jpg",
    color: "#5B9BED",
  },
  {
    name: "WeHandU",
    category: "Home Services Platform",
    description: "Marketplace connecting users with home service providers.",
    image: "/images/projects/wehandu.jpg",
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
            Featured Projects
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Explore our latest work delivering digital solutions for businesses
            across the UAE.
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
                  alt={project.name}
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
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <button 
                  className="inline-flex items-center gap-2 text-sm font-medium transition-colors"
                  style={{ color: project.color }}
                >
                  View Project
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
