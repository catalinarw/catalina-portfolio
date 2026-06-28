import Layout from "../components/Layout";
import projects from "../data/projects";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <Layout>
      <div className="mb-8">
        <h1 className="text-5xl font-bold mb-3">
          Projects
        </h1>
        <p className="text-secondary text-lg">
          Explore my latest work and case studies
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <Link
            key={project.id}
            to={`/projects/${project.id}`}
            className="group"
          >
            <div className="
              bg-white
              p-6
              rounded-3xl
              shadow-md
              transition-all
              duration-300
              hover:shadow-lg
              hover:scale-105
              cursor-pointer
            ">
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    w-full
                    h-48
                    object-cover
                    rounded-2xl
                    mb-4
                    transition-transform
                    duration-300
                    group-hover:scale-105
                  "
                />
              )}

              <h3 className="text-2xl font-semibold mb-3">
                {project.title}
              </h3>

              <p className="text-secondary mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="
                      bg-site
                      px-3
                      py-1
                      rounded-full
                      text-sm
                      bg-accent-panel
                      text-accent-primary
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  );
}

export default Projects;