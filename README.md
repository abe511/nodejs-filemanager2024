
## A simple File Manager in Node.js

To start run:
```
npm run start
```

To change the username run:
```
node index.js -- --username=<your_username>
```

To exit:

press `Ctrl+C` or type `.exit`

---

## Commands

### Navigation:

`cd <dir_path>` - change directory

`up` - go to parent directory

`ls [<dir_path>]` - list directory

### File operations:

`add <file_path>` - create an empty file

`cat <file_path>` - show file contents

`cp <src_path> <dest_path>` - copy a file

`mv <src_path> <dest_path>` - move a file

`rn <file_path> <new_file_path>` - rename a file

`rm <file_path>` - remove a file

### System info:

`os --EOL` - print system End-Of-Line characters

`os --cpus` - print CPU info

`os --homedir` - print user home directory

`os --username` - print system user name

`os --architecture` - print Node.js binary CPU architecture

### Hash calculation:

`hash <file_path>` - print file SHA256 hash

### Archivation:

`compress <file_path>` - compress a file using Brotli algorithm

`decompress <file_path>` - decompress a file