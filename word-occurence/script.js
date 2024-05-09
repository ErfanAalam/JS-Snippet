let str = "Erfan Aalam"

let obj = {}
// let count = 0

let arr = str.split("")

arr.forEach((x)=>{
    if(Object.keys(obj).includes(x)){
        obj[x]++
    }else{
        obj[x] = 1
    }
})


console.log(obj);