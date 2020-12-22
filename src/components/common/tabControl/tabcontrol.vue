<template>
  <div class="tabcontrol">
    <div v-for="(item,index) in text"
         class="tabcontrol-item"
         :class="{active:index===con}"
         @click="activeitem(index)"
    >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabcontrol",
  props:{
    text:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return{
      con:0
    }
  },
  methods:{
    activeitem(index){
      this.con=index
      this.$emit("tabclick",index)
    }
  }
}
</script>

<style scoped>
.tabcontrol{
  display: flex;
  text-align: center;
  height: 40px;
  line-height: 40px;
  font-size: 15px;
  background-color: #FFFEF6;
}
.tabcontrol-item{
  flex: 1;
}
.active{
  color: var(--color-high-text);
}
.active span{
  padding:5px;
  border-bottom: 2px solid var(--color-high-text);
}
</style>
