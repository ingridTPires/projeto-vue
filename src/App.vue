<template lang="html">
  <div id="app">
    <Navegacao />
    <router-view @salvarConteudo="salvarConteudo"
     @adicionarRelacionado="adicionarRelacionado">
    </router-view>
  </div>
</template>

<script>
    import Navegacao from "./components/Navegacao";
    import "bootstrap/dist/css/bootstrap.min.css";
    import firebaseConfig from "./firebaseConfig";
    import * as firebase from "firebase";

    export default {
        name: "App",
        components: {
            Navegacao,
        },
        methods: {
            salvarConteudo (value) {
                firebaseConfig.conteudos
                    .add(value)
                    .then(() => {
                        alert(`Conteúdo "${value.titulo}" salvo!`);
                        this.$router.push("conteudos");
                    })
                    .catch((error) => {
                        console.error("Erro ao salvar conteúdo: ", error);
                    });
            },
            adicionarRelacionado (value) {
                firebaseConfig.conteudos.doc('J6hoNC6ykS6iJBR5x6Mz')
                    .update({
                        relacionados: firebase.firestore.FieldValue.arrayUnion(value)
                    }).then(() => {
                        alert(`Conteúdo relacionado "${value}" adicionado!`);
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
