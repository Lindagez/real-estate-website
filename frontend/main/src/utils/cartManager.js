export const saveToCart = (propertyId) => {
  if (typeof window !== undefined) {
    localStorage.setItem("cart", propertyId)
  }
}

export const getCart = () => {
  if (typeof window !== undefined) {
    return localStorage.getItem("cart");
  }
}