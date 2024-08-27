import Link from "next/link";

const Footer = () => {
    return (
        <footer className="text-center text-sm text-gray-700 p-8 dark:text-gray-300">
            <Link href="https://github.com/MiniCube11/website" target="_blank" rel="noopener noreferrer" className="highlight">
                Designed and developed by Ching Lam Lau © 2024 
            </Link>
        </footer>
    )    
}

export default Footer;