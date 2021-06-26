const mutations = {
  addToCart(state,playload){
    state.cartLisat.push(playload)
  },
  addCount(state,playload){
    playload.count++
    console.log(playload.count);
  }
}

export default mutations