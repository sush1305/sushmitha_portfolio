interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  description: string[];
  highlights?: string[];
}

const ExperienceCard = ({
  title,
  company,
  period,
  description,
  highlights,
}: ExperienceCardProps) => {
  return (
    <div className="border-l-4 border-purple-400 pl-6 py-4 animate-slide-in-from-left hover:border-blue-400 transition-all duration-300 group bg-white/5 backdrop-blur-sm rounded-lg p-4">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
        <div>
          <h3 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors">{title}</h3>
          <p className="text-purple-400 font-semibold group-hover:text-blue-400 transition-colors">{company}</p>
        </div>
        <span className="text-sm text-gray-300 whitespace-nowrap group-hover:text-purple-400 transition-colors font-medium">{period}</span>
      </div>

      <div className="space-y-2">
        {description.map((item, index) => (
          <p key={index} className="text-gray-200 flex gap-3 group-hover:text-white transition-colors">
            <span className="text-purple-400 mt-1 flex-shrink-0 group-hover:scale-125 transition-transform">▪</span>
            <span>{item}</span>
          </p>
        ))}
      </div>

      {highlights && highlights.length > 0 && (
        <div className="mt-3 pt-3 border-t border-purple-400/30 group-hover:border-purple-400/50 transition-colors">
          <p className="text-sm font-semibold text-gray-200 mb-2 group-hover:text-purple-400 transition-colors">
            Highlights
          </p>
          <div className="flex flex-wrap gap-2">
            {highlights.map((highlight, index) => (
              <span
                key={index}
                className="text-xs bg-purple-400/20 text-purple-300 px-2 py-1 rounded border border-purple-400/30 group-hover:bg-purple-400/30 group-hover:border-purple-400/50 transition-all"
              >
                {highlight}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ExperienceCard;
