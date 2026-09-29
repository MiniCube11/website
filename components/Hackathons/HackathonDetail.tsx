import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import type { Hackathon } from "@/data/hackathons";

type HackathonDetailProps = {
    hackathon: Hackathon;
    onClose: () => void;
    className?: string;
    style?: React.CSSProperties;
    animation?: "opening" | "closing" | "switch-out" | "switch-in" | null;
    transformOrigin?: string;
};

const HackathonDetail = ({
    hackathon,
    onClose,
    className = "",
    style,
    animation = null,
    transformOrigin = "center top",
}: HackathonDetailProps) => {
    return (
        <article
            className={`min-h-0 scroll-mt-4 bg-white dark:bg-gray-900 ${className}`}
            style={style}
            data-expanded-hackathon={hackathon.id}
            aria-live="polite"
        >
            <div
                className={`relative aspect-square w-full shrink-0 overflow-hidden bg-gray-100 dark:bg-gray-800 ${
                    animation === "opening"
                        ? "hackathon-image-opening"
                        : animation === "closing"
                          ? "hackathon-image-closing"
                          : animation === "switch-out"
                            ? "hackathon-image-switch-out"
                            : animation === "switch-in"
                              ? "hackathon-image-switch-in"
                          : ""
                }`}
                style={{ viewTransitionName: "hackathon-image", transformOrigin }}
            >
                <Image
                    src={hackathon.image}
                    alt={hackathon.alt}
                    fill
                    sizes="(min-width: 560px) 468px, calc(100vw - 40px)"
                    priority
                    className="h-full w-full object-cover"
                />
                <button
                    type="button"
                    onClick={onClose}
                    className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center text-white drop-shadow-md transition-colors hover:bg-black/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                    aria-label={`Close ${hackathon.name} details`}
                >
                    <FontAwesomeIcon icon={faXmark} className="h-4 w-4" />
                </button>
            </div>

            <div
                className={`flex min-h-[calc((100cqw-1rem)/2)] flex-1 flex-col justify-start border border-gray-300 p-4 min-[560px]:min-h-[calc((100cqw-2rem)/3)] min-[660px]:min-h-[calc((100cqw-3rem)/4)] min-[800px]:min-h-[calc((100cqw-4rem)/5)] dark:border-gray-700 ${
                    animation === "opening"
                        ? "hackathon-caption-opening"
                        : animation === "closing"
                          ? "hackathon-caption-closing"
                          : animation === "switch-out"
                            ? "hackathon-caption-switch-out"
                            : animation === "switch-in"
                              ? "hackathon-caption-switch-in"
                          : ""
                }`}
            >
                <div className="flex flex-col items-start gap-1 min-[560px]:flex-row min-[560px]:items-end min-[560px]:justify-between min-[560px]:gap-3">
                    <h3 className="text-lg font-semibold leading-tight">{hackathon.name}</h3>
                    {hackathon.date && (
                        <p className="shrink-0 text-left text-sm leading-tight text-gray-700 dark:text-gray-300 min-[560px]:text-right">
                            {hackathon.date}
                        </p>
                    )}
                </div>
                {(hackathon.role || hackathon.description) && (
                    <p className="mt-3 text-sm leading-relaxed text-gray-800 dark:text-gray-200">
                        {hackathon.role && <em>{hackathon.role} </em>}
                        {hackathon.description}
                    </p>
                )}
                {hackathon.href && (
                    <Link
                        href={hackathon.href}
                        target={hackathon.openInNewTab ? "_blank" : undefined}
                        rel={hackathon.openInNewTab ? "noopener noreferrer" : undefined}
                        className="mt-auto w-fit pt-4 text-sm underline underline-offset-2 transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
                    >
                        {hackathon.linkName ?? "View more →"}
                    </Link>
                )}
            </div>
        </article>
    );
};

export default HackathonDetail;
