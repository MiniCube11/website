import Link from "next/link";

const SectionHeading = ({ name = "", link = ""}) => {
    return (
        <div className="mt-20 flex justify-between">
            <h3 className="align-middle">{name}</h3>
            <Link href={link} className="text-xs text-gray-500 px-2 py-1 mt-1 align-middle rounded-md hover:bg-gray-100 hover:text-gray-600">View All</Link>
        </div>
    )
}

export default SectionHeading;