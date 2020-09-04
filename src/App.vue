<template lang="html">
  <div id="app">
    <Conteudo :conteudo="conteudo" @salvar="salvarConteudo" />
  </div>
</template>

<script>
import Conteudo from "./components/Conteudo.vue";
import "bootstrap/dist/css/bootstrap.min.css";

export default {
  name: "App",
  data() {
    return {
      conteudo: undefined,
    };
  },
  components: {
    Conteudo,
  },
  methods: {
    salvarConteudo(value) {
      this.$http
        .post("http://localhost:3000/conteudos", value)
        .then((res) => res.json());

      alert(`Conteúdo "${value.titulo}" salvo!`);
    },
  },
};
</script>

<style></style>
