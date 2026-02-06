"use client";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import type { Photo } from "@/data/photos";

type LightboxProps = {
    photo: Photo;
    onClose: () => void;
};

const Lightbox = ({ photo, onClose }: LightboxProps) => {
    return (
        <div
            className="fixed top-0 left-0 right-0 bottom-0 z-[100] w-screen h-screen flex items-center justify-center bg-black/80 p-4"
            style={{ margin: 0 }}
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-label="Photo lightbox"
        >
            <button
                type="button"
                onClick={onClose}
                className="absolute top-4 right-4 z-10 p-2 rounded-md text-white hover:bg-white/10 transition-colors"
                aria-label="Close"
            >
                <FontAwesomeIcon icon={faXmark} className="w-6 h-6" />
            </button>
            <div
                className="relative flex flex-col items-center justify-center max-w-[90vw] max-h-[90vh] min-w-0 min-h-0"
                onClick={(e) => e.stopPropagation()}
            >
                <Image
                    src={`/images/photos/${photo.src}`}
                    alt={photo.alt ?? ""}
                    width={1200}
                    height={800}
                    className="max-w-full max-h-[85vh] w-auto h-auto object-contain"
                    unoptimized
                />
            </div>
        </div>
    );
};

export default Lightbox;
