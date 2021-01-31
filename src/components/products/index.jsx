import PropTypes from 'prop-types'
import Product from 'components/Product'
import styles from './products.module.css'

const Products = ({ products, onClick }) => (
  <div className={styles.products}>
    {products.map(product => (
      <Product key={product.id} product={product} onClick={onClick} />
    ))}
  </div>
)

Products.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      price: PropTypes.number,
      description: PropTypes.string,
      catefory: PropTypes.string,
      image: PropTypes.string,
    }),
  ).isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Products
