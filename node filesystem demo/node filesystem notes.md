# Node Filesystem Notes
* UTF8 is the standard file encoding, and is used if no encoding is specified.
* `fs.appendFile()` appends contents to a file or creates the file if it doesn't exist
* `readFile()` behaves asynchronously, which is why it has a callback function, defined here as an anonymous arrow function