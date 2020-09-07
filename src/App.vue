<template lang="html">
  <div id="app">
    <Conteudo />
  </div>
</template>

<script>
import Conteudo from "./components/Conteudo.vue";
import "bootstrap/dist/css/bootstrap.min.css";

export default {
  name: "App",
  components: {
    Conteudo,
  },
};
</script>

<style>
.container {
  width: 40%;
  margin: 20px auto 0px auto;
}
</style>
