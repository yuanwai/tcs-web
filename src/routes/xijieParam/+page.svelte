<script>
    import { onMount } from "svelte";
    import { marked } from "marked";
    // @ts-ignore
    import { prompt_map, addItem, emptyItem } from "./../store.js";
    let xijie = "--quality 1";
    let markdown = "";
    onMount(() => {
        // @ts-ignore
        prompt_map.subscribe((val) => (xijie = val["xijie"]));

        fetch("../md/quality.md")
            .then((response) => response.text())
            .then((data) => {
                markdown = data;
            })
            .catch((error) => {
                console.error("Error fetching markdown file:", error);
            });
    });
    function changeRadio() {
        addItem("xijie", xijie);
    }
    function removeQuality() {
        emptyItem("xijie");
    }
</script>

<div class="flex flex-row">
    <div class="w-4/12">
        <span
            class="box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 py-1 text-2xl"
            >选择细节（quality）</span
        >
        <div class="flex flex-col mt-5">
            <label>
                <input
                    type="radio"
                    bind:group={xijie}
                    on:change={changeRadio}
                    value={"--quality .25"}
                />
                .25
            </label>

            <label>
                <input
                    type="radio"
                    bind:group={xijie}
                    on:change={changeRadio}
                    value={"--quality .5"}
                />
                .5
            </label>

            <label>
                <input
                    type="radio"
                    bind:group={xijie}
                    on:change={changeRadio}
                    value={"--quality 1"}
                />
                1
            </label>
            <button
                class="mt-6 bg-cyan-500 hover:bg-cyan-600 w-24"
                on:click={removeQuality}>清空选择</button
            >
        </div>
    </div>
    <div class="w-8/12 h-screen">
        <article class="prose h-4/5 overflow-y-scroll p-3">
            {@html marked.parse(markdown)}
        </article>
    </div>
</div>
