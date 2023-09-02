<script>
    import { onMount } from "svelte";
    import { marked } from "marked";

    // @ts-ignore
    import { style_map, addStyle, emptyStyle } from "./../store.js";

    let animeText = "";
    let markdown = "";

    /**
     * @param {string} str
     */
    function isUnderf(str) {
        return typeof str === "undefined";
    }
    onMount(() => {
        // @ts-ignore
        style_map.subscribe((val) => (animeText = val["anime"]));
      

        fetch("../md/anime.md")
            .then((response) => response.text())
            .then((data) => {
                markdown = data;
            })
            .catch((error) => {
                console.error("Error fetching markdown file:", error);
            });
    });
    function changeRadio() {
        addStyle("anime", animeText);
    }
    function removeBanben() {
        emptyStyle("anime");
    }
</script>

<div class="flex flex-row">
    <div class="w-3/12">
        <span
            class="box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 py-1 text-2xl"
            >选择动漫风格</span
        >
        <div class="flex flex-col mt-8">
            <label>
                <input
                    type="radio"
                    bind:group={animeText}
                    on:change={changeRadio}
                    value={" Chibi Anime Style "}
                />
                Chibi Anime Style
            </label>
            <label>
                <input
                    type="radio"
                    bind:group={animeText}
                    on:change={changeRadio}
                    value={" Gakuen Anime Style "}
                />
                Gakuen Anime Style
            </label>
            <label>
                <input
                    type="radio"
                    bind:group={animeText}
                    on:change={changeRadio}
                    value={" Gekiga Anime Style "}
                />
                Gekiga Anime Style
            </label>
            <label>
                <input
                    type="radio"
                    bind:group={animeText}
                    on:change={changeRadio}
                    value={" J Horror Anime Style "}
                />
                J Horror Anime Style
            </label>
            <label>
                <input
                    type="radio"
                    bind:group={animeText}
                    on:change={changeRadio}
                    value={" Jidaimono Anime Style "}
                />
                Jidaimono Anime Style
            </label>
            <label>
                <input
                    type="radio"
                    bind:group={animeText}
                    on:change={changeRadio}
                    value={" Kawaii Anime Style "}
                />
                Kawaii Anime Style
            </label>
            <label>
                <input
                    type="radio"
                    bind:group={animeText}
                    on:change={changeRadio}
                    value={" Mecha Anime Style "}
                />
                Mecha Anime Style
            </label>
            <label>
                <input
                    type="radio"
                    bind:group={animeText}
                    on:change={changeRadio}
                    value={" Realistic Anime Style "}
                />
                Realistic Anime Style
            </label>
            <label>
                <input
                    type="radio"
                    bind:group={animeText}
                    on:change={changeRadio}
                    value={" Semi-Realistic Anime Style "}
                />
                Semi-Realistic Anime Style
            </label>
            <label>
                <input
                    type="radio"
                    bind:group={animeText}
                    on:change={changeRadio}
                    value={" Shoji Anime Style "}
                />
                Shoji Anime Style
            </label>
            <label>
                <input
                    type="radio"
                    bind:group={animeText}
                    on:change={changeRadio}
                    value={" Kemonomimi Anime Style "}
                />
                Kemonomimi Anime Style
            </label>
            
            <button
                class="mt-6 bg-cyan-500 hover:bg-cyan-600 w-24"
                on:click={removeBanben}>清空选择</button
            >
        </div>
    </div>
    <div class="w-9/12">
        <article class="prose max-w-screen-lg prose-code:bg-gray-200 h-196 overflow-y-scroll p-3">
            {@html marked.parse(markdown)}
        </article>
    </div>
</div>
