import {
  FETCH_PRODUCT,
  APPLY_PROMO
} from '../actions/types';

const INITAL_STATE ={
  product: {},
}

export default function (state = INITAL_STATE, action) {
  switch (action.type) {
    case FETCH_PRODUCT:
      return { ...state , product: action.product}
    case APPLY_PROMO:
      const updatedProduct = updateProductWithDiscount (state.product, action.discount)
      return { ...state, product: { ...state.product, ...updatedProduct }}
    default:
    return state
  }
}

const updateProductWithDiscount = (product, discount) => {
  let updatedProduct = product
  if (updatedProduct.SKU === discount.SKU && discount !== null) {
    updatedProduct.discount = discount.discount
    updatedProduct.discountedPrice = (updatedProduct.subtotal * (1 - discount.discount)).toFixed(2)
  }
  return updatedProduct
}
