---
title: Linux：查看与管理进程
description: 查看练习程序的运行状态，并掌握终端中的前台和后台任务。
pubDate: 2026-10-07
category: Linux
sequence: 1
tags:
  - 进程
  - 终端
---

程序运行时会对应一个或多个进程。需要排查卡住的练习程序时，先用查看命令确认它是否存在、由谁启动、正在运行哪条命令。

## 查看进程

```bash
ps -u "$USER" -o pid,stat,etime,cmd
ps -ef | grep '[p]ython3'
```

`ps` 显示当前用户启动的进程、进程号（PID）、状态、已运行时间和命令行。第二条按命令行筛选 `python3`；`grep` 的方括号写法可避免匹配到搜索命令本身。

## 前台与后台任务

```bash
sleep 300 &
jobs -l
fg %1
```

末尾的 `&` 让命令在后台开始运行；`jobs -l` 查看当前终端会话创建的后台任务；`fg %1` 将编号为 1 的任务切回前台。切回后可以按 `Ctrl+C` 结束这个练习任务。任务编号会随终端会话变化，以你看到的 `jobs` 结果为准。

如果终端正被前台练习程序占用，按 `Ctrl+C` 会向它发出中断信号；先确认窗口里的确是要停止的程序。结束程序前保存需要保留的结果。

**练习**：启动 `sleep 300 &`，用 `jobs -l` 确认它在后台，再用 `fg %1` 切回前台并按 `Ctrl+C` 结束。

参考：[Linux 手册：ps](https://man7.org/linux/man-pages/man1/ps.1.html)、[Linux 手册：pgrep](https://man7.org/linux/man-pages/man1/pgrep.1.html)。
