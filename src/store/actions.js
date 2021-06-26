const actions = {
  addCart(context,playload){
    let oldItem = context.state.cartLisat.find( item => item.iid === playload.iid )
    if(oldItem){
      context.commit('addCount',oldItem)
      console.log('count');
    }else {
      playload.count = 1
      context.commit('addToCart',playload)
    }
  }
}

export default actions