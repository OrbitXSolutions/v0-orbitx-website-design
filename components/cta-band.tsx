import Link from "next/link";

type CtaBandProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function CtaBand({ eyebrow, title, description }: CtaBandProps) {
  return (
    <section className="py-14 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 md:p-10">
          <p className="text-sm font-medium uppercase tracking-wider text-[#E87652]">
            {eyebrow}
          </p>
          <h3 className="mt-3 text-2xl md:text-3xl font-bold text-slate-900 text-balance">
            {title}
          </h3>
          <p className="mt-3 text-slate-600 max-w-3xl">{description}</p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a
              href="https://wa.me/971509700715?text=Hi%20OrbitX%2C%20I%27d%20like%20to%20schedule%20a%20consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg bg-[#5B9BED] text-white font-medium text-sm hover:bg-[#4A8AD8] transition-colors text-center"
            >
              Schedule Consultation
            </a>
            <a
              href="https://wa.me/971509700715?text=Hi%20OrbitX%2C%20I%27d%20like%20to%20request%20a%20proposal"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg bg-white text-slate-900 border border-slate-200 font-medium text-sm hover:bg-slate-100 transition-colors text-center"
            >
              Request Proposal
            </a>
            <Link
              href="#contact"
              className="px-6 py-3 rounded-lg border border-slate-300 text-slate-800 font-medium text-sm hover:bg-slate-100 transition-colors text-center"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
