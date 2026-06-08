import Layout from "../components/Layout";
import projects from "../data/projects";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Layout>

      <h2 className="text-sm uppercase tracking-[0.3em] mb-4">
        About Me
      </h2>

      <h3 className="text-5xl font-bold mb-8">
        Building Digital Experiences
      </h3>

      <p className="text-lg leading-relaxed mb-12">
        Web developer with 4+ years of experience designing,
        rebuilding, and maintaining websites across WordPress,
        HubSpot CMS, and custom web platforms.
      </p>

      <div className="mb-12">

        <h4 className="text-sm uppercase tracking-[0.3em] mb-6">
          Skills
        </h4>

        <div className="flex flex-wrap gap-3">

          {[
            "React",
            "JavaScript",
            "WordPress",
            "Elementor",
            "HubSpot CMS",
            "Git",
            "HTML",
            "CSS"
          ].map((skill) => (
            <span
              key={skill}
              className="bg-white px-4 py-2 rounded-full shadow-sm"
            >
              {skill}
            </span>
          ))}

        </div>

      </div>

      <div>

        <h4 className="text-sm uppercase tracking-[0.3em] mb-6">
          Featured Projects
        </h4>

        <div className="space-y-6">

          {projects
            .filter(project => project.featured)
            .map(project => (
              <div key={project.id}>
                <h5 className="font-semibold text-xl">
                  {project.title}
                </h5>

                <p>
                  {project.description}
                </p>
              </div>
            ))}

        </div>

        <div className="mt-10 flex gap-4">

          <Link
            to="/projects"
            className="btn-primary"
          >
            View Projects
          </Link>

          <Link
            to="/contact"
            className="bg-white px-6 py-3 rounded-xl shadow-sm"
          >
            Contact Me
          </Link>

        </div>

      </div>

    </Layout>
  );
}

export default Home;

