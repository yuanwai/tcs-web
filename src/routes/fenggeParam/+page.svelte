<script>
    import { onMount } from "svelte";
    import { marked } from "marked";
    // @ts-ignore
    import { prompt_map, addItem, emptyItem } from "./../store.js";
    let fengge = "";
    let styleSize = 100;
    let markdown = "";
    /**
     * @param {string} str
     */
    function isUnderf(str) {
        return typeof str === "undefined";
    }
    onMount(() => {
        // @ts-ignore
        prompt_map.subscribe((val) => (fengge = val["fg"]));
        if (!isUnderf(fengge)) {
            let splitArray = fengge.split(" ");
            styleSize = Number(splitArray[splitArray.length - 1]);
        }

        fetch("../md/stylize.md")
            .then((response) => response.text())
            .then((data) => {
                markdown = data;
            })
            .catch((error) => {
                console.error("Error fetching markdown file:", error);
            });
    });
    function changeRate() {
        addItem("fg", "--s " + styleSize);
    }
    function removeFg() {
        emptyItem("fg");
    }
</script>

<div class="flex flex-row">
    <div class="w-4/12">
        <span
            class="box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 py-1 text-2xl"
            >美化</span
        >
        <div class="flex flex-col mt-5">
            <input
                class="w-64"
                type="range"
                bind:value={styleSize}
                min="0"
                max="1000"
                on:change={changeRate}
            />
            <input
                class="w-64 border-2 border-stone-400"
                bind:value={styleSize}
                on:input={changeRate}
            />

            <button
                class="mt-6 bg-cyan-500 hover:bg-cyan-600 w-24"
                on:click={removeFg}>清空选择</button
            >
        </div>
    </div>
    <div class="w-8/12 h-screen">
        <article class="prose h-4/5 overflow-y-scroll p-3">
            {@html marked.parse(markdown)}
        </article>
    </div>
</div>
