<template lang="html">
  <div id="app">
    <Navegacao />
    <router-view></router-view>
  </div>
</template>

<script>
import Navegacao from "./components/Navegacao";
import "bootstrap/dist/css/bootstrap.min.css";

export default {
  name: "App",
  components: {
    Navegacao,
  },
};
</script>

<style>
.container {
  width: 40%;
  margin: 20px auto 0px auto;
}
</style>
