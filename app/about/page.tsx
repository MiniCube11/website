import Link from "next/link";

const About = () => {
    return (
        <div className="mt-20 mx-auto max-w-2xl p-4 space-y-16">
            <h2>About</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus numquam dolore illo ex necessitatibus qui mollitia. Consequuntur quisquam veritatis ratione obcaecati cum ut quos, inventore, ipsam, quibusdam architecto quae id. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat distinctio suscipit unde ab odio cumque quaerat repudiandae iste quas ipsum, dolorem temporibus ipsam consectetur maiores sunt repellendus, officia deserunt? Temporibus.</p>

            <div className="mt-16">
                <Link href="mailto:contact.minicube11@gmail.com">Email</Link>
                <span className="mx-3 text-gray-500">|</span>
                <Link href="https://github.com/MiniCube11">Github</Link>
                <span className="mx-3 text-gray-500">|</span>
                <Link href="https://www.linkedin.com/in/ching-lam-lau/">Linkedin</Link>
                <span className="mx-3 text-gray-500">|</span>
                <Link href="https://dmoj.ca/user/MiniCube11">DMOJ</Link>
                <span className="mx-3 text-gray-500">|</span>
                <Link href="https://devpost.com/MiniCube11">Devpost</Link>
            </div>
        </div>
    )
};

export default About;