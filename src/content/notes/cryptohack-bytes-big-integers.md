---
title: "CryptoHack：大整数转回 bytes"
description: "卡住的地方是把整数当成要破解的密文；这一步其实只是还原字节表示。"
pubDate: 2026-10-05
category: Crypto
platform: CryptoHack
status: "会话给出了转换方法和结果；未记录平台提交成功。"
sourceTitle: 学习CTF路线
importedAt: 2026-10-06
sequence: 5
tags: [Encoding, bytes, Integer]
---

## 我卡在什么地方

当时我只说“我卡在这了”。题目给的是一个十进制大整数，这一步不用找密钥，先把整数转成字节。

原会话使用的是：

```python
from Crypto.Util.number import long_to_bytes
```

它来自 PyCryptodome。会话也给了 Python 自带的写法，所以代码片段页保存的是标准库版本。

## 本题的代码

```python
n = 11515195063862318899931685488813747395775516287289682636499965282714637259206269
length = (n.bit_length() + 7) // 8
message = n.to_bytes(length, "big")
print(message.decode())
```

`bit_length()` 得到有效位数，除以 8 向上取整就是需要的字节数。`"big"` 表示按大端顺序还原。

<details>
<summary>会话给出的结果</summary>

```text
crypto{3nc0d1n6_4ll_7h3_w4y_d0wn}
```

</details>

这里留下的关系是 `bytes ↔ integer`。以后遇到对消息做整数运算的题，先确认数据目前处在哪种表示里。
