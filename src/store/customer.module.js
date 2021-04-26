import {
    CustomerService,
} from "@/common/api.service";
import {
    FETCH_CUSTOMER,
} from "./actions.type";
import { 
    SET_CUSTOMER,
} from "./mutations.type";

const initialState = {
    customer: {
        nama_lengkap:'',
        nomor_hp:'',
        alamat:'',
        jenis_kelamin:'',
        tanggal_lahir:''
    }
};

export const state = { ...initialState };

const getters = {
    customer(state) {
      return state.customer;
    }
};

const actions = {
    async [FETCH_CUSTOMER](context, CustomerSlug, prevCustomer) {
        if (prevCustomer !== undefined) {
          return context.commit(SET_CUSTOMER, prevCustomer);
        }
        const { data } = await CustomerService.get(CustomerSlug);
        context.commit(SET_CUSTOMER, data.customer);
        return data;
      },
};

const mutations = {
    [SET_CUSTOMER](state, customer) {
      state.customer = customer;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};