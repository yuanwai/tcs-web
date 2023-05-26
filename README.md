# TCS-Web

TCS-Web是一个基于Midjourney参数调整的工具，基于SvelteKit编写，主要是帮助使用Midjourney的用户更好地生成一些必要参数，如使用的版本，图像的长宽比，使用的视角等等。

TCS-Web is a tool based on Midjourney parameter adjustment, written in SvelteKit. Its main purpose is to assist users of Midjourney in generating necessary parameters such as version used, aspect ratio of images, and perspective used.


## 运行

1、安装依赖
```shell
npm install
```

2、运行

```shell
npm run dev
```

## Mac M1


特殊说明，如果电脑是Mac M1，则需要在install之后，执行以下步骤：
1、下载esbiuld版本
```
npm i @esbuild/darwin-arm64
```