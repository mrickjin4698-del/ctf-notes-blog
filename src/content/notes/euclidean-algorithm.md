---
title: "GCD：每一轮都要更新两个数"
description: "保留我最初的欧几里得算法，以及从 1071、462 到 21 的变量更新过程。"
pubDate: 2026-10-05
category: Crypto
platform: Python 练习
status: "会话修正了算法；1071 和 462 的最大公约数已复算为 21。"
sourceTitle: 学习CTF路线
importedAt: 2026-10-06
sequence: 10
tags: [Math, GCD, 算法]
---

## 我最开始写的代码

当时贴完代码，我说“不会写算法”。

```python
def Euclidean_algorithm(a, b):
    max1 = max(a, b)
    min1 = min(a, b)
    while min1 != 0:
        max1 = max(max1, min1)
        min1 = max1 % min1
    return max1
```

问题是每轮只改变了 `min1`。`max1` 一直保留着 1071，算完 `1071 % 462 = 147` 后，状态成了 `1071、147`，而不是下一轮需要的 `462、147`。

## 先看状态怎么变

```text
1071, 462 → 462, 147
 462, 147 → 147, 21
 147,  21 → 21, 0
```

余数为 0 时，最后的非零数就是最大公约数。

## 修正后的长写法

```python
def Euclidean_algorithm(a, b):
    max1 = max(a, b)
    min1 = min(a, b)

    while min1 != 0:
        remainder = max1 % min1
        max1 = min1
        min1 = remainder

    return max1

print(Euclidean_algorithm(1071, 462))
# 21
```

会话中的短写法也存到了代码片段页：

```python
def gcd(a, b):
    while b != 0:
        a, b = b, a % b
    return a
```

`a, b = b, a % b` 会先计算右侧，再同时赋值。先把每轮的两个变量写清楚，比急着把代码缩短更有用。
