import projects from '../data/projectlist.json';
import ProjectCard from '../components/ProjectCard';

export default function FetchProjects() {
  return(
    <>
      {projects.map((project) => {
        return <ProjectCard key={project.id} projectData = {project} />
      })}
    </>
  )
}