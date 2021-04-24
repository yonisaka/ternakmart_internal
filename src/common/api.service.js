import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import JwtService from "@/common/jwt.service";
import { API_URL } from "@/common/config";

const ApiService = {
  init() {
    Vue.use(VueAxios, axios);
    Vue.axios.defaults.baseURL = API_URL;
  },

  setHeader() {
    Vue.axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${JwtService.getToken()}`;
  },

  query(resource, params) {
    return Vue.axios.get(resource, params).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  },

  get(resource, slug = "") {
    return Vue.axios.get(`${resource}/${slug}`).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  },

  post(resource, params) {
    return Vue.axios.post(`${resource}`, params);
  },

  update(resource, slug, params) {
    return Vue.axios.put(`${resource}/${slug}`, params);
  },

  put(resource, params) {
    return Vue.axios.put(`${resource}`, params);
  },

  delete(resource) {
    return Vue.axios.delete(resource).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  }
};

export default ApiService;

export const UsersService = {
  get() {
    return ApiService.get("users");
  }
};

export const JenisService = {
  get() {
    return ApiService.get("jenis");
  }
}
;
export const GolonganService = {
  get() {
    return ApiService.get("golongan");
  }
};

export const TernakService = {
  query(type, params) {
    return ApiService.query("ternak" + (type === "feed" ? "/feed" : ""), {
      params: params
    });
  },
  get(slug) {
    return ApiService.get("ternak", slug);
  },
  create(params) {
    return ApiService.post("ternak", params);
  },
  update(slug, params) {
    return ApiService.update("ternak", slug, { ternak: params });
  },
  destroy(slug) {
    return ApiService.delete(`ternak/${slug}`);
  }
};

// export const CommentsService = {
//   get(slug) {
//     if (typeof slug !== "string") {
//       throw new Error(
//         "[RWV] CommentsService.get() article slug required to fetch comments"
//       );
//     }
//     return ApiService.get("articles", `${slug}/comments`);
//   },

//   post(slug, payload) {
//     return ApiService.post(`articles/${slug}/comments`, {
//       comment: { body: payload }
//     });
//   },

//   destroy(slug, commentId) {
//     return ApiService.delete(`articles/${slug}/comments/${commentId}`);
//   }
// };

// export const FavoriteService = {
//   add(slug) {
//     return ApiService.post(`articles/${slug}/favorite`);
//   },
//   remove(slug) {
//     return ApiService.delete(`articles/${slug}/favorite`);
//   }
// };
