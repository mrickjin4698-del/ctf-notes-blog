---
title: "Base64 与 URL 解码"
description: "会话里的标准库用法。多层编码逐层处理，每次都先检查输出。"
language: python
noteRef: practice-encoding
sourceTitle: 学习CTF路线
---

```python
import base64
from urllib.parse import unquote

print(base64.b64decode("ZmxhZ3toZWxsb30=").decode())
print(unquote("hello%20world"))
print(unquote(unquote("%252F")))
```
