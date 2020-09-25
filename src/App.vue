<template lang="html">
  <div id="app">
    <Navegacao />
    <router-view @salvarConteudo="salvarConteudo"
    @editarConteudo="editarConteudo"
     @adicionarRelacionado="adicionarRelacionado"
     @marcarLido="marcarLido">
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
            editarConteudo (id, value) {
                firebaseConfig.conteudos.doc(id)
                    .update(value)
                    .then(() => {
                        alert(`Conteúdo "${value.titulo}" editado!`);
                        this.$router.push("/conteudos");
                    })
                    .catch((error) => {
                        console.error("Erro ao editar conteúdo: ", error);
                    });
            },
            adicionarRelacionado (id, value) {
                firebaseConfig.conteudos.doc(id)
                    .update({
                        relacionados: firebase.firestore.FieldValue.arrayUnion(...value)
                    }).then(() => {
                        alert(`Conteúdo relacionado "${value}" adicionado!`);
                    })
                    .catch((error) => {
                        console.error("Erro ao salvar conteúdo: ", error);
                    });
            },
            marcarLido (id) {
                firebaseConfig.conteudos.doc(id)
                    .update({
                        lido: true
                    })
                    .catch((error) => {
                        console.error("Erro ao marcar conteúdo como lido: ", error);
                    });
            }
        },
    };
</script>

<style>
    .container {
        width: 80%;
        margin: 20px auto 0px auto;
    }
</style>
