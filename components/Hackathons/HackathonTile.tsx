import Image from "next/image";
import type { Hackathon } from "@/data/hackathons";

type HackathonTileProps = {
    hackathon: Hackathon;
    onSelect: (element: HTMLButtonElement) => void;
    transitionBack?: boolean;
};

const HackathonTile = ({ hackathon, onSelect, transitionBack = false }: HackathonTileProps) => {
    return (
        <button
            type="button"
            onClick={(event) => onSelect(event.currentTarget)}
            data-hackathon-id={hackathon.id}
            aria-label={`View ${hackathon.name}`}
            className="group relative block aspect-square w-full overflow-hidden bg-gray-100 text-left outline-none ring-indigo-500 transition-shadow focus-visible:ring-2 focus-visible:ring-offset-2 dark:bg-gray-800 dark:ring-offset-gray-900"
        >
            <span
                data-hackathon-image
                className="absolute inset-0 overflow-hidden"
                style={transitionBack ? { viewTransitionName: "hackathon-image" } : undefined}
            >
                <Image
                    src={hackathon.image}
                    alt={hackathon.alt}
                    fill
                    sizes="(min-width: 560px) 145px, calc(50vw - 28px)"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.025]"
                />
            </span>
            {hackathon.featured && (
                <span
                    aria-hidden="true"
                    className="absolute left-0 top-0 z-10 flex h-7 w-7 items-center justify-center"
                >
                    <Image src="/images/star-solid.svg" alt="" width={13} height={13} />
                </span>
            )}
            <span className="sr-only">
                {hackathon.name}{hackathon.date ? `, ${hackathon.date}` : ""}
            </span>
        </button>
    );
};

export default HackathonTile;
