import React, { Fragment, useState } from 'react'
import CardProducts from '../components/Fragments/CardProducts'
import Button from '../components/Elements/Button'

const products = [
    {
        id: 1,
        name: 'Sepatu Baru',
        price: 1000000,
        image: '/images/shoes1.jpg',
        description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Atque veritatis accusantium totam, hic iure sapiente 
            expedita sunt nam a corrupti aut eius. Excepturi 
            ab at debitis labore eius id nulla.`
    },
    {
        id: 2,
        name: 'Sepatu Lama',
        price: 5000000,
        image: '/images/shoes1.jpg',
        description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit`
    },
    
    {
        id: 3,
        name: 'Sepatu Pumi',
        price: 2400000,
        image: '/images/shoes1.jpg',
        description: `Ini adalah sepatu baru dari Brand Pumi`
    },
]

{/* Get Email */}
const email = localStorage.getItem('email')

{/* Products Page */}
function ProductsPage() {
    
    {/* Using useState */}
    const [cart, setCart] = useState([
        {
            id: 1,
            qty: 1,
        },
    ])

  {/* Handler Logout */}
  const handleLogout = () => {
    localStorage.removeItem('email')
    localStorage.removeItem('password')
    window.location.href = "/login"
  }

  {/* Handler Add To Cart */}
  const handleAddToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
        setCart(
            cart.map((item) => item.id === id ? {...item, qty: item.qty + 1}: item)
        )
    } else {
        setCart([...cart, {id, qty: 1}])
    }
  }

  return (
    <Fragment>
        <div className='flex justify-end h-20 bg-blue-600 text-white px-10 items-center'>
            {email}
            <Button className='bg-black ml-5' onClick={handleLogout}>Logout</Button>
        </div>
        <div className='flex justify-center py-5'>
            <div className='w-4/6 flex flex-wrap'>
                {/* Card Products using rendering map list*/}
                {products.map(product => (
                    <CardProducts key={product.id}>
                        <CardProducts.Header image={product.image}></CardProducts.Header>
                        <CardProducts.Body name={product.name}>
                            {product.description}
                        </CardProducts.Body>
                        <CardProducts.Footer 
                            price={product.price} 
                            id={product.id}
                            handleAddToCart={handleAddToCart}
                        />
                    </CardProducts>
                ))}
            </div>
            <div className="w-2/6">
                <h1 className='text-3xl font-bold text-blue-600 ml-2 mb-2'>Cart</h1>
                {/* Create a Table */}
                <table className='text-left table-auto border-separate border-spacing-x-2'>
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((item) => {
                            const product = products.find((product) => product.id === item.id)
                            return (
                                <tr key={item.id}>
                                    <td>{product.name}</td>
                                    <td>{product.price.toLocaleString('id-ID', 
                                        {
                                            style: 'currency', 
                                            currency: 'IDR', 
                                            minimumFractionDigits: 0, 
                                            maximumFractionDigits: 0 
                                        })}
                                    </td>
                                    <td>{item.qty}</td>
                                    <td>{(item.qty * product.price).toLocaleString('id-ID', 
                                        {
                                            style: 'currency', 
                                            currency: 'IDR', 
                                            minimumFractionDigits: 0, 
                                            maximumFractionDigits: 0 
                                        })}
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                {/* Limit of Table */}
            </div>
        </div>
    </Fragment>
  )
}

export default ProductsPage