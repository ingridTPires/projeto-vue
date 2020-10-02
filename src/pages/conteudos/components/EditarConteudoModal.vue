<template>
    <div>
        <b-modal
            id="modal-prevent-closing"
            ref="modal"
            title="Editar conteúdo"
            @show="criado()"
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
            </form>
        </b-modal>
    </div>
</template>

<script>

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
        methods: {
            resetModal () {
                this.conteudo = {}
            },
            criado () {
                this.resetModal();
                //recuperar dados
            }
        },
    };
</script>