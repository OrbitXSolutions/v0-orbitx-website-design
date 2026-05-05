"use client";

import { motion } from "framer-motion";
import { Shield, Zap, Target, Users, CheckCircle2 } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Custom-Built Solutions",
    description: "Every project is built from scratch to match your unique business requirements. No templates, no shortcuts.",
  },
  {
    icon: Zap,
    title: "Enterprise-Level Architecture",
    description: "We design systems that can scale with your business, handling thousands of users without breaking a sweat.",
  },
  {
    icon: Target,
    title: "Scalable & Secure Systems",
    description: "Security is built into every layer of our solutions, protecting your data and your customers.",
  },
  {
    icon: Users,
    title: "Strong Technical Expertise",
    description: "Our team brings years of experience across multiple industries and technologies.",
  },
];

const benefits = [
  "No templates or pre-built themes",
  "Full ownership of your code",
  "Ongoing support & maintenance",
  "Transparent communication",
  "On-time delivery guarantee",
  "UAE-focused expertise",
];

export function WhyOrbitX() {
  return (
    <section id="why-orbitx" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent text-sm font-medium uppercase tracking-wider">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
              Built Different.
              <br />
              <span className="text-muted-foreground">Built Better.</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              We don&apos;t just build websites. We engineer digital platforms that drive real business results. Our focus is on creating systems that last.
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
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground text-sm">{benefit}</span>
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
                className="p-6 rounded-2xl bg-card border border-border hover:border-accent/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4">
                  <reason.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
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
