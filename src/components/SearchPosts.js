import { usePosts } from "../PosrtContext";

export function SearchPosts() {
    const { searchQuery, setSearchQuery } = usePosts();

    return (
        <>
            <input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search posts..."
            />
        </>
    );
}
