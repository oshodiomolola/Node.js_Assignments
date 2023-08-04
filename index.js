const path = require('path');

const seperator = path.sep;
console.log({seperator});

const baseName = path.basename('C:\Users\USER\OneDrive\Desktop\Node.js-Assignment\index.js')
console.log({baseName})

const extName = path.extname('C:\Users\USER\OneDrive\Desktop\Node.js-Assignment\index.js');
console.log(extName);

const cwd = path.resolve();
console.log({cwd});

const processId = process.pid;
console.log('Process ID:', processId);

const os = require('os');

const userInfo = os.userInfo();

console.log('User Information:');



