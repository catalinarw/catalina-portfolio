import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  return (
    <main className="min-h-screen bg-site">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <h1 className="text-5xl font-bold mb-12 text-primary">
          Projects
        </h1>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>

      </div>
    </main>
  );
}

export default Projects;