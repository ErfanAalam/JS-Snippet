const textarea = document.querySelector("#text")
const para = document.querySelector(".result")
const reamining = document.querySelector(".characters") 
let limit = 50

textarea.addEventListener("keyup", ((e) => {
    console.log(e.target.value);
    let typed = e.target.value
    let finalresult = ""
    for (let i = typed.length -1; i >= 0; i--) {
        finalresult += typed[i]
    }
    para.innerHTML = finalresult

    let reaminingchar = limit-typed.length
    if(reaminingchar < 20){
        reamining.style.color = "red"
    }else{
        reamining.style.color = "black"

    }

    reamining.innerHTML = reaminingchar
}))