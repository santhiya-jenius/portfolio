const socialLinks = [
  { href: "https://www.linkedin.com/in/", icon: "fab fa-linkedin", label: "LinkedIn" },
  { href: "https://-port-folio.netlify.app/", icon: "fas fa-globe", label: "Portfolio" },
  { href: "https://linktr.ee/", icon: "fab fa-github", label: "GitHub" },
  { href: "https://linktr.ee/", icon: "fas fa-link", label: "Linktree" },
];

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-8">
          <h3 className="text-2xl font-bold font-poppins mb-4">Santhiya T</h3>
          <p className="text-accent">Software Engineer | Full Stack Developer</p>
        </div>
        
        <div className="flex justify-center space-x-6 mb-8">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-primary transition-colors duration-300"
              aria-label={link.label}
            >
              <i className={`${link.icon} text-2xl`} />
            </a>
          ))}
        </div>
        
        <div className="border-t border-accent/20 pt-8">
          <p className="text-accent/80">
            © 2024 Santhiya T. All rights reserved. |
            <i className="fas fa-heart text-primary mx-1" />
            using Three.js
          </p>
        </div>
      </div>
    </footer>
  );
}
