import { Link } from "react-router-dom";
import projects from "../data/projects";
function Hero() {
  return (
    <section className="min-h-screen bg-site p-6 md:p-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row">

        {/* LEFT PANEL */}

        <div className="w-full lg:w-1/3 bg-panel shadow-xl p-10 flex flex-col items-center justify-between">

          <div className="flex flex-col items-center">

           <img
  src="/images/profilephoto.jpg"
  alt="Catalina Williams"
  className="w-64 h-64 rounded-[3rem] object-cover mb-8"
/>
            <h1 className="text-4xl font-bold text-center text-primary">
              Catalina Williams
            </h1>

            <p className="text-xl mt-4 text-secondary text-center">
              Front-End Developer
            </p>

            <p className="text-lg text-secondary text-center">
              Web Designer
            </p>

            <nav className="mt-12 w-full">
              <ul className="space-y-5 text-center">

                <li>
                  <Link
                    to="/"
                    className="font-medium tracking-wide hover:text-violet-600 transition"
                  >
                    HOME
                  </Link>
                </li>

                <li>
                  <Link
                    to="/about"
                    className="font-medium tracking-wide hover:text-violet-600 transition"
                  >
                    ABOUT
                  </Link>
                </li>

                <li>
                  <Link
                    to="/projects"
                    className="font-medium tracking-wide hover:text-violet-600 transition"
                  >
                    PROJECTS
                  </Link>
                </li>

                <li>
                  <Link
                    to="/contact"
                    className="font-medium tracking-wide hover:text-violet-600 transition"
                  >
                    CONTACT
                  </Link>
                </li>

              </ul>
            </nav>

          </div>

          <div className="mt-12 text-center">
            <p className="text-secondary">
              Pueblo, Colorado
            </p>

            <p className="text-secondary">
              Open to Remote Opportunities
            </p>
          </div>

        </div>

        {/* RIGHT PANEL */}

        <div
          className="
            w-full
            lg:w-2/3
            bg-accent-panel
            shadow-lg
            p-10
            md:p-16
            lg:rounded-l-[80px]
          "
        >

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

          {/* Skills */}

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
                  className="
                    bg-white
                    px-4
                    py-2
                    rounded-full
                    shadow-sm
                  "
                >
                  {skill}
                </span>
              ))}

            </div>

          </div>

          {/* Featured Projects */}

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

</div>

        </div>

      </div>
    </section>
  );
}

export default Hero;