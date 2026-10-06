---
title: Linux：管道与输入输出重定向
description: 把命令的输出交给下一条命令处理，或保存到文本文件。
pubDate: 2026-10-07
category: Linux
sequence: 3
tags:
  - 管道
  - 输入输出
---

## 用管道连接命令

竖线 `|` 会把左边命令的标准输出送到右边命令的标准输入。每条命令各做一件事，组合起来处理较长的输出。

```bash
find . -type f -name '*.txt' -print | wc -l
grep -rInI --include='*.txt' -E 'flag\{' ./challenge | head -n 20
```

第一条统计找到的文本文件数量。第二条搜索线索并先显示前 20 行；若线索很多，不必一口气刷满终端。

## 把输出保存到文件

```bash
grep -n 'flag{' notes.txt > matches.txt
grep -n 'TODO' notes.txt >> review.log
```

`>` 把标准输出写进文件；文件原来有内容时会被覆盖。`>>` 把输出加到文件末尾。重定向写入前，先检查目的路径和文件名，避免覆盖要保留的内容。

## 标准输出和错误信息

命令通常把正常结果写到标准输出，把错误说明写到标准错误。只写 `>` 时，通常只把正常结果保存下来；报错仍显示在屏幕上。

```bash
grep -n 'flag{' missing.txt > matches.txt
```

如果文件找不到，屏幕上会看到报错，而 `matches.txt` 仍可能是空文件。使用重定向时，可以同时留意屏幕报错和输出文件。

**练习**：用 `find` 和管道统计 `.txt` 文件数量，再用 `grep` 配合 `>` 保存一次搜索结果。

参考：[Bash 手册：管道](https://www.gnu.org/software/bash/manual/html_node/Pipelines)、[Bash 手册：重定向](https://www.gnu.org/software/bash/manual/html_node/Redirections.html)。
