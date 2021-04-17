import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from 'vuex-persistedstate'

import auth from "./auth.module";
import ternak from "./ternak.module";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState({
    storage: window.sessionStorage,
  })],
  modules: {
    auth,
    ternak,
  }
});
