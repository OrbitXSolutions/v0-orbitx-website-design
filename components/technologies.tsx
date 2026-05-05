"use client";

import { motion } from "framer-motion";

const technologies = [
  { name: "Next.js", category: "Frontend" },
  { name: "React", category: "Frontend" },
  { name: "TypeScript", category: "Language" },
  { name: ".NET", category: "Backend" },
  { name: "Node.js", category: "Backend" },
  { name: "SQL Server", category: "Database" },
  { name: "PostgreSQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "AWS", category: "Cloud" },
  { name: "Azure", category: "Cloud" },
  { name: "Docker", category: "DevOps" },
  { name: "OpenAI", category: "AI" },
];

export function Technologies() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Tech Stack
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            Modern Technologies
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
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
              className="group px-6 py-4 rounded-xl bg-muted/50 border border-border hover:border-primary/30 hover:bg-primary/5 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-center">
                <span className="text-foreground font-medium group-hover:text-primary transition-colors">
                  {tech.name}
                </span>
                <span className="block text-xs text-muted-foreground mt-1">
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
