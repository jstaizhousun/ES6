//使用promise读取文件内容(nodeJS环境)
//1、
const fs = require('fs')

fs.readFile('./README.md',(err,data)=>{
    //如果失败
    if(err) throw err;
    console.log(data.toString())
})


//使用promise封装
const p  = new Promise(function(resolve,reject){
    fs.readFile('./README.md',(err,data)=>{
        //如果失败
        if(err) reject(err);
        resolve(data)
    })
})

p.then((value)=>{
    console.log(value.toString())
},(reason)=>{
    console.log(reason)
})