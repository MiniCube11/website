import ContactLink from "@/components/About/ContactLink";
import Link from "next/link";

const About = () => {
    return (
        <div className="my-20 mx-auto max-w-2xl p-4 space-y-16">
            <h2>About</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus numquam dolore illo ex necessitatibus qui mollitia. Consequuntur quisquam veritatis ratione obcaecati cum ut quos, inventore, ipsam, quibusdam architecto quae id. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat distinctio suscipit unde ab odio cumque quaerat repudiandae iste quas ipsum, dolorem temporibus ipsam consectetur maiores sunt repellendus, officia deserunt? Temporibus.</p>

            <div className="mt-16">
                <ContactLink website="Github" handle="MiniCube11" link="https://github.com/MiniCube11"/>
                <ContactLink website="Linkedin" handle="ching-lam-lau" link="https://www.linkedin.com/in/ching-lam-lau/"/>
                <ContactLink website="DMOJ" handle="MiniCube11" link="https://dmoj.ca/user/MiniCube11"/>
                <ContactLink website="Devpost" handle="MiniCube11" link="https://devpost.com/MiniCube11"/>
                <ContactLink website="Email" handle="contact.minicube11@gmail.com" link="mailto:contact.minicube11@gmail.com"/>
            </div>
        </div>
    )
};

export default About;