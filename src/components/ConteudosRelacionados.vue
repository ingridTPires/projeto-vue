<template lang="html">
  <div class="container">
    <li class="collection-item" v-for="conteudoRelacionado in conteudosRelacionados" :key="conteudoRelacionado.id">
        {{conteudoRelacionado.tema}}
    </li>
    <button class="btn btn-primary float-right" @click="$router.push('conteudo-relacionado')">Adicionar</button>
  </div>
</template>

<script>
    import firebase from "../firebaseConfig";

    export default {
        props: {
        },
        data () {
            return {
                conteudosRelacionados: [],
                conteudoRelacionado: {
                    tema: ""
                }
            };
        },
        created () {
            this.getConteudosRelacionados();
        },
        methods: {
            async getConteudosRelacionados () {
                var conteudosRelacionadosRef = await firebase.conteudosRelacionados;

                conteudosRelacionadosRef.onSnapshot(snap => {
                    this.conteudosRelacionados = [];
                    snap.forEach(doc => {
                        var conteudoRelacionado = doc.data();
                        conteudoRelacionado.id = doc.id;
                        this.conteudosRelacionados.push(conteudoRelacionado);
                    });
                });
            }
        }
    };
</script>