"use client";

import type { Photo } from "@/data/photos";

type PhotoProps = {
    photo: Photo;
    onClick: () => void;
};

const PhotoCard = ({ photo, onClick }: PhotoProps) => {
    return (
        <div
            className="group break-inside-avoid mb-6 rounded-md overflow-hidden bg-hover cursor-pointer relative"
            onClick={onClick}
        >
            <img
                src={`/images/photos/${photo.src}`}
                alt={photo.alt ?? ""}
                loading="lazy"
                className="w-full h-auto block"
            />
            {(photo.caption || photo.date) && (
                <div
                    className="absolute inset-0 flex flex-col items-center justify-end bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 pb-3 px-3"
                    aria-hidden
                >
                    {photo.caption && (
                        <span className="text-white text-base font-medium text-center drop-shadow-sm">
                            {photo.caption}
                        </span>
                    )}
                    {photo.date && (
                        <span className="text-white/95 text-sm text-center drop-shadow-sm">
                            {photo.date}
                        </span>
                    )}
                </div>
            )}
        </div>
    );
};

export default PhotoCard;
