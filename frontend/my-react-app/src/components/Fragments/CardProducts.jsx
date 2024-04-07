import React from 'react'
import Button from '../Elements/Button'

// This is using nestes component to create card
function CardProducts(props) {
    const { children } = props
  return (
    <div className='w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow mx-2
    flex flex-col justify-between'>
        {children}
    </div>
  )
}

function Body(props) {
    // this is the body of card
    const { children, name } = props
    return (
        <div className='px-5 pb-5 h-full'>
            <a href='#'>
                <h5 className='text-xl font-semibold tracking-tight text-white'>
                    {name}
                </h5>
            </a>
            <p className='text-white text-m'>
                {children}
            </p>
        </div>
    )
}

function Footer(props) {
    // This is footer of card
    const { price } = props
    return (
        <div className="flex justify-between px-5 pb-3 item-center">
            <span className='text-white text-m font-bold'>{price}</span>
            <Button className="bg-blue-600">Add To Cart</Button>
        </div>
    )
}

function Header(props) {
    // this is header of card
    const { image } = props
    return (
        <a href='#'>
            <img src={image} alt="product" className='p-8 rounded-t-lg' />
        </a>
    )
    
}

// Declaration of card children
CardProducts.Header = Header
CardProducts.Body = Body
CardProducts.Footer = Footer

export default CardProducts