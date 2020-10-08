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
    import { mapActions } from 'vuex';

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
            ...mapActions(['editarConteudoAction']),
            salvarConteudo (value) {
                this.$store.dispatch('salvarConteudoAction', value);
                this.$router.push({ name: 'conteudos' });
            },
            async editarConteudo (value) {
                await this.editarConteudoAction(value);
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