<template lang="html">
  <div class="container">
    <li class="collection-item" v-for="conteudo in conteudos" :key="conteudo.id">
        {{conteudo.titulo}}
    </li>
    <button class="btn btn-primary float-right" @click="$router.push('conteudo')">Adicionar</button>
  </div>
</template>

<script>
    import firebase from "../firebaseConfig";

    export default {
        props: {
        },
        data () {
            return {
                conteudos: [],
                conteudo: {
                    titulo: ""
                }
            };
        },
        created () {
            this.getConteudos();
        },
        methods: {
            async getConteudos () {
                var conteudosRef = await firebase.conteudos;

                conteudosRef.onSnapshot(snap => {
                    this.conteudos = [];
                    snap.forEach(doc => {
                        var conteudo = doc.data();
                        conteudo.id = doc.id;
                        this.conteudos.push(conteudo);
                    });
                });
            }
        }
    };
</script>
