// Object Property Shorthand
const name = 'Andrew'
const userAge = '37'

const user = {
    name,
    age: userAge,
    location: 'Margao,Goa'
}

console.log(user)


// Object Destructuring
const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined
}


const {
    label:productLabel,
    price,
    rating=5
} = product

console.log(`"${productLabel}" sale price is ${price} with rating ${rating}`)


// Function object destructuring
const transaction =(type,{label,stock})=>{
    console.log(type,label,stock)
}

transaction('order',product)