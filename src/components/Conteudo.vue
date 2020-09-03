<template>
  <div class="container">
    <form>
      <h2>Registro de conteúdo</h2>
      <br />
      <div class="form-group row">
        <label class="col-sm-2 ">Título:</label>
        <div class="col-sm-10"><input type="text" class="form-control" /></div>
      </div>
      <div class="form-group row">
        <label class="col-sm-2 ">Autor:</label>
        <div class="col-sm-10"><input type="text" class="form-control" /></div>
      </div>
      <div class="form-group row">
        <label class="col-sm-2 ">Assunto:</label>
        <div class="col-sm-10"><input type="text" class="form-control" /></div>
      </div>
      <div class="form-group row">
        <label class="col-sm-2 ">URL:</label>
        <div class="col-sm-10"><input type="text" class="form-control" /></div>
      </div>
      <button type="" class="btn btn-primary float-right">Salvar</button>
    </form>
  </div>
</template>

<script>
export default {
  props: {},
};
</script>

<style scoped>
.container {
  width: 40%;
  margin: 20px auto 0px auto;
}
</style>
