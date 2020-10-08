import Vue from "vue";
import Vuex from "vuex";

import firebase from "../firebaseConfig";
import {
  ADD_CONTEUDOS,
  GET_CONTEUDOS,
  EDITAR_CONTEUDO,
} from "./mutation-types";

Vue.use(Vuex);

const state = () => ({
  conteudo: null,
  conteudos: [],
});

const getters = {
  status(state) {
    return state.status;
  },
  error(state) {
    return state.error;
  },
  conteudo(state) {
    return state.conteudo;
  },
};

const actions = {
  async getConteudosAction({ commit }) {
    let ref = await firebase.conteudos.where("finalizado", "==", false);
    let conteudos = [];

    ref.onSnapshot((snapshot) => {
      snapshot.forEach((doc) => {
        var conteudo = doc.data();
        conteudo.id = doc.id;
        conteudos.push(conteudo);
      });
    });
    commit(GET_CONTEUDOS, conteudos);
  },
  async salvarConteudoAction({ commit }, payload) {
    commit(ADD_CONTEUDOS, "loading");
    await firebase.conteudos
      .add(payload)
      .then(() => {
        alert("success");
        commit("setStatus", "success");
        commit("setError", null);
      })
      .catch((error) => {
        commit("setStatus", "failure");
        commit("setError", error.message);
      });
  },
  editarConteudoAction({ commit }, payload) {
    firebase.conteudos
      .doc(payload.id)
      .update(payload)
      .then(() => {
        commit(EDITAR_CONTEUDO, payload);
        alert(`Conteúdo "${payload.titulo}" editado!`);
      })
      .catch((error) => {
        console.error("Erro ao editar conteúdo: ", error);
      });
  },
};

const mutations = {
  setStatus(state, payload) {
    state.status = payload;
  },
  setError(state, payload) {
    state.error = payload;
  },
  [ADD_CONTEUDOS](state, payload) {
    state.conteudo = payload;
  },
  [GET_CONTEUDOS](state, payload) {
    state.conteudos = payload;
  },
  [EDITAR_CONTEUDO](state, payload) {
    state.conteudo = payload;
  },
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
});
