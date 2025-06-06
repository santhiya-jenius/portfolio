import { Card, CardContent } from "@/components/ui/card";

const technicalSkills = [
  "Java", "Python", "HTML", "CSS", "JavaScript", "Bootstrap",
  "MySQL", "MERN Stack", "REST APIs", "Next.js", "Power BI",
  "Git/GitHub", "Office 365", "Cloud", "IoT"
];

const softSkills = [
  { name: "Public Speaking", icon: "fas fa-microphone" },
  { name: "Communication", icon: "fas fa-comments" },
  { name: "Teamwork", icon: "fas fa-users" },
  { name: "Logical Thinking", icon: "fas fa-brain" },
  { name: "Problem Solving", icon: "fas fa-puzzle-piece" },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold font-poppins gradient-text text-center mb-16">
          Skills & Expertise
        </h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Technical Skills */}
          <Card className="glass-effect border-primary/20 card-hover-3d">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <i className="fas fa-code text-3xl text-primary mr-4" />
                <h3 className="text-2xl font-bold text-foreground">Technical Skills</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {technicalSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="skill-badge bg-gradient-to-r from-accent to-card p-3 rounded-xl text-center hover:scale-105 transition-all duration-300 cursor-pointer"
                  >
                    <span className="text-foreground font-medium text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Soft Skills */}
          <Card className="glass-effect border-primary/20 card-hover-3d">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <i className="fas fa-lightbulb text-3xl text-primary mr-4" />
                <h3 className="text-2xl font-bold text-foreground">Soft Skills</h3>
              </div>
              <div className="space-y-4">
                {softSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="skill-badge flex items-center p-4 bg-gradient-to-r from-accent to-card rounded-xl hover:scale-105 transition-all duration-300 cursor-pointer"
                  >
                    <i className={`${skill.icon} text-primary mr-3`} />
                    <span className="text-foreground font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
