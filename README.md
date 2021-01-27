# gitbook-plugin-single-page 👋

[![NPM Version](https://img.shields.io/npm/v/gitbook-plugin-single-page.svg)](https://www.npmjs.com/package/gitbook-plugin-single-page)
[![NPM Download](https://img.shields.io/npm/dt/gitbook-plugin-single-page.svg)](https://www.npmjs.com/package/gitbook-plugin-single-page)
[![License: MIT](https://img.shields.io/npm/l/gitbook-plugin-single-page.svg)](https://github.com/crazycodeboy/gitbook-plugin-single-page/blob/master/LICENSE)
[![Github: crazycodeboy](https://img.shields.io/badge/github-crazycodeboy-brightgreen.svg)](https://github.com/crazycodeboy)

> `gitbook-plugin-single-page` 是基于Gitbook实现的单页面插件，可以实现隐藏侧边栏、头部、和左右导航。


## 🚀 用法

### Step #1 - 更新 `book.json` 配置文件

1. 在 `book.json` 配置文件中,添加 `single-page` 到 `plugins` 列表.

#### 单语言版简单示例 `book.json`

```json
{
    "plugins": ["single-page"]
}
```

### Step #2 - 运行 gitbook 相关命令

- 运行 `gitbook install` 命令安装到本地项目

```bash
$ gitbook install
```

- 运行 `gitbook build` 命令构建本地项目或者 `gitbook serve` 启动本地服务.

```bash
$ gitbook build
```

或者

```bash
$ gitbook serve
```
