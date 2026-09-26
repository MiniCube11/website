import PostPreview from "@/components/Post/PostPreview";
import MailingListForm from "@/components/Writing/MailingListForm";
import getPostMetaData from "@/lib/posts/getPostMetadata";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Writing - Ching Lam Lau",
    description: "A collection of my writing",
};

const WritingPage = () => {
    const postMetadata = getPostMetaData();

    return (
        <div className="my-20 mx-auto max-w-2xl p-4 space-y-16">
            <h2>Writing</h2>
            <div className="space-y-3">
                {postMetadata.map((post) => (
                    <PostPreview key={post.slug} {...post} />
                ))}
            </div>
            <MailingListForm />
        </div>
    )
};

export default WritingPage;
