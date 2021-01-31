import { useEffect, useState } from 'react'
import Products from 'components/Products'
import getProducts from 'services/products'

const ProductContainer = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleAddToCart = product => product // TODO

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
      <Products products={products} onClick={handleAddToCart} />
    </>
  )
}

export default ProductContainer
