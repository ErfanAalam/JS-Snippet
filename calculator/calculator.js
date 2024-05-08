const num1 = document.querySelector("#a")
const num2 = document.querySelector("#b")
const operation = document.querySelector("#operations")
const para = document.querySelector(".para")



operation.addEventListener("change", (e) => {
    let numa = Number(num1.value)
    let numb = Number(num2.value)
    // if (e.target.value == "+") {
    //     para.innerHTML = (Number(num1.value) + Number(num2.value));
    // }
    // else if (e.target.value == "-") {
    //     para.innerHTML = (Number(num1.value) - Number(num2.value));
    // }
    // else if (e.target.value == "*") {
    //     para.innerHTML = (Number(num1.value) * Number(num2.value));
    // }
    // else if (e.target.value == "/") {
    //     para.innerHTML = (Number(num1.value) / Number(num2.value));
    // }
    // else if (e.target.value == "%") {
    //     para.innerHTML = (Number(num1.value) % Number(num2.value));
    // }
    switch (e.target.value) {
        case "+":
            para.innerHTML = (numa + numb);
            break;
        case "-":
            para.innerHTML = (numa - numb);
            break;
        case "*":
            para.innerHTML = (numa * numb);
            break;
        case "/":
            para.innerHTML =(numa / numb);
            break;
        case "%":
            para.innerHTML = (numa % numb);
            break;
    
        default:
            break;
    }
})


