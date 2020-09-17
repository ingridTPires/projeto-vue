<template lang="html">
  <div class="container">
    <form @submit.prevent="adicionar()">
      <h2>Registro de conteúdo relacionado</h2>
      <br />
      <div class="form-group row">
        <label class="col-sm-4">Tema relacionado:</label>
        <div class="col-sm-8"><input type="text" class="form-control" v-model="relacionado" /></div>
      </div>
      <button type="submit" class="btn btn-primary float-right">Salvar</button>
      <a class="btn btn-secondary float-right" @click="$router.go(-2)">Voltar</a>
    </form>
  </div>
</template>

<script>
    export default {
        props: {
        },
        data () {
            return {
                relacionado: [],
            };
        },
        methods: {
            adicionar () {
                var id = this.$route.params.id;
                this.$emit("adicionarRelacionado", id, this.relacionado);
            },
        },
    };
</script>
