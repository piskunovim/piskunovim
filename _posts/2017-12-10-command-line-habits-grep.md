---
layout: post
title: 'Command Line Habits - Grep'
slug: command-line-habits-grep
categories: pblog
date: '2017-12-10 20:16:25+03:00'
---

Grep is considered as one of the most useful commands on Unix-like operating systems. Here you'll get basics that can be useful in your work.

<br />

### Search the contents of files 

`grep [pattern] [file(s)]`

_Example:_

~~~~
> grep "import" *js
~~~~

<br />

### Case-insensitive search

`grep -i [pattern] [file(s)]`

_Example:_

~~~~
> grep -i "apiservice" *Service.js
~~~~

<br />

### Search recursevly inside directory

`grep -r [pattern] [path]`

_Example:_

_-> Find "api" instances in the current directory recursevly_

~~~~
> grep -r "api" . 
~~~~

<br />

### Find files by pattern

Sometimes there is a need to search inside files that could be selected by part of their name or extension.

`find [path] -name [pattern]`

_Examples:_

~~~~
> find . -name "*Service.js"
~~~~

<br />

### Combining find and grep with xargs

`xargs` is a command used to build and execute commands. By default it's using `echo` command.

_Example:_

_-> Outputs the strings of find result_
~~~~
> find . -name "*js" | xargs
~~~~

_-> Outputs "todo" instances for files that ends with "Service.js"_
~~~~
> find . -name "*Service.js" | xargs grep "todo"
~~~~
_-> Same as previous command. You can use it, but using "find" is preferable from the side that we can test its output and be sure that pattern is ok_
~~~~
> grep -r --include="*Service.js" "todo" . 
~~~~

<br />

### Search contents of git repository

`git grep [pattern]`

_Example:_

_-> Searching "version" string in your project tracked files_
~~~~
`git grep version`
~~~~

<br />

### Show context around grep search

**Grep mark up options:**

`-n` : each output line is preceded by its relative line number in the file, starting at line 1

`--color(-colour)` : mark up the matching text with the expression stored in GREP_COLOR environment variable

**Grep context options:**


`-A [num]` : print "num" lines of trailing context after each match

`-B [num]` : print "num" lines of leading context before each match

`-C [num]` : print "num" lines of leading and trailing context surrounding each match. By default is 2 and is equivalent to `-A 2 -B 2`

<br />

### Regular expressions

**Basic:**

`.` : any character 


`\` : escaping character (like `\.` for dot)

`*` : zero or more occurences of the regular expression

**Extended:**

To use extended regular expressions with grep, you'll need to either escape them with backslashes or turn on extended regular expressions with the `-E` option.

`?` : matches zero or one occurence of the one-character regular expression

`+` : matches one or more occurence of the one-character regular expression

`|` : separate alternatives

`^` : matches the begining of a line

`$` : matches the end of a line

`[]` : mathes any one character in that string

`()` : for grouping expressions

<br />

### Find matches excluding a pattern

`> find [path] -name [pattern] | grep -v [pattern]`

`-v` : option for inverse 

