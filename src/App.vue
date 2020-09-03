<template lang="html">
    <div id="app">
        <Conteudo
            :conteudo="conteudo"
            @salvar="salvarConteudo" />
    </div>
</template>

<script>
    import Conteudo from "./components/Conteudo.vue";
    import "bootstrap/dist/css/bootstrap.min.css";

    export default {
        name: 'App',
        data () {
            return {
                conteudo: undefined
            }
        },
        components: {
            Conteudo,
        },
        methods: {
            salvarConteudo (value) {
                alert(`Evento para salvar ${value.titulo}`)
            }
        }
    };
</script>

<style></style>
