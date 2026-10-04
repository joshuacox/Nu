# Nu - Server Connection Manager 🚀

**Nu** is a lightweight Bash script that simplifies frequent interactions with remote servers by creating custom, executable shortcuts for SSH connections, SSHFS mounting, unmounting, and remote command execution.  

With Nu, you can instantly SSH into servers, mount remote directories locally, or execute advanced workflows like command chaining and file transfers—all with intuitive, user-defined names.

### oneliner install

```bash
curl -sL https://raw.githubusercontent.com/joshuacox/Nu/refs/heads/main/bootstrapNu.sh | bash
```

or read the installation section below for full details.

---

## 🌟 Features

- **Custom SSH Shortcuts**  
  Create executable scripts in `~/bin/` for instant access to servers using memorable names (e.g., `Saruman`).
- **Instant SSHFS Mounting**  
  Transparently mount remote server directories locally using SSHFS for seamless file access.
- **Dedicated Clean Unmount Helper**  
  Automatically creates an `Unmount<SERVERNAME>` helper using `fusermount3`/`fusermount`/`umount` to detach mounts safely.
- **Advanced Command Chaining & Piping**  
  Execute commands remotely, pipe output to/from remote systems, and stream archives via tools like `tar` or `rsync`.
- **Subcommand Routing**  
  Generated server shortcuts provide built-in subcommands: `<Server> ping`, `<Server> mount`, `<Server> unmount`, and `<Server> help`.
- **Sensible Defaults & Safety**  
  Port defaults to `22` and remote path defaults to `/` if omitted. Overwriting existing scripts is guarded unless `--force` is specified.

---

## 🛠️ How It Works

When you run:  
```bash
Nu [-f|--force] SERVERNAME USERNAME IPADDRESS|HOSTNAME [PORT] [REMOTE_PATH]
```

Nu performs the following steps:

1. **Creates a mount point** at `~/mnt/SERVERNAME`.
2. **Generates three executable helper scripts** in `~/bin/`:
   - `SERVERNAME`: A shortcut for SSH connections with agent forwarding (`-A`) and X11 forwarding (`-X`), plus `ping`/`mount`/`unmount` subcommands.
   - `MountSERVERNAME`: A script to mount the remote server directory locally using SSHFS.
   - `UnmountSERVERNAME`: A script to cleanly unmount the local mount point.
3. **Enables advanced workflows** like:
   - Remote command execution:  
     ```bash
     Saruman 'uname -a'
     ```
   - Subcommand shortcuts:
     ```bash
     Saruman mount
     Saruman unmount
     Saruman ping
     ```
   - File transfer via pipes:  
     ```bash
     tar zcf - helloworld | Saruman 'zxvf -'
     ```
   - Remote-to-local data streaming:  
     ```bash
     Saruman 'tar jcf - helloworld' | tar zxvf -
     ```

---

## 🧪 Usage Examples

### Basic Usage
```bash
# Default port 22 and mount root /
Nu Saruman root 65.67.51.189

# Custom port and specific remote directory
Nu webprod deploy 192.168.1.50 2222 /var/www
```

### SSH into the Server
```bash
Saruman
```

### Mount Remote Directory Locally
```bash
MountSaruman
# or
Saruman mount
```

### Unmount Remote Directory
```bash
UnmountSaruman
# or
Saruman unmount
```

### Execute a Remote Command
```bash
Saruman 'uname -a' > helloworld
```

### Transfer Files via Pipe
```bash
tar zcf - helloworld | Saruman 'zxvf -'
```

### Stream Data from Remote
```bash
Saruman 'tar jcf - helloworld' | tar zxvf -
```

---

## 🧰 Installation & Setup

1. **Ensure `~/bin` is in your `PATH`**:
   ```bash
   export PATH="$HOME/bin:$PATH"
   ```
2. **Install dependencies**:
   - `sshfs` (for mounting remote directories).
   - `ssh` (OpenSSH client).
   - `bash` (required for script execution).

3. **Install using autotools**:
```bash
aclocal
autoconf
automake --add-missing
./configure
sudo make install
```

or use [./build.sh](./build.sh) to do the same thing.

---

## 🧭 Troubleshooting

- **Permission Denied Errors**: Ensure the `USERNAME` has SSH access to the remote server with configured keys or password credentials.
- **SSHFS Not Found**: Install `sshfs` via your package manager (e.g., `sudo apt install sshfs`).
- **Target is Busy**: Close all open terminals or files browsing `~/mnt/<SERVERNAME>` before running `Unmount<SERVERNAME>`.
- **Scripts Not Found**: Verify `~/bin` is in your `PATH` (`echo $PATH`) and scripts have execute permissions (`chmod +x ~/bin/*`).

---

## 📄 License

This project is licensed under the terms of the [LICENSE](LICENSE) file.
