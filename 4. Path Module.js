console.log("-------- Nodejs Path Module --------");

const path = require('path')
// console.log(path);
// console.log(__dirname )


const filePath = path.join('./practice Files','testing.text')
console.log(filePath);


// ----BaseName -------

// The path.basename() method returns the last portion of a path, similar to the Unix basename command. Trailing directo

// printing testing.txt
console.log(path.basename(filePath));



// nesting folder path
// Folder => subFolder => testing.txt
// const filePath2 = path.join('./Folder','subFolder','testing.text')



const absolutePath = path.resolve(__dirname, './practice Files','testing.text')
console.log(absolutePath)




