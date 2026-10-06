---
title: Linux 基础命令速记
description: 用最常见的终端命令查看位置、文件、内容和权限。
pubDate: 2026-10-05
sample: true
tags:
  - 示例
  - Linux
  - 命令行
---

终端是很多 CTF 工具的入口。刚开始先熟悉几个安全、可观察的基本命令。

## 位置与目录

```bash
pwd                 # 显示当前目录
ls -lah             # 列出文件，包括隐藏文件
cd ~/practice       # 进入自己的练习目录
```

## 查看文件

```bash
file sample.bin     # 粗略识别文件类型
head -n 20 notes.txt
cat notes.txt
```

file 命令根据内容特征给出提示，不保证判断正确。对陌生文件先在隔离的练习目录中检查，不要直接执行它。

## 查看权限

```bash
ls -l               # 查看读、写、执行权限
```

先理解权限位和文件所有者，再决定是否需要修改。不要对系统目录或不属于自己的文件随意更改权限。
