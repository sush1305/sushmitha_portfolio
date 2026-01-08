import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import SkillBadge from "@/components/SkillBadge";
import ExperienceCard from "@/components/ExperienceCard";
import LeadershipCard from "@/components/LeadershipCard";
import AnimatedBackground from "@/components/AnimatedBackground";
import { portfolioData } from "@/data/portfolio";
import { Mail, Phone, MapPin, Download, ArrowDown } from "lucide-react";

export default function Index() {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Sushmitha_Mittapally_Resume.pdf";
    link.click();
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-purple-950 to-slate-900 text-white relative">
      <AnimatedBackground />
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-950 via-purple-950 to-slate-900">
        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-80 h-80 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-float"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-25 animate-float" style={{ animationDelay: "2s" }}></div>
        <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-cyan-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-float" style={{ animationDelay: "4s" }}></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-pink-600 rounded-full mix-blend-screen filter blur-3xl opacity-15 animate-float" style={{ animationDelay: "3s" }}></div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className="flex flex-col items-center justify-center text-center animate-fade-in">
            <div className="mb-8">
              <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 p-1 shadow-2xl animate-glow animate-float">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                  <div className="text-6xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    SM
                  </div>
                </div>
              </div>
              <h1 className="text-5xl sm:text-7xl font-bold text-white mb-4 leading-tight">
                {portfolioData.name}
              </h1>
              <h2 className="text-2xl sm:text-3xl bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent font-bold mb-4">
                {portfolioData.title}
              </h2>
              <p className="text-lg text-gray-200 max-w-2xl mx-auto mb-8 leading-relaxed">
                {portfolioData.subtitle}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={() => scrollToSection("contact")}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-xl hover:shadow-2xl transition-all transform hover:scale-105 duration-300"
              >
                Get In Touch
              </button>
              <button
                onClick={handleDownloadCV}
                className="px-8 py-4 border-2 border-purple-600 text-purple-600 font-bold rounded-xl hover:bg-purple-50 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                Download CV
              </button>
            </div>

            {/* Quick Links */}
            <button
              onClick={() => scrollToSection("about")}
              className="text-purple-600 hover:text-purple-700 transition-colors animate-bounce mt-4"
            >
              <ArrowDown className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="relative py-20 overflow-hidden"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-4 animate-slide-up">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mb-12"></div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-from-left">
              <p className="text-lg text-gray-200 leading-relaxed mb-6">
                {portfolioData.about.description}
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 group hover:translate-x-2 transition-transform">
                  <Mail className="w-5 h-5 text-purple-400 group-hover:scale-110 transition-transform" />
                  <a
                    href={`mailto:${portfolioData.email}`}
                    className="text-gray-200 hover:text-purple-400 transition-colors"
                  >
                    {portfolioData.email}
                  </a>
                </div>
                <div className="flex items-center gap-3 group hover:translate-x-2 transition-transform">
                  <Phone className="w-5 h-5 text-purple-400 group-hover:scale-110 transition-transform" />
                  <a
                    href={`tel:${portfolioData.phone}`}
                    className="text-gray-200 hover:text-purple-400 transition-colors"
                  >
                    {portfolioData.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3 group hover:translate-x-2 transition-transform">
                  <MapPin className="w-5 h-5 text-purple-400 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-200">{portfolioData.location}</span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2 border-purple-400/30 hover:border-purple-400/50 transition-all duration-300 shadow-lg hover:shadow-2xl animate-scale-in">
              <h3 className="text-2xl font-bold text-white mb-6">
                Key Strengths
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 group">
                  <span className="text-purple-400 font-bold text-lg group-hover:scale-125 transition-transform origin-left">✓</span>
                  <div>
                    <p className="font-semibold text-white group-hover:text-purple-400 transition-colors">Data Expertise</p>
                    <p className="text-gray-300 text-sm">
                      SQL, Python, Big Data frameworks
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3 group">
                  <span className="text-purple-400 font-bold text-lg group-hover:scale-125 transition-transform origin-left">✓</span>
                  <div>
                    <p className="font-semibold text-white group-hover:text-purple-400 transition-colors">
                      Problem Solving
                    </p>
                    <p className="text-gray-300 text-sm">
                      Data-driven approach to challenges
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3 group">
                  <span className="text-purple-400 font-bold text-lg group-hover:scale-125 transition-transform origin-left">✓</span>
                  <div>
                    <p className="font-semibold text-white group-hover:text-purple-400 transition-colors">
                      Hands-on Experience
                    </p>
                    <p className="text-gray-300 text-sm">
                      ETL pipelines, dashboards, ML models
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3 group">
                  <span className="text-purple-400 font-bold text-lg group-hover:scale-125 transition-transform origin-left">✓</span>
                  <div>
                    <p className="font-semibold text-white group-hover:text-purple-400 transition-colors">
                      Continuous Learner
                    </p>
                    <p className="text-gray-300 text-sm">
                      Certified in Google Analytics and Salesforce AI
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-4 animate-slide-up">
            Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mb-12"></div>

          <div className="space-y-8">
            {portfolioData.experience.map((exp, index) => (
              <ExperienceCard
                key={index}
                title={exp.title}
                company={`${exp.company} • ${exp.location}`}
                period={exp.period}
                description={exp.description}
                highlights={exp.highlights}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-4 animate-slide-up">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mb-12"></div>

          <div className="grid md:grid-cols-2 gap-8">
            {portfolioData.projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                highlights={project.highlights}
                repoUrl={project.repoUrl}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-4 animate-slide-up">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mb-12"></div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Languages */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">
                Languages
              </h3>
              <div className="flex flex-wrap gap-3">
                {portfolioData.skills.languages.map((skill) => (
                  <SkillBadge
                    key={skill}
                    skill={skill}
                    category="languages"
                  />
                ))}
              </div>
            </div>

            {/* Databases */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">
                Databases
              </h3>
              <div className="flex flex-wrap gap-3">
                {portfolioData.skills.databases.map((skill) => (
                  <SkillBadge key={skill} skill={skill} category="databases" />
                ))}
              </div>
            </div>

            {/* Big Data & Analytics */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">
                Big Data & Analytics
              </h3>
              <div className="flex flex-wrap gap-3">
                {portfolioData.skills.bigData.map((skill) => (
                  <SkillBadge key={skill} skill={skill} category="bigdata" />
                ))}
              </div>
            </div>

            {/* Concepts */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">
                Key Concepts
              </h3>
              <div className="flex flex-wrap gap-3">
                {portfolioData.skills.concepts.map((skill) => (
                  <SkillBadge key={skill} skill={skill} />
                ))}
              </div>
            </div>
          </div>

          {/* Tools & Libraries */}
          <div className="mt-12">
            <h3 className="text-xl font-bold text-white mb-4">
              Tools & Libraries
            </h3>
            <div className="flex flex-wrap gap-3">
              {portfolioData.skills.tools.map((skill) => (
                <SkillBadge key={skill} skill={skill} category="tools" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-4 animate-slide-up">
            Education & Certifications
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mb-12"></div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Education */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Education
              </h3>
              <div className="space-y-6">
                {portfolioData.education.map((edu, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-purple-400/30 hover:shadow-2xl hover:border-purple-400/50 transition-all duration-300 animate-slide-up group"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <h4 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors">
                      {edu.degree}
                    </h4>
                    <p className="text-purple-400 font-semibold text-sm mt-1">
                      {edu.institution}
                    </p>
                    <p className="text-gray-300 text-sm">{edu.location}</p>
                    <div className="mt-3 flex justify-between items-center">
                      <span className="text-gray-300 text-sm">{edu.period}</span>
                      <span className="text-purple-400 font-bold group-hover:scale-110 transition-transform origin-right">
                        {edu.details}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications & Achievements */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Certifications & Achievements
              </h3>
              <div className="space-y-3 mb-8">
                {portfolioData.certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-purple-400/30 hover:border-purple-400/50 hover:bg-white/15 transition-all duration-300 animate-slide-in-from-left group"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <span className="text-purple-400 font-bold text-xl mt-1 group-hover:scale-110 transition-transform">
                      ◆
                    </span>
                    <span className="text-gray-200 text-sm group-hover:text-purple-300 font-medium transition-colors">{cert}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-bold text-white mb-4">
                Achievements
              </h3>
              <div className="space-y-3">
                {portfolioData.achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-purple-400/30 hover:border-purple-400/50 hover:bg-white/15 transition-all duration-300 animate-slide-in-from-left group"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <p className="font-bold text-white group-hover:text-purple-400 transition-colors">
                      {achievement.title}
                    </p>
                    <p className="text-gray-300 text-sm group-hover:text-purple-300 transition-colors">
                      {achievement.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Extracurricular Section */}
      <section id="leadership" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-4 animate-slide-up">
            Leadership & Extracurricular
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mb-12"></div>

          <div className="grid md:grid-cols-2 gap-8">
            {portfolioData.leadership.map((leadership, index) => (
              <LeadershipCard
                key={index}
                role={leadership.role}
                description={leadership.description}
                location={leadership.location}
                period={leadership.period}
                isPrimary={index === 0}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-4 animate-slide-up">
            Let's Connect
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mb-12"></div>

          <div className="bg-gradient-to-br from-purple-600 via-purple-500 to-blue-600 rounded-3xl p-12 text-white text-center max-w-2xl mx-auto shadow-2xl animate-scale-in hover:shadow-2xl transition-all">
            <p className="text-lg mb-8 leading-relaxed">
              I'm always interested in hearing about new projects and
              opportunities. Feel free to reach out!
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              <a
                href={`mailto:${portfolioData.email}`}
                className="bg-white bg-opacity-20 hover:bg-opacity-40 transition-all p-4 rounded-xl backdrop-blur-sm group transform hover:scale-105 duration-300"
              >
                <Mail className="w-6 h-6 mx-auto mb-2 group-hover:animate-bounce" />
                <p className="text-sm font-semibold">Email</p>
              </a>
              <a
                href={`tel:${portfolioData.phone}`}
                className="bg-white bg-opacity-20 hover:bg-opacity-40 transition-all p-4 rounded-xl backdrop-blur-sm group transform hover:scale-105 duration-300"
              >
                <Phone className="w-6 h-6 mx-auto mb-2 group-hover:animate-bounce" />
                <p className="text-sm font-semibold">Phone</p>
              </a>
              <div className="bg-white bg-opacity-20 p-4 rounded-xl backdrop-blur-sm group transform hover:scale-105 duration-300 hover:bg-opacity-40 transition-all">
                <MapPin className="w-6 h-6 mx-auto mb-2 group-hover:animate-bounce" />
                <p className="text-sm font-semibold">Location</p>
              </div>
            </div>

            <a
              href={`mailto:${portfolioData.email}`}
              className="inline-block px-8 py-3 bg-white text-purple-600 font-bold rounded-xl hover:shadow-2xl transition-all transform hover:scale-110 duration-300 shadow-lg"
            >
              Send Me an Email
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
