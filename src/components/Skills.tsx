import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Badge } from "@/components/ui/badge";

const categories = [
  {
    title: "Languages",
    skills: ["Python", "Java", "C++", "R", "PHP"],
  },
  {
    title: "Frameworks",
    skills: ["PyTorch", "TensorFlow", "Scikit-Learn", "Streamlit", "Flask"],
  },
];

const Skills = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="skills" className="section-padding bg-secondary/20">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          <span className="text-gradient">Skills</span>
        </h2>
        <div className="w-16 h-1 bg-primary rounded mb-10" />

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="p-6 rounded-2xl bg-card border border-border hover:border-primary/40 transition-colors"
            >
              <h3 className="text-lg font-semibold mb-4 font-mono-code text-primary">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="text-sm py-1.5 px-3"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
