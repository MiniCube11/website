import Link from "next/link";
import { PostMetadata } from "@/lib/posts/PostMetadata";
import { timestampToDate } from "@/lib/transformers/formatDate";

const PostPreviewCard = (post: PostMetadata) => {
    const date = timestampToDate({ timestamp: post.date });

    return (
        <Link href={`/writing/${post.slug}`} className="group">
            <div className="px-5 py-3 rounded-md border hover:bg-gray-50">
                <p className="font-semibold">{post.title}</p>
                <p className="text-sm text-gray-600">{date}</p>
            </div>
        </Link>
    )
}

export default PostPreviewCard;