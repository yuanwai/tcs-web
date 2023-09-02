<script>
    import { onMount } from "svelte";
    import { marked } from "marked";

    // @ts-ignore
    import { style_map, addStyle, emptyStyle } from "./../store.js";

    let designerText = "";
    let markdown = "";

    /**
     * @param {string} str
     */
    function isUnderf(str) {
        return typeof str === "undefined";
    }
    onMount(() => {
        // @ts-ignore
        style_map.subscribe((val) => (designerText = val["designer"]));
      

        fetch("../md/designer.md")
            .then((response) => response.text())
            .then((data) => {
                markdown = data;
            })
            .catch((error) => {
                console.error("Error fetching markdown file:", error);
            });
    });
    function changeRadio() {
        addStyle("designer", designerText);
    }
    function removeBanben() {
        emptyStyle("designer");
    }
</script>

<div class="flex flex-row">
    <div class="w-3/12">
        <span
            class="box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 py-1 text-2xl"
            >选择Logo设计师风格</span
        >
        <div class="flex flex-col mt-8">
            <label>
                <input
                    type="radio"
                    bind:group={designerText}
                    on:change={changeRadio}
                    value={" Ruth Kedar "}
                />
                Ruth Kedar
            </label>
            <label>
                <input
                    type="radio"
                    bind:group={designerText}
                    on:change={changeRadio}
                    value={" Herbert l. Lubalin "}
                />
                Herbert l. Lubalin
            </label>
            <label>
                <input
                    type="radio"
                    bind:group={designerText}
                    on:change={changeRadio}
                    value={" Paul Rand "}
                />
                Paul Rand
            </label>
            <label>
                <input
                    type="radio"
                    bind:group={designerText}
                    on:change={changeRadio}
                    value={" Walter Landor "}
                />
                Walter Landor
            </label>
            <label>
                <input
                    type="radio"
                    bind:group={designerText}
                    on:change={changeRadio}
                    value={" Wally Olins "}
                />
                Wally Olins
            </label>
            <label>
                <input
                    type="radio"
                    bind:group={designerText}
                    on:change={changeRadio}
                    value={" Milton Glaser "}
                />
                Milton Glaser
            </label>
            <label>
                <input
                    type="radio"
                    bind:group={designerText}
                    on:change={changeRadio}
                    value={" Bob Gill "}
                />
                Bob Gill
            </label>
            <label>
                <input
                    type="radio"
                    bind:group={designerText}
                    on:change={changeRadio}
                    value={" Alan Fletcher "}
                />
                Alan Fletcher
            </label>
            <label>
                <input
                    type="radio"
                    bind:group={designerText}
                    on:change={changeRadio}
                    value={" Chermayeff and Geismar "}
                />
                Chermayeff and Geismar
            </label>
            <label>
                <input
                    type="radio"
                    bind:group={designerText}
                    on:change={changeRadio}
                    value={" Saul Bass "}
                />
                Saul Bass
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
