import {debounce} from "@/common/utils";

export const itemListenerMixin = {
  data(){
    return{
      newRefresh:null,
      itemListener:null
    }
  },
  mounted(){
    this.newRefresh = debounce(this.$refs.scroll.refresh,500);
    //alert(refresh)
    this.itemListener = () => {
      //this.$refs.scroll.refresh()
      this.newRefresh()
    }
    this.$bus.$on('itemImageLoad',this.itemListener )
  }
}