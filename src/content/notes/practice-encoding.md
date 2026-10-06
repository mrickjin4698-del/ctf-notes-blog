---
title: "会话练习：Hex、Base64 和多层编码"
description: "第一轮编码题答对了三道；后来遇到 URL 编码，开始把识别类型和使用工具分开。"
pubDate: 2026-10-05
category: Misc
platform: 会话练习
status: "前三道编码题回答已确认；URL 小测只提交了第一题。"
sourceTitle: 学习CTF路线
importedAt: 2026-10-06
sequence: 1
tags: [Encoding, Hex, Base64, URL]
---

## 最开始做了什么

第一轮先判断数据表示，再解码。我给出的三个结果都在会话里被确认正确。这些是聊天里的小题，没有对应的比赛提交记录。

| 题目数据 | 处理顺序 |
| --- | --- |
| `666c61677b6374665f3130317d` | Hex → bytes → 文本 |
| `ZmxhZ3tiYXNlNjRfaXNfZWFzeX0=` | Base64 → bytes → 文本 |
| `NjY2YzYxNjc3YjZkNzU2Yzc0Njk1ZjZjNjE3OTY1NzI3ZA==` | Base64 → Hex 文本 → bytes → 文本 |

## 代码记录

```python
import base64

print(bytes.fromhex("666c61677b6374665f3130317d").decode())
print(base64.b64decode("ZmxhZ3tiYXNlNjRfaXNfZWFzeX0=").decode())

outer = "NjY2YzYxNjc3YjZkNzU2Yzc0Njk1ZjZjNjE3OTY1NzI3ZA=="
hex_text = base64.b64decode(outer).decode()
print(bytes.fromhex(hex_text).decode())
```

<details>
<summary>当时提交的三个答案</summary>

```text
flag{ctf_101}
flag{base64_is_easy}
flag{multi_layer}
```

</details>

第三题给我的提醒是：一次解码后还得看结果是什么，不能默认已经结束。

## URL 编码：认识它，再交给工具

后来的小测里，我答了 `hello%20world → hello world`。剩下两题当时没用工具继续算，会话给出了下面的工具用法，因此这里保留为讲解记录。

```python
from urllib.parse import unquote

print(unquote("%66%6c%61%67%7B%75%72%6c%7D"))
print(unquote("%252F"))          # %2F
print(unquote(unquote("%252F"))) # /
```

`%25` 表示百分号，所以双层 URL 编码需要再解一次。Base64 末尾的 `=` 也只是线索，有或没有它都不能单独作为判断依据。
