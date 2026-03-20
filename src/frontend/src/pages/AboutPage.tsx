import { CheckCircle, Eye, Heart, Target } from "lucide-react";
import { motion } from "motion/react";

const values = [
  {
    id: "integrity",
    icon: Target,
    title: "Integrity",
    desc: "We uphold the highest ethical standards in every project, maintaining transparency with clients, partners, and communities.",
  },
  {
    id: "innovation",
    icon: Eye,
    title: "Innovation",
    desc: "Continuously adopting cutting-edge construction technologies and sustainable building practices.",
  },
  {
    id: "client-focus",
    icon: Heart,
    title: "Client Focus",
    desc: "Every decision is guided by our clients' best interests — from design to delivery and beyond.",
  },
  {
    id: "excellence",
    icon: CheckCircle,
    title: "Excellence",
    desc: "Uncompromising quality in craftsmanship, materials, and project management is our hallmark.",
  },
];

const stats = [
  { id: "years", value: "25+", label: "Years in Business" },
  { id: "projects", value: "50+", label: "Projects Completed" },
  { id: "families", value: "3000+", label: "Happy Families" },
  { id: "cities", value: "4", label: "Cities Presence" },
];

export default function AboutPage() {
  return (
    <div>
      {/* Page Header */}
      <section
        className="relative bg-navy py-20 text-white text-center overflow-hidden"
        style={{
          backgroundImage:
            "url('/assets/generated/project-hero.dim_1200x700.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-navy/80" />
        <div className="relative">
          <p className="font-heading font-semibold text-gold text-xs tracking-widest uppercase mb-2">
            Who We Are
          </p>
          <h1 className="font-heading font-black text-white text-4xl sm:text-5xl uppercase tracking-wide">
            About Us
          </h1>
          <div className="w-16 h-1 bg-gold mx-auto mt-4" />
        </div>
      </section>

      {/* Story section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="font-heading font-semibold text-gold text-xs tracking-widest uppercase mb-3">
                Our Story
              </p>
              <h2 className="font-heading font-black text-navy text-3xl sm:text-4xl uppercase tracking-wide mb-6">
                Building Maharashtra Since 1999
              </h2>
              <p className="font-body text-gray-600 leading-relaxed mb-4">
                Rajprabha Associates was founded in 1999 with a singular vision:
                to create living spaces that transcend the ordinary and enrich
                the lives of every resident. Starting with a modest residential
                project in Pune, we have grown into one of Maharashtra's most
                respected construction companies.
              </p>
              <p className="font-body text-gray-600 leading-relaxed mb-4">
                Over 25 years, we have delivered 50+ landmark projects spanning
                residential apartments, villa townships, commercial complexes,
                and mixed-use developments across Pune, Nashik, and Aurangabad.
              </p>
              <p className="font-body text-gray-600 leading-relaxed">
                Today, Rajprabha Associates is synonymous with quality, trust,
                and innovation — a heritage built one brick at a time, and a
                legacy that continues to shape the skylines of Maharashtra.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="/assets/generated/about-team.dim_800x500.jpg"
                alt="Rajprabha Associates Team"
                className="w-full rounded-xl shadow-card-hover object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sister Concern: Sainath Foundations */}
      <section className="py-20 bg-[#F3F5F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1 flex justify-center"
            >
              <div className="bg-white rounded-2xl shadow-lg p-10 flex flex-col items-center gap-4 max-w-sm w-full">
                <img
                  src="/assets/generated/sainath-foundations-logo-transparent.dim_200x80.png"
                  alt="Sainath Foundations"
                  className="h-20 w-auto object-contain"
                />
                <div className="w-12 h-1 bg-gold" />
                <p className="font-heading font-bold text-navy text-center text-sm tracking-widest uppercase">
                  Sister Concern of Rajprabha Associates
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <p className="font-heading font-semibold text-gold text-xs tracking-widest uppercase mb-3">
                Sister Concern
              </p>
              <h2 className="font-heading font-black text-navy text-3xl sm:text-4xl uppercase tracking-wide mb-6">
                Sainath Foundations
              </h2>
              <p className="font-body text-gray-600 leading-relaxed mb-4">
                Sainath Foundations is a trusted sister concern of Rajprabha
                Associates, established to extend the group's commitment to
                quality construction across a broader spectrum of real estate
                development. With a shared philosophy of excellence, integrity,
                and client-first values, Sainath Foundations carries forward the
                same legacy of trust that Rajprabha Associates has built over 25
                years.
              </p>
              <p className="font-body text-gray-600 leading-relaxed mb-4">
                Sainath Foundations specialises in affordable and mid-segment
                housing projects, plotted developments, and community-focused
                residential townships. The company leverages Rajprabha's
                expertise in project management, design, and delivery to provide
                homes that combine value with quality.
              </p>
              <p className="font-body text-gray-600 leading-relaxed">
                Together, Rajprabha Associates and Sainath Foundations form a
                powerful group that serves a wide range of homebuyers and
                investors, backed by decades of combined experience and a deep
                understanding of Maharashtra's real estate landscape.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-navy text-white rounded-xl p-10"
            >
              <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center mb-5">
                <Target className="w-6 h-6 text-navy" />
              </div>
              <h3 className="font-heading font-bold text-xl mb-4 uppercase tracking-wide">
                Our Mission
              </h3>
              <p className="font-body text-blue-200 leading-relaxed">
                To deliver exceptional construction projects that meet the
                highest standards of quality, safety, and sustainability —
                creating lasting value for our clients, stakeholders, and the
                communities we serve.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gold rounded-xl p-10"
            >
              <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center mb-5">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-heading font-bold text-navy text-xl mb-4 uppercase tracking-wide">
                Our Vision
              </h3>
              <p className="font-body text-navy/80 leading-relaxed">
                To be Maharashtra's most trusted and innovative construction
                company, known for transforming landscapes and elevating the
                quality of life through inspired architecture and impeccable
                execution.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#F3F5F7] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="font-heading font-semibold text-gold text-xs tracking-widest uppercase mb-2">
              What Drives Us
            </p>
            <h2 className="font-heading font-black text-navy text-3xl sm:text-4xl uppercase tracking-wide">
              Our Core Values
            </h2>
            <div className="w-16 h-1 bg-gold mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={v.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-14 h-14 bg-navy rounded-full flex items-center justify-center mx-auto mb-4">
                  <v.icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="font-heading font-bold text-navy text-base mb-2">
                  {v.title}
                </h3>
                <p className="font-body text-sm text-gray-600 leading-relaxed">
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-navy py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s, i) => (
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
