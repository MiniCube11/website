import Link from "next/link";
import { PostMetadata } from "@/lib/posts/PostMetadata";
import { timestampToDate } from "@/lib/transformers/formatDate";

const PostPreview = (post: PostMetadata) => {
    const date = timestampToDate({ timestamp: post.date });

    return (
        <Link href={`/writing/${post.slug}`} className="flex justify-between w-full p-2 -mx-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
            <p className="text-lg font-semibold">{post.title}</p>
            <p className="text-lg text-gray-500 dark:text-gray-200">{date}</p>
        </Link>
    )
}

export default PostPreview;