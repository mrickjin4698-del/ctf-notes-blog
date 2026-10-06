---
title: "CryptoHack：Hex 解码漏掉了一个 x"
description: "当时答案里的 he_strings 少了一个字符，回到 68 65 78 5f 才发现漏掉的是 x。"
pubDate: 2026-10-05
category: Crypto
platform: CryptoHack
status: "会话记录了答案修正；未记录修正后的平台提交结果。"
sourceTitle: 学习CTF路线
importedAt: 2026-10-06
sequence: 4
tags: [Hex, Encoding, 调试]
---

## 当时哪里不对

我问“这个 flag 不对吗”。当时提交的文本中写成了 `he_strings`，会话指出漏掉了一个字符。

出问题的原始 Hex 片段是：

```text
68 65 78 5f
 h  e  x  _
```

所以应当是 `hex_`，不是 `he_`。

## 用代码核对片段

```python
print(bytes.fromhex("6865785f").decode())
# hex_
```

Hex 两个字符表示一个字节。手动抄结果时容易漏字符，最好先把原始字符串交给 `bytes.fromhex()`，再检查输出。

<details>
<summary>会话中的错误答案与修正答案</summary>

错误答案：

```text
crypto{You_will_be_working_with_he_strings_a_lot}
```

修正后的答案：

```text
crypto{You_will_be_working_with_hex_strings_a_lot}
```

</details>
