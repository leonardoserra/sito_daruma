<script >
  export default {
    name: 'NotFound',
}
</script>

<template>
  <div class="container">

    <h1 id="title">ERRORE PAGINA NON TROVATA :( </h1>
  </div>
</template>

<style scoped lang="scss">
.container{
  background-color: rgb(77, 77, 255);
  height: 100vh;
  display: flex;
  justify-content:center;
  align-items: center;
}
  #title{
    padding: 20px 40px;
    background-color: rgb(255, 255, 121);
    border-radius: 10px;
    color:red;
    font-size: 3rem;
  }
</style>
