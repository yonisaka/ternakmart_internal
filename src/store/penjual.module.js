import {
    PenjualService,
} from "@/common/api.service";
import {
    FETCH_PENJUAL,
} from "./actions.type";
import { 
    SET_PENJUAL,
} from "./mutations.type";

const initialState = {
    penjual: {
        nama_lengkap:'',
        nomor_hp:'',
        alamat:'',
        jenis_kelamin:'',
        tanggal_lahir:''
    }
};

export const state = { ...initialState };

const getters = {
    penjual(state) {
      return state.penjual;
    }
};

const actions = {
    async [FETCH_PENJUAL](context, PenjualSlug, prevPenjual) {
        if (prevPenjual !== undefined) {
          return context.commit(SET_PENJUAL, prevPenjual);
        }
        const { data } = await PenjualService.get(PenjualSlug);
        context.commit(SET_PENJUAL, data.penjual);
        return data;
      },
};

const mutations = {
    [SET_PENJUAL](state, penjual) {
      state.penjual = penjual;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};