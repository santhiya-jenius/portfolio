import { Card, CardContent } from "@/components/ui/card";

const experiences = [
  {
    title: "Full Stack Developer & Branch Development Officer",
    company: "CT Tech Solutions",
    period: "July – August 2024",
    description: "Led full-stack development initiatives and managed branch development operations, implementing scalable web solutions and coordinating cross-functional teams.",
    icon: "fas fa-code"
  },
  {
    title: "Android App Developer",
    company: "Oasis Infobyte",
    period: "Internship",
    description: "Developed native Android applications with focus on user experience and performance optimization, collaborating with design teams to implement intuitive mobile interfaces.",
    icon: "fas fa-mobile-alt"
  },
  {
    title: "Web Developer (Freelancer)",
    company: "CollegePur",
    period: "Freelance",
    description: "Delivered custom web development solutions as a freelancer, creating responsive and interactive websites tailored to client requirements and industry standards.",
    icon: "fas fa-globe"
  },
  {
    title: "Data Science Intern",
    company: "Mentorness",
    period: "Internship",
    description: "Applied machine learning algorithms and data analysis techniques to solve real-world problems, working with large datasets and creating predictive models.",
    icon: "fas fa-chart-bar"
  },
  {
    title: "Machine Learning Intern",
    company: "YBI Foundation",
    period: "Internship",
    description: "Developed and implemented machine learning models, gaining hands-on experience with neural networks, deep learning frameworks, and AI model optimization techniques.",
    icon: "fas fa-brain"
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold font-poppins gradient-text text-center mb-16">
          Professional Experience
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary" />

            {experiences.map((experience, index) => (
              <div
                key={index}
                className={`timeline-item relative pl-20 pb-12 ${index % 2 === 0 ? 'animate-slide-up' : ''}`}
              >
                <Card className="glass-effect border-primary/20 hover:scale-105 transition-transform duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${
                        index % 2 === 0 ? 'from-primary to-secondary' : 'from-secondary to-primary'
                      } rounded-xl flex items-center justify-center mr-4`}>
                        <i className={`${experience.icon} text-white text-lg`} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground">{experience.title}</h3>
                        <p className="text-primary font-medium">{experience.company}</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{experience.period}</p>
                    <p className="text-foreground leading-relaxed">
                      {experience.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
