<script>
    import { onMount } from "svelte";
    import { marked } from "marked";

    // @ts-ignore
    import { style_map,addStyle,emptyStyle } from "./../store.js";

    let artistText = "";
    let markdown = "";

    /**
     * @param {string} str
     */
    function isUnderf(str) {
        return typeof str === "undefined";
    }
    onMount(() => {
        // @ts-ignore
        style_map.subscribe((val) => (artistText = val["artist"]));
      

        fetch("../md/artist.md")
            .then((response) => response.text())
            .then((data) => {
                markdown = data;
            })
            .catch((error) => {
                console.error("Error fetching markdown file:", error);
            });
    });
    function changeRadio() {
        addStyle("artist", artistText);
    }
    function removeBanben() {
        emptyStyle("artist");
    }
</script>

<div class="flex flex-row">
    <div class="w-3/12">
        <span
            class="box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 py-1 text-2xl"
            >选择艺术家风格</span
        >
        <div class="flex flex-col mt-8">
            <label>
                <input
                    type="radio"
                    bind:group={artistText}
                    on:change={changeRadio}
                    value={" Claude Monet "}
                />
                Claude Monet（莫奈）
            </label>
            <label>
                <input
                    type="radio"
                    bind:group={artistText}
                    on:change={changeRadio}
                    value={" Jackson Pollock "}
                />
                Jackson Pollock（波洛克）
            </label>
            <label>
                <input
                    type="radio"
                    bind:group={artistText}
                    on:change={changeRadio}
                    value={" Leonardo da Vinci "}
                />
                Leonardo da Vinci（达·芬奇）
            </label>
            <label>
                <input
                    type="radio"
                    bind:group={artistText}
                    on:change={changeRadio}
                    value={" Max Ernst "}
                />
                Max Ernst（马克斯·恩斯特）
            </label>
            <label>
                <input
                    type="radio"
                    bind:group={artistText}
                    on:change={changeRadio}
                    value={" Norman Rockwell "}
                />
                Norman Rockwell（诺曼·洛克威尔）
            </label>
            <label>
                <input
                    type="radio"
                    bind:group={artistText}
                    on:change={changeRadio}
                    value={" Paul Cézanne "}
                />
                Paul Cézanne（保罗·塞尚）
            </label>
            <label>
                <input
                    type="radio"
                    bind:group={artistText}
                    on:change={changeRadio}
                    value={" Peter Paul Rubens "}
                />
                Peter Paul Rubens（鲁本斯）
            </label>
            <label>
                <input
                    type="radio"
                    bind:group={artistText}
                    on:change={changeRadio}
                    value={" Up View "}
                />
                Up View（抵近观察视角）
            </label>
            <label>
                <input
                    type="radio"
                    bind:group={artistText}
                    on:change={changeRadio}
                    value={" Pablo Picasso "}
                />
                Pablo Picasso（毕加索）
            </label>
            <label>
                <input
                    type="radio"
                    bind:group={artistText}
                    on:change={changeRadio}
                    value={" Rembrandt Harmenszoon van Rijn "}
                />
                Rembrandt Harmenszoon van Rijn（伦勃朗）
            </label>
            <label>
                <input
                    type="radio"
                    bind:group={artistText}
                    on:change={changeRadio}
                    value={" Salvador Dali "}
                />
                Salvador Dali（达利）
            </label>
            <label>
                <input
                    type="radio"
                    bind:group={artistText}
                    on:change={changeRadio}
                    value={" Vincent van Gogh "}
                />
                Vincent van Gogh（梵高）
            </label>
            <label>
                <input
                    type="radio"
                    bind:group={artistText}
                    on:change={changeRadio}
                    value={" Wassily Kandinsky "}
                />
                Wassily Kandinsky（康定斯基）
            </label>
            
            <button
                class="mt-6 bg-cyan-500 hover:bg-cyan-600 w-24"
                on:click={removeBanben}>清空选择</button
            >
        </div>
    </div>
    <div class="w-9/12">
        <article class="prose max-w-screen-lg prose-code:bg-gray-200 overflow-y-scroll p-3 h-196">
            {@html marked.parse(markdown)}
        </article>
    </div>
</div>
