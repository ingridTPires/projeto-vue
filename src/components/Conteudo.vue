<template lang="html">
  <div class="container">
    <form @submit="salvar()">
      <h2>Registro de conteúdo</h2>
      <br />
      <div class="form-group row">
        <label class="col-sm-2 ">Título:</label>
        <div class="col-sm-10">
          <input
            type="text"
            class="form-control"
            v-model="conteudoAtual.titulo"
          />
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-2 ">Autor:</label>
        <div class="col-sm-10">
          <input
            type="text"
            class="form-control"
            v-model="conteudoAtual.autor"
          />
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-2 ">Assunto:</label>
        <div class="col-sm-10">
          <input
            type="text"
            class="form-control"
            v-model="conteudoAtual.assunto"
          />
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-2 ">URL:</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" v-model="conteudoAtual.url" />
        </div>
      </div>
      <button type="submit" class="btn btn-primary float-right">Salvar</button>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    conteudo: {
      titulo: "",
      autor: "",
      assunto: "",
      url: "",
    },
  },
  data() {
    return {
      conteudoAtual: { ...this.conteudo },
    };
  },
  methods: {
    salvar() {
      this.$emit("salvar", this.conteudoAtual);
    },
  },
};
</script>

<style scoped>
.container {
  width: 40%;
  margin: 20px auto 0px auto;
}
</style>
