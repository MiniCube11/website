import { Metadata } from "next";
import { photos } from "@/data/photos";
import PhotoGallery from "@/components/Photos/PhotoGallery";

export const metadata: Metadata = {
    title: "Photography - Ching Lam Lau",
    description: "Photos I've taken",
};

const PhotosPage = () => {
    return (
        <div className="my-20 mx-auto max-w-7xl p-4 w-full space-y-16">
            <h2>Photography</h2>
            <PhotoGallery photos={photos} />
        </div>
    );
};

export default PhotosPage;
