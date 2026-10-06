---
title: "AES：AddRoundKey 是对应位置 XOR"
description: "把两个 4×4 矩阵逐项 XOR，再沿用 matrix2bytes 把结果转成文本。"
pubDate: 2026-10-05
category: Crypto
platform: CryptoHack
status: "会话给出了函数和解码结果；未记录平台提交成功。"
sourceTitle: 学习CTF路线
importedAt: 2026-10-06
sequence: 13
tags: [AES, AddRoundKey, XOR]
---

## 左上角就能看出操作

会话给出的例子是：

```text
state[0][0] = 206
key[0][0]   = 173

206 ^ 173 = 99
99 → 'c'
```

整个矩阵就是把这个操作做 16 次。这里不需要另找一个复杂公式。

## 保存处理函数

```python
def add_round_key(state, round_key):
    result = []
    for i in range(4):
        row = []
        for j in range(4):
            row.append(state[i][j] ^ round_key[i][j])
        result.append(row)
    return result

def matrix2bytes(matrix):
    return bytes(value for row in matrix for value in row)
```

原题截图给出的附件名是 `add_round_key.py`。完整的 `state` 和 `round_key` 要沿用该附件提供的两个 4×4 矩阵；会话正文只举了部分位置的数值，这里没有补造其余输入。

填入函数后处理原题数据：

```python
new_state = add_round_key(state, round_key)
print(matrix2bytes(new_state).decode())
```

<details>
<summary>会话给出的结果</summary>

```text
crypto{r0undk3y}
```

</details>

上面的实现返回新矩阵。对同一个 round key 再做一次 XOR，会撤销这一层操作：

```text
P ^ K = C
C ^ K = P
```
