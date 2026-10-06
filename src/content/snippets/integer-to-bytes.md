---
title: "integer_to_bytes：整数还原为字节"
description: "把会话中的大端转换整理为函数，接受非负整数；零值用一个字节表示。"
language: python
noteRef: cryptohack-bytes-big-integers
sourceTitle: 学习CTF路线
---

```python
def integer_to_bytes(number: int) -> bytes:
    if number < 0:
        raise ValueError("number must be non-negative")
    length = max(1, (number.bit_length() + 7) // 8)
    return number.to_bytes(length, "big")

print(integer_to_bytes(310400273487))
# b'HELLO'
```
