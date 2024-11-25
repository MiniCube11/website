import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";


const Footer = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();
    const image = (theme === "light" ? "/images/cswebringlight.svg" : "/images/cswebringdark.svg");

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <footer className="flex flex-col md:flex-row justify-center items-center text-center text-sm text-gray-700 p-8 dark:text-gray-300">
            <Link href="https://github.com/MiniCube11/website" target="_blank" rel="noopener noreferrer" className="highlight">
                Designed and developed by Ching Lam Lau © 2024 
                <span className="mx-2 hidden md:inline">|</span>
            </Link>
            <div className="flex items-center gap-[8px] mt-2 md:mt-0">
                <Link href='https://cs.uwatering.com/#https://chinglamlau.vercel.app/?nav=prev' className="highlight">←</Link>
                <Link href='https://cs.uwatering.com/#https://chinglamlau.vercel.app/' target='_blank' className="highlight">
                    <Image
                        src={image}
                        alt='CS Webring'
                        width={0}
                        height={0}
                        style={{ width: '18px', height: 'auto', opacity: 0.8 }}
                    />
                </Link>
                <Link href='https://cs.uwatering.com/#https://chinglamlau.vercel.app/?nav=next' className="highlight">→</Link>
            </div>
        </footer>
    )    
}

export default Footer;