export const fakeData = () => ({
    subtotal: 102.96,
    savings: 3.85,
    tax: 8.92,
    total: 108.03,
    zip: 85050,
    productDescription: "Essentials by OFM ESS-3085 Racing Style Leather Gaming Chair, Red",
    productImg:"https://i5.walmartimages.com/asr/e73e1252-642c-4473-93ea-fd3b564a7027_1.3e81ea58fa3042452fe185129a4a865f.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff",
    quantity: 1,
    discount: null,
    SKU: '123456',
    discountedPrice: null,
})

export const fetchPromoCode = (promoCode) => {
  if (promoCode.toUpperCase() !== 'DISCOUNT'){
    throw new Error('Invalid Promo Code')
  }
  return {SKU: '123456',
    discount: .10
  }
}
