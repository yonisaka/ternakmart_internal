import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import JwtService from "@/common/jwt.service";
import { API_URL } from "@/common/config";

const ApiService = {
  init() {
    Vue.use(VueAxios, axios);
    Vue.axios.defaults.baseURL = API_URL;
    Vue.axios.defaults.headers.common = {
      "Accept" : "application/json",
      "Content-Type" : "application/json"
    };
  },

  setHeader() {
    Vue.axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${JwtService.getToken()}`;
  },

  setFormData() {
    Vue.axios.defaults.headers.common[
      "Content-Type"
    ] = 'multipart/form-data';
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

export const DokterService = {
  get() {
    return ApiService.get("dokter");
  }
};

export const PenjualService = {
  get() {
    return ApiService.get("penjual");
  }
};

export const CustomerService = {
  get() {
    return ApiService.get("customer");
  }
};

export const JenisService = {
  get() {
    return ApiService.get("jenis");
  }
}
;

export const MenuService = {
  get() {
    return ApiService.get("menu");
  }
}
;

export const RoleService = {
  get() {
    return ApiService.get("role");
  }
}
;

export const GolonganService = {
  get() {
    return ApiService.get("golongan");
  }
};

export const TransaksiService = {
  get() {
    return ApiService.get("transaksi");
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
