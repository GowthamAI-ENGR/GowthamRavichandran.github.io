import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { User, Briefcase, Award, Coffee } from "lucide-react";

const stats = [
  { icon: Briefcase, value: "0+", label: "Years Experience" },
  { icon: Award, value: "5+", label: "Projects Completed" },
  { icon: Coffee, value: "∞", label: "Cups of Coffee" },
];

const About = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="section-padding">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          <span className="text-gradient">About Me</span>
        </h2>
        <div className="w-16 h-1 bg-primary rounded mb-10" />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Avatar placeholder */}
          <div className="flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl bg-secondary border border-border flex items-center justify-center overflow-hidden">
              <img src="/profile-photo.jpeg" alt="Your Name" className="w-full h-full object-cover" />
            </div>
          </div>

          <div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I am an AI/ML Engineer fresher with a strong interest in machine learning, data analysis, and building intelligent systems. I have hands-on experience working with Python and common ML libraries such as NumPy, Pandas, and Scikit-learn, and I enjoy exploring data to extract meaningful insights. Through academic and personal projects, I’ve gained practical exposure to data preprocessing, feature engineering, model training, and evaluation.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              I am a motivated learner who is eager to grow in the field of artificial intelligence and apply my skills to real-world challenges. I enjoy continuously improving my knowledge of machine learning algorithms and modern AI techniques, and I’m actively looking for opportunities where I can learn from industry professionals, contribute to impactful projects, and build a strong career in AI/ML engineering.
            </p>

            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-4 rounded-xl bg-secondary/50 border border-border"
                >
                  <stat.icon className="mx-auto mb-2 text-primary" size={22} />
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
