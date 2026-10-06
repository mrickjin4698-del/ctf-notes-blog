---
title: "遍历单字节 XOR 候选"
description: "Favourite Byte 的 256 个候选，按题目已知的 crypto{ 前缀过滤。"
language: python
noteRef: cryptohack-favourite-byte
sourceTitle: 学习CTF路线
---

```python
data = bytes.fromhex(
    "73626960647f6b206821204f21254f7d694f7624662065622127234f726927756d"
)

for key in range(256):
    candidate = bytes(byte ^ key for byte in data)
    if candidate.startswith(b"crypto{"):
        print(key, candidate.decode())
```
