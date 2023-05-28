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

    import shejishiParam from "./shejishiParam/+page.svelte";
    import sheyingshiParam from "./sheyingshiParam/+page.svelte";
    import dengguangParam from "./dengguangParam/+page.svelte";
    import dongmaParam from "./dongmanParam/+page.svelte";
    import jingtouParam from "./jingtouParam/+page.svelte";

    // @ts-ignore
    import { prompt_map } from "./store.js";
    let prompt_str = "";
    /**
     * @type {any[]}
     */
    let valuesArray = [];

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

        shejishi: shejishiParam,
        sheyingshi: sheyingshiParam,
        dengguang: dengguangParam,
        dongman: dongmaParam,
        jingtou: jingtouParam,
    };

    // @ts-ignore
    $: component = components[activeComponent]; // 根据activeComponent获取对应组件
    $: {
        valuesArray = Object.values($prompt_map);
    }
</script>

<template>
    <div class="flex flex-col h-screen">
        <div class="flex flex-row w-full">
            <div class="flex flex-col w-8/12 p-4 border-b">
                <!-- svelte-ignore a11y-label-has-associated-control -->
                <div class="w-full flex-col">
                    <label class="text-lg font-bold">想象力Prompt</label>
                    <div class="flex flex-row w-full">
                        <div class="w-10/12">
                            <textarea
                                class="block w-full h-10 mt-2 border border-gray-300 rounded-md pl-1 pt-2"
                                placeholder="输入您的想象力，然后点击，翻译成英文..."
                            />
                        </div>
                        <div class="w-2/12 left-0">
                            <button
                                class="w-11/12 mt-2 ml-4 h-10 text-white bg-indigo-300 hover:bg-cyan-600 shadow-lg font-medium"
                                >翻译并检查
                            </button>
                        </div>
                    </div>
                </div>
                <div class="w-full flex-row">
                    <!-- svelte-ignore a11y-label-has-associated-control -->
                    <label class="text-lg font-bold">参数内容</label>
                    <textarea
                        class="block w-full h-10 mt-2 border border-gray-300 rounded-md pl-1 pt-2"
                        placeholder="调整的参数内容..."
                        value={valuesArray.join(" ")}
                    />
                </div>
            </div>
            <div class="w-4/12 flex flex-row p-4">
                <div class="w-full">
                    <button
                        class="w-1/2 h-full text-white rounded bg-indigo-500 hover:bg-cyan-600 shadow-lg font-medium"
                        >完整复制</button
                    >
                </div>
            </div>
        </div>
        <div class="flex-1 flex flex-row">
            <div class="flex-none w-64 p-4 border-r">
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
                            >版本 (Version)
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
                            >长宽比 (Aspect Ratios)
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
                            >排除 (No)
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
                            >随机程度 (Chaos){#if $prompt_map["suiji"] != null}
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
                            >风格化程度 (Stylize){#if $prompt_map["fg"] != null}<button
                                    class="absolute top-1 right-0 h-3 w-3 bg-red-600 rounded-full"
                                />{/if}</button
                        >
                        <!-- param:quality -->

                        <button
                            class="w-full py-2 text-left hover:bg-gray-100 relative"
                            on:click={() => {
                                activeComponent = "xijie";
                            }}
                            >细节丰富度 (Quality){#if $prompt_map["xijie"] != null}<button
                                    class="absolute top-1 right-0 h-3 w-3 bg-red-600 rounded-full"
                                />{/if}</button
                        >

                        <!-- param:seed -->

                        <button
                            class="w-full py-2 text-left hover:bg-gray-100 relative"
                            on:click={() => {
                                activeComponent = "zhongzi";
                            }}
                            >种子 (Seed){#if $prompt_map["zhongzi"] != null}<button
                                    class="absolute top-1 right-0 h-3 w-3 bg-red-600 rounded-full"
                                />{/if}</button
                        >
                        <!-- param:iw -->

                        <button
                            class="w-full py-2 text-left hover:bg-gray-100 relative"
                            on:click={() => {
                                activeComponent = "quanzhong";
                            }}
                            >图片权重 (Image Weight) {#if $prompt_map["jiaquan"] != null}<button
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
                        <!-- param : shejishi -->
                        <button
                            class="w-full py-2 text-left hover:bg-gray-100 relative"
                            on:click={() => {
                                activeComponent = "shejishi";
                            }}>设计师风格</button
                        >
                        <button
                            class="w-full py-2 text-left hover:bg-gray-100 relative"
                            on:click={() => {
                                activeComponent = "sheyingshi";
                            }}>摄影师风格</button
                        >
                        <button
                            class="w-full py-2 text-left hover:bg-gray-100 relative"
                            on:click={() => {
                                activeComponent = "dongman";
                            }}>动漫风格</button
                        >
                        <button
                            class="w-full py-2 text-left hover:bg-gray-100 relative"
                            on:click={() => {
                                activeComponent = "dengguang";
                            }}>灯光效果</button
                        >
                        <button
                            class="w-full py-2 text-left hover:bg-gray-100 relative"
                            on:click={() => {
                                activeComponent = "jingtou";
                            }}>镜头角度</button
                        >
                    </div>
                </div>
                <div class="mb-4 divide-y">
                    <button class="w-full py-2 text-left hover:bg-gray-100"
                        >专业用途</button
                    >
                    <div class="pl-4">
                        <button
                            class="w-full py-2 text-left hover:bg-gray-100 relative"
                            >人物制作</button
                        >
                        <button
                            class="w-full py-2 text-left hover:bg-gray-100 relative"
                            >模特换衣</button
                        >
                        <button
                            class="w-full py-2 text-left hover:bg-gray-100 relative"
                            >LOGO设计</button
                        >
                    </div>
                </div>
            </div>
            <div class="flex-1 p-4">
                <div class="mb-4">
                    <svelte:component this={component} />
                </div>
            </div>
        </div>
    </div>
</template>
