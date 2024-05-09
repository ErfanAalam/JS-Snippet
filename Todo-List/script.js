// const input = document.querySelector("input")
// const button = document.querySelector(".btn")
// const ul = document.querySelector("ul")
// const icon = document.querySelector("i")

// button.addEventListener("click", (e) => {
//     e.preventDefault()
//     console.log(input.value);
//     input.focus()

//     let newli = document.createElement("li")
//     let icon1 = document.createElement("i")
//     let icon2 = document.createElement("i")

//     icon1.classList.add("fa-solid")
//     icon1.classList.add("fa-pencil")
//     icon2.classList.add("fa-solid")
//     icon2.classList.add("fa-trash")

//     newli.innerHTML = input.value
//     ul.appendChild(newli)
//     newli.appendChild(icon1)
//     newli.appendChild(icon2)



//     newli.children[1].addEventListener("click",(e)=>{
//         e.target.parentElement.remove();
//     })

//     newli.children[0].addEventListener("click",(e)=>{
//         input.focus()
//         e.target.parentElement.innerText = input.value 
//     })

//     // newli.children[0].addEventListener("click",()=>{
//     //     input.focus()
//     //     console.log(e.target);
//     //     // e.target.parentElement.innerText = "";
//     // })

//     input.value = ""
// })

let form = document.querySelector("form")
let input = document.querySelector("input")
let ul = document.querySelector("ul")
let tasks = []
let count = 1;

let isEditing = false

form.addEventListener("submit", (e) => {
    e.preventDefault()

    if(!isEditing){
    let obj = {}
    obj.id = count++
    obj.task = input.value

    tasks.push(obj)

    }else{
        tasks.forEach((t)=>{
            if(t.id == isEditing){
                t.task = input.value
            }
        })
        isEditing = false
    }

    // console.log(tasks);

    const createElement = () => {
        tasks.forEach((t) => {

            let li = document.createElement("li")
            let edit = document.createElement("i")
            let del = document.createElement("i")

            edit.classList.add("fa-solid", "fa-pencil")
            del.classList.add("fa-solid", "fa-trash")



            del.addEventListener("click", () => handleDelete(t.id))
            edit.addEventListener("click", () => handleEdit(t.id))



            li.innerText = t.task
            li.append(edit, del)

            ul.append(li)
        })
    }

    const cleanslate = () => {
        ul.innerHTML = ""
        input.value = ""
        input.focus()
    }

    cleanslate()
    createElement()


    const handleDelete = (id)=>{
        tasks.forEach((t,index)=>{
            if (t.id == id) {
                tasks.splice(index,1)
            }
        })
        cleanslate()
    createElement()
    }

    const handleEdit = (id)=>{
        tasks.forEach((t)=>{
            if(t.id === id){
                input.value = t.task
                isEditing = t.id
            }
        })
        input.focus()
    }

    // del.addEventListener("click", (e) => {
    //     // console.log(e.target.parentElement);
    //     // console.log(e.target.parentElement.innerText)
    //     // console.log(tasks[0].id);
    //     for (let i = 0; i < tasks.length; i++) {
    //         if (tasks[i].task == e.target.parentElement.innerText) {
    //             tasks.splice(i, 1)
    //             e.target.parentElement.remove()

    //             // console.log(tasks)
    //         }
    //     }

    // })

    // edit.addEventListener("click", (e) => {
    //     console.log(e.target.parentElement);
    //     // console.log(e.target.parentElement.innerText)
    //     // console.log(tasks);
    //     let edittask = prompt("enter the new task to update")
    //     for (let i = 0; i < tasks.length; i++) {
    //         if (tasks[i].task == e.target.parentElement.innerText) {
    //             tasks[i].task = edittask
    //             // e.target.parentElement.innerText = tasks[i].task
    //         }
    //     }
    //     createElement()

    // })
    // e.target.parentElement.append(edit, del)
    // input.value = ""
})







