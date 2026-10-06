---
title: "CryptoHack：XOR Properties 与少抄一个 d"
description: "先用 XOR 性质消掉变量，再解决 fromhex 因 51 个字符而报错的问题。"
pubDate: 2026-10-05
category: Crypto
platform: CryptoHack
status: "会话记录了公式推导、Hex 修正和解码结果；未记录平台提交成功。"
sourceTitle: 学习CTF路线
importedAt: 2026-10-06
sequence: 7
tags: [XOR, Hex, 调试]
---

## 先推公式，不急着把所有 key 算出来

当时我让会话“教我方法”。题目给出：

```text
KEY1 = A
KEY2 ^ KEY1 = B
KEY2 ^ KEY3 = C
FLAG ^ KEY1 ^ KEY3 ^ KEY2 = D
```

因为 `KEY3 ^ KEY2` 就是已知的 `C`，最后一行可以改写成：

```text
D = FLAG ^ KEY1 ^ C
FLAG = D ^ KEY1 ^ C
```

同一个值 XOR 两次会消掉，`KEY2 ^ KEY1` 这一行不需要用。

## 真正卡住的是抄错 Hex

我在运行代码时遇到了 `bytes.fromhex()` 的 `ValueError`。那串 `KEY2 ^ KEY3` 少了一个 `d`：

```text
错误：c1545756687e7573db23aa1c3452a098b71a7fbf0fdddde5fc1
正确：c1545756687e7573db23aa1c3452a098b71a7fbf0fddddde5fc1
```

错误字符串是 51 个字符，正确的是 52 个。每两个十六进制字符才组成一个字节，所以先核对抄录和长度。

## 修正后的代码

整理时加了长度检查，避免 `zip()` 在输入长度不一致时悄悄截断。

```python
key1 = bytes.fromhex(
    "a6c8b6733c9b22de7bc0253266a3867df55acde8635e19c73313"
)
key2_xor_key3 = bytes.fromhex(
    "c1545756687e7573db23aa1c3452a098b71a7fbf0fddddde5fc1"
)
encrypted_flag = bytes.fromhex(
    "04ee9855208a2cd59091d04767ae47963170d1660df7f56f5faf"
)

assert len(encrypted_flag) == len(key1) == len(key2_xor_key3)
flag = bytes(
    a ^ b ^ c
    for a, b, c in zip(encrypted_flag, key1, key2_xor_key3)
)
print(flag.decode())
```

<details>
<summary>会话中的结果</summary>

```text
crypto{x0r_i5_ass0c1at1v3}
```

</details>

这题要留下两个点：XOR 链里重复项可以抵消；数据抄错时，先检查输入，别先怀疑公式。
