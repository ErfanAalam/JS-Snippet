const input = document.querySelector("input")
const add = document.querySelector(".add")
const select = document.querySelector("#sequence")
const sort = document.querySelector(".sort")
const para = document.querySelector(".para")
let arr = []
let sortedarray = []
let reversedarr = []


add.addEventListener("click", () => {
    input.focus()
    arr.push(input.value)
    input.value = ""
    console.log(arr);
})


sort.addEventListener("click",()=>{
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            // let a = 0;
            if (arr[i] > arr[j]) {
                let a = arr[i];
                arr[i] = arr[j];
                arr[j] = a;
            }
        }
        sortedarray.push(arr[i])
    }
    console.log(sortedarray);
})


// let length = arr.length
// console.log(length);

console.log(sortedarray);




select.addEventListener("change", (e) => {
    console.log(e.target.value);
    if (e.target.value == "ascending") {
        para.innerHTML = sortedarray
        console.log(sortedarray);
    }else if(e.target.value == "descending"){
        for(let i = sortedarray.length-1; i>=0; i--){
            reversedarr.push(sortedarray[i])
        }
        para.innerHTML = reversedarr
        console.log(reversedarr);
    }
    
})










