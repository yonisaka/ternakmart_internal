import {
    TernakService,
} from "@/common/api.service";
import {
    FETCH_TERNAK,
} from "./actions.type";
import { 
    SET_TERNAK,
} from "./mutations.type";

const initialState = {
    ternak: {
      id: "",
      ternak_nama: "",
      id_jenis: "",
    },
};

export const state = { ...initialState };

export const actions = {
    async [FETCH_TERNAK](context, ternakSlug, prevTernak) {
      if (prevTernak !== undefined) {
        return context.commit(SET_TERNAK, prevTernak);
      }
      const { data } = await TernakService.get(ternakSlug);
      context.commit(SET_TERNAK, data.ternak);
      return data;
    }
};

export const mutations = {
    [SET_TERNAK](state, ternak) {
      state.ternak = ternak;
    },
}

const getters = {
    ternak(state) {
        return state.ternak;
    }
};
  
export default {
    state,
    actions,
    mutations,
    getters
};
  