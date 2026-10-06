---
title: "add_round_key：矩阵对应位置 XOR"
description: "原会话的双重循环版本。输入两个 4×4 字节矩阵，返回新矩阵。"
language: python
noteRef: aes-add-round-key
sourceTitle: 学习CTF路线
---

```python
def add_round_key(state, round_key):
    result = []
    for i in range(4):
        row = []
        for j in range(4):
            row.append(state[i][j] ^ round_key[i][j])
        result.append(row)
    return result
```
