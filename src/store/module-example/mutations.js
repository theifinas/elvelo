export function setItems (state,items) {
  state.items = items
}

export function PRODUCT_MUTATION (state,items) {
  console.log(PRODUCT_MUTATION, items)
  return(state.items =items)
}
