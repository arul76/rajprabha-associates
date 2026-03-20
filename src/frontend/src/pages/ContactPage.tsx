import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Clock, Loader2, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { useActor } from "../hooks/useActor";

const contactInfo = [
  {
    id: "office",
    icon: MapPin,
    title: "Our Office",
    lines: [
      "Office No. 204, Rajprabha Plaza,",
      "FC Road, Pune \u2013 411004, Maharashtra",
    ],
  },
  {
    id: "phone",
    icon: Phone,
    title: "Phone",
    lines: ["+91 20 1234 5678", "+91 98765 43210"],
  },
  {
    id: "email",
    icon: Mail,
    title: "Email",
    lines: ["info@rajprabha.in", "sales@rajprabha.in"],
  },
  {
    id: "hours",
    icon: Clock,
    title: "Office Hours",
    lines: [
      "Mon \u2013 Sat: 9:00 AM \u2013 7:00 PM",
      "Sunday: 10:00 AM \u2013 4:00 PM",
    ],
  },
];

export default function ContactPage() {
  const { actor } = useActor();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Partial<typeof form>>({});

  const validate = () => {
    const e: Partial<typeof form> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email))
      e.email = "Valid email is required";
    if (!form.phone.trim()) e.phone = "Phone number is required";
    if (!form.message.trim()) e.message = "Message is required";
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setLoading(true);
    try {
      if (actor) {
        await actor.submitContactForm(
          form.name,
          form.email,
          form.phone,
          form.message,
        );
      }
      toast.success(
        "Thank you! Your enquiry has been submitted. We will contact you shortly.",
      );
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

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
            Get In Touch
          </p>
          <h1 className="font-heading font-black text-white text-4xl sm:text-5xl uppercase tracking-wide">
            Contact Us
          </h1>
          <div className="w-16 h-1 bg-gold mx-auto mt-4" />
        </div>
      </section>

      <section className="py-20 bg-[#F3F5F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-card p-8 lg:p-10"
              data-ocid="contact.form.panel"
            >
              <h2 className="font-heading font-bold text-navy text-2xl mb-2 uppercase tracking-wide">
                Send Us a Message
              </h2>
              <p className="font-body text-gray-500 text-sm mb-8">
                Fill in the form below and our team will get back to you within
                24 hours.
              </p>
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div>
                  <Label
                    htmlFor="name"
                    className="font-heading font-semibold text-xs tracking-wide text-navy uppercase mb-1.5 block"
                  >
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    autoComplete="name"
                    placeholder="e.g. Priya Sharma"
                    value={form.name}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, name: e.target.value }))
                    }
                    className="rounded-lg font-body"
                    data-ocid="contact.name.input"
                  />
                  {errors.name && (
                    <p
                      className="text-xs text-red-500 mt-1"
                      data-ocid="contact.name.error_state"
                    >
                      {errors.name}
                    </p>
                  )}
                </div>
                <div>
                  <Label
                    htmlFor="email"
                    className="font-heading font-semibold text-xs tracking-wide text-navy uppercase mb-1.5 block"
                  >
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="priya@example.com"
                    value={form.email}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, email: e.target.value }))
                    }
                    className="rounded-lg font-body"
                    data-ocid="contact.email.input"
                  />
                  {errors.email && (
                    <p
                      className="text-xs text-red-500 mt-1"
                      data-ocid="contact.email.error_state"
                    >
                      {errors.email}
                    </p>
                  )}
                </div>
                <div>
                  <Label
                    htmlFor="phone"
                    className="font-heading font-semibold text-xs tracking-wide text-navy uppercase mb-1.5 block"
                  >
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="+91 98765 43210"
                    value={form.phone}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, phone: e.target.value }))
                    }
                    className="rounded-lg font-body"
                    data-ocid="contact.phone.input"
                  />
                  {errors.phone && (
                    <p
                      className="text-xs text-red-500 mt-1"
                      data-ocid="contact.phone.error_state"
                    >
                      {errors.phone}
                    </p>
                  )}
                </div>
                <div>
                  <Label
                    htmlFor="message"
                    className="font-heading font-semibold text-xs tracking-wide text-navy uppercase mb-1.5 block"
                  >
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your requirements..."
                    rows={4}
                    value={form.message}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, message: e.target.value }))
                    }
                    className="rounded-lg font-body resize-none"
                    data-ocid="contact.message.textarea"
                  />
                  {errors.message && (
                    <p
                      className="text-xs text-red-500 mt-1"
                      data-ocid="contact.message.error_state"
                    >
                      {errors.message}
                    </p>
                  )}
                </div>
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-navy text-white font-heading font-bold text-xs tracking-widest rounded-full py-5 hover:bg-navy-medium transition-colors"
                  data-ocid="contact.submit.button"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />{" "}
                      Sending...
                    </>
                  ) : (
                    "SEND MESSAGE"
                  )}
                </Button>
                {loading && <div data-ocid="contact.submit.loading_state" />}
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              {contactInfo.map((c) => (
                <div
                  key={c.id}
                  className="bg-white rounded-xl p-6 shadow-card flex gap-5 items-start"
                >
                  <div className="w-11 h-11 bg-navy rounded-full flex items-center justify-center shrink-0">
                    <c.icon className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-navy text-sm uppercase tracking-wide mb-1">
                      {c.title}
                    </p>
                    {c.lines.map((l, j) => (
                      <p
                        key={`${c.id}-line-${j}`}
                        className="font-body text-sm text-gray-600"
                      >
                        {l}
                      </p>
                    ))}
                  </div>
                </div>
              ))}

              {/* Map placeholder */}
              <div className="rounded-xl overflow-hidden shadow-card h-52 bg-gray-100">
                <iframe
                  title="Rajprabha Associates Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.893127395066!2d73.8553!3d18.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDMxJzEzLjQiTiA3M8KwNTEnMTkuMSJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
