import { Star } from "lucide-react";
import { motion } from "motion/react";

const testimonials = [
  {
    id: "priya-sharma",
    name: "Priya Sharma",
    role: "Homeowner",
    project: "Rajprabha Heights, Pune",
    quote:
      "The quality of construction and the attention to detail at Rajprabha Heights is truly outstanding. From the lobby to our apartment, every corner reflects craftsmanship. We are absolutely delighted!",
    rating: 5,
  },
  {
    id: "amit-patil",
    name: "Amit Patil",
    role: "Investor",
    project: "Rajprabha Garden Villas, Nashik",
    quote:
      "As an investor, transparency and timely delivery are paramount. Rajprabha Associates delivered on every promise, and the appreciation on my property has been remarkable. Highly recommended!",
    rating: 5,
  },
  {
    id: "sunita-desai",
    name: "Sunita Desai",
    role: "Homeowner",
    project: "Rajprabha Heights, Pune",
    quote:
      "Moving into Rajprabha Heights was the best decision of our lives. The amenities, the neighbourhood, and the support from the team post-possession has been exceptional.",
    rating: 5,
  },
  {
    id: "rajan-mehta",
    name: "Rajan Mehta",
    role: "Business Owner",
    project: "Rajprabha Garden Villas, Nashik",
    quote:
      "We purchased a villa as a weekend home. The serene environment, quality of construction, and community feel at Garden Villas surpassed our expectations. A perfect retreat!",
    rating: 4,
  },
  {
    id: "kavita-joshi",
    name: "Kavita Joshi",
    role: "First-Time Homebuyer",
    project: "Rajprabha Heights, Pune",
    quote:
      "Being a first-time homebuyer, I was nervous, but the Rajprabha team guided me through every step. The transparency in documentation and payment process was refreshing.",
    rating: 5,
  },
  {
    id: "deepak-kulkarni",
    name: "Deepak Kulkarni",
    role: "NRI Investor",
    project: "Rajprabha Garden Villas, Nashik",
    quote:
      "Managing property purchase from abroad is challenging. Rajprabha Associates made it seamless with virtual tours, digital documentation, and dedicated NRI support. Truly world-class service.",
    rating: 5,
  },
];

export default function TestimonialsPage() {
  return (
    <div>
      {/* Header */}
      <section
        className="relative bg-navy py-20 text-center text-white overflow-hidden"
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
            Client Stories
          </p>
          <h1 className="font-heading font-black text-white text-4xl sm:text-5xl uppercase tracking-wide">
            Testimonials
          </h1>
          <div className="w-16 h-1 bg-gold mx-auto mt-4" />
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-[#F3F5F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white rounded-xl p-8 shadow-card hover:shadow-card-hover transition-shadow flex flex-col"
                data-ocid={`testimonials.item.${i + 1}`}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star
                      key={`${t.id}-star-${s}`}
                      className={`w-4 h-4 ${
                        s < t.rating
                          ? "fill-gold text-gold"
                          : "text-gray-200 fill-gray-200"
                      }`}
                    />
                  ))}
                </div>
                <p className="font-body text-gray-700 text-sm italic leading-relaxed flex-1 mb-6">
                  "{t.quote}"
                </p>
                <div className="border-t border-gray-100 pt-4">
                  <p className="font-heading font-bold text-navy text-sm">
                    {t.name}
                  </p>
                  <p className="font-body text-xs text-gray-500">{t.role}</p>
                  <p className="font-body text-xs text-gold font-semibold mt-1">
                    {t.project}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-16 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-heading font-black text-white text-2xl sm:text-3xl uppercase tracking-wide mb-4">
            Ready to Find Your Dream Home?
          </h2>
          <p className="font-body text-blue-200 mb-8">
            Join thousands of happy families who trust Rajprabha Associates.
          </p>
          <a href="/contact">
            <button
              type="button"
              className="bg-gold text-navy font-heading font-bold text-xs tracking-widest rounded-full px-10 py-4 hover:bg-gold-light transition-colors"
              data-ocid="testimonials.contact.button"
            >
              GET IN TOUCH
            </button>
          </a>
        </div>
      </section>
    </div>
  );
}
