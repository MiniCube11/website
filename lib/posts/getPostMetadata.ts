import fs from "fs";
import matter from "gray-matter";

import { PostMetadata } from "./PostMetadata";

const getPostMetaData = (): PostMetadata[] => {
    const folder = "posts/";
    const files = fs.readdirSync(folder);
    const markdownPosts = files.filter((file) => file.endsWith(".md"));
    
    const posts = markdownPosts.map((fileName) => {
        const folder = "posts/";
        const fileContents = fs.readFileSync(`${folder}${fileName}`, "utf-8");
        const matterResult = matter(fileContents);
        return {
            title: matterResult.data.title,
            date: matterResult.data.date,
            description: matterResult.data.description,
            slug: fileName.replace(".md", ""),
        }
    }).sort((post1, post2) => {
        return (post1.date > post2.date ? -1 : 1);
    });

    return posts;
};

export default getPostMetaData;