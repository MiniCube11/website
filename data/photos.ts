export type Photo = {
    src: string;
    alt: string;
    caption?: string;
    date?: string;
};

export const photos: Photo[] = [
    {
        src: "train.JPG",
        alt: "Train",
        caption: "Waterloo, Ontario",
        date: "January 2026",
    },
    {
        src: "busterminal.jpg",
        alt: "Bus terminal",
        caption: "Waterloo, Ontario",
        date: "February 2026",
    },
    {
        src: "busandtrain.JPG",
        alt: "Bus and train",
        caption: "Waterloo, Ontario",
        date: "January 2026",
    },
    {
        src: "carlights.JPG",
        alt: "Car lights",
        caption: "Waterloo, Ontario",
        date: "January 2026",
    },
    {
        src: "deer.jpg",
        alt: "Deer",
        caption: "Manitoulin Island",
        date: "June 2025",
    },
    {
        src: "uptownsunset.jpg",
        alt: "Uptown sunset",
        caption: "Waterloo, Ontario",
        date: "June 2025",
    },
    {
        src: "peoplewalking.JPG",
        alt: "People walking",
        caption: "Waterloo, Ontario",
        date: "January 2026",
    },
];
