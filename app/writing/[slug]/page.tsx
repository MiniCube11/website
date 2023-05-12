import Markdown from "markdown-to-jsx";
import getPostContent from "@/lib/posts/getPostContent";
import getPostMetaData from "@/lib/posts/getPostMetadata";

export const generateStaticParams =async () => {
    const posts = getPostMetaData();
    return posts.map((post) => ({
        slug: post.slug,
    }))
}

const PostPage = (props: any) => {
    const slug = props.params.slug;
    const post = getPostContent(slug);
    return (
        <div className="mt-20 mx-auto max-w-2xl">
            <h1 className="mb-6">{post.data.title}</h1>
            <p className="text-gray-700 mb-14 dark:text-gray-400">{post.data.date}<span className="ml-8">Ching Lam Lau</span></p>
            <div className="post-content mb-20">
                <Markdown>{post.content}</Markdown>
            </div>
        </div>
    )
};

export default PostPage;