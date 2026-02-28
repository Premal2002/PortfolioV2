import React, { useState, useRef } from "react";
import { ContactSkeleton } from "./SectionSkeletons";
import emailjs from "@emailjs/browser";
import { personalInfo } from "../../data/mock";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Github,
  ArrowUpRight,
} from "lucide-react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { useToast } from "../../hooks/use-toast";
import { useInView, fadeUp } from "../../hooks/useInView";

// ─── EmailJS Config ────────────────────────────────────────────────────────────
// Replace these with your actual EmailJS credentials from emailjs.com dashboard
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
// ──────────────────────────────────────────────────────────────────────────────

const Contact = () => {
  const { toast } = useToast();
  const formRef = useRef(null);
  const [sectionRef, inView] = useInView();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  if (!inView) return <ContactSkeleton ref={sectionRef} />;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        toast({
          title: "Message sent! 🎉",
          description: "Thanks for reaching out. I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        toast({
          title: "Failed to send message",
          description: "Something went wrong. Please try emailing me directly.",
          variant: "destructive",
        });
      })
      .finally(() => {
        setSending(false);
      });
  };

  const contactDetails = [
    {
      icon: Mail,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: Phone,
      label: "Phone",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
    },
    {
      icon: MapPin,
      label: "Location",
      value: personalInfo.location,
      href: null,
    },
  ];

  const socials = [
    { icon: Linkedin, label: "LinkedIn", href: personalInfo.linkedin },
    { icon: Github, label: "GitHub", href: personalInfo.github },
  ];

  return (
    <section id="contact" className="bg-brand-bg py-24 md:py-32">
      <div ref={sectionRef} className="max-w-[87.5rem] mx-auto px-10">
        {/* Section label */}
        <div
          style={fadeUp(inView, 0)}
          className="flex items-center gap-4 mb-12"
        >
          <span
            className="text-brand-muted text-xs font-medium uppercase tracking-[0.2em]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            06 / Contact
          </span>
          <div className="h-px flex-1 bg-brand-border/50" />
        </div>

        <h2
          className="text-brand-fg font-black text-4xl md:text-5xl leading-tight mb-16 uppercase"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            ...fadeUp(inView, 80),
          }}
        >
          Get In <span className="text-brand-accent">Touch</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact info */}
          <div style={fadeUp(inView, 160)}>
            <p
              className="text-brand-muted text-lg leading-relaxed mb-10"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Have a project in mind or want to collaborate? Feel free to reach
              out. I'm always open to discussing new opportunities.
            </p>

            <div className="flex flex-col gap-5 mb-10">
              {contactDetails.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-brand-border/40 flex items-center justify-center">
                    <item.icon size={20} className="text-brand-accent" />
                  </div>
                  <div>
                    <span
                      className="text-brand-muted text-xs font-medium uppercase tracking-widest block mb-0.5"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {item.label}
                    </span>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-brand-fg text-sm font-medium hover:text-brand-accent transition-colors duration-300"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span
                        className="text-brand-fg text-sm font-medium"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {item.value}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Socials */}
            <div className="flex gap-3">
              {socials.map((s, idx) => (
                <a
                  key={idx}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-5 py-2.5 rounded-full border border-brand-border bg-brand-surface/20 hover:border-brand-primary/40 hover:bg-brand-border/30 transition-all duration-300"
                >
                  <s.icon size={18} className="text-brand-accent" />
                  <span
                    className="text-brand-muted text-sm font-medium group-hover:text-brand-fg transition-colors duration-300"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {s.label}
                  </span>
                  <ArrowUpRight
                    size={14}
                    className="text-brand-muted opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Contact form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            style={fadeUp(inView, 280)}
            className="flex flex-col gap-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label
                  className="text-brand-muted text-xs font-medium uppercase tracking-widest block mb-2"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Name
                </label>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="bg-brand-surface/30 border-brand-border/50 text-brand-fg placeholder:text-brand-muted/50 focus:border-brand-primary/50 focus:ring-brand-primary/20 rounded-lg h-12"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                />
              </div>
              <div>
                <label
                  className="text-brand-muted text-xs font-medium uppercase tracking-widest block mb-2"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Email
                </label>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="bg-brand-surface/30 border-brand-border/50 text-brand-fg placeholder:text-brand-muted/50 focus:border-brand-primary/50 focus:ring-brand-primary/20 rounded-lg h-12"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                />
              </div>
            </div>

            <div>
              <label
                className="text-brand-muted text-xs font-medium uppercase tracking-widest block mb-2"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Subject
              </label>
              <Input
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Project inquiry"
                className="bg-brand-surface/30 border-brand-border/50 text-brand-fg placeholder:text-brand-muted/50 focus:border-brand-primary/50 focus:ring-brand-primary/20 rounded-lg h-12"
                style={{ fontFamily: "'Inter', sans-serif" }}
              />
            </div>

            <div>
              <label
                className="text-brand-muted text-xs font-medium uppercase tracking-widest block mb-2"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Message
              </label>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell me about your project..."
                rows={5}
                className="bg-brand-surface/30 border-brand-border/50 text-brand-fg placeholder:text-brand-muted/50 focus:border-brand-primary/50 focus:ring-brand-primary/20 rounded-lg resize-none"
                style={{ fontFamily: "'Inter', sans-serif" }}
              />
            </div>

            <button
              type="submit"
              disabled={sending}
              className="inline-flex items-center justify-center gap-2 bg-brand-primary text-white font-semibold text-base px-8 py-3.5 rounded-full hover:scale-[1.02] hover:bg-brand-hover active:scale-[0.98] transition-all duration-300 uppercase tracking-tight disabled:opacity-50 disabled:cursor-not-allowed self-start"
              style={{
                fontFamily: "'Inter', sans-serif",
                letterSpacing: "-0.04em",
              }}
            >
              {sending ? (
                <>
                  <svg
                    className="animate-spin h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Send size={18} />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;