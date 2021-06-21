import {request} from "@/networks/request";

export function getDetail(iid) {
  return request({
    url:'/detail',
    params:{
      iid
    }
  })
}

export class Goods{
  constructor(itemInfo,columns,services) {
    this.title = itemInfo.title;
    this.desc = itemInfo.desc
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discountDesc
    this.columns = columns
    this.services = services
    this.realPrice = itemInfo.lowNowPrice
  }

}

export class ShopInfo {
  constructor(shopInfo) {
    this.fan = shopInfo.cFans
    this.goodsCount = shopInfo.cGoods
    this.sells = shopInfo.cSells
    this.score = shopInfo.score
    this.logo = shopInfo.shopLogo
    this.name = shopInfo.name

  }
}