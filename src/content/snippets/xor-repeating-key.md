---
title: "xor_repeating：循环使用 XOR 密钥"
description: "从已知明文题的循环下标整理而来；额外检查空密钥，避免除以零。"
language: python
noteRef: cryptohack-known-plaintext-xor
sourceTitle: 学习CTF路线
---

```python
def xor_repeating(data: bytes, key: bytes) -> bytes:
    if not key:
        raise ValueError("key must not be empty")
    return bytes(
        byte ^ key[index % len(key)]
        for index, byte in enumerate(data)
    )
```
