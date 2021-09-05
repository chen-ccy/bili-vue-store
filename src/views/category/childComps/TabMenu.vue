<template>
  <div id="wrapper">
  <scroll id="tab-menu">
    <div class="menu-list">
      <div class="menu-list-item"
           :class="{active: index===currentIndex}"
           v-for="(item, index) in categories"
           :key="index"
           @click="itemClick(index)">
        {{item.title}}
      </div>
    </div>
  </scroll>
  </div>
</template>

<script>
  import Scroll from "@/components/common/scroll/Scroll";

	export default {
		name: "TabMenu",
    components: {
		  Scroll
    },
    props: {
		  categories: Array
    },
    data() {
		  return {
		    currentIndex: 0
      }
    },
    methods: {
		  itemClick(index) {
        this.currentIndex = index
        this.$emit('selectItem', index)
      }
    }
	}
</script>

<style scoped>
  #wrapper{
    height: 100vh;
  }
  #tab-menu{
    height: calc(100% - 93px);
    overflow: scroll;
  }
.menu-list-item{
  width: 80px;
  height: 40px;
  line-height: 50px;
  text-align: center;
  background-color:  #f6f6f6;;
}
.active{
    border-left: 3px solid var(--color-high-text);
    background-color: white;
  }
</style>
