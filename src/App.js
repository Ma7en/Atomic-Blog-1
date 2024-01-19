import { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import { PostProvider } from "./PosrtContext";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Archive } from "./components/Archive";
import { Footer } from "./components/Footer";

export function createRandomPost() {
    return {
        title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
        body: faker.hacker.phrase(),
    };
}

function App() {
    // Whenever `isFakeDark` changes, we toggle the `fake-dark-mode` class on the HTML element (see in "Elements" dev tool).
    const [isFakeDark, setIsFakeDark] = useState(false);

    useEffect(
        function () {
            document.documentElement.classList.toggle("fake-dark-mode");
        },
        [isFakeDark]
    );

    return (
        <PostProvider>
            <section>
                <button
                    onClick={() => setIsFakeDark((isFakeDark) => !isFakeDark)}
                    className="btn-fake-dark-mode"
                >
                    {isFakeDark ? "☀️" : "🌙"}
                </button>

                <Header />
                <Main />
                <Archive />
                <Footer />
            </section>
        </PostProvider>
    );
}

export default App;
