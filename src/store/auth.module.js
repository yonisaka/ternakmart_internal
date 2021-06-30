import ApiService from "@/common/api.service";
import JwtService from "@/common/jwt.service";
import {
  LOGIN,
  LOGOUT,
  REGISTER,
  CHECK_AUTH,
  UPDATE_USER,
  CHECK_NAV,
} from "./actions.type";
import { SET_AUTH, PURGE_AUTH, SET_ERROR, SET_NAV } from "./mutations.type";

const state = {
  errors: null,
  user: {},
  isAuthenticated: !!JwtService.getToken()
};

const getters = {
  currentUser(state) {
    return state.user;
  },
  isAuthenticated(state) {
    return state.isAuthenticated;
  }
};

const actions = {
  [LOGIN](context, credentials) {
    const data = { user: credentials }.user;
    return new Promise(resolve => {
      ApiService.post("login", data)
        .then(({ data }) => {
          context.commit(SET_AUTH, data);
          resolve(data);
        })
        .catch(({ response }) => {
          context.commit(SET_ERROR, response.data);
        });
    });
  },
  [LOGOUT](context) {
    context.commit(PURGE_AUTH);
  },
  [REGISTER](context, credentials) {
    const data = { user: credentials }.user;
    return new Promise((resolve, reject) => {
      ApiService.post("register", data)
        .then(({ data }) => {
          console.log(data)
          context.commit(SET_AUTH, data.user);
          resolve(data);
        })
        .catch(({ response }) => {
          context.commit(SET_ERROR, response.data);
          reject(response);
        });
    });
  },
  [CHECK_AUTH](context) {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      const id = JwtService.getId();
      ApiService.get("users", id)
        .then(({ data }) => {
          context.commit(SET_AUTH, data);
        })
        .catch(({ response }) => {
          context.commit(SET_ERROR, response);
        });
    } else {
      context.commit(PURGE_AUTH);
    }
  },
  // [CHECK_AUTH](context,next) {
  //   if (JwtService.getToken()) {
  //     ApiService.setHeader();
  //     ApiService.get("users")
  //       .then(() => {
  //         next()
  //         // context.commit(SET_AUTH, data.user);
  //       })
  //       .catch(({ response }) => {
  //         context.commit(SET_ERROR, response);
  //       });
  //   } else {
  //     context.commit(PURGE_AUTH);
  //   }
  // },
  [UPDATE_USER](context, payload) {
    const { email, username, password, image, bio } = payload;
    const user = {
      email,
      username,
      bio,
      image
    };
    if (password) {
      user.password = password;
    }

    return ApiService.put("user", user).then(({ data }) => {
      context.commit(SET_AUTH, data.user);
      return data;
    });
  },
  [CHECK_NAV](context, credentials) {
    const data = { user: credentials }.user;
    return new Promise(resolve => {
      ApiService.get("nav", data.role_id)
        .then(({ data }) => {
          context.commit(SET_NAV, data);
          resolve(data);
        })
        .catch(({ response }) => {
          console.log(response)
          context.commit(SET_ERROR, response.data);
        });
    });
  },
};

const mutations = {
  [SET_ERROR](state, error) {
    state.errors = error;
  },
  [SET_AUTH](state, data) {
    state.isAuthenticated = true;
    state.user = data.user;
    state.errors = {};
    JwtService.saveToken(data.token.original.token);
    JwtService.saveId(data.user.id);
  },
  [PURGE_AUTH](state) {
    state.isAuthenticated = false;
    state.user = {};
    state.errors = {};
    JwtService.destroyToken();
  },
  [SET_NAV](state, data) {
    state.nav = data;
  },
};

export default {
  state,
  actions,
  mutations,
  getters
};
