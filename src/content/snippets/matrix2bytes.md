---
title: "matrix2bytes：按列表顺序拼接字节"
description: "与 CryptoHack 题目的 bytes2matrix 顺序对应，矩阵元素需要是 0～255 的整数。"
language: python
noteRef: aes-state-matrix
sourceTitle: 学习CTF路线
---

```python
def matrix2bytes(matrix):
    return bytes(value for row in matrix for value in row)
```
