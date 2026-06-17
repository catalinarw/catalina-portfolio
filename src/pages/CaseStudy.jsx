import { useParams } from "react-router-dom";
import projects from "../data/projects";

function CaseStudy() {
  const { projectId } = useParams();

  const project = projects.find(
    (p) => p.id === projectId
  );

  if (!project) {
    return <h2>Project not found.</h2>;
  }

  return (
    <>
      <h2 className="text-sm uppercase tracking-[0.3em] mb-4">
        Case Study
      </h2>

      <h1 className="text-5xl font-bold mb-8">
        {project.title}
      </h1>

      {project.image && (
        <img
          src={project.image}
          alt={project.title}
          className="rounded-3xl mb-10"
        />
      )}

      <section className="mb-10">
        <h3 className="text-2xl font-bold mb-4">
          Project Overview
        </h3>

        <p>{project.overview}</p>
      </section>

      <section className="mb-10">
        <h3 className="text-2xl font-bold mb-4">
          My Role
        </h3>

        <p>{project.role}</p>
      </section>

      <section className="mb-10">
        <h3 className="text-2xl font-bold mb-4">
          Technologies
        </h3>

        <div className="flex flex-wrap gap-3">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="bg-white px-4 py-2 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-2xl font-bold mb-4">
          Results
        </h3>

        <p>{project.results}</p>
      </section>
    </>
  );
}

export default CaseStudy;