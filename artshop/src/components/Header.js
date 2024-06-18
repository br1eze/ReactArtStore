import React, { useState } from 'react'
import { FaShoppingCart} from "react-icons/fa"

export default function Header(props) {
  let [cartOpen, setCartOpen] = useState(false)

  return (
    <header>
        <div>
            <span className='logo'>ArtShop</span>
            <ul className='nav'>
          
            </ul>
            <FaShoppingCart onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}` } />

            {cartOpen && (
              <div className='shop-cart'>
              </div>
            )}
        </div>
        <div className='presentation'></div>
    </header>
  )
}
