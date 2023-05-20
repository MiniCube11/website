import Link from "next/link";
import { PostMetadata } from "@/lib/posts/PostMetadata";
import { timestampToDate } from "@/lib/transformers/formatDate";

const PostPreviewCard = (post: PostMetadata) => {
    const date = timestampToDate({ timestamp: post.date });

    return (
        <Link href={`/writing/${post.slug}`} className="group">
            <div className="px-5 py-3 rounded-md border hover:bg-gray-100">
                <p className="font-semibold">{post.title} <span className="ml-1 hidden group-hover:inline-block">→</span></p>
                <p className="text-sm text-gray-600">{date}</p>
            </div>
        </Link>
    )
}

export default PostPreviewCard;