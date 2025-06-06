import { Card, CardContent } from "@/components/ui/card";
import { useAnimatedCounter } from "@/hooks/useAnimatedCounter";

const languages = [
  { name: "English", level: "Fluent", icon: "fas fa-globe" },
  { name: "Tamil", level: "Fluent", icon: "fas fa-language" },
  { name: "Hindi", level: "Basic", icon: "fas fa-comment" }
];

export default function AwardsSection() {
  const conferences = useAnimatedCounter(15, "#awards");
  const awards = useAnimatedCounter(10, "#awards");

  return (
    <section id="awards" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold font-poppins gradient-text text-center mb-16">
          Research & Awards
        </h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Research Presentations */}
          <Card className="glass-effect border-primary/20 text-center hover:scale-105 transition-transform duration-300">
            <CardContent className="p-8">
              <div className="w-20 h-20 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-presentation text-3xl text-white" />
              </div>
              <div className="text-5xl font-bold gradient-text mb-4">{conferences}+</div>
              <h3 className="text-xl font-bold text-foreground mb-4">National Conferences</h3>
              <p className="text-muted-foreground leading-relaxed">
                Presented cutting-edge research at prestigious national conferences, 
                contributing to academic discourse and knowledge sharing in computer science.
              </p>
            </CardContent>
          </Card>

          {/* Awards */}
          <Card className="glass-effect border-primary/20 text-center hover:scale-105 transition-transform duration-300">
            <CardContent className="p-8">
              <div className="w-20 h-20 bg-gradient-to-r from-secondary to-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-trophy text-3xl text-white" />
              </div>
              <div className="text-5xl font-bold gradient-text mb-4">{awards}+</div>
              <h3 className="text-xl font-bold text-foreground mb-4">Research Awards</h3>
              <p className="text-muted-foreground leading-relaxed">
                Recognized for excellence in research presentations and innovative solutions, 
                demonstrating expertise and leadership in academic and professional contexts.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Languages Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold gradient-text text-center mb-12">
            Languages
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {languages.map((language, index) => (
              <Card key={index} className="glass-effect border-primary/20 text-center hover:scale-105 transition-transform duration-300">
                <CardContent className="p-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${
                    index === 0 ? 'from-primary to-secondary' : 
                    index === 1 ? 'from-secondary to-primary' : 
                    'from-primary via-secondary to-primary'
                  } rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <i className={`${language.icon} text-2xl text-white`} />
                  </div>
                  <h4 className="text-lg font-bold text-foreground mb-2">{language.name}</h4>
                  <p className="text-muted-foreground">{language.level}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
