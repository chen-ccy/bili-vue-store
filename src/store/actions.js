const actions = {
  addCart(context,playload){
    let oldItem = context.state.cartList.find( item => item.iid === playload.iid )
    if(oldItem){
      context.commit('addCount',oldItem)
    }else {
      playload.count = 1
      context.commit('addToCart',playload)
    }
  }
}

export default actions