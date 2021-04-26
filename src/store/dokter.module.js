import {
    DokterService,
} from "@/common/api.service";
import {
    FETCH_DOKTER,
} from "./actions.type";
import { 
    SET_DOKTER,
} from "./mutations.type";

const initialState = {
    dokter: {
        nama_lengkap:'',
        nomor_hp:'',
        alamat:'',
        jenis_kelamin:'',
        tanggal_lahir:''
    }
};

export const state = { ...initialState };

const getters = {
    dokter(state) {
      return state.dokter;
    }
};

const actions = {
    async [FETCH_DOKTER](context, DokterSlug, prevDokter) {
        if (prevDokter !== undefined) {
          return context.commit(SET_DOKTER, prevDokter);
        }
        const { data } = await DokterService.get(DokterSlug);
        context.commit(SET_DOKTER, data.dokter);
        return data;
      },
};

const mutations = {
    [SET_DOKTER](state, dokter) {
      state.dokter = dokter;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};