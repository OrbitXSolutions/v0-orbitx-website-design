"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/10 via-background to-background" />
      
      {/* Animated grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,_oklch(0.28_0.005_285)_1px,_transparent_1px),linear-gradient(to_bottom,_oklch(0.28_0.005_285)_1px,_transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 text-muted-foreground text-sm font-medium border border-border">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Dubai-Based Software House
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight tracking-tight mb-6 text-balance"
        >
          Building Scalable Digital
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground via-accent to-foreground">
            Platforms for Modern Businesses
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty"
        >
          Custom web platforms, AI solutions, and enterprise systems tailored for growth.
          We help businesses in the UAE transform digitally.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="#contact"
            className="group px-8 py-4 bg-foreground text-background rounded-lg font-medium text-base hover:bg-foreground/90 transition-all flex items-center gap-2"
          >
            Start Your Project
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="#projects"
            className="px-8 py-4 bg-secondary text-foreground rounded-lg font-medium text-base hover:bg-secondary/80 transition-all border border-border flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            View Our Work
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
        >
          {[
            { value: "50+", label: "Projects Delivered" },
            { value: "10+", label: "Years Experience" },
            { value: "100%", label: "Client Satisfaction" },
            { value: "UAE", label: "Based in Dubai" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-accent"
          />
        </div>
      </motion.div>
    </section>
  );
}
