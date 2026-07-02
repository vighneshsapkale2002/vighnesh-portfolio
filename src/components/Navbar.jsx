import { useState } from "react";
import { FaBars, FaTimes, FaDownload } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-slate-900/80 border-b border-slate-700 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <a
            href="#home"
            className="text-3xl font-bold text-white tracking-wide"
          >
            Vighnesh
            <span className="text-blue-500">.</span>
          </a>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-blue-500 transition duration-300 font-medium"
              >
                {item.name}
              </a>
            ))}

            <a
              href="/Vighnesh_Professional_Resume_2026.pdf"
              download
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full transition duration-300"
            >
              <FaDownload />
              Resume
            </a>
          </nav>

          {/* Mobile Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white text-2xl"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-700">
          <div className="flex flex-col px-6 py-5 gap-5">

            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-gray-300 hover:text-blue-500 transition"
              >
                {item.name}
              </a>
            ))}

            <a
              href="/resume.pdf"
              download
              className="bg-blue-600 hover:bg-blue-700 text-center text-white py-3 rounded-lg transition"
            >
              Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;