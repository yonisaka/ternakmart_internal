import {
    MenuService,
} from "@/common/api.service";
import {
    FETCH_MENU,
} from "./actions.type";
import { 
    SET_MENU,
} from "./mutations.type";

const state = {
    errors: {},
    menu: {}
};

const getters = {
    menu(state) {
      return state.menu;
    }
};

const actions = {
    [FETCH_MENU]({ commit }) {
        return MenuService.get()
          .then(({ data }) => {
              console.log(data)
            commit(SET_MENU, data.menu);
          })
          .catch(error => {
            throw new Error(error);
          });
    }
};

const mutations = {
    [SET_MENU](state, menu) {
      state.menu = menu;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};
  