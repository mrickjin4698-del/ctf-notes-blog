---
title: "会话练习：从 strcmp 到字符校验"
description: "记录 ELF 分析顺序、读校验逻辑的小测，以及最后还没回答的下标乱序题。"
pubDate: 2026-10-05
category: Reverse
platform: 会话练习
status: "密码、整数和字符变换小测回答已确认；最后的下标乱序题未提交回答。"
sourceTitle: 学习CTF路线
importedAt: 2026-10-06
sequence: 3
tags: [ELF, strcmp, ltrace, C]
---

## 我先想到 binwalk，但要看文件类型

模拟题给出的 `file` 结果是 ELF 可执行文件，`strings` 里出现了 `strcmp`、密码提示和 `flag.txt`。我最先问的是：

> 用 binwalk 扫一遍？

这时更直接的思路是先观察程序行为，再用 `ltrace` 看库函数参数；看不到线索时再考虑静态逆向。`binwalk` 更适合前一题那种文件里藏文件的情况。

会话给出的模拟输出：

```text
strcmp("hello", "s3cr3t_p4ss")
```

我注意到了 `s3cr3t_p4ss`。它是这个模拟校验的目标字符串。

## Correct! 和拿到 Flag 是两件事

后续假设输出为：

```text
Correct!
Could not open flag.txt
```

这里说明密码检查通过了，但本地没有可读取的 Flag 文件。会话没有给出真实远程地址或最终 Flag，所以这条记录停在判断程序流程。

## 读 C 代码的小测

| 校验逻辑 | 我当时的回答 | 会话反馈 |
| --- | --- | --- |
| `strcmp(input, "alice123") == 0` | B，即 `alice123` | 正确 |
| `x * 4 - 5 == 35` | `10` | 正确 |
| 逐字符比较 `C T F { 1 3 3 7 }` | `CTF{1337}` | 正确 |
| 输入的四个字符分别 XOR 1 后匹配 `g`、`m`、`0x60`、`f` | `flag` | 正确 |
| 对各字符做加、减、XOR 后校验 | `flag` | 正确 |

`strcmp` 返回 0 表示相同。遇到变换后的比较，就把每个位置的条件反过来求：

```text
input[0] + 2 = 'h'  → 'h' - 2 = 'f'
input[1] - 1 = 'k'  → 'k' + 1 = 'l'
input[2] ^ 3 = 'b'  → 'b' ^ 3 = 'a'
input[3] + 1 = 'h'  → 'h' - 1 = 'g'
```

## 最后一题：保留为待回答

会话最后给出了一道下标乱序的题，我随后转去问练习网站，还没有提交这题的回答。这里保留题面：

```c
int check(char *input)
{
    if (input[2] != 'a') return 0;
    if (input[0] != 'f') return 0;
    if (input[3] != 'g') return 0;
    if (input[1] != 'l') return 0;
    return 1;
}
```

下次回来先按 `input[0]` 到 `input[3]` 排顺序，再拼出输入。
