<script>
    // @ts-nocheck
    // All compenonents import
    import banbenParam from "./banbenParam/+page.svelte";
    import changkuanbiParam from "./changkuanbiParam/+page.svelte";
    import paichuParam from "./paichuParam/+page.svelte";
    import suijiParam from "./suijiParam/+page.svelte";
    import fenggeParam from "./fenggeParam/+page.svelte";
    import xijieParam from "./xijieParam/+page.svelte";
    import zhongziParam from "./zhongziParam/+page.svelte";
    import quanzhongParam from "./quanzhongParam/+page.svelte";
    import repeatParam from "./repeatParam/+page.svelte";
    import stopParam from "./stopParam/+page.svelte";
    import tileParam from "./tileParam/+page.svelte";

    import shejishiParam from "./shejishiParam/+page.svelte";
    import artistParam from "./artist/+page.svelte";
    import sheyingshiParam from "./sheyingshiParam/+page.svelte";
    import dengguangParam from "./dengguangParam/+page.svelte";
    import dongmaParam from "./dongmanParam/+page.svelte";
    import jingtouParam from "./jingtouParam/+page.svelte";

    // @ts-ignore
    import { prompt_map,style_map } from "./store.js";
    let prompt_str = "";
    /**
     * @type {any[]}
     */
    let valuesArray = [];

    let stylesArray = [];

    let activeComponent = "banben"; // 默认渲染字符串参数组件
    const components = {
        banben: banbenParam,
        changkuanbi: changkuanbiParam,
        paichu: paichuParam,
        suiji: suijiParam,
        fengge: fenggeParam,
        xijie: xijieParam,
        zhongzi: zhongziParam,
        quanzhong: quanzhongParam,
        repeat: repeatParam,
        stop: stopParam,
        tile: tileParam,

        shejishi: shejishiParam,
        sheyingshi: sheyingshiParam,
        dengguang: dengguangParam,
        dongman: dongmaParam,
        jingtou: jingtouParam,
        artist: artistParam,
    };

    // @ts-ignore
    $: component = components[activeComponent]; // 根据activeComponent获取对应组件
    $: {
        valuesArray = Object.values($prompt_map);
        stylesArray = Object.values($style_map);
    }

    let isCopied = false;

    function copyPrompt(){
        const final_prompt_str = prompt_str + (" ") + stylesArray.join(" | ") + (valuesArray.join(" "));
        navigator.clipboard.writeText(final_prompt_str)
        .then(() => {
        isCopied = true;
      })
      .catch((error) => {
        isCopied = false;
        console.log("Copy button click action fail...")
      });
    }
</script>

