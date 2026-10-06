---
title: Linux：查看文件与文件类型
description: 先确认文件类型、大小与哈希，再查看文本或十六进制内容。
pubDate: 2026-10-07
category: Linux
sequence: 5
tags:
  - 文件检查
  - 十六进制
---

## 先看文件信息

文件扩展名可以任意改名，所以先看内容特征，再决定用什么工具打开。

```bash
ls -lh sample.bin
file sample.bin
wc -c sample.bin
sha256sum sample.bin
```

`file` 根据内容特征给出类型提示；它不一定能正确识别所有文件。`wc -c` 显示字节数，`sha256sum` 为文件计算 SHA-256 摘要。核对下载文件的完整性时，可把摘要和可信来源提供的值比较。

## 阅读文本

```bash
head -n 20 notes.txt
tail -n 20 notes.txt
less notes.txt
```

查看很长的文件时，先从开头或结尾检查，或用 `less` 分页。按 `q` 退出 `less`。整个文件都很短时，再用 `cat notes.txt` 输出全文。

## 检查二进制开头

```bash
od -An -tx1 -N 32 sample.bin
```

这条命令用十六进制显示开头的 32 个字节。文件以 `50 4b 03 04` 开头时，常见于 ZIP 格式；`89 50 4e 47 0d 0a 1a 0a` 是 PNG 的开头签名之一。文件内容可能被截断或特意修改，看到签名只代表一条线索，还要结合文件结构继续检查。

**练习**：对练习题目录里的样本依次运行 `file`、`wc -c` 和 `od`，记下类型、大小和开头字节，再核对扩展名是否匹配。

阅读：[GNU Coreutils 文件摘要命令](https://www.gnu.org/software/coreutils/manual/html_node/sha2-utilities.html)。
