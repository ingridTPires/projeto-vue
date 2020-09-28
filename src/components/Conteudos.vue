<template lang="html">
  <div class="container">
        <b-table :items="conteudos" :fields="fields" responsive="sm">
            
            <template v-slot:cell(show_details)="row">
                
                <b-button size="sm" @click="row.toggleDetails" class="mr-2">
                    {{ row.detailsShowing ? 'ʌ' : 'v'}}
                </b-button>
            </template>
            
             <template v-slot:row-details="row">
    <b-card>
        <b-row class="mb-2" v-for="relacionado in row.item.relacionados" :key="relacionado.tema">
            <b-col class="col-sm-1">
                <input type="checkbox" title="Marcar tema como lido" v-model="relacionado.lido" :disabled="relacionado.lido" />
            </b-col>
            <b-col class="col-sm-4">{{ relacionado.tema }}</b-col>
            <b-col>
                <b-link @click="removerRelacionado(row.item.id, relacionado)"> excluir </b-link>
            </b-col>
        </b-row>
        <b-col v-if="row.item.relacionados.length === 0">Nenhum tema relacionado</b-col>
        <conteudo-relacionado-modal ref="modal" @adicionarRelacionado="adicionarRelacionado"></conteudo-relacionado-modal>
        <b-link v-b-modal.modal-prevent-closing class="float-right" @click.prevent="conteudoSelect = row.item.id">Add Relacionados</b-link>
    </b-card>

</template>  

<template v-slot:cell(lido)="row">
    <b-form-group>
        <input type="checkbox" v-model="row.item.lido" @click.prevent="marcarLido($event, row.item.id)" :disabled="row.item.lido" />
    </b-form-group>
</template>

<template v-slot:cell(editar)="row">
    <router-link :to="{ name: 'Editar Conteúdo', params: {id: row.item.id } }" class="float-right">
        Editar
    </router-link>
</template>

        </b-table>
    <button class="btn btn-primary float-right" @click="$router.push('conteudo')">Adicionar</button>
  </div>
</template>

<script>
    import firebase from "../firebaseConfig";
    import ConteudoRelacionadoModal from "./ConteudoRelacionadoModal";

    export default {
        components: { ConteudoRelacionadoModal },
        props: {
        },
        data () {
            return {
                fields: ['show_details', 'titulo', 'lido', 'editar'],
                conteudos: [],
                conteudoSelect: ''
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
                        this.conteudo = conteudo;

                        conteudo['isActive'] = true;
                        this.conteudos.push(conteudo);

                    });
                });
            },
            marcarLido (event, id) {
                if (!confirm('Leitura finalizada?')) return event.prevent;

                this.$emit("marcarLido", id);
            },
            adicionarRelacionado (value) {
                this.$emit("adicionarRelacionado", this.conteudoSelect, value);
                this.conteudoSelect = '';
            },
            removerRelacionado (id, value) {
                this.$emit("removerRelacionado", id, value);
            }
        }
    };
</script>