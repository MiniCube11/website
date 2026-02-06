"use client";

import { useState, useCallback, useEffect } from "react";
import { createPortal } from "react-dom";
import type { Photo } from "@/data/photos";
import PhotoCard from "./PhotoCard";
import Lightbox from "./Lightbox";

const PhotoGallery = ({ photos }: { photos: Photo[] }) => {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const closeLightbox = useCallback(() => setSelectedIndex(null), []);

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") closeLightbox();
        };
        window.addEventListener("keydown", handleEscape);
        return () => window.removeEventListener("keydown", handleEscape);
    }, [closeLightbox]);

    if (photos.length === 0) {
        return (
            <p className="text-gray-500 dark:text-gray-400">
                No photos yet. Add images to <code className="text-sm">public/images/photos/</code> and
                entries to <code className="text-sm">data/photos.ts</code>.
            </p>
        );
    }

    return (
        <>
            <div className="columns-1 lg:columns-2 gap-6">
                {photos.map((photo, index) => (
                    <PhotoCard
                        key={`${photo.src}-${index}`}
                        photo={photo}
                        onClick={() => setSelectedIndex(index)}
                    />
                ))}
            </div>

            {selectedIndex !== null &&
                typeof document !== "undefined" &&
                createPortal(
                    <Lightbox
                        photo={photos[selectedIndex]}
                        onClose={closeLightbox}
                    />,
                    document.body
                )}
        </>
    );
};

export default PhotoGallery;
