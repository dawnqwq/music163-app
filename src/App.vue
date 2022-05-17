<template>
  <TopNav/>
</template>

<script>
import TopNav from "./components/home/TopNav.vue"
export default{
  name:'App',
  components:{
    TopNav
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
