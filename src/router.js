import Vue from "vue";
import Router from "vue-router";
import Conteudos from "./components/Conteudos.vue";
import Conteudo from "./components/Conteudo.vue";
import ConteudosRelacionados from "./components/ConteudosRelacionados.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/conteudos",
      name: "Conteúdos",
      component: Conteudos,
    },
    {
      path: "/conteudo",
      name: "Conteúdo",
      component: Conteudo,
    },
    {
      path: "/conteudos-relacionados",
      name: "Conteúdos Relacionados",
      component: ConteudosRelacionados,
    },
  ],
});
