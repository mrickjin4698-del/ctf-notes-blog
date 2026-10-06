---
title: "gcd：欧几里得算法"
description: "会话中的短写法，处理非负整数；每轮同时更新除数和余数。"
language: python
noteRef: euclidean-algorithm
sourceTitle: 学习CTF路线
---

```python
def gcd(a, b):
    while b != 0:
        a, b = b, a % b
    return a

print(gcd(1071, 462))
# 21
```
