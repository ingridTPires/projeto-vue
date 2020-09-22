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
            <b-form-input v-model="relacionado" ></b-form-input>
        </form>
    </b-modal>
</template>

<script>
    export default {
        data () {
            return {
                relacionado: ''
            }
        },
        methods: {
            resetModal () {
                this.relacionado = ''
            },
            submit () {
                this.$nextTick(() => {
                    this.$bvModal.hide('modal-prevent-closing')
                })
            }
        }
    }
</script>