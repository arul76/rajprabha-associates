import { Button } from "@/components/ui/button";
import {
  Award,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Star,
  TrendingUp,
  Users,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

const heroSlides = [
  {
    id: "welcome",
    image: "/assets/generated/project-hero.dim_1200x700.jpg",
    tag: "Welcome to",
    title: "Rajprabha\nAssociates",
    subtitle: "Building Dreams. Shaping Skylines.",
    body: "Maharashtra's premier construction company delivering landmark residential and commercial projects since 1999. Crafting spaces that inspire life.",
  },
  {
    id: "quality",
    image: "/assets/generated/hero-quality.dim_1200x700.jpg",
    tag: "Our Promise",
    title: "Uncompromising\nQuality",
    subtitle: "Every Brick. Every Beam. Every Detail.",
    body: "ISO-certified construction processes, premium-grade materials, and rigorous quality checks at every stage ensure your home stands the test of time.",
  },
  {
    id: "commitment",
    image: "/assets/generated/hero-commitment.dim_1200x700.jpg",
    tag: "Our Values",
    title: "Committed to\nYou",
    subtitle: "Trust Built, Promises Kept.",
    body: "From the first handshake to the day you receive your keys, we stand by every commitment — transparent dealings, on-time delivery, and lifelong support.",
  },
];

const features = [
  {
    id: "experience",
    icon: Award,
    title: "25+ Years Experience",
    desc: "Decades of excellence in construction and development across Maharashtra.",
  },
  {
    id: "quality",
    icon: CheckCircle,
    title: "Quality Assured",
    desc: "ISO-certified construction processes and premium grade materials used throughout.",
  },
  {
    id: "customer",
    icon: Users,
    title: "Customer-First",
    desc: "Transparent dealings, timely delivery, and post-possession support for every buyer.",
  },
  {
    id: "roi",
    icon: TrendingUp,
    title: "Strong ROI",
    desc: "Strategically located projects ensuring long-term value appreciation for investors.",
  },
];

const stats = [
  { id: "years", value: "25+", label: "Years of Excellence" },
  { id: "projects", value: "50+", label: "Projects Delivered" },
  { id: "families", value: "3000+", label: "Happy Families" },
  { id: "value", value: "\u20b9500Cr+", label: "Projects Value" },
];

const testimonials = [
  {
    id: "priya-sharma",
    name: "Priya Sharma",
    role: "Homeowner, Rajprabha Heights",
    quote:
      "The quality of construction and the attention to detail at Rajprabha Heights is truly outstanding. We are absolutely delighted with our new home!",
    rating: 5,
  },
  {
    id: "amit-patil",
    name: "Amit Patil",
    role: "Investor, Rajprabha Garden Villas",
    quote:
      "As an investor, I value transparency and timely delivery. Rajprabha Associates delivered on every promise. Highly recommended!",
    rating: 5,
  },
];

const aboutStats = [
  { id: "years", value: "25+", label: "Years in Business" },
  { id: "completed", value: "50+", label: "Projects Completed" },
  { id: "families", value: "3000+", label: "Happy Families" },
  { id: "cities", value: "4", label: "Cities Presence" },
];

const featuredProjects = projects.slice(0, 3);

export default function HomePage() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () =>
    setCurrent((c) => (c - 1 + heroSlides.length) % heroSlides.length);
  const next = () => setCurrent((c) => (c + 1) % heroSlides.length);

  const slide = heroSlides[current];

  return (
    <div>
      {/* HERO SLIDER */}
      <section
        className="relative min-h-[65vh] flex items-center overflow-hidden"
        data-ocid="home.section"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="absolute inset-0"
            style={{
              backgroundImage: `url('${slide.image}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </AnimatePresence>
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(11,31,58,0.97) 0%, rgba(16,42,74,0.88) 50%, rgba(30,111,168,0.55) 100%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${slide.id}-content`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="max-w-xl"
            >
              <p className="font-heading font-semibold text-gold text-xs tracking-widest uppercase mb-3">
                {slide.tag}
              </p>
              <h1 className="font-heading font-black text-white text-4xl sm:text-5xl lg:text-6xl uppercase leading-tight tracking-wide mb-4 whitespace-pre-line">
                {slide.title}
              </h1>
              <p className="font-body text-blue-200 text-lg mb-3 font-light">
                {slide.subtitle}
              </p>
              <p className="font-body text-blue-100/80 text-sm leading-relaxed mb-8">
                {slide.body}
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="/projects">
                  <Button
                    className="bg-gold text-navy font-heading font-bold text-xs tracking-widest rounded-full px-7 py-5 hover:bg-gold-light transition-colors"
                    data-ocid="home.our_projects.button"
                  >
                    OUR PROJECTS
                  </Button>
                </a>
                <a href="/contact">
                  <Button
                    variant="outline"
                    className="border-white/40 text-white font-heading font-semibold text-xs tracking-widest rounded-full px-7 py-5 bg-transparent hover:bg-white/10 transition-colors"
                    data-ocid="home.contact_us.button"
                  >
                    CONTACT US
                  </Button>
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Slider Controls */}
        <button
          type="button"
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          type="button"
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {heroSlides.map((s, i) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                i === current ? "bg-gold w-6" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* STATS BAND */}
      <section className="bg-navy py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <p className="font-heading font-black text-gold text-3xl md:text-4xl">
                  {stat.value}
                </p>
                <p className="font-body text-blue-200 text-xs mt-1 tracking-wide">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section
        className="bg-white py-20"
        data-ocid="home.featured_projects.section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="font-heading font-semibold text-gold text-xs tracking-widest uppercase mb-2">
              Our Portfolio
            </p>
            <h2 className="font-heading font-black text-navy text-3xl sm:text-4xl uppercase tracking-wide">
              Featured Projects
            </h2>
            <div className="w-16 h-1 bg-gold mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} />
            ))}
          </div>
          <div className="text-center mt-10">
            <a href="/projects">
              <Button
                variant="outline"
                className="border-navy text-navy font-heading font-semibold text-xs tracking-widest rounded-full px-8 py-5 hover:bg-navy hover:text-white transition-colors"
                data-ocid="home.view_all_projects.button"
              >
                VIEW ALL PROJECTS <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section
        className="bg-[#F3F5F7] py-20"
        data-ocid="home.why_choose_us.section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="font-heading font-semibold text-gold text-xs tracking-widest uppercase mb-2">
              Our Strengths
            </p>
            <h2 className="font-heading font-black text-navy text-3xl sm:text-4xl uppercase tracking-wide">
              Why Choose Us
            </h2>
            <div className="w-16 h-1 bg-gold mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f, i) => (
              <motion.div
                key={f.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-card text-center hover:shadow-card-hover transition-shadow"
              >
                <div className="w-14 h-14 bg-navy/5 rounded-full flex items-center justify-center mx-auto mb-4">
                  <f.icon className="w-7 h-7 text-navy" />
                </div>
                <h3 className="font-heading font-bold text-navy text-base mb-2">
                  {f.title}
                </h3>
                <p className="font-body text-sm text-gray-600 leading-relaxed">
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS TEASER */}
      <section className="bg-white py-20" data-ocid="home.testimonials.section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="font-heading font-semibold text-gold text-xs tracking-widest uppercase mb-2">
              What Our Clients Say
            </p>
            <h2 className="font-heading font-black text-navy text-3xl sm:text-4xl uppercase tracking-wide">
              Testimonials
            </h2>
            <div className="w-16 h-1 bg-gold mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, x: i === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-[#F3F5F7] rounded-xl p-8 border border-gray-100"
                data-ocid={`home.testimonials.item.${i + 1}`}
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <Star
                      key={`${t.id}-star-${s}`}
                      className="w-4 h-4 fill-gold text-gold"
                    />
                  ))}
                </div>
                <p className="font-body text-gray-700 text-base italic leading-relaxed mb-6">
                  "{t.quote}"
                </p>
                <div>
                  <p className="font-heading font-bold text-navy text-sm">
                    {t.name}
                  </p>
                  <p className="font-body text-xs text-gray-500">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a href="/testimonials">
              <Button
                variant="outline"
                className="border-navy text-navy font-heading font-semibold text-xs tracking-widest rounded-full px-8 py-5 hover:bg-navy hover:text-white transition-colors"
                data-ocid="home.all_testimonials.button"
              >
                VIEW ALL TESTIMONIALS
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* BOTTOM STATS */}
      <section className="bg-navy py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {aboutStats.map((s, i) => (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <p className="font-heading font-black text-gold text-4xl">
                  {s.value}
                </p>
                <p className="font-body text-blue-200 text-sm mt-1">
                  {s.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
