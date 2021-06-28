const actions = {

  addCart(context,playload){
    return new Promise(resolve => {
      let oldItem = context.state.cartList.find( item => item.iid === playload.iid )
      if(oldItem){
        context.commit('addCount',oldItem)
        resolve('数量加一')
      }else {
        playload.count = 1
        context.commit('addToCart',playload)
        resolve('已添加到购物车')
      }
    })
  }
}

export default actions