"use client";

import { motion } from "framer-motion";

const technologies = [
  { name: "Next.js", category: "Frontend", color: "#5B9BED" },
  { name: "React", category: "Frontend", color: "#5B9BED" },
  { name: "TypeScript", category: "Language", color: "#3AA29E" },
  { name: ".NET", category: "Backend", color: "#9B7ABF" },
  { name: "Node.js", category: "Backend", color: "#3AA29E" },
  { name: "SQL Server", category: "Database", color: "#E87652" },
  { name: "PostgreSQL", category: "Database", color: "#5B9BED" },
  { name: "MongoDB", category: "Database", color: "#3AA29E" },
  { name: "AWS", category: "Cloud", color: "#E87652" },
  { name: "Azure", category: "Cloud", color: "#5B9BED" },
  { name: "Docker", category: "DevOps", color: "#3AA29E" },
  { name: "OpenAI", category: "AI", color: "#9B7ABF" },
];

export function Technologies() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-slate-50">
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
          <span className="text-[#E87652] text-sm font-medium uppercase tracking-wider">
            Tech Stack
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mt-4 mb-6 text-balance">
            Modern Technologies
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            We use cutting-edge tools and frameworks to build future-proof
            solutions.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="group px-6 py-4 rounded-xl bg-white border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-center">
                <span 
                  className="font-medium transition-colors"
                  style={{ color: tech.color }}
                >
                  {tech.name}
                </span>
                <span className="block text-xs text-slate-500 mt-1">
                  {tech.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
