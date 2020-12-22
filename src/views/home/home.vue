<template>
  <div id="home">
    <navbar id="navbar"><label slot="center">购物街</label></navbar>

    <scroll
      class="content" ref="scroll"
      :probeType="3" @scroll="contentscroll"
      @pullingup="pullingup"
    >
      <homeswiper :banners="banners"></homeswiper>
      <recommend :recommends="recommends"></recommend>
      <feature-view></feature-view>
      <tabcontrol
        :text="['流行','新款','精选']"
        @tabclick="tabclick"
        class="type-control"></tabcontrol>
      <goods :goods="showtype"></goods>
    </scroll >
    <backtop @click.native="top" v-show="isshow"></backtop>
  </div>
</template>

<script>
//公共组件
import navbar from "@/components/common/navbar/navbar";
import tabcontrol from "@/components/common/tabControl/tabcontrol";
import scroll from "@/components/common/scroll/scroll";
//业务相关
import goods from "@/components/content/goos/goods";
//子组件
import homeswiper from "@/views/home/homechild/homeswiper";
import recommend from "@/views/home/homechild/recommend";
import featureView from "@/views/home/homechild/featureView";
import backtop from "@/components/content/backtop/backtop";
//网络请求
import {getHomeMulidata,getHomeData} from "@/network/home";





export default {
  name: "home",
  components:{
    navbar,
    homeswiper,
    recommend,
    featureView,
    tabcontrol,
    goods,
    scroll,
    backtop
  },
  data(){
    return{
      //轮播图
      banners:[],
      //推荐
      recommends:[],
      //流行，新款，精选
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]}
      },
      goodstype:'pop',
      isshow:false
    }
  },
  //组件创建的时候就请求数据
  created() {
    this.getHomeMulidata()
    this.getHomeData('pop')
    this.getHomeData('new')
    this.getHomeData('sell')
  },
  computed:{
    showtype(){
      return this.goods[this.goodstype].list
    }
  },
  methods:{
    tabclick(index){
      switch (index){
        case 0:
          this.goodstype='pop'
          break
        case 1:
          this.goodstype='new'
          break
        case 2:
          this.goodstype='sell'
          break
      }
    },
    //请求轮播图和推荐
    getHomeMulidata(){
      getHomeMulidata().then(res=>{
        this.banners=res.data.data.banner.list
        this.recommends=res.data.data.recommend.list
      })
    },
    //请求流行，推荐，精选数据
    getHomeData(type){
      const page=this.goods[type].page+1
      getHomeData(type,page).then(res=>{
        this.goods[type].list.push(...res.data.data.list)
        this.goods[type].page=1
        this.$refs.scroll.finishpullup()
      })
    },
    top(){
      this.$refs.scroll.scrollTo(0,0,500)
    },
    contentscroll(position){
      this.isshow=-position.y>1000
    },
    pullingup(){
      this.getHomeData(this.goodstype)
    }
  }
}
</script>

<style scoped>
#home{
  padding-top: 44px;
  height: 100vh;
  position: relative;
}
#navbar{
  background-color: var(--color-tint);
  color: white;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
.type-control{
  position: sticky;
  top: 44px;
  z-index: 9;
}
.content{
  position: absolute;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 49px;

}
</style>
