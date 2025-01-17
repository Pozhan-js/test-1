import { DefaultTheme, defineConfig } from "vitepress";
import { fileURLToPath, URL } from "node:url";
import { themeConfig } from "./theme-config";
// https://vitepress.dev/reference/site-config
export default defineConfig({
  extends: {
    themeConfig,
  },
  vite: {
    resolve: {
      alias: [
        {
          find: /^.*\/VPHero\.vue$/,
          replacement: fileURLToPath(
            new URL("./theme/components/Reset/index.vue", import.meta.url)
          ),
        },
        {
          find: /^.*\/VPFeature\.vue$/,
          replacement: fileURLToPath(
            new URL("./theme/components/Reset/index.vue", import.meta.url)
          ),
        },
        {
          find: /^.*\/VPSidebarItem\.vue$/,
          replacement: fileURLToPath(
            new URL("./theme/components/Reset/index.vue", import.meta.url)
          ),
        },
      ],
    },
  },
  title: "哈希米",
  themeConfig: {
    logo: "/logo.jpg",
    outline: [2, 3],
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "主页", link: "/" },
      { text: "归档", link: "/archive" },
      {
        text: "笔记",
        items: [
          {
            text: "网络",
            link: "/note/network/OSI七层模型",
          },
        ],
      },
      {
        text: "大前端",
        items: [
          {
            text: "JS",
            link: "/front-end/JS/js基础知识梳理",
          },
          {
            text: "Vue",
            link: "/front-end/Vue/Vue基础知识",
          },
          {
            text: "React",
            link: "/front-end/React/基础hook",
          },
          {
            text: "Three.js",
            link: "/front-end/Three.js/Three.js入门",
          },
        ],
      },
      { text: "关于", link: "/about" },
    ],
    sidebar: [
      {
        text: "React",
        items: [
          {
            text: "基础hook",
            link: "/front-end/React/基础hook",
          },
          {
            text: "性能优化相关hook",
            link: "/front-end/React/性能优化相关hook",
          },
          {
            text: "reducer",
            link: "/front-end/React/reducer",
          },
        ],
      },
      {
        text: "Three.js",
        items: [
          {
            text: "Three.js入门",
            link: "/front-end/Three.js/Three.js入门",
          },
        ],
      },
      {
        text: "Vue",
        items: [
          {
            text: "Vue基础知识",
            link: "/front-end/Vue/Vue基础知识",
          },
          {
            text: "Vue项目常遇问题",
            link: "/front-end/Vue/Vue项目常遇问题",
          },
        ],
      },
      {
        text: "JS基础",
        items: [
          {
            text: "JS基础知识",
            link: "/front-end/JS/js基础知识梳理",
          },
          {
            text: "JS进阶",
            link: "/front-end/JS/js进阶",
          },
        ],
      },
      {
        text: "network",
        items: [
          {
            text: "OSI七层模型",
            link: "/note/network/OSI七层模型",
          },
          {
            text: "TCP",
            link: "/note/network/TCP",
          },
          {
            text: "浏览器输入URL发生了什么",
            link: "/note/network/浏览器输入URL发生了什么",
          },
          {
            text: "SSE",
            link: "/note/network/SSE",
          },
        ],
      },
    ],
    socialLinks: [{ icon: "github", link: "https://github.com/Pozhan-js" }],
    // search: {
    //   provider: "local",
    // },
  },
});
