import Project from "@/components/Project/Project";
import { projects } from "@/data/projects";


const Projects = () => {
    return (
        <div className="my-20 mx-auto max-w-2xl p-4 space-y-16">
            <h2>Projects</h2>
            {projects.map(project =>
                <Project
                    key={project.id}
                    name={project.name}
                    id={project.id}
                    description={project.description}
                    image={project.image}
                    technologies={project.technologies}
                    link={project.link}
                    github={project.github}
                    learnMore={project.learnMore}
                />
            )}
        </div>
    )
};

export default Projects;