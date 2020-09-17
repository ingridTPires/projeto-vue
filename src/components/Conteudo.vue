<template lang="html">
  <div class="container">
    <form @submit.prevent="salvar()">
      <h2>Registro de conteúdo</h2>
      <br />
      <div class="form-group row">
        <label class="col-sm-2 ">Título:</label>
        <div class="col-sm-10">
          <input
            type="text"
            class="form-control"
            v-model="conteudo.titulo"
          />
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-2 ">Autor:</label>
        <div class="col-sm-10">
          <input
            type="text"
            class="form-control"
            v-model="conteudo.autor"
          />
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-2 ">Assunto:</label>
        <div class="col-sm-10">
          <input
            type="text"
            class="form-control"
            v-model="conteudo.assunto"
          />
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-2 ">URL:</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" v-model="conteudo.url" />
        </div>
      </div>
      <button type="submit" class="btn btn-primary float-right">Salvar</button>
        <a class="btn btn-secondary float-right" @click="$router.go(-1)">Voltar</a>
    </form>
  </div>
</template>

<script>
    export default {
        props: {
        },
        data () {
            return {
                conteudo: {
                    titulo: '',
                    autor: '',
                    assunto: '',
                    url: '',
                    relacionados: []
                }
            }
        },
        methods: {
            salvar () {
                this.$emit("salvarConteudo", this.conteudo);
            },
        },
    };
</script>
