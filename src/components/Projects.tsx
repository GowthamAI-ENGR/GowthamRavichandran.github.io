import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { ExternalLink, Github, FolderOpen } from "lucide-react";

const projects = [
  {
    title: "Pregnancy_Risk_Prediction",
    description:
      "machine learning–based healthcare project designed to predict the risk level of pregnant women during delivery using maternal health parameters.",
    tags: ["Python", "TensorFlow", "Streamlit", "Stripe"],
    github: "https://github.com/GowthamAI-ENGR/Pregnancy_Risk_Prediction",
    live: "https://crop-recommendation-system-2222.streamlit.app/",
  },
  {
    title: "Crop Recommendation System",
    description:
      "The Crop Recommendation System is a machine learning–based web application developed to help farmers and agricultural users identify the most suitable crop for cultivation based on soil nutrients and climatic conditions.",
    tags: ["Python", "Random Forest Classifier", "sk-learn", "Streamlit"],
    github: "https://github.com/GowthamAI-ENGR/crop-recommendation-system",
    live: "https://crop-recommendation-system-2212.streamlit.app/",
  },
  {
    title: "Weather Dashboard(in progress)",
    description:
      "A beautiful weather dashboard with location-based forecasts, maps, and historical data.",
    tags: ["React", "Tailwind", "OpenWeather API", "Chart.js"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Portfolio Generator(in progress)",
    description:
      "A CLI tool that generates developer portfolios from a JSON config file with multiple themes.",
    tags: ["TypeScript", "Node.js", "CLI", "Handlebars"],
    github: "https://github.com",
    live: null,
  },
];

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="projects" className="section-padding">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          <span className="text-gradient">Projects</span>
        </h2>
        <div className="w-16 h-1 bg-primary rounded mb-10" />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="bg-card border-border hover:border-primary/40 transition-all hover:-translate-y-1 duration-300"
            >
              <CardHeader>
                <div className="flex items-center gap-2 text-primary mb-1">
                  <FolderOpen size={20} />
                  <h3 className="text-lg font-semibold text-foreground">
                    {project.title}
                  </h3>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs font-mono-code">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="gap-3">
                <Button variant="ghost" size="sm" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github size={16} /> Code
                  </a>
                </Button>
                {project.live && (
                  <Button variant="ghost" size="sm" asChild>
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} /> Live
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
