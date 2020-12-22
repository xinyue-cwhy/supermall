<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: "scroll",
  props:{
    probeType:{
      type:Number,
      default:0
    }
  },
  data(){
    return{
      scroll:null
    }
  },
  mounted() {
    this.scroll=new BScroll(this.$refs.wrapper,{
      click:true,
      probeType:2,
      pullUpLoad:true
    })
    this.scroll.on(
      'scroll',(position)=>{
        this.$emit('scroll',position)
      }
    )
    this.scroll.on(
      'pullingUp',()=>{
        this.$emit('pullingup')
      }
    )
  },
  methods:{
    scrollTo(x,y,time=500){
      this.scroll.scrollTo(x,y,time)
    },
    finishpullup(){
      this.scroll.finishPullUp()
    }
  }
}
</script>

<style scoped>

</style>
