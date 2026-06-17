import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-full lg:w-1/3 bg-panel p-10 flex flex-col items-center justify-between">

      <div className="flex flex-col items-center">

        <img
          src="/images/profilephoto.jpg"
          alt="Catalina Williams"
          className="w-64 h-64 rounded-[3rem] object-cover mb-8"
        />
<a
  href="public/resume/Front-End Developer  React & Web Systems copy.pdf"
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
  "
>
  Download Resume
</a>
        <h1 className="text-4xl font-bold text-center">
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
              <Link to="/">HOME</Link>
            </li>

            <li>
              <Link to="/about">ABOUT</Link>
            </li>

            <li>
              <Link to="/projects">PROJECTS</Link>
              <li><Link to="/projects/cvnl">CVNL</Link></li>
            </li>

            <li>
              <Link to="/contact">CONTACT</Link>
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
  );
}

export default Sidebar;