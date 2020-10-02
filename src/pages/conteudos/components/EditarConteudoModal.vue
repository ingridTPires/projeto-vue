<template>
    <div>
        <b-modal
            id="modal-prevent-closing"
            ref="modal"
            title="Editar conteúdo"
            size="lg"
            @show="show"
            @hidden="resetModal"
            @ok.prevent="submit()">

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

                <b-row class="mb-2" v-for="relacionado in conteudo.relacionados" :key="relacionado.tema">
                    <b-col class="col-sm-1">
                        <input type="checkbox" title="Marcar tema como lido" v-model="relacionado.lido" />
                    </b-col>
                    <b-col class="col-sm-4">{{ relacionado.tema }}</b-col>
                    <b-col>
                        <b-link> excluir </b-link>
                    </b-col>
                </b-row>
                <b-col v-if="!conteudo.relacionados || conteudo.relacionados.length === 0">Nenhum tema relacionado</b-col>

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
                            lido: data.lido,
                            relacionados: data.relacionados
                        }
                    })
            },
            addRelacionado () {
                this.conteudo.relacionados.push({ tema: this.relacionadoInput, lido: false });
                this.relacionadoInput = '';
            },
            submit () {
                let conteudo = this.conteudo;
                var finalizado = conteudo.relacionados.every((item) => item.lido) && conteudo.lido;

                if (finalizado) {
                    if (!confirm("O conteúdo está completo. Deseja continuar a finalização?"))
                        return;
                    conteudo.finalizado = true;
                    conteudo.finalizadoEm = new Date().toISOString().substr(0, 10);
                }

                this.$emit("editarConteudo", this.idConteudo, conteudo);
                this.conteudo = {};

                this.$nextTick(() => {
                    this.$bvModal.hide('modal-prevent-closing')
                })
            }
        },
    };
</script>