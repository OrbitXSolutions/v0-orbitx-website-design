import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Projects } from "@/components/projects";
import { WhyOrbitX } from "@/components/why-orbitx";
import { Process } from "@/components/process";
import { Technologies } from "@/components/technologies";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { CtaBand } from "@/components/cta-band";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "OrbitX Solutions",
  url: "https://orbitx.ae",
  logo: "https://orbitx.ae/logo.png",
  sameAs: [
    "https://www.facebook.com/orbitx.solutions",
    "https://www.instagram.com/orbitx.solutions/",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      areaServed: "AE",
      availableLanguage: ["en", "ar"],
      telephone: "+971509700715",
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "OrbitX Solutions",
  description:
    "Dubai-based software house delivering custom websites, web applications, business systems, and enterprise digital platforms for UAE organizations.",
  areaServed: {
    "@type": "Country",
    name: "United Arab Emirates",
  },
  url: "https://orbitx.ae",
  serviceType: [
    "Corporate Websites",
    "Custom Web Applications",
    "Business Management Systems",
    "Customer Portals",
    "E-Commerce Platforms",
    "AI-Powered Solutions",
    "API and System Integrations",
    "Technical Consulting and Architecture",
  ],
};

export default function HomePage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Navbar />
      <Hero />
      <CtaBand
        eyebrow="Consultation"
        title="Let's Build Your Next Digital Platform"
        description="Speak with our UAE team about your website, system, or platform requirements and get practical technical direction."
      />
      <Services />
      <CtaBand
        eyebrow="Architecture Support"
        title="Need The Right Technical Direction Before Building?"
        description="We help teams define architecture, technology choices, and delivery priorities before implementation starts."
      />
      <Projects />
      <CtaBand
        eyebrow="Project Discovery"
        title="Plan Your Next Platform With OrbitX"
        description="Share your business objectives and we will map the best-fit solution, scope, and delivery approach."
      />
      <WhyOrbitX />
      <Process />
      <Technologies />
      <About />
      <Contact />
      <CtaBand
        eyebrow="Ready To Start"
        title="Let's Build Your Next Digital Platform"
        description="From strategy to launch, OrbitX delivers custom software solutions for organizations that need quality, reliability, and scale."
      />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
