---
layout: download  
title: TODO cli  
description: How to install for Linux users.
---

## Ubuntu/Debian

We provide a binary `.deb` package that you can install with `apt`.

### Steps
1. Download the [latest](latest#deb) version.
2. Run `sudo apt install <path-to-downloaded-deb>`.
3. (Option) You can remove the `deb` file.

### Uninstall
1. Run `sudo apt remove todo-cli`.


## RedHat/CentOs/Fedora

We provide a binary `.rpm` package that you can install with `yum/dnf`.

### Steps
1. Download the [latest](latest#rpm) version.
2. Run `sudo yum install <path-to-downloaded-rpm>`.
3. (Option) You can remove the `rpm` file.

### Uninstall
1. Run `sudo yum remove todo-cli`.

## Direct executables

If you have a different Linux distribution or if you prefer to use the executables directly.


### Steps
1.  Download the [latest](latest#linuxBinary) executable.
2.  Move it to any path of your choice.
3.  Make sure the executable file is indeed _executable_. If not, run `sudo chmod +x <the-executable>`.   
3.  Add said path to the PATH variable. Normally you will add the following line to your `~/.bashrc` file.  
```bash
export PATH=$PATH:/the/parent/folder/where/the/executable/is/at
```

### Uninstall
1. Manually delete the binary.



[back](./)
