import Vue from "vue";
import Vuex from "vuex";

import firebase from "../firebaseConfig";
import { ADD_CONTEUDOS } from "./mutation-types";

Vue.use(Vuex);

const state = () => ({
  conteudo: null,
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
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
});
