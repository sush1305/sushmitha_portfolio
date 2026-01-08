import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  highlights: string[];
  repoUrl?: string;
}

const ProjectCard = ({
  title,
  description,
  technologies,
  highlights,
  repoUrl,
}: ProjectCardProps) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-2xl transition-all duration-300 hover:border-purple-300 animate-scale-in group overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>

      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>

      <div className="mb-4">
        <h4 className="text-sm font-semibold text-gray-700 mb-2">
          Key Highlights
        </h4>
        <ul className="space-y-1">
          {highlights.map((highlight, index) => (
            <li key={index} className="text-sm text-gray-600 flex gap-2">
              <span className="text-purple-600">▸</span>
              {highlight}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="inline-block px-3 py-1 bg-gradient-to-r from-purple-50 to-blue-50 text-purple-700 text-xs font-medium rounded-full border border-purple-200 group-hover:border-purple-400 transition-colors"
          >
            {tech}
          </span>
        ))}
      </div>

      {repoUrl && (
        <a
          href={repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300"
        >
          <Github className="w-4 h-4" />
          View Repository
          <ExternalLink className="w-3 h-3" />
        </a>
      )}
    </div>
  );
};

export default ProjectCard;
