import Link from "next/link";

const SectionHeading = ({ name = "", link = ""}) => {
    return (
        <div className="mt-14 flex justify-between">
            <h3 className="align-middle">{name}</h3>
            <Link href={link} className="text-xs text-gray-500 dark:text-gray-400 px-2 py-1 mt-1 align-middle rounded-md bg-hover">View All</Link>
        </div>
    )
}

export default SectionHeading;