<template>
  <div>
    <HelloWorld msg="wangze"></HelloWorld>
    <router-link to="/testone">123</router-link>
    <router-link to="/testtwo">456</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
  components:{
    HelloWorld
  }
}
</script>

<style scoped>

</style>
