const wrapper = document.querySelector(".wrapper")

const url = "https://dummyjson.com/products"

fetch(url).then(async (response) => {
    let data = await response.json()
    console.log(data.products);
    data.products.map((product) => {
        let products = document.createElement("div")
        products.classList.add("products")
        wrapper.appendChild(products)
        let image = document.createElement("img")
        let title = document.createElement("h2")
        let desc = document.createElement("p")
        let price = document.createElement("h4")
        products.append(image)
        products.appendChild(title)
        products.appendChild(desc)
        products.appendChild(price)
        image.src = product.images[0]
        title.innerText = product.title
        desc.innerText = product.description
        price.innerText = "₹" + "" + product.price

    })
})