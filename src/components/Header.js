import { usePosts } from "../PosrtContext";
import { Results } from "./Results";
import { SearchPosts } from "./SearchPosts";

export function Header() {
    // 3) consuming context value
    const { onClearPosts } = usePosts();

    return (
        <>
            <header>
                <h1>
                    <span>⚛️</span>The Atomic Blog
                </h1>
                <div>
                    <Results />
                    <SearchPosts />
                    <button onClick={onClearPosts}>Clear posts</button>
                </div>
            </header>
        </>
    );
}
