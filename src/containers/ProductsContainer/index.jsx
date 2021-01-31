import { useEffect, useState } from 'react'
import Products from 'components/Products'
import ShoppingCart from 'components/ShoppingCart'
import getProducts from 'services/products'
import { useCartState, useCartDispatch } from 'contexts/CartContext'

const ProductContainer = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const { items, count, subTotal } = useCartState()
  const { addToCart, removeOneFromCart, removeAllFromCart } = useCartDispatch()

  const handleAddToCart = product => addToCart(product)

  useEffect(() => {
    setLoading(true)

    getProducts()
      .then(data => setProducts(data))
      .catch(err => setError(err))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <div>Loading...</div>

  if (error) return <div>{error.message}</div>

  return (
    <>
      <ShoppingCart
        quantity={count}
        items={items}
        subTotal={subTotal}
        onAddToCart={addToCart}
        onRemoveAll={removeAllFromCart}
        onRemoveOne={removeOneFromCart}
      />
      <Products products={products} onClick={handleAddToCart} />
    </>
  )
}

export default ProductContainer
