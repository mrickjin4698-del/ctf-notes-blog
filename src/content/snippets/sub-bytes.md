---
title: "sub_bytes：传入 S-box 查表"
description: "输入 4×4 字节矩阵和 256 项查找表。原地替换；传入逆表时执行 InvSubBytes。"
language: python
noteRef: aes-sub-bytes
sourceTitle: 学习CTF路线
---

```python
def sub_bytes(state, sbox):
    for i in range(4):
        for j in range(4):
            state[i][j] = sbox[state[i][j]]
    return state
```
