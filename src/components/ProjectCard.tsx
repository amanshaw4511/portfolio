import { ProjectData } from "@/types";

type ProjectCardProps = {
  project: ProjectData;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-4 flex flex-col justify-between transition-colors">
      <div>
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">
          {project.title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech, idx) => (
            <span
              key={idx}
              className="text-xs bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 py-1 px-2 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="flex space-x-4 mt-4">
        {project.githubLink && (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            GitHub
          </a>
        )}
        {project.liveLink && (
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}
