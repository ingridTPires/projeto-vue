import Vue from "vue";
import Router from "vue-router";
import Conteudos from "./components/Conteudos";
import Conteudo from "./components/Conteudo";
import EditarConteudo from "./components/EditarConteudo";
import Finalizados from "./components/Finalizados";

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
      path: "/editar-conteudo/:id",
      name: "Editar Conteúdo",
      component: EditarConteudo,
    },
    {
        path: "/conteudos-finalizados",
        name: "Conteúdos Finalizados",
        component: Finalizados,
      }
  ],
});
