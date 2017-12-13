---
layout: post
title: 'Command Line Habits: Vim'
slug: command-line-habits-vim
categories: pblog
---

Using Vim is a good habit for developers of any level. Unfortunately sometimes every step to something new comes through a psychological barrier. Today we're going to look through the set of basic commands that's widely used in Vim.

### Start/Quit Vim

Enter "vim" command in your terminal. This command will start vim editor in normal mode

`> vim`

In order to quit vim we need to activate command mode. For this you need to press `Shift+:`(or `Shift+;`) . Then enter the command `quit`(or `q`) and press Enter.


### Vim Modes

`default`: normal mode (for navigation and text manipulation)<br />
`command mode (press "Shift+:")`: to enter commands (including search and filter)
`insert mode (press "i")`:  to insert text
`visual mode(press "v")`: to select blocks of text from the file (the only way to select a block of text)

To exit back to normal mode from any other mode press `ESC`.

### Navigation

`h`: left
`j`: down
`k`: up
`l`: right
`w`: one word forward
`b`: one word back

`gg`: set cursor to the beginning of file
`G`: set cursor into the end of file 

### Saving Files

`:write(:w)`: save command for existed files
`:write <filename with extension>(:w <filename with extension>)`: save command for new files (also can be used "vim <filename with extension>" in terminal)
`:wq`: save file and quit vim

### Normal mode built-in commands

`dd`: delete line
`D`: delete line, but preserve whitespace
`dw`: delete the word
`cw`: delete the word and activate insert mode

Combinations

`d5w`: delete 5 words
`c3j`: replace 3 lines and activate insert mode
`C`: replace the rest of line(starting cursor point) and activate insert mode


### Combining commands

`cit`: change inside tag contents (between opening and closing tags)
`ci{`: change inside curly braces
`ci"`: change inside quotes (not including quotes)
`ci[`: change inside square brackets
`ci(`: change inside parentheses

### Copy and Paste

`y`: copy(yank) text (visual mode)
`d`: cut text (visual mode)
`p`: paste text (normal mode)
`yy(or Y)`: yank current line, including newline character (normal mode)

### Searching

`/pattern`: search forward for pattern
`?pattern`: search backward
`n`: repeat forward search
`N`: repeat backward


### Configure Vim

`:syntax on`: enables syntax highlighting
`:syntax off`: disables sntax highlighting
`:set number`: enables line numbers
`:set nonumber`: disables line numbers
`:set relativemunber`: enables relative line numbers
`:set norelativenumber`: disables relative line numbers
`:set number relative numbers`: enables both options of line numbers

`help option-list`: more options to set
