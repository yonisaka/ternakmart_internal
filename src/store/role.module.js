import {
    RoleService,
} from "@/common/api.service";
import {
    FETCH_ROLE,
} from "./actions.type";
import { 
    SET_ROLE,
} from "./mutations.type";

const state = {
    errors: {},
    role: {}
};

const getters = {
    role(state) {
      return state.role;
    }
};

const actions = {
    [FETCH_ROLE]({ commit }) {
        return RoleService.get()
          .then(({ data }) => {
            commit(SET_ROLE, data.role);
          })
          .catch(error => {
            throw new Error(error);
          });
    }
};

const mutations = {
    [SET_ROLE](state, role) {
      state.role = role;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};
  