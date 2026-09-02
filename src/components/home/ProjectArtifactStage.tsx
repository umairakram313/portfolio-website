import type { Project } from "../../content"

type ProjectArtifactStageProps = { project: Project }

export default function ProjectArtifactStage({
  project,
}: ProjectArtifactStageProps) {
  return (
    <figure
      className={`project-artifact project-artifact-${project.artifactVariant}`}
      aria-labelledby={`artifact-caption-${project.index}`}
    >
      <div className="project-artifact-field">
        <div className="project-artifact-sheet" aria-hidden="true" />
        <div className="project-artifact-accent" aria-hidden="true" />
        <div className="project-artifact-image-wrap" key={project.index}>
          <img
            src={project.artifact}
            alt={project.artifactAlt}
            className="project-artifact-image"
          />
        </div>
        <span className="project-artifact-registration" aria-hidden="true" />
      </div>
      <figcaption
        id={`artifact-caption-${project.index}`}
        className="project-artifact-caption"
      >
        <span>{project.artifactLabel}</span>
        <span aria-hidden="true">{project.period}</span>
      </figcaption>
    </figure>
  )
}
