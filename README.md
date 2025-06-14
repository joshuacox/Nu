# Nu - Server Connection Manager

Nu is a bash script by Josh Cox that makes a named exectuable for servers you interact with often, simplifies SSH connections and file mounting to remote servers. 
It generates executable scripts for quick access to servers using custom names, allowing users to easily SSH into servers, mount remote directories,
or execute commands remotely with advanced patterns like command chaining and file transfer.

---

## Features

- **Custom SSH Shortcuts**: Creates executable scripts in `~/bin/` for instant SSH access using a custom server name (e.g., `Saruman`).
- **SSHFS Mounting**: Generates mount scripts to transparently mount remote server directories locally using SSH File System (SSHFS).
- **Command Chaining & File Transfer**: Supports advanced workflows like executing commands on remote servers, piping output to/from remote systems, and transferring files via command-line tools.
- **Persistent Configuration**: Stores server configurations in `~/mnt/` and creates reusable access scripts in `~/bin/`, ensuring consistent access across sessions.

---

## How It Works

When you run `Nu SERVERNAME USERNAME IPADDRESS PORT`, the script:
1. Creates a mount point directory at `~/mnt/SERVERNAME`.
2. Generates two executable scripts in `~/bin/`:
   - `SERVERNAME`: A shortcut for SSH connections with agent forwarding (`-A`) and X11 forwarding (`-X`).
   - `MountSERVERNAME`: A script to mount the remote server's home directory locally using SSHFS.
3. Allows advanced usage patterns like:
   - Remote command execution: `Saruman 'uname -a'`
   - File transfer via pipes: `tar zcf - helloworld | Saruman 'zxvf -'`
   - Remote-to-local data streaming: `Saruman 'tar jcf - helloworld' | tar zxvf -`

---

## Usage

```
Nu SERVERNAME USERNAME IPADDRESS|HOSTNAME PORT
```

This script creates a directory full of servernames which can be invoked to easily ssh into the server
or just to invoke a short command on the server
e.g.
Nu Saruman root 65.67.51.189 2222

extended usage examples:
Saruman 'uname -a'>helloworld
tar zcf - helloworld|Saruman 'zxvf -'
Saruman 'tar jcf - helloworld'|tar zxvf -
