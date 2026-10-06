---
title: "会话练习：从伪装 ZIP 到 PNG 文件套娃"
description: "记录文件识别小测，以及 ZIP、PNG、内嵌压缩包、Base64 和 Hex 的模拟线索链。"
pubDate: 2026-10-05
category: Forensics
platform: 会话练习
status: "会话中的判断题与模拟解题链已走完；没有真实附件执行记录。"
sourceTitle: 学习CTF路线
importedAt: 2026-10-06
sequence: 2
tags: [Magic Bytes, file, binwalk, 文件提取]
---

## 文件名不能替代文件内容

文件识别小测里，我回答了 `B、B、B`，最后一题的想法是“改扩展名解压缩”。会话确认了判断，并补充：如果 `file` 已经识别为 ZIP，通常可以直接用 `unzip photo.jpg`，不一定先改名。

当时用到的基本检查：

```bash
file challenge
strings challenge
xxd challenge | head
```

| 文件头线索 | 对应类型 |
| --- | --- |
| `89 50 4E 47 0D 0A 1A 0A` | PNG |
| `FF D8 FF` | JPEG |
| `25 50 44 46`（`%PDF`） | PDF |

## 模拟题里的实际判断

这是会话给出的假设场景，不是一次真实比赛通关。

1. `backup.dat` 被识别为 ZIP，我决定先解压。
2. 文本提示指向 `logo.png`，我决定检查 PNG。
3. `binwalk` 在 `0x20E5` 发现 ZIP 特征，我判断图片里藏了文件。
4. 提取出的文本像 Base64，我选择 Base64 解码。
5. 解出的内容只是“还有东西隐藏着”，继续检查发现 `0x3A10` 的 gzip，我选择提取它。
6. 最后得到 Hex 文本，我选择 Hex 解码。

## 留下来的命令

下面的路径和偏移来自模拟题，换题时要按实际输出调整。命令面向 Linux 练习环境。

```bash
unzip backup.dat -d out
file out/images/logo.png
strings out/images/logo.png | head -n 30
binwalk out/images/logo.png

dd if=out/images/logo.png of=hidden.zip bs=1 skip=$((0x20E5))
file hidden.zip
unzip hidden.zip

dd if=out/images/logo.png of=hidden.gz bs=1 skip=$((0x3A10))
file hidden.gz
gunzip hidden.gz
```

中间的 Base64 文本：

```text
U29tZXRoaW5nIGlzIHN0aWxsIGhpZGRlbi4uLg==
→ Something is still hidden...
```

它是提示，不是最终答案。每得到一个新对象，都重新判断它到底是什么。

<details>
<summary>模拟题的最终结果</summary>

```python
data = "666c61677b66696c655f63617276696e675f3130317d"
print(bytes.fromhex(data).decode())
# flag{file_carving_101}
```

</details>
