import HackathonGallery from "@/components/Hackathons/HackathonGallery";
import { hackathons } from "@/data/hackathons";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Hackathons - Ching Lam Lau",
    description: "A collection of the hackathons I've been to",
};

const Hackathons = () => {
    return (
        <main className="mx-auto my-20 w-full max-w-[830px] space-y-16 p-5">
            <h2>Hackathons</h2>
            <HackathonGallery hackathons={hackathons} />
        </main>
    );
};

export default Hackathons;
