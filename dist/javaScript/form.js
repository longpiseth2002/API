'use strict'

const titleElement = document.querySelector('#title')
const priceElement = document.querySelector('#price')
const descriptionElement = document.querySelector('#description')
const fileElement = document.querySelector('#file')


async function createProduct(){
    const title = titleElement.value
    const description = descriptionElement.value
    const price = Number(priceElement.value)
    const file = fileElement.files[0]
        const imgURL = await uploadImage(file)

    const product = {
        title ,
        price ,
        description ,
        categoryId : 1,
        images :[imgURL.location]
    };

    fetch ('https://api.escuelajs.co/api/v1/products/', {
        method : 'POST',
        headers : {
            'Content-Type':'application/json'
        },
        body :JSON.stringify(product)
    })
    .then (d => d.json())
    .then (data => console.log(data))
}


async function uploadImage(file){
    const formData = new FormData();
    formData.append("file",file);

    // sent request to sever 
    const res = await fetch('https://api.escuelajs.co/api/v1/files/upload' , {
        method : 'POST',
        body: formData
    })

    return res.json()
    
}
