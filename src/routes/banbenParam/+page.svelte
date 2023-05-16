<script>
    // @ts-ignore
    import { prompt_str } from "./../store.js";
    let mid_version = "";
    $prompt_str = mid_version;
</script>

<slot>
    <div class="flex-none p-4 border-b">
        <textarea
            id="prompt"
            class="block w-full h-32 mt-2 border border-gray-300 rounded-md"
            bind:value={mid_version}
        />
    </div>
</slot>
<h2>选择Midjourney版本</h2>
<div class="flex flex-col">
    <label>
        <input type="radio" bind:group={mid_version} value={"--v 5.1"} />
        v5.1
    </label>

    <label>
        <input type="radio" bind:group={mid_version} value={"--v 5"} />
        v5.0
    </label>

    <label>
        <input type="radio" bind:group={mid_version} value={"--v 4"} />
        v4
    </label>
</div>
<br />
