---
title: "xor_single_byte：逐字节 XOR"
description: "输入 bytes 与一个 0～255 的 key，返回新 bytes；同一个 key 再用一次会恢复输入。"
language: python
noteRef: cryptohack-xor-starter
sourceTitle: 学习CTF路线
---

```python
def xor_single_byte(data: bytes, key: int) -> bytes:
    return bytes(byte ^ key for byte in data)

print(xor_single_byte(b"label", 13).decode())
# aloha
```
