import {
    UsersService,
} from "@/common/api.service";
import {
    FETCH_USERS,
} from "./actions.type";
import { 
    SET_USERS,
} from "./mutations.type";

const initialState = {
    users: {
        id:'',
        name:'',
        email:'',
    }
};

export const state = { ...initialState };

const getters = {
    users(state) {
      return state.users;
    }
};

const actions = {
    async [FETCH_USERS](context, UserSlug, prevUser) {
        if (prevUser !== undefined) {
          return context.commit(SET_USERS, prevUser);
        }
        const { data } = await UsersService.get(UserSlug);
        context.commit(SET_USERS, data.users);
        return data;
      },
};

const mutations = {
    [SET_USERS](state, users) {
      state.users = users;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};