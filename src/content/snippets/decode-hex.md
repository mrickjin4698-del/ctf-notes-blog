---
title: "Hex → bytes → 文本"
description: "会话第一课里的 Hex 解码用法：先还原字节，再按文本编码显示。"
language: python
noteRef: practice-encoding
sourceTitle: 学习CTF路线
---

```python
hex_text = "666c61677b68656c6c6f7d"
raw = bytes.fromhex(hex_text)

print(raw)
print(raw.decode("utf-8"))
```
