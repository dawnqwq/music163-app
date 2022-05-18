<template>
  <TopNav/>
  <Swiper/>
</template>

<script>
import TopNav from "@/components/home/TopNav.vue"
import Swiper from "@/components/home/Swiper.vue"

export default{
  name:'App',
  components:{
    TopNav,
    Swiper,
}
}
</script>

<style>
  body{
    margin: 0;
    padding: 0;
  }

  ul{
    list-style: none;
  }

  a{
    text-decoration: none;
  }
</style>
