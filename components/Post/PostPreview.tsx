import Link from "next/link";
import { PostMetadata } from "@/lib/posts/PostMetadata";
import { timestampToDate } from "@/lib/transformers/formatDate";

const PostPreview = (post: PostMetadata) => {
    const date = timestampToDate({ timestamp: post.date });

    return (
        <Link href={`/writing/${post.slug}`} className="group block lg:flex justify-between w-full p-2 -mx-2 rounded-md">
            <p className="mb-2 lg:mb-0 text-lg font-semibold group-hover:underline">{post.title}</p>
            <p className="mt-1 lg:m-0 lg:text-lg text-gray-500 dark:text-gray-200">{date}</p>
        </Link>
    )
}

export default PostPreview;