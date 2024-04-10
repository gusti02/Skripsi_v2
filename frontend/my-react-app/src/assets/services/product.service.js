import axios from 'axios';

// Fetch products data from API
export function getProducts(callback) {
    axios.get("https://fakestoreapi.com/products").then((response) => {
        console.log(response)
        callback(response.data)
    }).catch((error) => {
        console.log(error)
    })
}