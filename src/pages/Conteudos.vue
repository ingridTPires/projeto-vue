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

        <editar-conteudo-modal ref="modal" :idConteudo="`${conteudoSelect}`"></editar-conteudo-modal>

    </div>
</template>

<script>
    import firebase from "../firebaseConfig";
    import EditarConteudoModal from "./conteudos/components/EditarConteudoModal";

    export default {
        components: { EditarConteudoModal },
        props: {
        },
        data () {
            return {
                fields: ['lido', 'titulo', 'finalizarAte', 'editar'],
                conteudos: [],
                conteudoSelect: ''
            };
        },
        created () {
            this.getConteudos();
        },
        methods: {
            async getConteudos () {
                var conteudosRef = await firebase.conteudos.where('finalizado', '==', false);
                conteudosRef.onSnapshot(snapshot => {
                    this.conteudos = [];
                    snapshot.forEach(doc => {
                        var conteudo = doc.data();
                        conteudo.id = doc.id;
                        this.conteudo = conteudo;

                        this.conteudos.push(conteudo);
                    });
                });
            },
            marcarLido (event, id) {

                var self = this.conteudos.find(item => item.id === id);
                var finalizado = self.relacionados.every((item) => item.lido);
                var texto = finalizado ? 'O conteúdo está completo. Deseja continuar a finalização?' : 'Leitura finalizada?';

                if (!confirm(texto)) return event.prevent;

                this.$emit("marcarLido", id, finalizado);
            },
            adicionarRelacionado (value) {
                this.$emit("adicionarRelacionado", this.conteudoSelect, value);
                this.conteudoSelect = '';
            },
            removerRelacionado (id, value) {
                this.$emit("removerRelacionado", id, value);
            },
            marcarRelacionadoLido (id, value) {
                this.$emit("marcarRelacionadoLido", id, value);
            }
        }
    };
</script>