interface SkillBadgeProps {
  skill: string;
  category?: string;
}

const SkillBadge = ({ skill, category }: SkillBadgeProps) => {
  const getCategoryColor = (cat?: string) => {
    switch (cat) {
      case "languages":
        return "bg-blue-50 text-blue-700 border-blue-200";
      case "databases":
        return "bg-green-50 text-green-700 border-green-200";
      case "bigdata":
        return "bg-orange-50 text-orange-700 border-orange-200";
      case "tools":
        return "bg-pink-50 text-pink-700 border-pink-200";
      default:
        return "bg-purple-50 text-purple-700 border-purple-200";
    }
  };

  return (
    <span
      className={`inline-block px-4 py-2 rounded-lg font-medium text-sm border transition-all hover:shadow-lg transform hover:scale-110 hover:-translate-y-1 duration-300 ${getCategoryColor(category)} animate-scale-in`}
    >
      {skill}
    </span>
  );
};

export default SkillBadge;
