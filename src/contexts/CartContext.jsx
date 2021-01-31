import { createContext, useContext, useReducer } from 'react'
import PropTypes from 'prop-types'

// contants
const ADD_TO_CART = 'ADD_TO_CART'
const REMOVE_ONE_CART = 'REMOVE_ONE_CART'
// const REMOVE_ALL_CART = 'REMOVE_ALL_CART'

// initial state
const initialState = {}

// contexts
const CartStateContext = createContext()
const CartDispatchContext = createContext()

// reducer
function cartReducer(state, action) {
  const { type, payload } = action
  const existingCartItem = state[payload.id]

  switch (type) {
    case ADD_TO_CART: {
      // If the item exists in the cart
      if (existingCartItem !== undefined) {
        const quantity = existingCartItem.quantity + 1

        return {
          ...state,
          [payload.id]: {
            ...existingCartItem,
            quantity,
          },
        }
      }

      // If the item does NOT exist in the cart
      return {
        ...state,
        [payload.id]: {
          ...payload,
          quantity: 1,
        },
      }
    }

    case REMOVE_ONE_CART: {
      const quantity = existingCartItem.quantity - 1

      return {
        ...state,
        [payload.id]: {
          ...existingCartItem,
          quantity,
        },
      }
    }

    default:
      throw new Error(`Unhandled action type ${type}`)
  }
}

// provider
const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState)
  // const [state, dispatch] = useState(initialState)

  return (
    <CartStateContext.Provider value={state}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartStateContext.Provider>
  )
}

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

const getCartCount = (sum, item) => sum + item.quantity

// custom hook state
export const useCartState = () => {
  const state = useContext(CartStateContext)
  if (typeof state === 'undefined') {
    throw new Error('useCartState must be used within a CartProvider')
  }

  const items = Object.values(state)
  const count = items.reduce(getCartCount, 0)

  return { items, count, subTotal: 0 }
}

// custom hook dispatch
export const useCartDispatch = () => {
  const dispatch = useContext(CartDispatchContext)
  if (typeof dispatch === 'undefined') {
    throw new Error('useCartDispatch must be used within a CartProvider')
  }

  const addToCart = product => dispatch({ type: ADD_TO_CART, payload: product })

  const removeOneFromCart = item =>
    dispatch({ type: REMOVE_ONE_CART, payload: item })

  return { addToCart, removeOneFromCart }
}

export default CartProvider
