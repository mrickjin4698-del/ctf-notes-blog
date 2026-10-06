---
title: Linux：查找文件与搜索文本
description: 用 find 按文件名找样本，用 grep 在文本里定位线索。
pubDate: 2026-10-07
category: Linux
sequence: 4
tags:
  - find
  - grep
---

## 按文件名查找

`find` 从指定目录开始往下搜索。`.` 代表当前目录。

```bash
find . -type f -name '*.txt' -print
find . -type f -iname '*.png' -print
```

第一条列出当前目录及子目录里的 `.txt` 文件。第二条用 `-iname` 忽略大小写，所以 `.png` 和 `.PNG` 都能匹配。文件名里的星号放在引号内，避免它被 Shell 提前展开。

## 在文本中找线索

```bash
grep -n 'flag{' notes.txt
grep -rInI --include='*.txt' -E 'flag\{[^}]+\}' ./challenge
```

`-n` 显示行号。第二条在 `challenge` 目录下递归搜索 `.txt` 文件；`-r` 递归检查子目录，`-I` 跳过二进制文件，`-E` 启用扩展正则表达式。模式 `flag\{[^}]+\}` 会匹配一段以 `flag{` 开头、以 `}` 结束的非空内容。

没有找到匹配时，`grep` 不会打印结果；这不一定代表文件不存在，也可能是目录、文件类型或大小写条件不符合。找不到时先放宽一个条件，再逐步缩小范围。

**练习**：先用 `find` 列出练习目录中的文本文件，再用 `grep -n` 搜索关键词并记录匹配行号。

参考：[GNU Findutils 手册](https://www.gnu.org/software/findutils/manual/)、[GNU grep 手册](https://www.gnu.org/software/grep/manual/grep.html)。
