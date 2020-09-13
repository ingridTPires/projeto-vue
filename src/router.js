import Vue from "vue";
import Router from "vue-router";
import Conteudos from "./components/Conteudos.vue";
import ConteudoRelacionado from "./components/ConteudoRelacionado.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/conteudos",
      nome: "Conteúdos",
      component: Conteudos,
    },
    {
      path: "/conteudo-relacionado",
      nome: "Conteúdo Relacionado",
      component: ConteudoRelacionado,
    },
  ],
});
