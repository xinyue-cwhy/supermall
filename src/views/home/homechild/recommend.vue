<template>
  <div class="recommends">
    <div v-for="item in recommends" class="re-items">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "recommend",
  props:{
    recommends:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
.recommends{
  display: flex;
  width: 100%;
  text-align: center;
  font-size: 12px;
  padding: 10px 0px 15px ;
  border-bottom: 8px solid #eee;
}
.re-items{
  flex: 1;

}
.re-items img{
  width: 65px;
  height: 65px;

}
</style>
