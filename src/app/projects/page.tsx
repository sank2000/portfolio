import Dock from '@/components/Dock'
import ProjectCard from '@/components/ProjectCard'
import ProjectScrollReveal from '@/components/ProjectScrollReveal'
import projectsData from '@/data/projects.json'
import { buildProjectIconAssignments, projectThumbColors } from '@/utils/projectIconMap'

type Project = {
  name: string
  description: string
  stack: (string | { name: string })[]
  link?: string
  github?: string
}

export default function ProjectsPage() {
  const rotations = ['', 'rotate-neg-1', 'rotate-1', 'rotate-2', 'rotate-neg-2']
  const typedProjects = projectsData as Project[]
  const iconsByProjectName = buildProjectIconAssignments(typedProjects)

  return (
    <div className='app-shell projects-shell'>
      <main className='projects-main'>
        <div className='projects-intro projects-intro-animate'>
          <h2 className='heading-font projects-heading'>
            My <span className='terracotta'>Crafted</span> Work_
          </h2>
          <p className='projects-subtitle'>A collection of things I built with pixels and ink.</p>
        </div>

        <ProjectScrollReveal />

        <div className='projects-grid'>
          {typedProjects.map((project, index) => (
            <ProjectCard
              key={project.name}
              project={project}
              rotate={`${rotations[index % rotations.length]} project-card-animate`}
              preset={{
                bg: projectThumbColors[index % projectThumbColors.length],
                icon: iconsByProjectName.get(project.name)!,
              }}
              animationDelay={`${0.05 * (index + 1)}s`}
            />
          ))}
        </div>
      </main>

      <Dock active='work' />
    </div>
  )
}
