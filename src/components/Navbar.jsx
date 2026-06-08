import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-site py-6">
      <div className="max-w-7xl mx-auto px-6 flex justify-end gap-8">

        <Link to="/">Home</Link>

        <Link to="/about">About</Link>

        <Link to="/projects">Projects</Link>

        <Link to="/contact">Contact</Link>

      </div>
    </nav>
  );
}

export default Navbar;