import PropTypes from 'prop-types'
import styles from './product.module.css'

const Product = ({ product, onClick }) => {
  const { title, price } = product

  return (
    <div className={styles.product}>
      <div>
        <div>{title}</div>
        <div>${price}</div>
      </div>
      <div>
        <button type='button' onClick={() => onClick(product)}>
          Add to cart
        </button>
      </div>
    </div>
  )
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string,
    catefory: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Product
