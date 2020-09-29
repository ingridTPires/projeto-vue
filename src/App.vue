<template lang="html">
  <div id="app">
    <Navegacao />
    <router-view @salvarConteudo="salvarConteudo"
    @editarConteudo="editarConteudo"
     @adicionarRelacionado="adicionarRelacionado"
     @marcarLido="marcarLido"
     @removerRelacionado="removerRelacionado"
     @marcarRelacionadoLido="marcarRelacionadoLido">
    </router-view>
  </div>
</template>

<script>
    import Navegacao from "./components/Navegacao";
    import "bootstrap/dist/css/bootstrap.min.css";
    import firebaseConfig from "./firebaseConfig";
    import * as firebase from "firebase";

    export default {
        name: "App",
        components: {
            Navegacao,
        },
        data () {
            return {
                conteudo: {}
            }
        },
        methods: {
            salvarConteudo (value) {
                firebaseConfig.conteudos
                    .add(value)
                    .then(() => {
                        alert(`Conteúdo "${value.titulo}" salvo!`);
                        this.$router.push("conteudos");
                    })
                    .catch((error) => {
                        console.error("Erro ao salvar conteúdo: ", error);
                    });
            },
            editarConteudo (id, value) {
                firebaseConfig.conteudos.doc(id)
                    .update(value)
                    .then(() => {
                        alert(`Conteúdo "${value.titulo}" editado!`);
                        this.$router.push("/conteudos");
                    })
                    .catch((error) => {
                        console.error("Erro ao editar conteúdo: ", error);
                    });
            },
            adicionarRelacionado (id, value) {
                firebaseConfig.conteudos.doc(id)
                    .update({
                        relacionados: firebase.firestore.FieldValue.arrayUnion(...value)
                    }).then(() => {
                        alert(`Conteúdos relacionados adicionados!`);
                    })
                    .catch((error) => {
                        console.error("Erro ao salvar conteúdo: ", error);
                    });
            },
            marcarLido (id) {
                firebaseConfig.conteudos.doc(id)
                    .update({
                        lido: true
                    })
                    .catch((error) => {
                        console.error("Erro ao marcar conteúdo como lido: ", error);
                    });
            },
            removerRelacionado (id, value) {
                firebaseConfig.conteudos.doc(id)
                    .update({
                        relacionados: firebase.firestore.FieldValue.arrayRemove(value)
                    })
                    .catch((error) => {
                        console.error("Erro ao remover conteúdo relacionado: ", error);
                    });
            },
            marcarRelacionadoLido (id, value) {
                var docRef = firebaseConfig.conteudos.doc(id);

                docRef.get()
                    .then(doc => {
                        this.conteudo = doc.data()
                        this.atualizarRelacionadoLido(value)

                        docRef.update({
                            relacionados: this.conteudo.relacionados
                        });
                        this.conteudo = {}
                    })
                    .catch((error) => {
                        console.error("Erro ao marcar conteúdo relacionado como lido: ", error);
                    });
            },
            atualizarRelacionadoLido (relacionado) {
                this.conteudo.relacionados.forEach(self => {
                    if (self.tema === relacionado.tema)
                        self.lido = true
                })
            }
        },
    };
</script>

<style>
    .container {
        width: 80%;
        margin: 20px auto 0px auto;
    }
</style>
