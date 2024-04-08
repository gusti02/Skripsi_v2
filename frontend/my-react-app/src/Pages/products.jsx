import React, { Fragment } from 'react'
import CardProducts from '../components/Fragments/CardProducts'
import Button from '../components/Elements/Button'

const products = [
    {
        id: 1,
        name: 'Sepatu Baru',
        price: 'Rp. 1.000.000',
        image: '/images/shoes1.jpg',
        description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Atque veritatis accusantium totam, hic iure sapiente 
            expedita sunt nam a corrupti aut eius. Excepturi 
            ab at debitis labore eius id nulla.`
    },
    {
        id: 2,
        name: 'Sepatu Lama',
        price: 'Rp. 5.000.000',
        image: '/images/shoes1.jpg',
        description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit`
    },
    
    {
        id: 3,
        name: 'Sepatu Pumi',
        price: 'Rp. 2.400.000',
        image: '/images/shoes1.jpg',
        description: `Ini adalah sepatu baru dari Brand Pumi`
    },
]

{/* Get Email */}
const email = localStorage.getItem('email')

{/* Products Page */}
function ProductsPage() {

  {/* Handler Logout */}
  const handleLogout = () => {
      localStorage.removeItem('email')
      localStorage.removeItem('password')
      window.location.href = "/login"
  }

  return (
    <Fragment>
        <div className='flex justify-end h-20 bg-blue-600 text-white px-10 items-center'>
            {email}
            <Button className='bg-black ml-5' onClick={handleLogout}>Logout</Button>
        </div>
        <div className='flex justify-center py-5'>
            {/* Card Products using rendering map list*/}
            {products.map(product => (
                <CardProducts key={product.id}>
                    <CardProducts.Header image={product.image}></CardProducts.Header>
                    <CardProducts.Body name={product.name}>
                        {product.description}
                    </CardProducts.Body>
                    <CardProducts.Footer price={product.price}></CardProducts.Footer>
                </CardProducts>
            ))}
        </div>
    </Fragment>
  )
}

export default ProductsPage