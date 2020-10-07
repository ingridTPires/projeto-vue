<template>
    <div class="container">
        <b-table :items="conteudos" :fields="fields" responsive="sm">

            <template v-slot:cell(lido)="row">
                <b-form-group>
                    <input type="checkbox" v-model="row.item.lido" @click.prevent="marcarLido($event, row.item.id)" :disabled="row.item.lido" />
                </b-form-group>
            </template>

            <template v-slot:cell(finalizarAte)="row">
                {{ new Date(row.item.finalizarAte+"T00:00:00").toLocaleDateString() }}
            </template>

            <template v-slot:cell(editar)='row'>
                <b-link v-b-modal.modal-prevent-closing class="float-right" @click="conteudoSelect = row.item.id">Editar</b-link>
            </template>

        </b-table>
        <button class="btn btn-primary float-right" @click="$router.push('conteudo')">Adicionar</button>

        <editar-conteudo-modal ref="modal"
            :idConteudo="`${conteudoSelect}`"
            @editarConteudo="editarConteudo"></editar-conteudo-modal>

    </div>
</template>

<script>
    import EditarConteudoModal from "./conteudos/components/EditarConteudoModal";
    import { mapActions, mapState } from 'vuex';

    export default {
        components: { EditarConteudoModal },
        props: {
        },
        data () {
            return {
                fields: ['lido', 'titulo', 'finalizarAte', 'editar'],
                conteudoSelect: ''
            };
        },
        created () {
            this.getConteudos();
        },
        methods: {
            ...mapActions(['getConteudosAction']),
            async getConteudos () {
                await this.getConteudosAction();
            },
            marcarLido (event, id) {

                var self = this.conteudos.find(item => item.id === id);
                var finalizado = self.relacionados.every((item) => item.lido);
                var texto = finalizado ? 'O conteúdo está completo. Deseja continuar a finalização?' : 'Leitura finalizada?';

                if (!confirm(texto)) return event.prevent;

                this.$emit("marcarLido", id, finalizado);
            },
            editarConteudo (id, conteudo) {
                this.$emit("editarConteudo", this.conteudoSelect, conteudo);
            }
        },
        computed: {
            ...mapState(['conteudos'])
        }
    };
</script>