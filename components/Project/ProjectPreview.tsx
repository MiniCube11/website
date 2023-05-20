import Image from "next/image";

const ProjectPreview = ({ name = "", image = "" }) => {
    return (
        <div className="p-3 pb-4 rounded-md hover:bg-gray-100 group">
            <Image src={"/images/projects/" + image} alt="Project image" width={300} height={300} className="rounded-lg"/>
            <p className="font-semibold text-sm pt-3 pl-4">
                {name} <span className="ml-1 hidden group-hover:inline-block">→</span>
            </p>
        </div>
    )
}

export default ProjectPreview;