---
title: "CryptoHack：遍历单字节 XOR 的 key"
description: "Favourite Byte 不给 key，但一个字节只有 256 种可能，可以用脚本逐个验证。"
pubDate: 2026-10-05
category: Crypto
platform: CryptoHack
status: "会话给出了 key = 16 和解法；未记录平台提交成功。"
sourceTitle: 学习CTF路线
importedAt: 2026-10-06
sequence: 8
tags: [XOR, 单字节, 穷举]
---

## Hex 只是外层表示

题目给出一串 Hex。先转成 bytes 后仍然不是可读文本，接下来按单字节 XOR 的提示处理。

一个字节是 8 bit，key 的范围就是 `0～255`。会话的方法是把它们全部试一次。

## 验证候选

下面用题目中的 `crypto{` 前缀过滤输出，方便查看：

```python
data = bytes.fromhex(
    "73626960647f6b206821204f21254f7d694f7624662065622127234f726927756d"
)

for key in range(256):
    result = bytes(byte ^ key for byte in data)
    if result.startswith(b"crypto{"):
        print(key, result.decode())
```

得到的 key 是十进制 16，也就是 `0x10`。

<details>
<summary>会话中的最终结果</summary>

```text
crypto{0x10_15_my_f4v0ur173_by7e}
```

</details>

不要把“Hex 解码成功”当成整道题结束。解码后继续看数据，再根据题目提示选择下一步。
