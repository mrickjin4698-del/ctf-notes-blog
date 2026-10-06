---
title: Linux：用户与文件权限
description: 看懂所有者和 rwx 权限，并安全地调整自己的练习文件。
pubDate: 2026-10-07
category: Linux
sequence: 2
tags:
  - 权限
  - rwx
---

## 看一行权限信息

```bash
ls -l
id
```

`ls -l` 会显示文件类型、权限、所有者、用户组、大小和更新时间。第一列的 `-` 通常表示普通文件，`d` 表示目录。后九个字符按所有者、所属组、其他用户分成三组，例如 `-rw-r-----`。

## `rwx` 表示什么

对文件来说，`r` 表示读取、`w` 表示修改、`x` 表示作为程序运行。对目录来说，`r` 表示列出目录内容，`w` 表示增删目录条目，`x` 表示进入目录或访问里面的条目。能否访问文件还受到上级目录权限影响。

```text
- rw- r-- ---
  │   │   └── 其他人：无权限
  │   └────── 所属组：读取
  └────────── 文件所有者：读取、写入
```

## 只修改自己的练习文件

符号形式可以清楚地指定要加什么权限：

```bash
chmod u+x run.sh
chmod go-r notes.txt
ls -l run.sh notes.txt
```

第一条给所有者增加执行权限；第二条从用户组和其他用户移除读取权限。运行 `chmod` 前，先核对目标路径和文件所有者。练习时只处理自己目录下的文件，不要对系统文件或整棵目录随意递归修改。

**练习**：查看自己刚创建的文本文件权限，给 `run.sh` 添加所有者执行权限，然后再次用 `ls -l` 确认变化。

参考：[GNU Coreutils：权限位结构](https://www.gnu.org/software/coreutils/manual/html_node/Mode-Structure.html)、[GNU Coreutils：chmod](https://www.gnu.org/software/coreutils/manual/html_node/chmod-invocation.html)。
