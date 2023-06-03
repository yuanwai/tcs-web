<script>
    import { onMount } from "svelte";
    // @ts-ignore
    import { prompt_map, addItem, emptyItem } from "./../store.js";
    import { empty } from "svelte/internal";
    let tile = "";
    let tileValue = false;
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
    });
    function changeRate() {
        addItem("tile", "--tile ");
    }
    function removeTile() {
        emptyItem("tile");
    }
</script>

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
