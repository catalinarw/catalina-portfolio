import { useParams } from "react-router-dom";
import projects from "../data/projects";
import "./CaseStudy.css";

function CaseStudy() {
  const { projectId } = useParams();

  const project = projects.find(
    (p) => p.id === projectId
  );

  if (!project) {
    return <h2>Project not found.</h2>;
  }

  return (
    <div className="case-study-container">
      <div className="case-study-header">
        <h2 className="case-study-label">
          Case Study
        </h2>
        <h1 className="text-5xl font-bold">
          {project.title}
        </h1>
      </div>

      {project.image && (
        <img
          src={project.image}
          alt={project.title}
          className="case-study-image"
        />
      )}

      <section className="case-study-section">
        <h3>Project Overview</h3>
        <p>{project.overview}</p>
      </section>

      <section className="case-study-section">
        <h3>My Role</h3>
        <p>{project.role}</p>
      </section>

      <section className="case-study-section">
        <h3>Technologies</h3>
        <div className="tech-container">
          {project.technologies.map((tech) => (
            <span key={tech} className="tech-pill">
              {tech}
            </span>
          ))}
        </div>
      </section>

      <section className="case-study-section">
        <h3>Results</h3>
        <p>{project.results}</p>
      </section>
    </div>
  );
}

export default CaseStudy;