import Image from "next/image";

const ProjectPreview = ({ name = "", image = "" }) => {
    return (
        <div className="p-3 pb-4 rounded-md bg-hover group">
            <Image src={"/images/projects/" + image} alt="Project image" width={600} height={600} className="rounded-lg"/>
            <p className="font-semibold text-sm pt-3 pl-4">
                {name} <span className="ml-1 hidden group-hover:inline-block">→</span>
            </p>
        </div>
    )
}

export default ProjectPreview;