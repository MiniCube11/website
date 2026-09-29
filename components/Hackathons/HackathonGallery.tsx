"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";
import type { Hackathon } from "@/data/hackathons";
import HackathonDetail from "./HackathonDetail";
import HackathonTile from "./HackathonTile";

type HackathonGalleryProps = {
    hackathons: Hackathon[];
};

type ViewTransitionDocument = Document & {
    startViewTransition?: (update: () => void) => {
        finished: Promise<void>;
    };
};

const DESKTOP_COLUMNS = 5;
const MOBILE_COLUMNS = 2;

const HackathonGallery = ({ hackathons }: HackathonGalleryProps) => {
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const [transitionBackId, setTransitionBackId] = useState<string | null>(null);
    const [desktopColumns, setDesktopColumns] = useState(DESKTOP_COLUMNS);
    const [fallbackAnimation, setFallbackAnimation] = useState<
        "opening" | "closing" | "switch-out" | "switch-in" | null
    >(null);
    const fallbackTimer = useRef<number | null>(null);
    const selectedHackathon = hackathons.find(({ id }) => id === selectedId) ?? null;
    const selectedIndex = hackathons.findIndex(({ id }) => id === selectedId);

    const desktopRow = Math.floor(selectedIndex / desktopColumns) + 1;
    const desktopColumn = selectedIndex % desktopColumns;
    const desktopColumnStart =
        desktopColumns === 3 || desktopColumn <= (desktopColumns - 1) / 2
            ? 1
            : desktopColumns - 2;
    const mobileRow = Math.floor(selectedIndex / MOBILE_COLUMNS) + 1;
    const mobileColumn = selectedIndex % MOBILE_COLUMNS;
    const desktopLocalColumn = desktopColumn - (desktopColumnStart - 1);
    const desktopTransformOrigin = `${desktopLocalColumn * 50}% top`;
    const mobileTransformOrigin = `${mobileColumn * 100}% top`;

    const prefersReducedMotion = () =>
        typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const supportsViewTransitions = () =>
        typeof document !== "undefined" && "startViewTransition" in document;

    const findTile = (id: string) =>
        document.querySelector<HTMLButtonElement>(`[data-hackathon-id="${id}"]`);

    const openHackathon = (id: string, tile: HTMLButtonElement) => {
        if (prefersReducedMotion()) {
            setSelectedId(id);
            return;
        }

        if (!supportsViewTransitions()) {
            if (fallbackTimer.current) window.clearTimeout(fallbackTimer.current);
            setFallbackAnimation("opening");
            setSelectedId(id);
            fallbackTimer.current = window.setTimeout(() => {
                setFallbackAnimation(null);
                fallbackTimer.current = null;
            }, 600);
            return;
        }

        const transitionDocument = document as ViewTransitionDocument;

        const tileImage = tile.querySelector<HTMLElement>("[data-hackathon-image]");
        tileImage?.style.setProperty("view-transition-name", "hackathon-image");
        const transition = transitionDocument.startViewTransition?.(() => {
            flushSync(() => setSelectedId(id));
        });

        transition?.finished.finally(() => {
            tileImage?.style.removeProperty("view-transition-name");
        });
    };

    const closeHackathon = () => {
        if (!selectedId) return;

        const closingId = selectedId;

        if (fallbackTimer.current) {
            window.clearTimeout(fallbackTimer.current);
            fallbackTimer.current = null;
        }
        if (prefersReducedMotion()) {
            setSelectedId(null);
            requestAnimationFrame(() => findTile(closingId)?.focus());
            return;
        }

        if (!supportsViewTransitions()) {
            if (fallbackAnimation === "closing") return;

            setFallbackAnimation("closing");
            fallbackTimer.current = window.setTimeout(() => {
                setSelectedId(null);
                setFallbackAnimation(null);
                fallbackTimer.current = null;
                requestAnimationFrame(() => findTile(closingId)?.focus());
            }, 450);
            return;
        }

        const transitionDocument = document as ViewTransitionDocument;
        const transition = transitionDocument.startViewTransition?.(() => {
            flushSync(() => {
                setTransitionBackId(closingId);
                setSelectedId(null);
            });
        });

        transition?.finished.finally(() => {
            setTransitionBackId(null);
            requestAnimationFrame(() => findTile(closingId)?.focus());
        });
    };

    const switchHackathon = (id: string) => {
        if (prefersReducedMotion()) {
            setSelectedId(id);
            return;
        }

        if (fallbackTimer.current) window.clearTimeout(fallbackTimer.current);
        setFallbackAnimation("switch-out");

        fallbackTimer.current = window.setTimeout(() => {
            setSelectedId(id);
            setFallbackAnimation("switch-in");

            fallbackTimer.current = window.setTimeout(() => {
                setFallbackAnimation(null);
                fallbackTimer.current = null;
            }, 420);
        }, 160);
    };

    const selectHackathon = (id: string, tile: HTMLButtonElement) => {
        if (selectedId) {
            switchHackathon(id);
            return;
        }

        openHackathon(id, tile);
    };

    useEffect(() => {
        return () => {
            if (fallbackTimer.current) window.clearTimeout(fallbackTimer.current);
        };
    }, []);

    useEffect(() => {
        const updateColumnCount = () => {
            setDesktopColumns(
                window.innerWidth >= 800
                    ? 5
                    : window.innerWidth >= 660
                      ? 4
                      : window.innerWidth >= 560
                        ? 3
                        : 2
            );
        };

        updateColumnCount();
        window.addEventListener("resize", updateColumnCount);
        return () => window.removeEventListener("resize", updateColumnCount);
    }, []);

    useLayoutEffect(() => {
        if (!selectedId) return;

        const frame = requestAnimationFrame(() => {
            const expandedCards = Array.from(
                document.querySelectorAll<HTMLElement>(`[data-expanded-hackathon="${selectedId}"]`)
            );
            const expandedCard = expandedCards.find((card) => getComputedStyle(card).display !== "none");

            if (!expandedCard) return;

            const bounds = expandedCard.getBoundingClientRect();
            const safeTop = window.innerWidth < 1024 ? 64 : 16;
            const safeBottom = 16;
            const isFullyVisible = bounds.top >= safeTop && bounds.bottom <= window.innerHeight - safeBottom;

            if (!isFullyVisible) {
                expandedCard.scrollIntoView({
                    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
                    block: bounds.height > window.innerHeight - safeTop - safeBottom ? "start" : "center",
                });
            }
        });
        return () => cancelAnimationFrame(frame);
    }, [selectedId]);

    useEffect(() => {
        const closeOnEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") closeHackathon();
        };

        window.addEventListener("keydown", closeOnEscape);
        return () => window.removeEventListener("keydown", closeOnEscape);
    });

    if (hackathons.length === 0) {
        return <p className="text-sm text-gray-500 dark:text-gray-400">No hackathons yet.</p>;
    }

    return (
        <div className="grid grid-flow-row-dense grid-cols-2 gap-4 [container-type:inline-size] min-[560px]:grid-cols-3 min-[660px]:grid-cols-4 min-[800px]:grid-cols-5">
            {selectedHackathon && (
                <>
                    <HackathonDetail
                        hackathon={selectedHackathon}
                        onClose={closeHackathon}
                        className="col-span-2 flex flex-col min-[560px]:hidden"
                        style={{ gridRowStart: mobileRow }}
                        animation={fallbackAnimation}
                        transformOrigin={mobileTransformOrigin}
                    />
                    <HackathonDetail
                        hackathon={selectedHackathon}
                        onClose={closeHackathon}
                        className="hidden flex-col min-[560px]:col-span-3 min-[560px]:row-span-4 min-[560px]:flex"
                        style={{
                            gridColumnStart: desktopColumnStart,
                            gridRowStart: desktopRow,
                        }}
                        animation={fallbackAnimation}
                        transformOrigin={desktopTransformOrigin}
                    />
                </>
            )}

            {hackathons.map((hackathon) =>
                hackathon.id === selectedId ? null : (
                    <HackathonTile
                        key={hackathon.id}
                        hackathon={hackathon}
                        onSelect={(tile) => selectHackathon(hackathon.id, tile)}
                        transitionBack={transitionBackId === hackathon.id}
                    />
                )
            )}
        </div>
    );
};

export default HackathonGallery;
