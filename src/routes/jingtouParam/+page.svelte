<script>
    import { onMount } from "svelte";
    import { marked } from "marked";

    // @ts-ignore
    import { style_map, addStyle, emptyStyle } from "./../store.js";

    let compositionText = "";
    let markdown = "";

    /**
     * @param {string} str
     */
    function isUnderf(str) {
        return typeof str === "undefined";
    }
    onMount(() => {
        // @ts-ignore
        style_map.subscribe((val) => (compositionText = val["jingtou"]));
      

        fetch("../md/composition.md")
            .then((response) => response.text())
            .then((data) => {
                markdown = data;
            })
            .catch((error) => {
                console.error("Error fetching markdown file:", error);
            });
    });
    function changeRadio() {
        addStyle("jingtou", compositionText);
    }
    function removeBanben() {
        emptyStyle("jingtou");
    }
</script>

<div class="flex flex-row">
    <div class="w-3/12">
        <span
            class="box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 py-1 text-2xl"
            >选择镜头视角</span
        >
        <div class="flex flex-col mt-8">
            <label>
                <input
                    type="radio"
                    bind:group={compositionText}
                    on:change={changeRadio}
                    value={" Bird View "}
                />
                Bird View（鸟瞰）
            </label>
            <label>
                <input
                    type="radio"
                    bind:group={compositionText}
                    on:change={changeRadio}
                    value={" Close Up "}
                />
                Beautiful Lighting（特写镜头）
            </label>
            <label>
                <input
                    type="radio"
                    bind:group={compositionText}
                    on:change={changeRadio}
                    value={" Drone "}
                />
                Drone（无人机视角）
            </label>
            <label>
                <input
                    type="radio"
                    bind:group={compositionText}
                    on:change={changeRadio}
                    value={" Extreme Close Up "}
                />
                Extreme Close Up（极度特写）
            </label>
            <label>
                <input
                    type="radio"
                    bind:group={compositionText}
                    on:change={changeRadio}
                    value={" Front View "}
                />
                Front View（正面视角）
            </label>
            <label>
                <input
                    type="radio"
                    bind:group={compositionText}
                    on:change={changeRadio}
                    value={" GoPro "}
                />
                GoPro（自拍视角）
            </label>
            <label>
                <input
                    type="radio"
                    bind:group={compositionText}
                    on:change={changeRadio}
                    value={" Macro Shot "}
                />
                Macro Shot（显微镜视角）
            </label>
            <label>
                <input
                    type="radio"
                    bind:group={compositionText}
                    on:change={changeRadio}
                    value={" Symmetrical "}
                />
                Symmetrical（视觉对称）
            </label>
            <label>
                <input
                    type="radio"
                    bind:group={compositionText}
                    on:change={changeRadio}
                    value={" Up View "}
                />
                Up View（抵近观察视角）
            </label>
            <label>
                <input
                    type="radio"
                    bind:group={compositionText}
                    on:change={changeRadio}
                    value={" Vanishing Point "}
                />
                Vanishing Point（消失点）
            </label>
            
            <button
                class="mt-6 bg-cyan-500 hover:bg-cyan-600 w-24"
                on:click={removeBanben}>清空选择</button
            >
        </div>
    </div>
    <div class="w-9/12 h-screen">
        <article class="prose max-w-screen-md prose-code:bg-gray-200 h-4/5 overflow-y-scroll p-3">
            {@html marked.parse(markdown)}
        </article>
    </div>
</div>
