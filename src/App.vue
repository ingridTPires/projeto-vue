<template lang="html">
  <div id="app">
    <Navegacao />
    <router-view @salvar="salvar"></router-view>
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
        methods: {
            salvar (value) {
                this.firebase.conteudos
                    .add({ value })
                    .then(() => {
                        alert(`Conteúdo "${value.titulo}" salvo!`);
                    })
                    .catch((error) => {
                        console.error("Erro ao salvar conteúdo: ", error);
                    });
            },
        },
    };
</script>

<style>
    .container {
        width: 40%;
        margin: 20px auto 0px auto;
    }
</style>
