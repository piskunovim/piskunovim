---
title: "Command Line Habits - Aliases"
slug: "command-line-habits-aliases"
pubDate: 2022-08-22
tags: ["cli", "linux"]
---

## Aliases

Unix-based systems supports lots of various shells that the user could use. In my work environment is widely used zsh and bash. Recently I started practicing fish (friendly interactive shell), but for now it's only a mention.

Aliases are our friends when it comes to long commands that you have to type on a daily basis.

`> alias shortName="your custom command here"`

To keep aliases between sessions, you can save them in your user’s shell configuration profile file. This can be:

Bash – ~/.bashrc
ZSH – ~/.zshrc
Fish – ~/.config/fish/config.fish

So for example, in bash, you can open .bashrc file with your favorite editor like this:

`> vim ~/.bashrc`

To remove specific alias:

`> unalias alias_name`

To remove all aliases:

`> unalias -a`

### My Top 10 Aliases

- `alias open="nautilus --browser"`
- `alias connectServer = ssh -p (my ssh port number) myuser@myserver`
- `alias dockerClean = docker rm $(docker ps -a -q)`
- `alias upgrade='sudo apt-get update && sudo apt-get upgrade'`
- `alias netconnections="netstat -tuapw --numeric-hosts --numeric-ports"`
- `alias myip="curl ident.me"`
- `alias openvpn3-start="openvpn3 session-start --config ~/openvpn3/client.ovpn"`
- `alias openvpn3-stop="~/openvpn3/disconnect_cli.sh"`
  ```
  # disconnect_cli.sh
  openvpn3 sessions-list | grep Path | awk -v OFS='\t' '{print $2}' | while read -r path; do
    openvpn3 session-manage --path "$path" --disconnect
  done
  ```
- `alias openvpn3-ls="openvpn3 sessions-list"`
- `alias weather="wttr"`
  ```
  wttr() {
    if [ $# -eq 0 ]; then
      echo "No arguments provided"
    else
      curl wttr.in/$1;
    fi
  }
  ```
