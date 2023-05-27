import Markdown from "markdown-to-jsx";
import getPostContent from "@/lib/posts/getPostContent";
import getPostMetaData from "@/lib/posts/getPostMetadata";
import { timestampToDate } from "@/lib/transformers/formatDate";
import Link from "next/link";

export const generateStaticParams = async () => {
    const posts = getPostMetaData();
    return posts.map((post) => ({
        slug: post.slug,
    }))
}

const PostPage = (props: any) => {
    const slug = props.params.slug;
    const post = getPostContent(slug);
    const date = timestampToDate({ timestamp: post.data.date, includeDay: true });

    return (
        <div className="my-20 mx-auto max-w-2xl p-4">
            <h1 className="mb-6">{post.data.title}</h1>
            <p className="text-gray-700 mb-14 dark:text-gray-400">{date}<span className="ml-8">Ching Lam Lau</span></p>
            <div className="post-content mb-20">
                <Markdown>{post.content}</Markdown>
            </div>
            <Link href="/writing">
                ← Back to all posts
            </Link>
        </div>
    )
};

export default PostPage;