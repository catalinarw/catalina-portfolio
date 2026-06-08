import Layout from "../components/Layout";
import projects from "../data/projects";

function Projects() {
  return (
    <Layout>

      <h1 className="text-5xl font-bold mb-8">
        Projects
      </h1>

      <div className="grid md:grid-cols-2 gap-6">

        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white p-6 rounded-3xl shadow-md"
          >

            <h3 className="text-2xl font-semibold mb-3">
              {project.title}
            </h3>

            <p className="mb-4">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">

              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-site px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}

            </div>

          </div>
        ))}

      </div>

    </Layout>
  );
}

export default Projects;