import Link from "next/link";

const SectionHeading = ({ name = "", link = ""}) => {
    return (
        <div className="mt-12 flex justify-between items-center">
            <h3 className="align-middle">{name}</h3>
            <Link href={link} className="text-xs text-gray-500 dark:text-gray-400 px-2 py-1 rounded-md bg-hover">View All</Link>
        </div>
    )
}

export default SectionHeading;