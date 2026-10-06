---
title: Linux：检查与解压压缩包
description: 先看归档里的文件清单，再在自己的练习目录解压。
pubDate: 2026-10-07
category: Linux
sequence: 0
tags:
  - 压缩包
  - 文件取证
---

CTF 题目可能把样本放在 ZIP 或 tar 归档里。解压前先检查归档格式和文件列表，避免把内容散落到其他目录或覆盖已有练习材料。

## 先看归档内容

```bash
file sample.zip
unzip -l sample.zip
tar -tf sample.tar.gz
```

`unzip -l` 列出 ZIP 中的条目；`tar -tf` 列出 tar 归档成员，GNU tar 通常能自动识别压缩格式。检查路径、文件数量和大小是否符合预期。需要进一步查看 tar 归档中的详细属性时，可用 `tar -tvf`。

## 在新建的练习目录处理

```bash
mkdir -p "$HOME/ctf-practice/unpacked"
unzip sample.zip -d "$HOME/ctf-practice/unpacked"
```

确认目标目录是自己专用的空练习目录后再解压。若里面已有需要保留的文件，改用新的目录名。不要为了处理练习归档而用管理员权限，也不要直接把陌生文件移进系统目录。

如果遇到 TAR 报错，先用 `file` 识别归档类型并检查错误信息。命令格式会随 TAR、ZIP 等格式不同；不要对未知格式盲目尝试解压参数。

**练习**：对自己的测试 ZIP 分别运行 `file` 和 `unzip -l`，核对清单后再解压到空的练习目录。

参考：[GNU tar 手册：列出归档内容和阅读压缩文件](https://www.gnu.org/software/tar/manual/tar.html)。
