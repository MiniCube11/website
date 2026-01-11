import Link from "next/link";
import Image from "next/image";


const Footer = () => {
    return (
        <footer className="flex flex-col md:flex-row justify-center items-center text-center text-sm text-gray-700 p-8 dark:text-gray-300">
            <Link href="https://github.com/MiniCube11/website" target="_blank" rel="noopener noreferrer" className="highlight">
                Designed and developed by Ching Lam Lau © 2026 
                <span className="mx-2 hidden md:inline">|</span>
            </Link>
            <div className="flex items-center gap-[8px] mt-2 md:mt-0">
                <Link href='https://cs.uwatering.com/#https://chinglamlau.ca?nav=prev' className="highlight">←</Link>
                <Link href='https://cs.uwatering.com/#https://chinglamlau.ca' target='_blank' className="highlight">
                    <Image
                        src="/images/cswebringlight.svg"
                        alt='CS Webring'
                        width={0}
                        height={0}
                        style={{ width: '18px', height: 'auto', opacity: 0.8 }}
                        className="dark:hidden"
                    />
                    <Image
                        src="/images/cswebringdark.svg"
                        alt='CS Webring'
                        width={0}
                        height={0}
                        style={{ width: '18px', height: 'auto', opacity: 0.8 }}
                        className="hidden dark:inline"
                    />
                </Link>
                <Link href='https://cs.uwatering.com/#https://chinglamlau.ca?nav=next' className="highlight">→</Link>
            </div>
        </footer>
    )    
}

export default Footer;