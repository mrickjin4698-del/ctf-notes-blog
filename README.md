# CTF Notes

一个精简的 CTF 学习静态博客，使用 Astro 和 pnpm。笔记与代码片段以 Markdown 保存，代码高亮使用 Astro 内置的 Shiki。

在线阅读：https://mrickjin4698-del.github.io/ctf-notes-blog/

源码仓库：https://github.com/mrickjin4698-del/ctf-notes-blog

界面采用黑灰色命令行风格。代码块默认保留缩进并在容器内部横向滚动，支持键盘滚动、复制以及自动换行切换；手机上也不会撑宽页面。未启用 JavaScript 时，代码高亮和横向滚动仍可使用。

页面带轻量入场、滚动渐入与悬停效果，遵循系统的“减少动态效果”设置。首页终端支持 help、ls notes、cat README、cat status.txt、cd notes、cd snippets、pwd、whoami 和 clear，并支持上下键历史与唯一命令的 Tab 补全。所有交互在浏览器内完成，无需后台服务。

已整理「学习CTF路线」会话中的 14 篇学习记录和 10 个代码片段，涵盖编码、取证模拟题、逆向小测、XOR、GCD 和 AES。记录保留原来的错误、修正与未回答题目；题目解法与平台提交成功分开标记。CTF 入门介绍标为“示例”，真实记录优先展示。Flag 使用可展开的答案区。

Linux 基础拆成一篇学习路线和 7 篇独立笔记，涵盖目录、文件检查、搜索、管道、权限、进程和压缩包。

笔记可选填写 category、platform、status、sourceTitle、importedAt、sequence 和 sample；pubDate 使用原会话的记录日期，importedAt 表示本次整理日期。片段的 noteRef 指向对应笔记的文件名。

## 本地运行

需要 Node.js 22.12 或更新版本，以及 pnpm 10。

```bash
pnpm install
pnpm dev
```

开发服务器启动后，打开终端显示的本地地址。构建并预览静态站点：

```bash
pnpm build
pnpm preview
```

构建结果保存在 dist/。

## 添加内容

- 在 src/content/notes/ 新建 Markdown 文件，填写 title、description、pubDate，并可选填写 tags。构建时会自动生成对应笔记页面。
- 在 src/content/snippets/ 新建 Markdown 文件，填写 title、description 和 language，再用带语言名称的代码围栏写入代码。

## 部署到 GitHub Pages

1. 将项目推送到 GitHub 仓库的 main 分支；若分支名称不同，修改 .github/workflows/deploy.yml 中的触发分支。
2. 在仓库 Settings → Pages → Build and deployment 中，将 Source 设为 GitHub Actions。
3. 推送到 main 后，工作流会安装依赖、构建并发布站点。也可以从 Actions 页面手动运行。

工作流会从 GitHub 提供的 GITHUB_REPOSITORY 取得所有者和仓库名，为项目站点设置路径前缀；仓库名为 <用户名>.github.io 时会按用户站点根路径构建。通常部署地址为 https://<用户名>.github.io/<仓库名>/。自定义域名需要相应调整 astro.config.mjs 中的 site 和 base。

本仓库已经使用 main 分支自动部署。修改内容后，在项目目录执行：

```bash
git add .
git commit -m "Update learning notes"
git push
```

在仓库的 Actions 页面查看构建与部署结果。
