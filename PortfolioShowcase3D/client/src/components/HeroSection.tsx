import { Button } from "@/components/ui/button";

const socialLinks = [
  { href: "https://www.linkedin.com/in/", icon: "fab fa-linkedin", label: "LinkedIn" },
  { href: "https://-port-folio.netlify.app/", icon: "fas fa-globe", label: "Portfolio" },
  { href: "https://linktr.ee/", icon: "fab fa-github", label: "GitHub" },
  { href: "https://linktr.ee/", icon: "fas fa-link", label: "Linktree" },
];

export default function HeroSection() {
  const handleScrollDown = () => {
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6 text-center z-10">
        <div className="animate-fade-in">
          <h1 className="text-hero font-bold font-poppins gradient-text mb-6 animate-float">
            Hi, I'm Santhiya T
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-medium">
            I build things for the web, software.
          </p>
          <div className="text-lg text-foreground mb-12">
            Software Engineer | Full Stack Developer
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link glass-effect p-4 rounded-full hover:scale-110 transition-all duration-300 group"
                aria-label={link.label}
              >
                <i className={`${link.icon} text-2xl text-foreground group-hover:text-primary`} />
              </a>
            ))}
          </div>

          {/* Scroll Indicator */}
          <Button
            variant="ghost"
            onClick={handleScrollDown}
            className="animate-bounce hover:text-primary"
          >
            <i className="fas fa-chevron-down text-2xl" />
          </Button>
        </div>
      </div>
    </section>
  );
}
