<template>
    <div class="flex flex-col h-screen">
        <div class="flex-none p-4 border-b">
            <label class="text-lg font-bold">prompt</label>
            <textarea
                class="block w-full h-32 mt-2 border border-gray-300 rounded-md"
            />
        </div>
        <div class="flex-1 flex flex-row">
            <div class="flex-none w-64 p-4 border-r">
                <div class="mb-4">
                    <button class="w-full py-2 text-left hover:bg-gray-100"
                        >基本参数</button
                    >
                    <div class="pl-4">
                        <button class="w-full py-2 text-left hover:bg-gray-100">版本</button>
                        <button class="w-full py-2 text-left hover:bg-gray-100">长宽比</button>
                        <button class="w-full py-2 text-left hover:bg-gray-100">排除(no)</button>
                        <button class="w-full py-2 text-left hover:bg-gray-100">随机程度</button>
                        <button class="w-full py-2 text-left hover:bg-gray-100">风格化程度</button>
                        <button class="w-full py-2 text-left hover:bg-gray-100">细节丰富度</button>
                        <button class="w-full py-2 text-left hover:bg-gray-100">种子(seed)</button>
                        <button class="w-full py-2 text-left hover:bg-gray-100">图片权重</button>
                    </div>
                </div>
                <div class="mb-4">
                    <button class="w-full py-2 text-left hover:bg-gray-100"
                        >高级参数</button
                    >
                    <div class="pl-4">
                        <button class="w-full py-2 text-left hover:bg-gray-100"
                            >设计师风格</button
                        >
                        <button class="w-full py-2 text-left hover:bg-gray-100"
                            >摄影师风格</button
                        >
                        <button class="w-full py-2 text-left hover:bg-gray-100"
                            >灯光效果</button
                        >
                    </div>
                </div>
                <div class="mb-4">
                    <button class="w-full py-2 text-left hover:bg-gray-100"
                        >专业用途</button
                    >
                    <div class="pl-4">
                        <button class="w-full py-2 text-left hover:bg-gray-100"
                            >人物制作</button
                        >
                        <button class="w-full py-2 text-left hover:bg-gray-100"
                            >模特换衣</button
                        >
                        <button class="w-full py-2 text-left hover:bg-gray-100"
                            >ICON/LOGO设计</button
                        >
                    </div>
                </div>
            </div>
            <div class="flex-1 p-4">
                <div class="mb-4">
                    <label class="block font-bold">参数1:</label>
                    <input
                        type="text"
                        class="w-full mt-1 rounded-md border-gray-300"
                    />
                </div>
                <div class="mb-4">
                    <label class="block font-bold">参数2:</label>
                    <input
                        type="text"
                        class="w-full mt-1 rounded-md border-gray-300"
                    />
                </div>
                <div>
                    <button
                        class="w-full py-2 text-white bg-blue-300 hover:bg-blue-300 rounded-md"
                        >执行操作</button
                    >
                </div>
            </div>
            <div class="flex-none w-64 p-4 border-l">
                <div class="mb-4">
                    <label class="block font-bold">结果:</label>
                    <textarea
                        class="w-full h-32 mt-1 border border-gray-300 rounded-md"
                    />
                </div>
            </div>
        </div>
    </div>
</template>
