import { Card, CardContent } from "@/components/ui/card";

export default function EducationSection() {
  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold font-poppins gradient-text text-center mb-16">
          Education
        </h2>

        <div className="max-w-4xl mx-auto">
          <Card className="glass-effect border-primary/20 hover:scale-105 transition-transform duration-300">
            <CardContent className="p-8 md:p-12">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-2xl flex items-center justify-center mr-6">
                  <i className="fas fa-university text-2xl text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Bachelor of Engineering</h3>
                  <p className="text-lg text-primary font-medium">Computer Science and Engineering</p>
                </div>
              </div>
              
              <div className="mb-4">
                <p className="text-lg text-foreground font-medium">S.K.P. Engineering College</p>
                <p className="text-muted-foreground">Affiliated to Anna University</p>
              </div>
              
              <Card className="bg-gradient-to-r from-accent to-card/50 border-primary/20">
                <CardContent className="p-4">
                  <p className="text-foreground font-medium">
                    <i className="fas fa-calendar text-primary mr-2" />
                    2022 – 2026
                  </p>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
