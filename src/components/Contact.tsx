import { useState } from "react";
import { Send, Mail, MapPin, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// FIX 1: Component name uppercase
const Contact = () => {

  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    { icon: Mail, label: "Email", value: "contact@sharmaadarsh.in" },
    { icon: Phone, label: "Phone", value: "+91 9315727307" },
    { icon: MapPin, label: "Location", value: "New Delhi, Delhi" },
  ];

  const handleSubmit = async (e: React.FormEvent) => {

    e.preventDefault();
    setIsSubmitting(true);

    try {

      const response = await fetch(
        "https://portfolio-backend-z98t.onrender.com/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
          }),
        }
      );

      const data = await response.json();

      if (response.ok && data.success) {

        toast({
          title: "Success 🚀",
          description: "Message sent successfully!",
        });

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });

      } else {

        throw new Error(data.message || "Failed");

      }

    } catch (error) {

      console.error("Contact form error:", error);

      toast({
        title: "Error",
        description: "Failed to send message. Try again later.",
        variant: "destructive",
      });

    }

    setIsSubmitting(false);

  };


  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {

    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

  };


  return (

    <section id="contact" className="py-20 bg-card/50">

      <div className="container mx-auto px-6">

        <h2 className="section-title">
          Get In <span className="text-gradient">Touch</span>
        </h2>

        <p className="section-subtitle">
          Building data-driven systems? Let’s connect.
        </p>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">

          {/* Contact Info */}
          <div className="space-y-8">

            <div className="space-y-6">

              {contactInfo.map(({ icon: Icon, label, value }) => (

                <div key={label} className="flex items-center gap-4">

                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground">{label}</p>
                    <p className="text-foreground font-medium">{value}</p>
                  </div>

                </div>

              ))}

            </div>

            <div className="p-6 bg-card border border-border rounded-xl">

              <h3 className="text-lg font-semibold mb-4">
                Let’s Connect
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed">
                I’m open to internships, ML projects, and data engineering opportunities.
                If you’re building something meaningful with data or AI, I’d love to collaborate.
              </p>

            </div>

          </div>

          {/* Contact Form */}

          <form onSubmit={handleSubmit} className="space-y-6">

            <div className="grid md:grid-cols-2 gap-6">

              <div>

                <label className="block text-sm font-medium mb-2">
                  Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                  placeholder="Your name"
                />

              </div>

              <div>

                <label className="block text-sm font-medium mb-2">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                  placeholder="your@email.com"
                />

              </div>

            </div>

            <div>

              <label className="block text-sm font-medium mb-2">
                Subject
              </label>

              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                placeholder="ML / Data project"
              />

            </div>

            <div>

              <label className="block text-sm font-medium mb-2">
                Message
              </label>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary resize-none"
                placeholder="Tell me what you're building..."
              />

            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary w-full justify-center disabled:opacity-50"
            >

              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Send Message
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