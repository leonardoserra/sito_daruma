<script >
  import { RouterLink, RouterView } from 'vue-router';
  import HomePage from './views/HomePage.vue';

  export default { 
    components:{
      HomePage
    },
    data(){
      return{
      }
    }
  }
</script>

<template>
  <HomePage></HomePage>
  <RouterView />
</template>

<style scoped>

</style>
