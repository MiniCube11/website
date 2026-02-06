import SectionHeading from "@/components/Home/SectionHeading";
import PostPreviewCard from "@/components/Post/PostPreviewCard";
import ProjectPreview from "@/components/Project/ProjectPreview";
import { projects } from "@/data/projects";
import getPostMetaData from "@/lib/posts/getPostMetadata";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const HomePage = () => {
    const postMetadata = getPostMetaData().slice(0, 3);
    const topProjects = projects.slice(0, 3);

    return (
        <div className="mt-20 mb-6 mx-auto max-w-4xl p-4">
            <div className="pb-12">
                <h2 className="font-semibold">Ching Lam Lau</h2>
                <div className="mt-6 space-y-4 text-[16px] leading-relaxed">
                    <p>
                        I’m interested in full-stack and AI engineering to build products that help people learn and think better. Currently studying CS @ UWaterloo.
                    </p>
                    <p>
                        I’ve been to 13 hackathons, organized 2 <Link href="/writing/jamhacks8" className="link-muted">hackathons</Link>, and previously did <Link href="/writing/cp-journey" className="link-muted">programming contests</Link>.
                    </p>
                    <p>
                        In my free time, I run (trying to hit 10k), climb, read books, <Link href="/writing" className="link-muted">write</Link>, and take <Link href="/photos" className="link-muted">photos</Link>. I also used to <Link href="https://dribbble.com/MiniCube11" target="_blank" rel="noopener noreferrer" className="link-muted">design</Link> and <Link href="https://scratch.mit.edu/users/MiniCube11/" target="_blank" rel="noopener noreferrer" className="link-muted">make games</Link>.
                    </p>
                </div>
                <div className="mt-8 flex flex-wrap gap-x-4 gap-y-1">
                    <Link href="https://github.com/MiniCube11" target="_blank" rel="noopener noreferrer" className="link-muted" title="GitHub" aria-label="GitHub">
                        <FontAwesomeIcon icon={faGithub} className="w-5 text-lg" />
                    </Link>
                    <Link href="https://www.linkedin.com/in/ching-lam-lau/" target="_blank" rel="noopener noreferrer" className="link-muted" title="LinkedIn" aria-label="LinkedIn">
                        <FontAwesomeIcon icon={faLinkedin} className="w-5 text-lg" />
                    </Link>
                    <a href="mailto:contact.minicube11@gmail.com" className="link-muted" title="Email" aria-label="Email">
                        <FontAwesomeIcon icon={faEnvelope} className="w-5 text-lg" />
                    </a>
                </div>
            </div>

            <SectionHeading name="Projects" link="/projects" />
            <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {topProjects.map(project => 
                    <Link key={project.id} href={"/projects#" + project.id}>
                        <ProjectPreview name={project.name} image={project.imageSmall} />    
                    </Link>
                )}                
            </div>

            <SectionHeading name="Writing" link="/writing" />
            <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {postMetadata.map((post) => (
                    <PostPreviewCard key={post.slug} {...post} />
                ))}
            </div>            
        </div>
    )
};

export default HomePage;