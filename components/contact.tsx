"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-accent/10 via-background to-background" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-accent text-sm font-medium uppercase tracking-wider">
            Get Started
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            Let&apos;s Build Your Next
            <br />
            Digital Platform
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
            Ready to transform your business with a custom digital solution? 
            Get in touch with our team to discuss your project.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="https://wa.me/971504887551"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 bg-foreground text-background rounded-lg font-medium text-base hover:bg-foreground/90 transition-all flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              Start Your Project
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="https://wa.me/971504887551"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-secondary text-foreground rounded-lg font-medium text-base hover:bg-secondary/80 transition-all border border-border flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Contact
            </Link>
          </div>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 pt-16 border-t border-border"
        >
          <p className="text-muted-foreground text-sm mb-8">
            Trusted by businesses across the UAE
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-50">
            {["Enterprise", "Government", "E-commerce", "Healthcare", "Finance"].map((sector) => (
              <span key={sector} className="text-muted-foreground font-medium">
                {sector}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
