# samplelines
randomly sample lines from stdin or input file

```
NAME
    samplelines - sample lines randomly from input

SYNOPSIS
    node samplelines [OPTION]... [FILE]
    (global) samplelines [OPTION]... [FILE]

DESCRIPTION
    Randomly select and output lines from the input file

    With no FILE, read standard input.

    -p [N], --probability=[N]
          (REQUIRED) a number N between 0 and 1 reflecting the likelihood that a line from the input be included in the output

    -s [SEED], --seed=[SEED]
          a seed for the PRNG
```