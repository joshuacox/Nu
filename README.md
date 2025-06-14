# Nu - Server Connection Manager 🚀

**Nu** is a lightweight Bash script that simplifies frequent interactions with remote servers by creating custom, executable shortcuts for SSH connections, SSHFS mounting, and remote command execution.  

With Nu, you can instantly SSH into servers, mount remote directories locally, or execute advanced workflows like command chaining and file transfers—all with intuitive, user-defined names.

---

## 🌟 Features

- **Custom SSH Shortcuts**  
  Create executable scripts in `~/bin/` for instant access to servers using memorable names (e.g., `Saruman`).

- **SSHFS Mounting**  
  Transparently mount remote server directories locally using SSHFS for seamless file access.

- **Advanced Command Chaining**  
  Execute commands remotely, pipe output to/from remote systems, and transfer files via command-line tools (e.g., `tar`, `rsync`).

- **Persistent Configuration**  
  Store server configurations in `~/mnt/` and reuse access scripts across sessions without reconfiguration.

---

## 🛠️ How It Works

When you run:  
```bash
Nu SERVERNAME USERNAME IPADDRESS PORT
```

Nu performs the following steps:

1. **Creates a mount point** at `~/mnt/SERVERNAME`.
2. **Generates two executable scripts** in `~/bin/`:
   - `SERVERNAME`: A shortcut for SSH connections with agent forwarding (`-A`) and X11 forwarding (`-X`).
   - `MountSERVERNAME`: A script to mount the remote server's home directory locally using SSHFS.
3. **Enables advanced workflows** like:
   - Remote command execution:  
     ```bash
     Saruman 'uname -a'
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
Nu Saruman root 65.67.51.189 2222
```

### SSH into the Server
```bash
Saruman
```

### Mount Remote Directory Locally
```bash
MountSaruman
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
   export PATH=~/bin:$PATH
   ```
2. **Install dependencies**:
   - `sshfs` (for mounting remote directories).
   - `bash` (required for script execution).

3. **Make the script executable**:
   ```bash
   chmod +x Nu
   ```

---

## 🧭 Troubleshooting

- **Permission Denied Errors**: Ensure the `USERNAME` has SSH access to the remote server.
- **SSHFS Not Found**: Install `sshfs` via your package manager (e.g., `sudo apt install sshfs`).
- **Scripts Not Found**: Verify `~/bin` is in your `PATH` and scripts are marked as executable.

---

## 📄 License

This project is licensed under the terms of the [LICENSE](LICENSE) file.
