<script>
    import { onMount } from "svelte";
    import { marked } from "marked";
    // @ts-ignore
    import { prompt_map, addItem, emptyItem } from "./../store.js";

    let tile = "";
    let tileValue = false;
    let markdown = "";
    /**
     * @param {string} str
     */
    function isUnderf(str) {
        return typeof str === "undefined";
    }

    /**
     * @param {string | null} str
     */
    function isBlank(str) {
        if (str == null) return false;
        else return str.trim() === "";
    }

    onMount(() => {
        // @ts-ignore
        prompt_map.subscribe((val) => (tile = val["tile"]));
        if (!isUnderf(tile)) {
            tileValue = isBlank(tile);
        }
        fetch("../md/tile.md")
            .then((response) => response.text())
            .then((data) => {
                markdown = data;
            })
            .catch((error) => {
                console.error("Error fetching markdown file:", error);
            });
    });
    function changeRate() {
        if (tileValue) addItem("tile", "--tile ");
        else removeTile();
    }
    function removeTile() {
        emptyItem("tile");
    }
</script>

<div class="flex flex-row">
    <div class="w-4/12">
        <span
            class="box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 py-1 text-2xl"
            >完成度:</span
        >
        <div class="flex flex-row mt-5">
            <label for="">循环图案（如地板样式设计）:</label>
            <input
                class="w-10"
                type="checkbox"
                bind:checked={tileValue}
                on:change={changeRate}
            />
        </div>

        <button
            class="mt-6 bg-cyan-500 hover:bg-cyan-600 w-24"
            on:click={removeTile}>清空选择</button
        >
    </div>
    <div class="w-8/12">
        <article class="prose h-196 overflow-y-scroll p-3">
            {@html marked.parse(markdown)}
        </article>
    </div>
</div>
