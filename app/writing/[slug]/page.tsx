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
        <>
            <h1>{post.data.title}</h1>
            <p>{post.data.date} | Ching Lam Lau</p>
            <Markdown>{post.content}</Markdown>
        </>
    )
};

export default PostPage;