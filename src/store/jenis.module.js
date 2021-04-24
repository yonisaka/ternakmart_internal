import {
    JenisService,
} from "@/common/api.service";
import {
    FETCH_JENIS,
} from "./actions.type";
import { 
    SET_JENIS,
} from "./mutations.type";

const state = {
    errors: {},
    jenis: {}
};

const getters = {
    jenis(state) {
      return state.jenis;
    }
};

const actions = {
    [FETCH_JENIS]({ commit }) {
        return JenisService.get()
          .then(({ data }) => {
            commit(SET_JENIS, data.jenis);
          })
          .catch(error => {
            throw new Error(error);
          });
    }
};

const mutations = {
    [SET_JENIS](state, jenis) {
      state.jenis = jenis;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};
  