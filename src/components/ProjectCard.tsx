type StackTag = string | { name: string }

type Project = {
  name: string
  description: string
  stack: StackTag[]
  link?: string
  github?: string
}

type ProjectCardProps = {
  project: Project
  rotate: string
  animationDelay?: string
  preset: {
    bg: string
    icon: React.ComponentType<{ size?: number; className?: string }>
  }
}

export default function ProjectCard({ project, rotate, preset, animationDelay }: ProjectCardProps) {
  const cta = project.link ? 'View Live Demo ->' : 'Check GitHub ->'
  const destination = project.link || project.github || '#'
  const Icon = preset.icon

  return (
    <div className={`sketchy-card project-card ${rotate}`} style={{ animationDelay }}>
      <a className='project-thumb group' style={{ background: preset.bg }} href={destination} target='_blank' rel='noreferrer'>
        <div className='project-thumb-icon'>
          <Icon size={112} className='project-thumb-glyph' />
        </div>
        <div className='project-overlay sketchy-border'>
          <p className='code-font'>{cta}</p>
        </div>
      </a>
      <div>
        <h3 className='heading-font project-title'>{project.name}</h3>
        <p className='project-copy'>{project.description}</p>
        <div className='project-tags'>
          {project.stack.map((tag, index) => {
            const label = typeof tag === 'string' ? tag : tag.name
            return (
              <span key={`${project.name}-${label}-${index}`} className='tag-sketch'>
                {label}
              </span>
            )
          })}
        </div>
      </div>
    </div>
  )
}
