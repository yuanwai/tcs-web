<script>
    // @ts-ignore
    import { prompt_str } from "./../store.js";
    let ck_bi = "";
    $prompt_str = ck_bi;
</script>

<slot>
    <div class="flex-none p-4 border-b">
        <textarea
            id="prompt"
            class="block w-full h-32 mt-2 border border-gray-300 rounded-md"
            bind:value={ck_bi}
        />
    </div>
</slot>
<h2>选择长宽比</h2>
<div class="flex flex-col">
    <label>
        <input type="radio" bind:group={ck_bi} value={"--ar 3:2"} />
        3:2
    </label>

    <label>
        <input type="radio" bind:group={ck_bi} value={"--ar 2:1"} />
        2:1
    </label>

    <label>
        <input type="radio" bind:group={ck_bi} value={"--ar 1:1"} />
       1:1
    </label>
</div>
