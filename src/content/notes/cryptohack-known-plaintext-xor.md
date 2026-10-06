---
title: "CryptoHack：用已知前缀恢复重复 XOR 密钥"
description: "crypto{ 只能直接恢复 myXORke；最后一个字符来自猜测，再用整段明文验证。"
pubDate: 2026-10-05
category: Crypto
platform: CryptoHack
status: "会话给出了已知明文思路、候选密钥和解码结果；未记录平台提交成功。"
sourceTitle: 学习CTF路线
importedAt: 2026-10-06
sequence: 9
tags: [XOR, 已知明文, 重复密钥]
---

## 我当时的疑问

看完解法后，我问：

> 这个是人写的出来的吗

这里真正需要人判断的是结构：题目提醒 Flag 格式，已知前缀可以用来恢复对应位置的 key。剩下的逐字节计算交给脚本。

```text
P ^ K = C
C ^ P = K
C ^ K = P
```

## 先恢复七个字节

```python
cipher = bytes.fromhex(
    "0e0b213f26041e480b26217f27342e175d0e070a3c5b103e2526217f27342e175d0e077e263451150104"
)
known = b"crypto{"
key_part = bytes(c ^ p for c, p in zip(cipher, known))
print(key_part)
# b'myXORke'
```

已知前缀只有七个字节，因此它只能直接推出 `myXORke`。`myXORkey` 的最后一个 `y` 是会话里的候选猜测，不能说它也由这七个字节直接推导出来。

## 把候选 key 循环使用，再验证输出

```python
key = b"myXORkey"
plaintext = bytes(
    byte ^ key[index % len(key)]
    for index, byte in enumerate(cipher)
)
print(plaintext.decode())
```

`index % len(key)` 让下标循环回到密钥开头。这个候选解出的整段文本符合题目内容和格式。

<details>
<summary>会话中的最终结果</summary>

```text
crypto{1f_y0u_Kn0w_En0uGH_y0u_Kn0w_1t_4ll}
```

</details>

留下的思路：看到重复 XOR 和已知开头，先算对应位置的密钥片段，再检验候选。不是盯着密文手算整段答案。