<template>
    <div class="flex flex-col h-screen">
        <nav class="bg-white border-solid border-1 border-indigo-600">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="flex h-16 items-center justify-between w-full">
                    <div class="flex">
                        <div class="flex-shrink-0">
                            <img
                                class="h-10 w-10"
                                src="./images/favicon/a.svg?color=indigo&shade=500"
                                alt="土猛调参——Midjourney参数工具"
                            />
                        </div>
                        <div class="hidden md:block">
                            <div class="ml-10 flex items-baseline space-x-4">
                                <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                                <a
                                    href="/"
                                    class="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                                    aria-current="page">土猛调参</a
                                >
                                <a
                                    href="http://blog.tiaocanshu.com"
                                    class="text-gray-700 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                                    >blog</a
                                >
                                <a
                                    href="http://blog.tiaocanshu.com/about"
                                    class="text-gray-700 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                                    >关于我们</a
                                >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        <div class="flex flex-row w-full">
            <div class="flex flex-col w-6/12 p-4 border-b">
                <!-- svelte-ignore a11y-label-has-associated-control -->
                <div class="w-full flex-col">
                    <label class="text-lg font-bold">想象力Prompt（建议用英文）</label>
                    <div class="flex flex-row w-full">
                        <div class="w-full">
                            <textarea
                                class="block w-full h-10 mt-2 border border-gray-300 rounded-md pl-1 pt-2"
                                bind:value={prompt_str} 
                                placeholder="输入您的想象力，请务必用英文哦..."
                            />
                        </div>
                    </div>
                </div>
                <div class="w-full flex-row">
                    <!-- svelte-ignore a11y-label-has-associated-control -->
                    <label class="text-lg font-bold">参数内容</label>
                    <textarea
                        class="block w-full h-15 mt-2 border border-gray-300 rounded-md pl-1 pt-2"
                        placeholder="调整的参数内容..."
                        value={stylesArray.join(" | ") + (valuesArray.join(" "))}
                    />
                </div>
            </div>
            <div class="w-2/12 flex flex-row p-4">
                <div class="w-full">
                    {#if isCopied}
                    <button class="w-1/2 h-full text-white rounded bg-indigo-500 hover:bg-cyan-600 shadow-lg font-medium"
                        on:click={copyPrompt}>已复制 </button>
                        {:else}
                        <button class="w-1/2 h-full text-white rounded bg-indigo-500 hover:bg-cyan-600 shadow-lg font-medium"
                        on:click={copyPrompt}>复制 </button>
                        {/if}
                       
                    
                </div>
            </div>
        </div>
        <div class="flex-1 flex flex-row">
            <div class="flex-none w-48 p-4 border-r">
                <div class="mb-4">
                    <button class="w-full py-2 text-left hover:bg-gray-100"
                        >基本参数</button
                    >
                    <div class="pl-4 divide-y">
                        <!-- param:version -->
                        <button
                            class="w-full py-2 text-left hover:bg-gray-100 relative"
                            on:click={() => {
                                activeComponent = "banben";
                            }}
                            >版本(V)
                            {#if $prompt_map["banben"] != null}
                                <button
                                    class="absolute top-1 right-0 h-3 w-3 bg-red-600 rounded-full"
                                />
                            {/if}
                        </button>
                        <!-- param:aspect ratios -->
                        <button
                            class="w-full py-2 text-left hover:bg-gray-100 relative"
                            on:click={() => {
                                activeComponent = "changkuanbi";
                            }}
                            >长宽比(AR))
                            {#if $prompt_map["ckb"] != null}
                                <button
                                    class="absolute top-1 right-0 h-3 w-3 bg-red-600 rounded-full"
                                />
                            {/if}
                        </button>
                        <!-- param:no -->
                        <button
                            class="w-full py-2 text-left hover:bg-gray-100 relative"
                            on:click={() => {
                                activeComponent = "paichu";
                            }}
                            >排除(No))
                            {#if $prompt_map["paichu"] != null}
                                <button
                                    class="absolute top-1 right-0 h-3 w-3 bg-red-600 rounded-full"
                                />
                            {/if}
                        </button>
                        <!-- param:chaos -->
                        <button
                            class="w-full py-2 text-left hover:bg-gray-100 relative"
                            on:click={() => {
                                activeComponent = "suiji";
                            }}
                            >随机(Chaos){#if $prompt_map["suiji"] != null}
                                <button
                                    class="absolute top-1 right-0 h-3 w-3 bg-red-600 rounded-full"
                                />
                            {/if}
                        </button>
                        <!-- param:stylize -->

                        <button
                            class="w-full py-2 text-left hover:bg-gray-100 relative"
                            on:click={() => {
                                activeComponent = "fengge";
                            }}
                            >美化(Stylize){#if $prompt_map["fg"] != null}<button
                                    class="absolute top-1 right-0 h-3 w-3 bg-red-600 rounded-full"
                                />{/if}</button
                        >
                        <!-- param:quality -->

                        <button
                            class="w-full py-2 text-left hover:bg-gray-100 relative"
                            on:click={() => {
                                activeComponent = "xijie";
                            }}
                            >质量(Quality){#if $prompt_map["xijie"] != null}<button
                                    class="absolute top-1 right-0 h-3 w-3 bg-red-600 rounded-full"
                                />{/if}</button
                        >

                        <!-- param:seed -->

                        <button
                            class="w-full py-2 text-left hover:bg-gray-100 relative"
                            on:click={() => {
                                activeComponent = "zhongzi";
                            }}
                            >种子(Seed){#if $prompt_map["zhongzi"] != null}<button
                                    class="absolute top-1 right-0 h-3 w-3 bg-red-600 rounded-full"
                                />{/if}</button
                        >
                        <!-- param:iw -->

                        <button
                            class="w-full py-2 text-left hover:bg-gray-100 relative"
                            on:click={() => {
                                activeComponent = "quanzhong";
                            }}
                            >图片权重(IW) {#if $prompt_map["jiaquan"] != null}<button
                                    class="absolute top-1 right-0 h-3 w-3 bg-red-600 rounded-full"
                                />{/if}</button
                        >

                        <!-- param:stop -->

                        <button
                            class="w-full py-2 text-left hover:bg-gray-100 relative"
                            on:click={() => {
                                activeComponent = "stop";
                            }}
                            >完成度(stop) {#if $prompt_map["stop"] != null}<button
                                    class="absolute top-1 right-0 h-3 w-3 bg-red-600 rounded-full"
                                />{/if}</button
                        >

                        <!-- param:tile -->

                        <button
                            class="w-full py-2 text-left hover:bg-gray-100 relative"
                            on:click={() => {
                                activeComponent = "tile";
                            }}
                            >图案循环(tile) {#if $prompt_map["tile"] != null}<button
                                    class="absolute top-1 right-0 h-3 w-3 bg-red-600 rounded-full"
                                />{/if}</button
                        >

                        <!-- param:repeat -->

                        <button
                            class="w-full py-2 text-left hover:bg-gray-100 relative"
                            on:click={() => {
                                activeComponent = "repeat";
                            }}
                            >批量(repeat) {#if $prompt_map["repeat"] != null}<button
                                    class="absolute top-1 right-0 h-3 w-3 bg-red-600 rounded-full"
                                />{/if}</button
                        >
                    </div>
                </div>
                <div class="mb-4">
                    <button class="w-full py-2 text-left hover:bg-gray-100"
                        >高级参数</button
                    >
                    <div class="pl-4 divide-y">
                        <!-- param:light -->

                        <button
                            class="w-full py-2 text-left hover:bg-gray-100 relative"
                            on:click={() => {
                                activeComponent = "dengguang";
                            }}
                            >灯光(Light) {#if $style_map["dengguang"] != null}<button
                                    class="absolute top-1 right-0 h-3 w-3 bg-red-600 rounded-full"
                                />{/if}</button
                        >

                        <!-- param:anime -->

                        <button
                            class="w-full py-2 text-left hover:bg-gray-100 relative"
                            on:click={() => {
                                activeComponent = "dongman";
                            }}
                            >动漫(Anime){#if $style_map["anime"] != null}<button
                                    class="absolute top-1 right-0 h-3 w-3 bg-red-600 rounded-full"
                                />{/if}</button
                        >

                        <!-- param:cameralens -->

                        <button
                            class="w-full py-2 text-left hover:bg-gray-100 relative"
                            on:click={() => {
                                activeComponent = "jingtou";
                            }}
                            >镜头(Camera) {#if $style_map["jingtou"] != null}<button
                                    class="absolute top-1 right-0 h-3 w-3 bg-red-600 rounded-full"
                                />{/if}</button
                        >
                        <!-- param:artist -->

                        <button
                            class="w-full py-2 text-left hover:bg-gray-100 relative"
                            on:click={() => {
                                activeComponent = "artist";
                            }}
                            >艺术家(Artist) {#if $style_map["artist"] != null}<button
                                    class="absolute top-1 right-0 h-3 w-3 bg-red-600 rounded-full"
                                />{/if}</button
                        >
                        <!-- param:designer -->

                        <button
                            class="w-full py-2 text-left hover:bg-gray-100 relative"
                            on:click={() => {
                                activeComponent = "shejishi";
                            }}
                            >设计师(Designer) {#if $style_map["designer"] != null}<button
                                    class="absolute top-1 right-0 h-3 w-3 bg-red-600 rounded-full"
                                />{/if}</button
                        >
                    </div>
                </div>
                <!-- <div class="mb-4 divide-y">
                    <button class="w-full py-2 text-left hover:bg-gray-100"
                        >专业用途</button
                    >
                    <div class="pl-4">
                        <button
                            class="w-full py-2 text-left hover:bg-gray-100 relative"
                            >人物制作(soon)</button
                        >
                        <button
                            class="w-full py-2 text-left hover:bg-gray-100 relative"
                            >模特换衣(soon)</button
                        >
                        <button
                            class="w-full py-2 text-left hover:bg-gray-100 relative"
                            >LOGO设计(soon))</button
                        >
                    </div>
                </div> -->
            </div>
            <div class="flex-1 p-4">
                <div class="mb-4">
                    <svelte:component this={component} />
                </div>
                <span class="place-self-center"
                    >&copy 2023 MGN Tech. | ICP证: <a
                        href="https://beian.miit.gov.cn/"
                        target="_blank">浙ICP备2023015070号-1</a
                    ></span
                >
            </div>
        </div>
    </div>
</template>
