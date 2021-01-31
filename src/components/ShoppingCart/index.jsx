import styles from './shoppingCart.module.css'

const ShoppingCart = () => (
  <div className={styles.cart}>
    <div>Quantity: 0</div>
    <ul>
      <li className={styles.cartListItem}>
        <div className={styles.cartProduct}>
          <span>title</span>
          <span>price</span>
          <span>quantity</span>
        </div>
        <div className={styles.cartButtons}>
          <button type='button' onClick={() => null}>
            -
          </button>
          <button type='button' onClick={() => null}>
            +
          </button>
          <button type='button' onClick={() => null}>
            remove
          </button>
        </div>
      </li>
    </ul>
    <div>Total: 0</div>
  </div>
)

export default ShoppingCart
