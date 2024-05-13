const arr = [1, 9, 3, 4, 0, 7, 5, 10, 15]
const sumPair = []
const sortedarr = []

function sortarr(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let a = arr[i]
                arr[i] = arr[j]
                arr[j] = a
            }
        }
        sortedarr.push(arr[i])
    }

    // console.log(sortedarr);
}

sortarr(arr)



function pairsum(arr, val) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if(arr[i]+ arr[j] == val){
                sumPair.push([arr[i], arr[j]])
            }
        }
    }
    console.log(sumPair);
}

pairsum(sortedarr,10)


// compress string

let str = "aabbcceeeedd"

function compress(s){
    let compressedstr = ""
    let count = 1
    for(let i =1; i<s.length; i++){
        if(s[i] == s[i-1]){
            count++
        }else{
            compressedstr += s[i-1] + count;
            count = 1;
        }
    }
    compressedstr += s[s.length - 1] + count
    console.log(compressedstr);
}

compress(str)



// check palindrome of string 


function palindrome(str){
    let output = false;
    let strarr = str.split("")
    let reversestr = strarr.reverse().join("");
    if(str === reversestr){
        output = true
    }
    return output
}

console.log(palindrome("malayalam"));


// function to find the length of the longest substring  without repeating characters in a given string

let length = 0
function lengthOfLongestSubstring(str) {
    let maxLen = 0
    let obj = {}

    let i = 0
    let j = 0
    while (j < str.length) {
        if (!obj[str[j]]) {
            obj[str[j]] = true;
            j++;
            if (j - i > maxLen) {
                maxLen = j - 1
            }
        } else {
            delete obj[str[i]]
            i++
        }
    }
    length = maxLen;
    return maxLen
}
console.log(lengthOfLongestSubstring("abcdeabcdaabcdeb"));

// lengthOfLongestSubstring("abcdabcbb")