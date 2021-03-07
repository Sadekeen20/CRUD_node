const fs=require("fs")


//create
// fs.mkdirSync("fs_operation")//create a directory, then comment it (1)

//write
// fs.writeFileSync("fs_operation/file1.txt","Hey there!")//create a file in that folder and write data in it (1)

//update
// fs.appendFileSync('fs_operation/file1.txt',"I hope you recognize me") // comment (2)

//read 
// const x = fs.readFileSync('fs_operation/file1.txt')
// console.log(x.toString())
// way2
// const y = fs.readFileSync('fs_operation/file.txt','utf8')
// console.log(y)

// rename
// fs.renameSync("fs_operation/file1.txt","fs_operation/file.txt")
// fs.removeSync("fs_operation/file.txt")

// delete file
// fs.unlinkSync("fs_operation/file.txt")

// delete folder
// fs.rmdirSync("fs_operation")