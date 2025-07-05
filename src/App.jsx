import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ExternalLink,
  Code,
  Database,
  Palette,
  Server,
  Download,
  Menu,
  X,
} from "lucide-react";
import "./index.css"; // Assuming you have a CSS file for styles

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "skills",
        "projects",
        "resume",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const skills = [
    { name: "React", icon: <Code className="w-6 h-6" />, level: 90 },
    { name: "Next.js", icon: <Server className="w-6 h-6" />, level: 85 },
    { name: "HTML/CSS", icon: <Palette className="w-6 h-6" />, level: 95 },
    { name: "Tailwind CSS", icon: <Palette className="w-6 h-6" />, level: 90 },
    { name: "MongoDB", icon: <Database className="w-6 h-6" />, level: 80 },
    { name: "SQL", icon: <Database className="w-6 h-6" />, level: 75 },
    { name: "Convex DB", icon: <Database className="w-6 h-6" />, level: 70 },
    { name: "Github", icon: <Code className="w-6 h-6" />, level: 85 },
  ];

  const projects = [
    {
      id: 1,
      title: "Vidyavani",
      description:
        "An AI-powered educational assistant app that helps students with their learning journey. Features intelligent tutoring, personalized recommendations, and interactive learning modules with career guidance and mental health support.",
      tags: ["Next.js", "React", "Gemini", "Tailwind CSS", "Convex DB"],
      image: "vidya.png",
      github: "https://github.com/rpratiksha031/Vidya-vani",
      live: "https://vidya-vani.vercel.app",
    },
    {
      id: 2,
      title: "Blogging Platform",
      description:
        "A full-featured blogging application with user authentication, content management, and admin panel. Users can read articles while admins can create, edit, and manage all content.",
      tags: ["React", "Node.js", "MongoDB", "Nextjs", "Tailwind CSS"],
      image:
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=300&fit=crop",
      github: "https://github.com/rpratiksha031/Blogger",
      live: "https://blogger-ivory-ten.vercel.app",
    },
    {
      id: 3,
      title: "Pizza-tarian",
      description:
        "Modern e-commerce pizza ordering application built with React.js, Tailwind, and mongo DB. Features include user authentication, product management, and real-time order tracking with interactive charts.",
      tags: ["React.js", "Tailwindcss", "mongo DB", "JavaScript", "Charts"],
      image: "pizza1.jpg",
      github: "https://github.com/rpratiksha031/pizza-tarian",
      live: "https://pizza-tarian.vercel.app/",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Pratiksha Rawat
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {["home", "about", "skills", "projects", "resume", "contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`capitalize hover:text-purple-400 transition-colors ${
                      activeSection === item ? "text-purple-400" : "text-white"
                    }`}
                  >
                    {item}
                  </button>
                )
              )}
            </div>

            {/* Mobile Navigation Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {["home", "about", "skills", "projects", "resume", "contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="block w-full text-left px-3 py-2 capitalize hover:text-purple-400 transition-colors"
                  >
                    {item}
                  </button>
                )
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 animate-pulse"></div>
        <div className="text-center z-10 px-4">
          <div className="mb-8">
            {/* <div className="w-48 h-48 mx-auto mb-8 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 p-1">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                <div className="text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"></div>
                <image
                  src="my_photo_pra.jpg"
                  alt="PR"
                  width={192}
                  height={192}
                  className="rounded-full object-cover w-full h-full"
                />
              </div>
            </div>*/}
            <div className="w-48 h-48 mx-auto mb-8 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 p-1">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                <img
                  src="my_photo_pra.jpg"
                  alt="PR"
                  width={192}
                  height={192}
                  className="rounded-full object-cover w-full h-full"
                />
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
            Pratiksha Rawat
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-purple-200">
            Full Stack Developer
          </p>
          <p className="text-lg mb-12 text-gray-300 max-w-2xl mx-auto">
            RCET Bhilai Graduate specializing in modern web technologies and
            AI-powered applications
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection("projects")}
              className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-3 border-2 border-purple-400 rounded-full hover:bg-purple-400 hover:text-black transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-purple-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-full h-80 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                <div className="text-8xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  PR
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-purple-300">
                Hello! I'm Pratiksha
              </h3>
              <p className="text-gray-300 leading-relaxed">
                I'm a passionate full stack developer who recently graduated
                from RCET Bhilai. My journey in web development started with
                curiosity and has evolved into a deep passion for creating
                innovative, user-friendly applications.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I specialize in modern web technologies including React,
                Next.js, and various database solutions. I love working on
                projects that challenge me to learn new technologies and solve
                complex problems.
              </p>
              <p className="text-gray-300 leading-relaxed">
                When I'm not coding, I enjoy exploring new technologies, and
                sharing knowledge with the developer community.
              </p>
              <div className="flex space-x-4 pt-4">
                <a
                  href="https://github.com/rpratiksha031"
                  className="text-purple-400 hover:text-purple-300 transition-colors"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/pratiksha-rawat-363109253/"
                  className="text-purple-400 hover:text-purple-300 transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-6 rounded-xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  <div className="text-purple-400 mr-3">{skill.icon}</div>
                  <h3 className="text-lg font-semibold">{skill.name}</h3>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-purple-400 to-pink-400 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <div className="text-right mt-2 text-sm text-gray-400">
                  {skill.level}%
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl overflow-hidden border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 transform hover:scale-105"
              >
                <div className="h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-purple-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      className="flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      <Github className="w-4 h-4 mr-1" />
                      Code
                    </a>
                    <a
                      href={project.live}
                      className="flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-20 px-4 bg-black/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Resume
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Education */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-purple-300">
                Education
              </h3>
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-6 rounded-xl border border-purple-500/20">
                  <h4 className="text-lg font-semibold text-white">
                    Bachelor's Degree
                  </h4>
                  <p className="text-purple-300">RCET Bhilai</p>
                  <p className="text-gray-400">2021 - 2025</p>
                  <p className="text-sm text-gray-300 mt-2">
                    Focused on computer science fundamentals, software
                    engineering, and web development technologies.
                  </p>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-purple-300">
                Experience
              </h3>
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-6 rounded-xl border border-purple-500/20">
                  <h4 className="text-lg font-semibold text-white">
                    Full Stack Developer
                  </h4>
                  <p className="text-purple-300">Personal Projects</p>
                  <p className="text-gray-400">2023 - Present</p>
                  <ul className="text-sm text-gray-300 mt-2 space-y-1">
                    <li>• Developed AI-powered educational applications</li>
                    <li>
                      • Built responsive web applications using React and
                      Next.js
                    </li>
                    <li>
                      • Implemented modern UI/UX with Tailwind CSS and ShadCN
                    </li>
                    <li>
                      • Worked with various databases including MongoDB and SQL
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Download Resume Button */}
          <div className="text-center mt-12">
            {/* <button className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105">
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </button> */}
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-purple-300">
                Let's Connect
              </h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                I'm always interested in hearing about new opportunities,
                collaborating on exciting projects, or just having a chat about
                technology. Feel free to reach out!
              </p>

              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-purple-400 mr-3" />
                  <span className="text-gray-300">rpratiksha031@gmail.com</span>
                </div>
                {/* <div className="flex items-center">
                  <Phone className="w-5 h-5 text-purple-400 mr-3" />
                  <span className="text-gray-300">+91 9876543210</span>
                </div> */}
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-purple-400 mr-3" />
                  <span className="text-gray-300">
                    Bhilai, Chhattisgarh, India
                  </span>
                </div>
              </div>

              <div className="flex space-x-4 mt-8">
                <a
                  href="https://github.com/rpratiksha031"
                  className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center border border-purple-500/30 hover:border-purple-400 transition-colors"
                >
                  <Github className="w-5 h-5 text-purple-400" />
                </a>
                <a
                  href="https://www.linkedin.com/in/pratiksha-rawat-363109253/"
                  className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center border border-purple-500/30 hover:border-purple-400 transition-colors"
                >
                  <Linkedin className="w-5 h-5 text-purple-400" />
                </a>
              </div>
            </div>

            <div>
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-purple-500/20 rounded-lg focus:border-purple-400 focus:outline-none text-white placeholder-gray-400"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-purple-500/20 rounded-lg focus:border-purple-400 focus:outline-none text-white placeholder-gray-400"
                  />
                </div>
                <div>
                  <textarea
                    rows="5"
                    placeholder="Your Message"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-purple-500/20 rounded-lg focus:border-purple-400 focus:outline-none text-white placeholder-gray-400 resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-black/40 border-t border-purple-500/20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Pratiksha Rawat. Crafted with ❤️ and lots of ☕
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
