import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-12 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600 opacity-5 blur-3xl rounded-full -z-10"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Contact Info */}
          <div className="group">
            <h3 className="text-lg font-bold mb-4 group-hover:text-purple-400 transition-colors">Get In Touch</h3>
            <div className="space-y-3">
              <a
                href="mailto:sushmithamittapally54@gmail.com"
                className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-all transform hover:translate-x-2 duration-300"
              >
                <Mail className="w-5 h-5 hover:scale-110 transition-transform" />
                <span className="text-sm">sushmithamittapally54@gmail.com</span>
              </a>
              <a
                href="tel:+919346201768"
                className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-all transform hover:translate-x-2 duration-300"
              >
                <Phone className="w-5 h-5 hover:scale-110 transition-transform" />
                <span className="text-sm">+91 9346201768</span>
              </a>
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="w-5 h-5" />
                <span className="text-sm">Gandipet, Hyderabad</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="group">
            <h3 className="text-lg font-bold mb-4 group-hover:text-purple-400 transition-colors">Social</h3>
            <div className="space-y-3">
              <a
                href="https://linkedin.com/in/mittapally-sushmitha"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-all transform hover:translate-x-2 duration-300 group/link"
              >
                <Linkedin className="w-5 h-5 group-hover/link:scale-110 transition-transform" />
                <span className="text-sm">LinkedIn</span>
              </a>
              <a
                href="https://github.com/sush1305"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-all transform hover:translate-x-2 duration-300 group/link"
              >
                <Github className="w-5 h-5 group-hover/link:scale-110 transition-transform" />
                <span className="text-sm">GitHub</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="group">
            <h3 className="text-lg font-bold mb-4 group-hover:text-purple-400 transition-colors">Quick Links</h3>
            <div className="space-y-2">
              <a
                href="#about"
                className="block text-gray-300 hover:text-purple-400 transition-all transform hover:translate-x-2 duration-300 text-sm"
              >
                About
              </a>
              <a
                href="#experience"
                className="block text-gray-300 hover:text-purple-400 transition-all transform hover:translate-x-2 duration-300 text-sm"
              >
                Experience
              </a>
              <a
                href="#projects"
                className="block text-gray-300 hover:text-purple-400 transition-all transform hover:translate-x-2 duration-300 text-sm"
              >
                Projects
              </a>
              <a
                href="#skills"
                className="block text-gray-300 hover:text-purple-400 transition-all transform hover:translate-x-2 duration-300 text-sm"
              >
                Skills
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400 text-sm">
            © 2024 Sushmitha Mittapally. All rights reserved. | Crafted with passion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
