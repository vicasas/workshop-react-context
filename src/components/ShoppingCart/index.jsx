import PropTypes from 'prop-types'
import styles from './shoppingCart.module.css'

const ShoppingCart = ({
  quantity,
  items,
  subTotal,
  onAddToCart,
  onRemoveAll,
  onRemoveOne,
}) => {
  if (items.length <= 0) {
    return <div className={styles.cartEmpty}>The cart is empty</div>
  }

  return (
    <div className={styles.cart}>
      <div>Quantity: {quantity}</div>
      <ul>
        {items.map(item => {
          const { id, title, price, quantity: qty } = item

          return (
            <li key={id} className={styles.cartListItem}>
              <div className={styles.cartProduct}>
                <span>{title}</span>
                <span>{price}</span>
                <span>{qty}</span>
              </div>
              <div className={styles.cartButtons}>
                <button
                  type='button'
                  onClick={() => onRemoveOne(item)}
                  disabled={qty === 1}
                >
                  -
                </button>
                <button type='button' onClick={() => onAddToCart(item)}>
                  +
                </button>
                <button type='button' onClick={() => onRemoveAll(item)}>
                  remove
                </button>
              </div>
            </li>
          )
        })}
      </ul>
      <div>Sub Total: {subTotal}</div>
    </div>
  )
}

ShoppingCart.propTypes = {
  quantity: PropTypes.number.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      price: PropTypes.number,
      description: PropTypes.string,
      catefory: PropTypes.string,
      image: PropTypes.string,
    }),
  ).isRequired,
  subTotal: PropTypes.number.isRequired,
  onAddToCart: PropTypes.func.isRequired,
  onRemoveAll: PropTypes.func.isRequired,
  onRemoveOne: PropTypes.func.isRequired,
}

export default ShoppingCart
