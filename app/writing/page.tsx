import PostPreview from "@/components/Post/PostPreview";
import getPostMetaData from "@/lib/posts/getPostMetadata";

const WritingPage = () => {
    const postMetadata = getPostMetaData();
    const posts = postMetadata.map((post) => (
        <PostPreview {...post} />
    ))

    return (
        <div>
            <h2>Writing</h2>
            <div>
                {posts}
            </div>
        </div>
    )
};

export default WritingPage;