import { projectData } from '@/config'
import ProjectCard from '../components/ProjectCard'

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-16 bg-gray-100 dark:bg-gray-800 transition-colors"
    >
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-8 text-gray-900 dark:text-gray-100">
          Projects
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projectData.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
