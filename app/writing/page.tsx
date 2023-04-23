import PostPreview from "@/components/Post/PostPreview";
import getPostMetaData from "@/lib/posts/getPostMetadata";

const WritingPage = () => {
    const postMetadata = getPostMetaData();
    const posts = postMetadata.map((post) => (
        <PostPreview key={post.slug} {...post} />
    ))

    return (
        <div className="mt-20 mx-auto max-w-2xl p-4 space-y-16">
            <h2>Writing</h2>
            <div className="space-y-2">
                {posts}
            </div>
        </div>
    )
};

export default WritingPage;