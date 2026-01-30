interface ExperienceCardProps {
  title: string;
  company: string;
  location: string;
  period: string;
  achievements: string[];
}

export default function ExperienceCard({
  title,
  company,
  location,
  period,
  achievements,
}: ExperienceCardProps) {
  return (
    <article className="bg-white border border-gray-200 rounded-xl p-6">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <p className="text-blue-600 font-medium">{company}</p>
        </div>
        <div className="text-sm text-gray-500 md:text-right">
          <p>{location}</p>
          <p>{period}</p>
        </div>
      </div>
      <ul className="space-y-2">
        {achievements.map((achievement, index) => (
          <li key={index} className="flex items-start gap-3 text-gray-600">
            <span className="mt-2 w-1.5 h-1.5 bg-emerald-500 rounded-full flex-shrink-0" />
            <span>{achievement}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
