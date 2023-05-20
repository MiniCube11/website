import Project from "@/components/Project/Project";


const Projects = () => {
    return (
        <div className="my-20 mx-auto max-w-2xl p-4 space-y-16">
            <h2>Projects</h2>
            <Project name="WCI Computer Science" description="Website and attendance tracker. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus numquam dolore illo ex necessitatibus qui mollitia." image="/images/projects/wcics.png" technologies={["Python", "JavaScript", "Flask", "HTML/CSS", "Google OAuth", "PostgreSQL"]} link="https://wcics.vercel.app/" github="https://github.com/MiniCube11/wcics" />
            <Project name="Notes" description="Minimalistic note-taking app." image="/images/projects/notes.png" technologies={["Python", "JavaScript", "Flask", "HTML/CSS", "jQuery", "Google OAuth", "PostgreSQL"]} link="https://notes0011.vercel.app/" github="https://github.com/minicube11/notes"/>
            <Project name="Soccer Scores" description="Web app for viewing soccer scores." image="/images/projects/soccerscores.png" technologies={["JavaScript", "React", "Express", "Football Data API"]} link="https://soccerscores.vercel.app/" github="https://github.com/minicube11/soccer-scores"/>
        </div>
    )
};

export default Projects;