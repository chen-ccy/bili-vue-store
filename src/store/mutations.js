const mutations = {
  addToCart(state,playload){
    state.cartList.push(playload)
  },
  addCount(state,playload){
    playload.count++
  }
}

export default mutations