---
title: "AES：从题目线索认出 biclique"
description: "会话里的名词题提到 AES-128 的约 126.1 bit 工作量，对应 biclique attack。"
pubDate: 2026-10-05
category: Crypto
platform: CryptoHack
status: "会话给出了攻击名称与答案；没有攻击实现或平台提交成功记录。"
sourceTitle: 学习CTF路线
importedAt: 2026-10-06
sequence: 11
tags: [AES, Biclique]
---

## 题目线索

当时贴出的题目提到：AES-128 的穷举量级是 128 bit，某种攻击把工作量降到约 126.1 bit。会话根据这个线索给出的名称是：

```text
biclique attack
Biclique cryptanalysis
```

这条笔记保留的是名词识别题的解答，不是对该攻击的完整实现。会话也提醒：理论上比穷举少一点工作量，不等于现实中能够轻易破解。

<details>
<summary>会话中的答案</summary>

```text
crypto{biclique}
```

</details>
