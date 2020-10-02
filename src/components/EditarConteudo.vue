<template>
    <div class="container">
        <form @submit.prevent="editar()">
            <h2>Edição de conteúdo</h2>
            <br />
            <div class="form-group row">
                <label class="col-sm-2 ">Título:</label>
                <div class="col-sm-10">
                    <input
                        type="text"
                        class="form-control"
                        v-model="conteudo.titulo" />
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-2 ">Autor:</label>
                <div class="col-sm-10">
                    <input
                        type="text"
                        class="form-control"
                        v-model="conteudo.autor" />
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-2 ">Assunto:</label>
                <div class="col-sm-10">
                    <input
                        type="text"
                        class="form-control"
                        v-model="conteudo.assunto" />
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-2 ">URL:</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" v-model="conteudo.url" />
                </div>
            </div>
            <button type="submit" class="btn btn-primary float-right">Salvar</button>
            <a class="btn btn-secondary float-right" @click="$router.go(-1)">Voltar</a>
        </form>
    </div>
</template>

<script>
    import firebase from "../firebaseConfig";

    export default {
        props: {
        },
        data () {
            return {
                conteudo: {
                    titulo: '',
                    autor: '',
                    assunto: '',
                    url: ''
                }
            }
        },
        created () {
            firebase.conteudos.doc(this.$route.params.id)
                .onSnapshot(doc => {
                    const data = doc.data()
                    this.conteudo = {
                        titulo: data.titulo,
                        autor: data.autor,
                        assunto: data.assunto,
                        url: data.url
                    }
                })
        },
        methods: {
            editar () {
                var id = this.$route.params.id;
                this.$emit("editarConteudo", id, this.conteudo);
            },
        },
    };
</script>
