<template>
    <div id="app">
        <Navegacao />
        <router-view @salvarConteudo="salvarConteudo"
            @editarConteudo="editarConteudo"
            @marcarLido="marcarLido">
        </router-view>
    </div>
</template>

<script>
    import Navegacao from "./pages/Navegacao";
    import "bootstrap/dist/css/bootstrap.min.css";
    import firebase from "./firebaseConfig";

    export default {
        name: "App",
        components: {
            Navegacao,
        },
        data () {
            return {
                conteudo: {}
            }
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
            editarConteudo (id, value) {
                firebase.conteudos.doc(id)
                    .update(value)
                    .then(() => {
                        alert(`Conteúdo "${value.titulo}" editado!`);
                    })
                    .catch((error) => {
                        console.error("Erro ao editar conteúdo: ", error);
                    });
            },
            marcarLido (id, finalizado) {
                firebase.conteudos.doc(id)
                    .update({
                        lido: true,
                        finalizado: finalizado,
                        finalizadoEm: finalizado ? new Date().toISOString().substr(0, 10) : ''
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