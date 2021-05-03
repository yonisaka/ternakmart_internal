import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from 'vuex-persistedstate'

import auth from "./auth.module";
import ternak from "./ternak.module";
import users from "./users.module";
import dokter from "./dokter.module";
import penjual from "./penjual.module";
import customer from "./customer.module";
import jenis from "./jenis.module";
import golongan from "./golongan.module";
import menu from "./menu.module";
import role from "./role.module";
import transaksi from "./transaksi.module";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState({
    storage: window.sessionStorage,
  })],
  modules: {
    auth,
    ternak,
    jenis,
    golongan,
    users,
    dokter,
    penjual,
    customer,
    menu,
    role,
    transaksi,
  }
});
