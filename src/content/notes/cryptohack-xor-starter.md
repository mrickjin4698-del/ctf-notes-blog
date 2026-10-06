---
title: "CryptoHack：label 和 13 做 XOR"
description: "从“这是啥啊”开始，理解 ord、逐字节 XOR 和 chr 之间的转换。"
pubDate: 2026-10-05
category: Crypto
platform: CryptoHack
status: "会话给出本题解法；早期 XOR 小测前三题回答正确，第四题只算出了首字节。"
sourceTitle: 学习CTF路线
importedAt: 2026-10-06
sequence: 6
tags: [XOR, ASCII, Python]
---

## 题目在做什么

看到题目时，我问的是“这是啥啊”。它要求把 `label` 的每个字符与整数 13 做 XOR，再转回字符。

```python
for character in "label":
    print(chr(ord(character) ^ 13), end="")
```

会话里的结果是 `aloha`。

第一个字符可以这样看：

```text
'l' → ord('l') = 108
108 ^ 13 = 97
97 → chr(97) = 'a'
```

也可以直接在 bytes 上处理：

```python
result = bytes(byte ^ 13 for byte in b"label")
print(result.decode())
```

<details>
<summary>本题答案</summary>

```text
crypto{aloha}
```

</details>

## 前面的小测：数字算对，还要转回文本

早期 XOR 小测里，我回答了 `B、A、A、66`。前三题正确；最后一题问的是解出的开头，我只算出了第一个字节 `0x66`。

完整的小测数据是：

```python
cipher = bytes.fromhex("676d60667a")
plain = bytes(byte ^ 1 for byte in cipher)
print(plain.decode())
# flag{
```

`0x66` 是字符 `f` 的字节值，不是整段文本。XOR 的规则是“相同为 0，不同为 1”，同一个值 XOR 两次会抵消：

```text
A ^ B ^ B = A
```
