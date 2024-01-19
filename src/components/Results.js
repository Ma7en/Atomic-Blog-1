import { usePosts } from "../PosrtContext";

export function Results() {
    const { posts } = usePosts();

    return (
        <>
            <p>🚀 {posts.length} atomic posts found</p>
        </>
    );
}
