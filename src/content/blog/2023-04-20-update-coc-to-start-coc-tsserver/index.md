---
title: "Resolving coc.nvim Compatibility for TypeScript Support"
slug: resolving-coc-compatibility-for-typescript-support
pubDate: 2023-04-20
tags: ["cli", "linux"]
---

## Introduction

Hey there! If you're using Neovim or Vim as your code editor, you're probably familiar with the Conquer of Completion (coc.nvim) extension. It makes TypeScript development a breeze with its coc-tsserver extension, which offers autocompletion, error checking, and more. But what if you encounter a version compatibility issue like this: "coc-tsserver 2.1.3 requires coc.nvim >= 0.0.82, please update coc.nvim"? Don't worry, we'll cover two ways of how to resolve this situation.
Don't worry, we'll cover two ways of how to resolve this situation.

## Automatic Update: The Easy Way

First, let's try the simplest method—using the built-in `:CocUpdate` command:

1. Launch Neovim or Vim.
2. Enter command mode and run `:CocUpdate`.
3. Wait for the update process to finish—it shouldn't take long!
4. Close Neovim or Vim using `:q!`.
5. Relaunch Neovim or Vim and check the version with `:CocInfo`.

If all goes well, you'll see coc.nvim has been updated to version 0.0.82 or higher. But if the automatic update didn't do the trick, let's move on to the manual update.

## Manual Update: Taking Matters into Your Own Hands

Here's how to manually update coc.nvim:

1. Close Neovim or Vim if it's currently open.
2. Open a terminal (or command prompt in Windows).
3. Locate your coc.nvim installation directory (check your Neovim or Vim configuration files if you're unsure).
4. Use the `cd` command to navigate to the coc.nvim directory.
5. Run `git pull` to fetch the latest changes and merge them into your local copy.
6. Close the terminal and relaunch Neovim or Vim.
7. Check the version again with `:CocInfo`.

Now, coc.nvim should be updated to version 0.0.82 or higher, and coc-tsserver 2.1.3 will work like a charm.

## Conclusion

That's it! You've successfully updated coc.nvim, ensuring a seamless TypeScript development experience with coc-tsserver 2.1.3. If you have any questions or need more help, feel free to leave a comment below. Keep coding, and enjoy!
