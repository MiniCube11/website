import ContactLink from "@/components/About/ContactLink";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About - Ching Lam Lau",
    description: "engineer, writer & thinker",
};

const About = () => {
    return (
        <div className="my-20 mx-auto max-w-2xl p-4">
            <h2>About</h2>
            <p className="mt-12">Hi, I’m Ching Lam 👋 I’m currently studying Computer Science at the University of Waterloo.</p>
            <p className="mt-5">
                Some cool things I’ve been part of:
                <ul className="mt-1">
                    <li>Leading <Link href="https://www.jamhacks.ca/" target="_blank" rel="noopener noreferrer" className="highlight">JAMHacks 8 ↗</Link>, Canada’s largest in-person high school hackathon</li>
                    <li>Representing Canada at the European Girls’ Olympiad in Informatics (EGOI)</li>
                </ul>
            </p>

            <div className="mt-16 grid md:grid-cols-2">
                <ContactLink website="GitHub" handle="MiniCube11" link="https://github.com/MiniCube11"/>
                <ContactLink website="Linkedin" handle="ching-lam-lau" link="https://www.linkedin.com/in/ching-lam-lau/"/>
                <ContactLink website="DMOJ" handle="MiniCube11" link="https://dmoj.ca/user/MiniCube11"/>
                <ContactLink website="Devpost" handle="MiniCube11" link="https://devpost.com/MiniCube11"/>
                <ContactLink website="Email" handle="contact.minicube11@gmail.com" link="mailto:contact.minicube11@gmail.com"/>
            </div>
        </div>
    )
};

export default About;