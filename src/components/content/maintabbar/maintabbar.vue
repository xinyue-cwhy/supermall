<template>
    <tabbar>
      <tabbaritems path="/home" activetextcolor="deepPink">
        <img src="~assets/img/tabbar/home.svg" alt="" slot="tabbar-icon">
        <img src="~assets/img/tabbar/home_active.svg" alt="" slot="tabbar-icon-active">
        <div slot="tabbar-text">首页</div>
      </tabbaritems>
      <tabbaritems path="/caregory" activetextcolor="deepPink">
        <img src="~assets/img/tabbar/category.svg" alt="" slot="tabbar-icon">
        <img src="~assets/img/tabbar/category_active.svg" alt="" slot="tabbar-icon-active">
        <div slot="tabbar-text">分类</div>
      </tabbaritems>
      <tabbaritems path="/cart" activetextcolor="deepPink">
        <img src="~assets/img/tabbar/cart.svg" alt="" slot="tabbar-icon">
        <img src="~assets/img/tabbar/cart_active.svg" alt="" slot="tabbar-icon-active">
        <div slot="tabbar-text">购物车</div>
      </tabbaritems>
      <tabbaritems path="/profile" activetextcolor="deepPink">
        <img src="~assets/img/tabbar/profile.svg" alt="" slot="tabbar-icon">
        <img src="~assets/img/tabbar/profile_active.svg" alt="" slot="tabbar-icon-active">
        <div slot="tabbar-text">我的</div>
      </tabbaritems>
    </tabbar>
</template>

<script>
import tabbar from "@/components/common/tabbar/tabbar";
import tabbaritems from "@/components/common/tabbar/tabbaritems";
export default {
  name: "maintabbar",
  components: {
    tabbar,
    tabbaritems
  }
}
</script>

<style scoped>

</style>
