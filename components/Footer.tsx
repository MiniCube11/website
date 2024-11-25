import Link from "next/link";
import { useTheme } from "next-themes";

const Footer = () => {
    const theme = useTheme().theme || "light";

    return (
        <footer className="flex w-screen justify-center text-center text-sm text-gray-700 p-8 dark:text-gray-300">
            <Link href="https://github.com/MiniCube11/website" target="_blank" rel="noopener noreferrer" className="highlight mr-2">
                Designed and developed by Ching Lam Lau © 2024 |
            </Link>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Link href='https://cs.uwatering.com/#https://chinglamlau.vercel.app/?nav=prev' className="highlight">←</Link>
                <Link href='https://cs.uwatering.com/#https://chinglamlau.vercel.app/' target='_blank' className="highlight">
                    <img
                        src={`/images/cswebring${theme}.svg`}
                        alt='CS Webring'
                        style={{ width: '18px', height: 'auto', opacity: 0.8 }}
                    />
                </Link>
                <Link href='https://cs.uwatering.com/#https://chinglamlau.vercel.app/?nav=next' className="highlight">→</Link>
            </div>
        </footer>
    )    
}

export default Footer;

// flex items-center gap-[8px]"