import Link from "next/link";
import { PostMetadata } from "@/lib/posts/PostMetadata";
import { timestampToDate } from "@/lib/transformers/formatDate";

const PostPreview = (post: PostMetadata) => {
    const date = timestampToDate({ timestamp: post.date });

    return (
        <Link href={`/writing/${post.slug}`}>
            <div className="flex justify-between max-w-screen-sm p-3 mb-3 rounded-md hover:bg-gray-200 transition-colors">    
                <p className="text-lg font-semibold">{post.title}</p>
                <p className="text-lg text-gray-500">{date}</p>
            </div>
        </Link>
    )
}

export default PostPreview;