---
layout: post
title: 'Command Line Habits - Vim'
slug: command-line-habits-vim
categories: linux
date: '2017-12-08 21:26:47+03:00'
---

Using Vim is a good habit for developers of any level. Today we're going to look through the set of basic commands that's widely used in Vim.

### Start/Quit Vim

Enter "vim" command in your terminal. This command will start vim editor in normal mode

**\> vim**

In order to quit vim we need to activate command mode. For this you should press `Shift+:`(or `Shift+;`) . Then enter the command `quit`(or `q`) and press Enter.


### Vim Modes

**default**: normal mode (for navigation and text manipulation) <br />
**command mode** (`Shift+:`): to enter commands (including search and filter)  <br />
**insert mode** (`i`):  to insert text <br /> 
**visual mode** (`v`): to select blocks of text from the file (the only 
   way to select a block of text)

To exit back to normal mode from any other mode press `ESC`.

### Navigation

`h`: left <br />
`j`: down <br />
`k`: up <br />
`l`: right <br />
`w`: one word forward <br />
`b`: one word back <br />

`gg`: set cursor to the beginning of file <br />
`G`: set cursor into the end of file 

### Saving Files

`:write(:w)`: save command for existed files <br />
`:write <filename with extension>(:w <filename with extension>)`: save command for new files (also can be used "vim <filename with extension>" in terminal) <br /> 

`:wq`(or `:x`): save file and quit vim

### Normal mode built-in commands

`dd`: delete line <br />
`D`: delete line, but preserve whitespace <br />
`dw`: delete the word <br />
`cw`: delete the word and activate insert mode <br />

Combinations

`d5w`: delete 5 words <br />
`c3j`: replace 3 lines and activate insert mode <br />
`C`: replace the rest of line(starting cursor point) and activate insert mode <br />


### Combining commands

`cit`: change inside tag contents (between opening and closing tags) <br />
`ci{`: change inside curly braces <br />
`ci"`: change inside quotes (not including quotes) <br />
`ci[`: change inside square brackets <br />
`ci(`: change inside parentheses <br />

### Copy and Paste

`y`: copy(yank) text (visual mode) <br />
`d`: cut text (visual mode) <br />
`p`: paste text (normal mode) <br />
`yy(or Y)`: yank current line, including newline character (normal mode)

### Searching

`/pattern`: search forward for pattern <br />
`?pattern`: search backward <br />
`n`: repeat forward search <br />
`N`: repeat backward

### Buffer Usage

`:e config.json`: edit config.json file <br />
`:buffers` (or `:ls`): list the current buffers (including numbers)  <br />
`:b <num>`: display the buffer with the given num. <br />
`:bd`: delete the current buffer (will fail if unsaved)  <br />
`:b#`(or `Ctrl+6`): switching to the previously edited buffer <br />
`:set hidden`: Allow switching buffers without saving.


### Configure Vim

`:syntax on`: enables syntax highlighting <br />
`:syntax off`: disables sntax highlighting <br />
`:set number`: enables line numbers <br />
`:set nonumber`: disables line numbers <br />
`:set relativemunber`: enables relative line numbers <br />
`:set norelativenumber`: disables relative line numbers <br />
`:set number relative numbers`: enables both options of line numbers

`help option-list`: more options to set

