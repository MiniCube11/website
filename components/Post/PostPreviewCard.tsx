import Link from "next/link";
import { PostMetadata } from "@/lib/posts/PostMetadata";
import { timestampToDate } from "@/lib/transformers/formatDate";

const PostPreviewCard = (post: PostMetadata) => {
    const date = timestampToDate({ timestamp: post.date });

    return (
        <Link href={`/writing/${post.slug}`} className="group">
            <div className="px-5 py-5 rounded-md border dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 h-32 flex flex-col justify-between">
                <p className="font-semibold">{post.title} <span className="ml-1 hidden group-hover:inline-block">→</span></p>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{date}</p>
            </div>
        </Link>
    )
}

export default PostPreviewCard;