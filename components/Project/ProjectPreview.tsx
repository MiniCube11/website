import Image from "next/image";

const ProjectPreview = ({ name = "", image = "" }) => {
    return (
        <div className="group">
            <Image src={"/images/projects/" + image} alt="Project image" width={500} height={500} className="rounded-lg"/>
            <p className="font-semibold text-sm pt-3 pl-4 group-hover:underline">{name}</p>
        </div>
    )
}

export default ProjectPreview;