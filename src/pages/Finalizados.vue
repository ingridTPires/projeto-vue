<template>
    <div class="container">
        <b-list-group>
            <b-list-group-item href="#" class="flex-column align-items-start"
                v-for="conteudo in conteudos" :key="conteudo.id">

                <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1 text-center">{{ conteudo.titulo }}</h5>

                    <b-badge :variant="conteudo.prazo < 0 ? 'danger' : 'primary'" pill>
                        <span v-if="conteudo.prazo < 0">Atrazou {{ conteudo.prazo * -1 }} dia(s).</span>
                        <span v-else>Completa em dia!</span>
                    </b-badge>
                </div>

                <b-container class="bv-example-row">
                    <b-row>
                        <b-col>
                            <p class="mb-1">
                                <b>Assunto:</b> {{ conteudo.assunto }}
                            </p>
                            <p class="mb-1">
                                <b>Autor:</b> {{ conteudo.autor }}
                            </p>
                            <p class="mb-1">
                                <b>URL:</b> {{ conteudo.url }}
                            </p>
                        </b-col>
                        <b-col>
                            <ul>
                                <li v-for="relacionado in conteudo.relacionados" :key="relacionado.tema">
                                    {{ relacionado.tema }}
                                </li>
                            </ul>
                        </b-col>
                    </b-row>
                </b-container>
            </b-list-group-item>
        </b-list-group>
    </div>
</template>

<script>
    import firebase from "../firebaseConfig";

    export default {
        data () {
            return {
                conteudos: []
            };
        },
        created () {
            this.getConteudos();
        },
        methods: {
            async getConteudos () {
                var conteudosRef = await firebase.conteudos.where('finalizado', '==', true);
                conteudosRef.onSnapshot(querySnapshot => {
                    querySnapshot.forEach(doc => {
                        var conteudo = doc.data();
                        conteudo.id = doc.id;
                        conteudo.prazo = new Date(conteudo.finalizarAte).getDate() - new Date(conteudo.finalizadoEm).getDate();

                        this.conteudos.push(conteudo);
                    });
                });
            }
        }
    };
</script>