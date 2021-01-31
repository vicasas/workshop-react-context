import CartProvider from 'contexts/CartContext'
import ProductContainer from 'containers/ProductsContainer'

const App = () => (
  <CartProvider>
    <ProductContainer />
  </CartProvider>
)

export default App
