import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Educational Website with ERP",
    date: "Nov 2024 – Dec 2024",
    description: "Comprehensive educational platform integrating ERP functionality for streamlined academic management and enhanced learning experience.",
    technologies: ["React", "Node.js", "MySQL"],
    icon: "fas fa-graduation-cap",
    gradient: "from-primary to-secondary"
  },
  {
    title: "Personal Portfolio",
    date: "April 2024",
    description: "Modern, responsive portfolio website showcasing skills, projects, and professional experience with interactive design elements.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    icon: "fas fa-user",
    gradient: "from-secondary to-primary"
  },
  {
    title: "One Touch App",
    date: "April 2025",
    description: "Intuitive mobile application designed for seamless user interaction with one-touch functionality for enhanced user experience.",
    technologies: ["React Native", "Firebase"],
    icon: "fas fa-mobile-alt",
    gradient: "from-primary to-secondary"
  },
  {
    title: "EV All-In-One Monitoring System",
    date: "May 2025",
    description: "Comprehensive electric vehicle monitoring system providing real-time data analytics and predictive maintenance capabilities.",
    technologies: ["IoT", "Python", "Dashboard"],
    icon: "fas fa-car-battery",
    gradient: "from-secondary to-primary"
  },
  {
    title: "Farmers Friend",
    date: "May 2024",
    description: "Agricultural assistance platform connecting farmers with resources, weather data, and market information for improved productivity.",
    technologies: ["Web App", "API Integration", "Data Analytics"],
    icon: "fas fa-seedling",
    gradient: "from-primary to-secondary"
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold font-poppins gradient-text text-center mb-16">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="glass-effect border-primary/20 card-hover-3d group">
              <CardContent className="p-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${project.gradient} rounded-2xl flex items-center justify-center mb-6`}>
                  <i className={`${project.icon} text-2xl text-white`} />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3">{project.title}</h3>
                <p className="text-sm text-primary font-medium mb-3">{project.date}</p>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-accent text-foreground px-3 py-1 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <Button 
                  className="w-full bg-gradient-to-r from-primary to-secondary text-white hover:scale-105 transition-transform duration-300"
                >
                  View Project <i className="fas fa-arrow-right ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
