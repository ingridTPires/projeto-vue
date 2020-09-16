<template lang="html">
  <div id="app">
    <Navegacao />
    <router-view @salvarConteudo="salvarConteudo"
     @salvarConteudoRelacionado="salvarConteudoRelacionado">
    </router-view>
  </div>
</template>

<script>
    import Navegacao from "./components/Navegacao";
    import "bootstrap/dist/css/bootstrap.min.css";
    import firebase from "./firebaseConfig";

    export default {
        name: "App",
        components: {
            Navegacao,
        },
        methods: {
            salvarConteudo (value) {
                firebase.conteudos
                    .add(value)
                    .then(() => {
                        alert(`Conteúdo "${value.titulo}" salvo!`);
                        this.$router.push("conteudos");
                    })
                    .catch((error) => {
                        console.error("Erro ao salvar conteúdo: ", error);
                    });
            },
            salvarConteudoRelacionado (value) {
                firebase.conteudosRelacionados
                    .add(value)
                    .then(() => {
                        alert(`Conteúdo relacionado "${value.tema}" salvo!`);
                        this.$router.push("conteudos-relacionados");
                    })
                    .catch((error) => {
                        console.error("Erro ao salvar conteúdo: ", error);
                    });
            }
        },
    };
</script>

<style>
    .container {
        width: 40%;
        margin: 20px auto 0px auto;
    }
</style>
