//  remove duplicate elements from the array 

// let arr = [1,2,2,2,1,1,3,4,3,5,2,6,3]

// for(let i =0; i<=arr.length-1; i++){
//     while(arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])){
//         arr.splice(arr.lastIndexOf(arr[i]),1)
//     }
// }

// console.log(arr);

// let a = ""
// let b = ""

// let arr = ["", ""]

// console.log(arr[0] === arr[1]);


// find longest common prefix

// let str = ["flower", "flow", "flight"]

// let res = str.sort((a,b)=> b.length-a.length)

// console.log(res);

// let str =" erfankhan";
// let res = str.substring(0,3)
// console.log(res);

if(strs.length === 0) return '';
strs.sort((a,b)=> b.length - a.length);
const shortest = strs.pop()
let i = 0;
for(i; i<=shortest.length; i++){
    const prefix = shortest.substring(0,i+1);
    if(!strs.every(s=>s.startsWith(prefix))) break;
}
return shortest.substring(0,1)