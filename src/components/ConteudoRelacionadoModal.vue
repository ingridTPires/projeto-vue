<template lang="html">

    <b-modal
    id="modal-prevent-closing"
    ref="modal"
    title="Adicionar conteúdos relacionados"
    @show="resetModal"
    @hidden="resetModal"
    @ok.prevent="submit()"
    >
        <form ref="form" @submit.stop.prevent="submit">                

            <b-input-group class="mt-3">
                <b-form-input v-model="relacionado" ></b-form-input>
                <b-input-group-append>
                    <b-button variant="info" @click.prevent="add()">Add</b-button>
                </b-input-group-append>
            </b-input-group>

            <div class="mt-3">
                <ul class="mb-0 pl-3">
                    <li v-for="relacionado in relacionados" :key="relacionado">{{ relacionado }}</li>
                </ul>
            </div>
        </form>
    </b-modal>
</template>

<script>
    export default {
        data () {
            return {
                relacionado: '',
                relacionados: [],
            }
        },
        methods: {
            resetModal () {
                this.relacionado = ''
                this.relacionados = []
            },
            submit () {
                this.$nextTick(() => {
                    this.$bvModal.hide('modal-prevent-closing')
                })
            },
            add () {
                this.relacionados.push(this.relacionado);
                this.relacionado = '';
            }
        }
    }
</script>