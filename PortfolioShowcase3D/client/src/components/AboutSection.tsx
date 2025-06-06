import { Card, CardContent } from "@/components/ui/card";
import { useAnimatedCounter } from "@/hooks/useAnimatedCounter";

export default function AboutSection() {
  const conferences = useAnimatedCounter(15, "#about");
  const awards = useAnimatedCounter(10, "#about");

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold font-poppins gradient-text text-center mb-16">
          About Me
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <Card className="glass-effect border-primary/20">
            <CardContent className="p-8 md:p-12">
              <p className="text-lg md:text-xl text-foreground leading-relaxed text-center mb-8">
                A highly motivated and detail-oriented Computer Science and Engineer, adept in diverse skill sets including{" "}
                <span className="text-primary font-semibold">Full Stack Development</span> and{" "}
                <span className="text-primary font-semibold">AI</span>. 
                Proven track record of delivering high-quality results in fast-paced environments with a passion for 
                innovative solutions and continuous learning.
              </p>
              
              {/* Achievement Stats */}
              <div className="grid grid-cols-2 gap-6 mt-8">
                <Card className="text-center p-6 hover:scale-105 transition-transform duration-300">
                  <CardContent className="p-0">
                    <div className="text-3xl font-bold gradient-text">{conferences}+</div>
                    <div className="text-sm text-muted-foreground mt-2">Conference Presentations</div>
                  </CardContent>
                </Card>
                <Card className="text-center p-6 hover:scale-105 transition-transform duration-300">
                  <CardContent className="p-0">
                    <div className="text-3xl font-bold gradient-text">{awards}+</div>
                    <div className="text-sm text-muted-foreground mt-2">Research Awards</div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
