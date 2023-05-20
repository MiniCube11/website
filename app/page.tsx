import SectionHeading from "@/components/Home/SectionHeading";
import PostPreviewCard from "@/components/Post/PostPreviewCard";
import ProjectPreview from "@/components/Project/ProjectPreview";
import { featured } from "@/data/projects";
import getPostMetaData from "@/lib/posts/getPostMetadata";
import Link from "next/link";

const HomePage = () => {
    const postMetadata = getPostMetaData().slice(0, 3);

    return (
        <div className="mt-20 mb-6 mx-auto max-w-4xl p-4">
            <p className="text-blue-400">Hi, my name is</p>
            <h1 className="mt-2">Ching Lam Lau</h1>
            
            <SectionHeading name="Projects" link="/projects" />
            <div className="mt-4 grid grid-cols-3 gap-x-1">
                {featured.map(project => 
                    <Link href={"/projects#" + project.id}>
                        <ProjectPreview name={project.name} image={project.image} />    
                    </Link>
                )}                
            </div>

            <SectionHeading name="Writing" link="/writing" />
            <div className="mt-4 grid grid-cols-3 gap-x-4">
                {postMetadata.map((post) => (
                    <PostPreviewCard key={post.slug} {...post} />
                ))}
            </div>            
        </div>
    )
};

export default HomePage;