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

        <b-row class="mb-2" v-for="relacionado in row.item.relacionados" :key="relacionado">
            <b-col>{{ relacionado }}</b-col>
        </b-row>
        <b-col v-if="row.item.relacionados.length === 0">Nenhum tema relacionado</b-col>
        <router-link :to="{ name: 'Conteúdo Relacionado', params: {id: conteudo.id } }" class="float-right">
            Add relacionado
        </router-link>
    </b-card>

</template>  

<template v-slot:cell(lido)="row">
    <b-form-group>
        <input type="checkbox" v-model="row.item.lido" />
    </b-form-group>
</template>
        </b-table>
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
                fields: ['show_details', 'titulo', 'lido'],
                conteudos: []
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
            }
        }
    };
</script>