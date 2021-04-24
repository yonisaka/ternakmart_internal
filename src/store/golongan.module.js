import {
    GolonganService,
} from "@/common/api.service";
import {
    FETCH_GOL,
} from "./actions.type";
import { 
    SET_GOL,
} from "./mutations.type";

const state = {
    errors: {},
    golongan: {}
};

const getters = {
    golongan(state) {
      return state.golongan;
    }
};

const actions = {
    [FETCH_GOL]({ commit }) {
        return GolonganService.get()
          .then(({ data }) => {
            commit(SET_GOL, data.golongan);
          })
          .catch(error => {
            throw new Error(error);
          });
    }
};

const mutations = {
    [SET_GOL](state, golongan) {
      state.golongan = golongan;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
  };
  