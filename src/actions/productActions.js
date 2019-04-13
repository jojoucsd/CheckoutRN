import { fakeData, fetchPromoCode } from '../APIs';
import {FETCH_PRODUCT, APPLY_PROMO} from './types'

export const fetchProductData = () => {
  return async dispatch =>{
    try {
      const data = await fakeData()
      dispatch({type: FETCH_PRODUCT, product: data })
    }
    catch(err){
      console.log('error fetching data', err)
    }
  }
}

export const applyPromoCode = (promoCode) => {
  return async dispatch =>{
    try {
      const data = await fetchPromoCode(promoCode)
      dispatch({type: APPLY_PROMO, discount: data})
    }
    catch(err){
      console.log('error fetching promo code', err)
      alert(err.message)
    }
  }
}
