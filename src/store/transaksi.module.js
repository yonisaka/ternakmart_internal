import {
    TransaksiService,
} from "@/common/api.service";
import {
    FETCH_TRANSAKSI,
} from "./actions.type";
import { 
    SET_TRANSAKSI,
} from "./mutations.type";

const state = {
    errors: {},
    transaksi: []
};

const getters = {
    transaksi(state) {
      return state.transaksi;
    }
};

const actions = {
    [FETCH_TRANSAKSI]({ commit }) {
        return TransaksiService.get()
          .then(({ data }) => {
            commit(SET_TRANSAKSI, data.transaksi);
          })
          .catch(error => {
            throw new Error(error);
          });
    }
};

const mutations = {
    [SET_TRANSAKSI](state, transaksi) {
      state.transaksi = transaksi;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};
  