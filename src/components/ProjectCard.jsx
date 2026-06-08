function ProjectCard({ project }) {
  return (
    <div>
      <h3>{project.title}</h3>

      <p>{project.description}</p>

      <ul>
        {project.technologies.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectCard;