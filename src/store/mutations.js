const mutations = {
  addToCart(state,playload){
    playload.isClick = false;
    state.cartList.push(playload)
  },
  addCount(state,playload){
    playload.count++
  }
}

export default mutations