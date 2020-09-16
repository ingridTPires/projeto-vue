<template lang="html">
  <div class="container">
    <form @submit.prevent="salvar()">
      <h2>Registro de conteúdo relacionado</h2>
      <br />
      <div class="form-group row">
        <label class="col-sm-4">Conteúdo principal:</label>
        <div class="col-sm-8"><input type="text" class="form-control" v-model="relacionadoAtual.conteudo" /></div>
      </div>
      <div class="form-group row">
        <label class="col-sm-4">Tema relacionado:</label>
        <div class="col-sm-8"><input type="text" class="form-control" v-model="relacionadoAtual.tema" /></div>
      </div>
      <button type="submit" class="btn btn-primary float-right">Salvar</button>
      <a class="btn btn-secondary float-right" @click="$router.go(-1)">Voltar</a>
    </form>
  </div>
</template>

<script>
    export default {
        props: {
            relacionado: {
                conteudo: "",
                tema: ""
            },
        },
        data () {
            return {
                relacionadoAtual: { ...this.relacionado },
            };
        },
        methods: {
            salvar () {
                this.$emit("salvarConteudoRelacionado", this.relacionadoAtual);
            },
        },
    };
</script>
