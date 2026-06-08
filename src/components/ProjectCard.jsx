function ProjectCard({ project }) {
  return (
    <div className="
      bg-panel
      rounded-3xl
      p-6
      shadow-md
    ">

      <h3 className="text-2xl font-semibold mb-3">
        {project.title}
      </h3>

      <p className="text-secondary mb-4">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="
              bg-accent-panel
              px-3
              py-1
              rounded-full
              text-sm
            "
          >
            {tech}
          </span>
        ))}
      </div>

    </div>
  );
}

export default ProjectCard;