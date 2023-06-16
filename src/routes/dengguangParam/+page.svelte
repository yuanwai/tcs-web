<script>
    import { onMount } from "svelte";
    import { marked } from "marked";

    // @ts-ignore
    import { prompt_map, addItem, emptyItem } from "./../store.js";

    let lightText = "";
    let markdown = "";

    /**
     * @param {string} str
     */
    function isUnderf(str) {
        return typeof str === "undefined";
    }
    onMount(() => {
        // @ts-ignore
        prompt_map.subscribe((val) => (lightText = val["dengguang"]));
      

        fetch("../md/light.md")
            .then((response) => response.text())
            .then((data) => {
                markdown = data;
            })
            .catch((error) => {
                console.error("Error fetching markdown file:", error);
            });
    });
    function changeRadio() {
        addItem("dengguang", lightText);
    }
    function removeBanben() {
        emptyItem("dengguang");
    }
</script>

<div class="flex flex-row">
    <div class="w-3/12">
        <span
            class="box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 py-1 text-2xl"
            >选择灯光效果</span
        >
        <div class="flex flex-col mt-8">
            <label>
                <input
                    type="radio"
                    bind:group={lightText}
                    on:change={changeRadio}
                    value={" Back Lighting "}
                />
                Back Lighting（逆光）
            </label>
            <label>
                <input
                    type="radio"
                    bind:group={lightText}
                    on:change={changeRadio}
                    value={" Beautiful Lighting "}
                />
                Beautiful Lighting（魅力光线）
            </label>
            <label>
                <input
                    type="radio"
                    bind:group={lightText}
                    on:change={changeRadio}
                    value={" Bright Lighting "}
                />
                Bright Lighting（明亮采光）
            </label>
            <label>
                <input
                    type="radio"
                    bind:group={lightText}
                    on:change={changeRadio}
                    value={" Cold Lighting "}
                />
                Cold Lighting（冷色光线）
            </label>
            <label>
                <input
                    type="radio"
                    bind:group={lightText}
                    on:change={changeRadio}
                    value={" Cove Lighting "}
                />
                Cove Lighting（壁角灯）
            </label>
            <label>
                <input
                    type="radio"
                    bind:group={lightText}
                    on:change={changeRadio}
                    value={" Dramatic Lighting "}
                />
                Dramatic Lighting（舞台灯光）
            </label>
            <label>
                <input
                    type="radio"
                    bind:group={lightText}
                    on:change={changeRadio}
                    value={" Gold Hour Lighting "}
                />
                Gold Hour Lighting（余晖晚霞）
            </label>
            <label>
                <input
                    type="radio"
                    bind:group={lightText}
                    on:change={changeRadio}
                    value={" Hard Lighting "}
                />
                Hard Lighting（硬朗照明）
            </label>
            <label>
                <input
                    type="radio"
                    bind:group={lightText}
                    on:change={changeRadio}
                    value={" Low-Key Lighting "}
                />
                Low-Key Lighting（低键照明）
            </label>
            <label>
                <input
                    type="radio"
                    bind:group={lightText}
                    on:change={changeRadio}
                    value={" Mood Lighting "}
                />
                Mood Lighting（氛围灯）
            </label>
            <label>
                <input
                    type="radio"
                    bind:group={lightText}
                    on:change={changeRadio}
                    value={" Moody Lighting "}
                />
                Moody Lighting (情绪灯)
            </label>
            <label>
                <input
                    type="radio"
                    bind:group={lightText}
                    on:change={changeRadio}
                    value={" Morning Lighting "}
                />
                Morning Lighting (晨光)
            </label>
            <label>
                <input
                    type="radio"
                    bind:group={lightText}
                    on:change={changeRadio}
                    value={" Neon Lighting "}
                />
                Neon Lighting（霓虹灯照明）
            </label>

            <label>
                <input
                    type="radio"
                    bind:group={lightText}
                    on:change={changeRadio}
                    value={" Soft Lighting "}
                />
                Soft Lighting（柔和照明）
            </label>
            <label>
                <input
                    type="radio"
                    bind:group={lightText}
                    on:change={changeRadio}
                    value={" Strobe Lighting "}
                />
                Strobe Lighting（闪光灯）
            </label>

            <label>
                <input
                    type="radio"
                    bind:group={lightText}
                    on:change={changeRadio}
                    value={" Studio Lighting "}
                />
                Studio Lighting（工作室灯光）
            </label>
            <label>
                <input
                    type="radio"
                    bind:group={lightText}
                    on:change={changeRadio}
                    value={" Volumetric Lighting "}
                />
                Volumetric Lighting（体积光）
            </label>
            <label>
                <input
                    type="radio"
                    bind:group={lightText}
                    on:change={changeRadio}
                    value={" Crepuscular Rays "}
                />
                Crepuscular Rays（黄昏光）
            </label>
            <label>
                <input
                    type="radio"
                    bind:group={lightText}
                    on:change={changeRadio}
                    value={" Sunbeams "}
                />
                Sunbeams（早晨金色的阳光）
            </label>

            <label>
                <input
                    type="radio"
                    bind:group={lightText}
                    on:change={changeRadio}
                    value={" Shimmering Light "}
                />
                Shimmering Light（闪光的夜）
            </label>
            <label>
                <input
                    type="radio"
                    bind:group={lightText}
                    on:change={changeRadio}
                    value={" Rembrandt Lighting "}
                />
                Rembrandt Lighting（伦勃朗特效）
            </label>
            <label>
                <input
                    type="radio"
                    bind:group={lightText}
                    on:change={changeRadio}
                    value={" Veiling Flare "}
                />
                Veiling Flare（透明毛玻璃）
            </label>
            <label>
                <input
                    type="radio"
                    bind:group={lightText}
                    on:change={changeRadio}
                    value={" Rays of Shimmering Light "}
                />
                Rays of Shimmering Light（闪烁光线）
            </label>
            <label>
                <input
                    type="radio"
                    bind:group={lightText}
                    on:change={changeRadio}
                    value={" Godrays "}
                />
                Godrays（神光）
            </label>
            <label>
                <input
                    type="radio"
                    bind:group={lightText}
                    on:change={changeRadio}
                    value={" Conter-Jour "}
                />
                Conter-Jour（逆光照明）
            </label>
            <label>
                <input
                    type="radio"
                    bind:group={lightText}
                    on:change={changeRadio}
                    value={" Bioluminescence "}
                />
                Bioluminescence（生物发光）
            </label>
            <label>
                <input
                    type="radio"
                    bind:group={lightText}
                    on:change={changeRadio}
                    value={" Overcast "}
                />
                Overcast（阴天光线）
            </label>
            <label>
                <input
                    type="radio"
                    bind:group={lightText}
                    on:change={changeRadio}
                    value={" Blue Hour "}
                />
                Blue Hour（蓝光时刻）
            </label>
            <label>
                <input
                    type="radio"
                    bind:group={lightText}
                    on:change={changeRadio}
                    value={" Torchlit "}
                />
                Torchlit（烛火光线）
            </label>

            <button
                class="mt-6 bg-cyan-500 hover:bg-cyan-600 w-24"
                on:click={removeBanben}>清空选择</button
            >
        </div>
    </div>
    <div class="w-9/12 h-screen">
        <article class="prose max-w-screen-lg prose-code:bg-gray-200 h-4/5 overflow-y-scroll p-3">
            {@html marked.parse(markdown)}
        </article>
    </div>
</div>
