import { useState } from "react";
import { Link } from "react-router-dom";
import projects from "../data/projects";

function Sidebar() {
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);

  return (
    <div className="w-full lg:w-1/3 bg-panel p-10 flex flex-col  justify-between">

      <div className="flex flex-col text-left">

        <img
          src="/images/profilephoto.jpg"
          alt="Catalina Williams"
          className="w-80 h-80 rounded-[3rem] object-cover mb-8 text-center"
        />
<a
  href="/resume/Catalina_Williams_Resume.docx"
  target="_blank"
  rel="noopener noreferrer"
  className="
    mb-8
    px-6
    py-3
    rounded-xl
    bg-violet-500
    text-white
    font-medium
    hover:bg-violet-600
    transition
    text-center
  "
>
  Download Plain Text Resume
</a>
<a
  href="/resume/Catalina_Williams_Resume_Visual-2.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="
    mb-8
    px-6
    py-3
    rounded-xl
    bg-violet-500
    text-white
    font-medium
    hover:bg-violet-600
    transition
    text-center
  "
>
  Download Visual Resume
</a>
        <h1 className="text-4xl font-bold text-left">
          Catalina Williams
        </h1>
        

        <p className="text-xl mt-4 text-secondary text-left">
          Front-End Developer
        </p>

        <p className="text-lg text-secondary text-left">
          Web Designer
        </p>

        <nav className="mt-12 w-full">
          <ul className="space-y-5 ">

            <li>
              <Link to="/">HOME</Link>
            </li>

            <li>
              <Link to="/about">ABOUT</Link>
            </li>

            <li>
              <div className="flex items-center justify-between">
                <Link to="/projects">PROJECTS</Link>
                <button
                  type="button"
                  onClick={() => setIsProjectsOpen((open) => !open)}
                  aria-expanded={isProjectsOpen}
                  aria-label="Toggle projects submenu"
                  className="ml-2 px-1"
                >
                  {isProjectsOpen ? "▾" : "▸"}
                </button>
              </div>

              {isProjectsOpen && (
                <ul className="ml-4 mt-3 space-y-3">
                  {projects.map((project) => (
                    <li key={project.id}>
                      <Link to={`/projects/${project.id}`}>
                        {project.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li>
              <Link to="/contact">CONTACT</Link>
            </li>

          </ul>
          
        </nav>

      </div>

      <div className="mt-12 text-left">
        <p className="text-secondary">
          Pueblo, Colorado
        </p>

        <p className="text-secondary">
          Open to Remote Opportunities
        </p>
      </div>

    </div>
  );
}

export default Sidebar;