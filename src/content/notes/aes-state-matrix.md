---
title: "AES：把状态矩阵转回 bytes"
description: "按题目 bytes2matrix 的列表顺序恢复字节，不要把 99、114 这些数当成神秘的 AES 参数。"
pubDate: 2026-10-05
category: Crypto
platform: CryptoHack
status: "会话给出了 matrix2bytes 和结果；未记录平台提交成功。"
sourceTitle: 学习CTF路线
importedAt: 2026-10-06
sequence: 12
tags: [AES, Matrix, bytes]
---

## 先看题目怎样摆放字节

题目已经给出了 `bytes2matrix()`：

```python
def bytes2matrix(text):
    return [list(text[i:i + 4]) for i in range(0, len(text), 4)]
```

这一题要做反方向。按这个函数的列表顺序把数字接回去即可，不要额外转置矩阵。

## 先写容易看懂的版本

```python
def matrix2bytes(matrix):
    result = []
    for row in matrix:
        for value in row:
            result.append(value)
    return bytes(result)

matrix = [
    [99, 114, 121, 112],
    [116, 111, 123, 105],
    [110, 109, 97, 116],
    [114, 105, 120, 125],
]
print(matrix2bytes(matrix).decode())
```

`99` 是 `c` 的字符值，`114` 是 `r`，`121` 是 `y`。这里首先是在处理表示形式，还没有实现完整 AES。

<details>
<summary>会话中的结果</summary>

```text
crypto{inmatrix}
```

</details>

会话中的短写法保存到了代码片段页：

```python
def matrix2bytes(matrix):
    return bytes(value for row in matrix for value in row)
```
