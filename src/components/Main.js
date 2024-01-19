import { memo } from "react";
import { FormAddPost } from "./FormAddPost";
import { Posts } from "./Posts";

const Main = memo(function Main() {
    // const { posts, onAddPost } = usePosts();
    return (
        <main>
            <FormAddPost />
            <Posts />
        </main>
    );
});

export { Main };
