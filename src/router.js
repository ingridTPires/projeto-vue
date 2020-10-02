import Vue from "vue";
import Router from "vue-router";
import Conteudos from "./pages/Conteudos";
import Conteudo from "./pages/conteudos/components/Conteudo";
import Finalizados from "./pages/Finalizados";

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
      path: "/conteudos-finalizados",
      name: "Conteúdos Finalizados",
      component: Finalizados,
    },
  ],
});
