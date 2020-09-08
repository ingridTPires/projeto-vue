<template lang="html">
    <div id="app">
        <Navegacao />
        <Conteudo />
    </div>
</template>

<script>
    import Conteudo from "./components/Conteudo.vue";
    import Navegacao from "./components/Navegacao";
    import "bootstrap/dist/css/bootstrap.min.css";

    export default {
        name: "App",
        components: {
            Conteudo,
            Navegacao
        },
    };
</script>

<style>
    .container {
        width: 40%;
        margin: 20px auto 0px auto;
    }
</style>
