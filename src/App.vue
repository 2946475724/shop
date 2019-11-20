<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
  //引入组件
  import Header from '@/components/header/Header.vue';
  import Footer from '@/components/footer/Footer';
  export default {
    name: 'App',
    data() {
      return {
        
      }
    },
    components: {
      Header,
      Footer
    }
  }
</script>


<style>

</style>
