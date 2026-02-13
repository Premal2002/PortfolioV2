import React, { useState } from "react";
import { personalInfo } from "../../data/mock";
import { Mail, Phone, MapPin, Send, Linkedin, Github, ArrowUpRight } from "lucide-react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { useToast } from "../../hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    // Mock submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setSending(false);
    }, 1200);
  };

  const contactDetails = [
    { icon: Mail, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: Phone, label: "Phone", value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
    { icon: MapPin, label: "Location", value: personalInfo.location, href: null },
  ];

  const socials = [
    { icon: Linkedin, label: "LinkedIn", href: personalInfo.linkedin },
    { icon: Github, label: "GitHub", href: personalInfo.github },
  ];

  return (
    <section id="contact" className="bg-[#1a1c1b] py-24 md:py-32">
      <div className="max-w-[87.5rem] mx-auto px-10">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-12">
          <span
            className="text-[#888680] text-xs font-medium uppercase tracking-[0.2em]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            06 / Contact
          </span>
          <div className="h-px flex-1 bg-[#3f4816]/50" />
        </div>

        <h2
          className="text-white font-black text-4xl md:text-5xl leading-tight mb-16 uppercase"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Get In <span className="text-[#d9fb06]">Touch</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact info */}
          <div>
            <p
              className="text-[#888680] text-lg leading-relaxed mb-10"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Have a project in mind or want to collaborate? Feel free to reach out.
              I'm always open to discussing new opportunities.
            </p>

            <div className="flex flex-col gap-5 mb-10">
              {contactDetails.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#3f4816]/40 flex items-center justify-center">
                    <item.icon size={20} className="text-[#d9fb06]" />
                  </div>
                  <div>
                    <span
                      className="text-[#888680] text-xs font-medium uppercase tracking-widest block mb-0.5"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {item.label}
                    </span>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-white text-sm font-medium hover:text-[#d9fb06] transition-colors duration-300"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span
                        className="text-white text-sm font-medium"
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
                  className="group flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#3f4816] bg-[#302f2c]/20 hover:border-[#d9fb06]/40 hover:bg-[#3f4816]/30 transition-all duration-300"
                >
                  <s.icon size={18} className="text-[#d9fb06]" />
                  <span
                    className="text-[#888680] text-sm font-medium group-hover:text-white transition-colors duration-300"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {s.label}
                  </span>
                  <ArrowUpRight
                    size={14}
                    className="text-[#888680] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Contact form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label
                  className="text-[#888680] text-xs font-medium uppercase tracking-widest block mb-2"
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
                  className="bg-[#302f2c]/30 border-[#3f4816]/50 text-white placeholder:text-[#888680]/50 focus:border-[#d9fb06]/50 focus:ring-[#d9fb06]/20 rounded-lg h-12"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                />
              </div>
              <div>
                <label
                  className="text-[#888680] text-xs font-medium uppercase tracking-widest block mb-2"
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
                  className="bg-[#302f2c]/30 border-[#3f4816]/50 text-white placeholder:text-[#888680]/50 focus:border-[#d9fb06]/50 focus:ring-[#d9fb06]/20 rounded-lg h-12"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                />
              </div>
            </div>

            <div>
              <label
                className="text-[#888680] text-xs font-medium uppercase tracking-widest block mb-2"
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
                className="bg-[#302f2c]/30 border-[#3f4816]/50 text-white placeholder:text-[#888680]/50 focus:border-[#d9fb06]/50 focus:ring-[#d9fb06]/20 rounded-lg h-12"
                style={{ fontFamily: "'Inter', sans-serif" }}
              />
            </div>

            <div>
              <label
                className="text-[#888680] text-xs font-medium uppercase tracking-widest block mb-2"
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
                className="bg-[#302f2c]/30 border-[#3f4816]/50 text-white placeholder:text-[#888680]/50 focus:border-[#d9fb06]/50 focus:ring-[#d9fb06]/20 rounded-lg resize-none"
                style={{ fontFamily: "'Inter', sans-serif" }}
              />
            </div>

            <button
              type="submit"
              disabled={sending}
              className="inline-flex items-center justify-center gap-2 bg-[#d9fb06] text-[#1a1c1b] font-semibold text-base px-8 py-3.5 rounded-full hover:scale-[1.02] hover:opacity-90 active:scale-[0.98] transition-transform duration-300 uppercase tracking-tight disabled:opacity-50 disabled:cursor-not-allowed self-start"
              style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "-0.04em" }}
            >
              {sending ? (
                "Sending..."
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