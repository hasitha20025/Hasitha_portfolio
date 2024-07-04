interface ProjectCardProps {
  projectName: string;
  date: string;
  links: string;
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  projectName,
  date,
  links,
  description,
}) => {
  return (
    <div className="bg-primary text-textPrimary p-6 rounded-lg shadow-lg border-2 border-secondary">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-bold text-textPrimary">{projectName}</h2>
        <span className="text-textSecondary">{date}</span>
      </div>
      <a
        href={links}
        className="text-lightBlue mb-4"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="hover:text-textPrimary">link</span>
      </a>
      <p className="text-textSecondary">{description}</p>
    </div>
  );
};

export default ProjectCard;
