---
title: Linux：目录与路径
description: 用 pwd、ls 和 cd 确认位置，并创建自己的练习目录。
pubDate: 2026-10-07
category: Linux
sequence: 6
tags:
  - 路径
  - 文件系统
---

## 先确认当前位置

终端不会告诉你每条命令正在哪个目录里操作。运行 `pwd` 看当前位置，再用 `ls` 列出当前目录里的文件。

```bash
pwd
ls
ls -lah
```

`-a` 会列出以 `.` 开头的隐藏文件；`-l` 显示详细信息；`-h` 用比较容易读的单位显示大小。

## 进入目标目录

```bash
cd ~/Downloads
cd ../ctf-practice
cd -
```

`~` 代表当前用户的主目录。`..` 表示上一级目录。`cd -` 会回到上一次所在的目录。

路径从 `/` 开始时是绝对路径；从当前目录开始时是相对路径。带空格的路径可写在引号里：

```bash
cd "$HOME/CTF Practice"
```

这条示例用 `$HOME` 指向主目录；在多数 Shell 中，`~` 放在引号内时不会展开。也可以先输入 `cd ` 再按 Tab，让终端补全路径。

## 建一个专用练习目录

```bash
mkdir -p "$HOME/ctf-practice/files"
cd "$HOME/ctf-practice/files"
pwd
```

`mkdir -p` 会连同缺少的上级目录一起创建；目标目录已存在时也不会报错。最后再用 `pwd` 确认你进入了预期位置。

**练习**：新建 `~/ctf-practice/week-01`，进入目录，再运行 `pwd` 和 `ls -lah`。

参考：[GNU Coreutils：pwd](https://www.gnu.org/software/coreutils/manual/html_node/pwd-invocation.html)、[GNU Coreutils：ls](https://www.gnu.org/software/coreutils/manual/html_node/ls-invocation.html)、[GNU Coreutils：mkdir](https://www.gnu.org/software/coreutils/manual/html_node/mkdir-invocation.html)。
