const image = document.querySelector("img")
const name = document.querySelector(".name")
const DOB = document.querySelector(".DOB")
const gender = document.querySelector(".Gender")
const mail = document.querySelector(".mail")

const url = "https://randomuser.me/api/"

fetch("https://randomuser.me/api/").then(async (response) => {
    let data =await response.json()
    console.log(data.results[0]);
    image.src = data.results[0].picture.large
    name.innerText = data.results[0].name.first + " " +  data.results[0].name.last
    DOB.innerText = data.results[0].dob.date
    gender.innerText = data.results[0].gender
    mail.innerText = data.results[0].email

})