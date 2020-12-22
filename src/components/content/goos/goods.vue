<template>
  <div class="goods">
      <goodsitems v-for="item in goods" :goodsitem="item" class="goodsitem"></goodsitems>
  </div>
</template>

<script>
//子组件
import goodsitems from "@/components/content/goos/goodsitems";

export default {
  name: "goods",
  components:{
    goodsitems
  },
  props:{
    goods:{
      type:Array,
      default() {
        return []
      }
    }
  },
}
</script>

<style scoped>
.goods{
  display: flex;
  flex-wrap:  wrap;
  justify-content: space-evenly;
}
</style>
