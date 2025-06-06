import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { sendEmail } from "@/lib/emailService";

const contactInfo = [
  {
    icon: "fas fa-envelope",
    title: "Email",
    details: ["santhiyatamil032005@gmail.com"]
  },
  {
    icon: "fas fa-phone",
    title: "Phone",
    details: ["+91 87783 42086"]
  },
  {
    icon: "fas fa-map-marker-alt",
    title: "Location",
    details: ["Tirukovilur", "Kallakurichi", "Tamil Nadu 606753"]
  }
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await sendEmail(formData);
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I will get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold font-poppins gradient-text text-center mb-16">
          Get In Touch
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="glass-effect border-primary/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start">
                      <div className={`w-12 h-12 bg-gradient-to-r ${
                        index === 0 ? 'from-primary to-secondary' : 
                        index === 1 ? 'from-secondary to-primary' : 
                        'from-primary via-secondary to-primary'
                      } rounded-xl flex items-center justify-center mr-4 flex-shrink-0`}>
                        <i className={`${info.icon} text-white`} />
                      </div>
                      <div>
                        <h4 className="text-foreground font-medium mb-1">{info.title}</h4>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-muted-foreground text-sm">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="glass-effect border-primary/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Send Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-foreground font-medium">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="mt-2 bg-accent/50 border-primary/20 focus:border-primary"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-foreground font-medium">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="mt-2 bg-accent/50 border-primary/20 focus:border-primary"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="subject" className="text-foreground font-medium">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="mt-2 bg-accent/50 border-primary/20 focus:border-primary"
                      placeholder="Message subject"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="text-foreground font-medium">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      className="mt-2 bg-accent/50 border-primary/20 focus:border-primary resize-none"
                      placeholder="Your message here..."
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-primary to-secondary text-white hover:scale-105 transition-transform duration-300 text-lg py-4"
                  >
                    {isSubmitting ? (
                      <>
                        <i className="fas fa-spinner fa-spin mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message <i className="fas fa-paper-plane ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
