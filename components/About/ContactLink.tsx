import Link from "next/link";

const ContactLink = ({ website = "", handle = "", link = "" }) => {
    return (
        <div className="mb-6">
            <p className="text-gray-500 dark:text-gray-400">{website}</p>
            <Link href={link} target="_blank" rel="noopener noreferrer" className="highlight">{handle} ↗</Link>
        </div>
    )
};

export default ContactLink;