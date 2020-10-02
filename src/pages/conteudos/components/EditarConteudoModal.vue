<template>
    <div>
        <b-modal
            id="modal-prevent-closing"
            ref="modal"
            title="Editar conteúdo"
            size="lg"
            @show="show"
            @hidden="resetModal">

            <form ref="form">
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
                <hr />

                <div class="form-group row">
                    <label class="col-sm-2 ">Relacionados:</label>
                    <div class="col-sm-10">
                        <b-input-group>
                            <b-form-input v-model="relacionadoInput"></b-form-input>
                            <b-input-group-append>
                                <b-button variant="info" @click.prevent="addRelacionado()">Add</b-button>
                            </b-input-group-append>
                        </b-input-group>
                    </div>
                </div>

                <div class="mt-3">
                    <ul class="mb-0 pl-3">
                        <li v-for="relacionado in conteudo.relacionados" :key="relacionado.tema">
                            {{ relacionado.tema }}
                        </li>
                    </ul>
                </div>
            </form>
        </b-modal>
    </div>
</template>

<script>
    import firebase from "../../../firebaseConfig";

    export default {
        props: {
            idConteudo: String
        },
        data () {
            return {
                conteudo: {
                    titulo: '',
                    autor: '',
                    assunto: '',
                    url: '',
                    relacionados: []
                },
                relacionadoInput: ''
            }
        },
        methods: {
            resetModal () {
                this.conteudo = {}
            },
            show () {
                this.resetModal();

                firebase.conteudos.doc(this.idConteudo)
                    .onSnapshot(doc => {
                        const data = doc.data()

                        this.conteudo = {
                            titulo: data.titulo,
                            autor: data.autor,
                            assunto: data.assunto,
                            url: data.url,
                            relacionados: data.relacionados
                        }
                    })
            },
            addRelacionado () {
                this.conteudo.relacionados.push({ tema: this.relacionadoInput, lido: false });
                this.relacionadoInput = '';
            }
        },
    };
</script>