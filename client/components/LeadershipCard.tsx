import { Award, Users } from "lucide-react";

interface LeadershipCardProps {
  role: string;
  description: string;
  location?: string;
  period?: string;
  isPrimary?: boolean;
}

const LeadershipCard = ({
  role,
  description,
  location,
  period,
  isPrimary,
}: LeadershipCardProps) => {
  return (
    <div
      className={`relative overflow-hidden rounded-xl p-6 transition-all duration-300 animate-slide-up group hover:shadow-xl ${
        isPrimary
          ? "bg-gradient-to-br from-purple-50 to-blue-50 border-2 border-purple-300 hover:border-purple-500"
          : "bg-white border border-gray-200 hover:border-purple-300 hover:bg-purple-50"
      }`}
    >
      <div className="flex items-start gap-4">
        <div
          className={`p-3 rounded-lg ${
            isPrimary
              ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
              : "bg-purple-100 text-purple-600"
          }`}
        >
          {isPrimary ? (
            <Award className="w-6 h-6" />
          ) : (
            <Users className="w-6 h-6" />
          )}
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
            {role}
          </h3>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-1 text-sm text-gray-600">
            {location && <span className="font-medium">{location}</span>}
            {location && period && <span>•</span>}
            {period && <span className="text-gray-500">{period}</span>}
          </div>
        </div>
      </div>

      <p className="mt-4 text-gray-700 leading-relaxed ml-16">
        {description}
      </p>
    </div>
  );
};

export default LeadershipCard;
