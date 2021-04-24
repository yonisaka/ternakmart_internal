import {
    TernakService,
} from "@/common/api.service";
import {
    FETCH_TERNAK,
    ADD_TERNAK,
} from "./actions.type";
import { 
    SET_TERNAK,
} from "./mutations.type";

const initialState = {
    ternak: {
      id: "",
      ternak_nama: "",
      id_jenis: "",
      jenis_kelamin: "",
      ternak_berat: "",
      ternak_tinggi: "",
      ternak_umur: "",
      ternak_deskripsi: "",
      ternak_harga: "",
      tgl_penerimaan: "",
      tgl_keluar: "",
      file_name: "",
      file_path: "",
      id_customer: "",
      id_penjual: "",
      id_dokter: "",
      ternak_st: "",
      verifikasi_st: "",
      verifikasi_note: "",
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
    },
    // [ADD_TERNAK](data) {
        // console.log(data)
        // return TernakService.create(data.ternak);
        // context.commit(SET_TERNAK, data.ternak);
        // return data;
    // },
    [ADD_TERNAK]({ state }) {
        return TernakService.create(state.ternak);
    },
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
  