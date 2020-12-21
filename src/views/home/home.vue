<template>
  <div>
    <navbar id="navbar"><label slot="center">购物街</label></navbar>
    <homeswiper :banners="banners"></homeswiper>
    <recommend :recommends="recommends"></recommend>
  </div>
</template>

<script>
import navbar from "@/components/common/navbar/navbar";
import homeswiper from "@/views/home/homechild/homeswiper";
import recommend from "@/views/home/homechild/recommend";

import {getHomeMulidata} from "@/network/home";


export default {
  name: "home",
  components:{
    navbar,
    homeswiper,
    recommend
  },
  data(){
    return{
      banners:[],
      recommends:[]
    }
  },
  created() {
    getHomeMulidata().then(res=>{
      console.log(res.data.data.recommend.list);
      this.banners=res.data.data.banner.list
      this.recommends=res.data.data.recommend.list
    })
  }
}
</script>

<style scoped>
#navbar{
  background-color: var(--color-tint);
  color: white;
}
</style>
