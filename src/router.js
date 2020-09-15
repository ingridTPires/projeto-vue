import Vue from "vue";
import Router from "vue-router";
import Conteudos from "./components/Conteudos.vue";
import Conteudo from "./components/Conteudo.vue";
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
      path: "/conteudo",
      nome: "Conteúdo",
      component: Conteudo,
    },
    {
      path: "/conteudo-relacionado",
      nome: "Conteúdo Relacionado",
      component: ConteudoRelacionado,
    },
  ],
});
