<script>
    import { onMount } from "svelte";
    import { marked } from "marked";

    // @ts-ignore
    import { prompt_map, addItem, emptyItem } from "./../store.js";

    let mid_version_number = 0;
    let mid_version = "";
    let markdown = "";

    /**
     * @param {string} str
     */
    function isUnderf(str) {
        return typeof str === "undefined";
    }
    onMount(() => {
        // @ts-ignore
        prompt_map.subscribe((val) => (mid_version = val["banben"]));
        if (!isUnderf(mid_version)) {
            let splitArray = mid_version.split(" ");
            mid_version_number = Number(splitArray[splitArray.length - 1]);
        }

        fetch("../md/version_51.md")
            .then((response) => response.text())
            .then((data) => {
                markdown = data;
            })
            .catch((error) => {
                console.error("Error fetching markdown file:", error);
            });
    });
    function changeRadio() {
        addItem("banben", mid_version);
    }
    function removeBanben() {
        emptyItem("banben");
    }
</script>

<div class="flex flex-row">
    <div class="w-4/12">
        <span
            class="box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 py-1 text-2xl"
            >选择Midjourney版本</span
        >
        <div class="flex flex-col mt-8">
            <label>
                <input
                    type="radio"
                    bind:group={mid_version}
                    on:change={changeRadio}
                    value={"--v 5.1"}
                />
                v5.1 (默认)
            </label>
            <label>
                <input
                    type="radio"
                    bind:group={mid_version}
                    on:change={changeRadio}
                    value={"--style raw"}
                />
                v5.1 style raw (v5.1的去除美学风格)
            </label>
            <label>
                <input
                    type="radio"
                    bind:group={mid_version}
                    on:change={changeRadio}
                    value={"--v 5"}
                />
                v5.0
            </label>

            <label>
                <input
                    type="radio"
                    bind:group={mid_version}
                    on:change={changeRadio}
                    value={"--v 4"}
                />
                v4
            </label>
            <br />
            <hr />
            <br />
            <label>
                <input
                    type="radio"
                    bind:group={mid_version}
                    on:change={changeRadio}
                    value={"--niji 5"}
                />
                niji 5 (动漫系列)
            </label>

            <label>
                <input
                    type="radio"
                    bind:group={mid_version}
                    on:change={changeRadio}
                    value={"--niji 5 --style cute"}
                />
                niji 5 style cute (可爱风)
            </label>

            <label>
                <input
                    type="radio"
                    bind:group={mid_version}
                    on:change={changeRadio}
                    value={"--niji 5 --style expressive"}
                />
                niji 5 style expressive (表现力增强)
            </label>

            <label>
                <input
                    type="radio"
                    bind:group={mid_version}
                    on:change={changeRadio}
                    value={"--niji 5 --style scenic"}
                />
                niji 5 style scenic (风景画)
            </label>
            <button
                class="mt-6 bg-cyan-500 hover:bg-cyan-600 w-24"
                on:click={removeBanben}>清空选择</button
            >
        </div>
    </div>
    <div class="w-8/12">
        <pre class="custom-pre w-11/12 p-4 whitespace-pre-wrap text-base">
            {@html marked.parse(markdown)}
        </pre>
    </div>
</div>
