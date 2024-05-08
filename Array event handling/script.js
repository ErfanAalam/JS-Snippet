const input = document.querySelector("#input")
const add = document.querySelector(".add")
const print = document.querySelector(".print")
const printprevarr = document.querySelector(".prevarray")
const para = document.querySelector(".para")
let arr = []


add.addEventListener("click",((e)=>{
    arr.push(input.value)
    input.focus()
    input.value = ""
    console.log(arr);
})
)

// Assignment 1

print.addEventListener("click",((e)=>{
    para.innerHTML = arr
}))


// Assignment 2

printprevarr.addEventListener("click",((e) =>{
    let temparr = ''
    for(let i = arr.length - 1; i >= 0; i--){
        temparr += arr[i] + ", "
    }
    para.innerHTML = temparr;
}))