(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a3207600"],{"24bc":function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-breadcrumbs",{attrs:{items:e.breadcrumbs,divider:"\\"}}),a("v-card",{attrs:{elevation:"4"}},[a("v-card-text",[a("v-toolbar",{attrs:{flat:""}},[a("v-toolbar-title",[a("div",{staticClass:"title font-weight-bold my-2 ml-2"},[e._v(" Tambah Data ")])]),a("v-spacer"),a("v-btn",{attrs:{to:"/user/customer",dense:"",color:"secondary"}},[e._v(" Kembali ")])],1),a("v-divider"),a("v-form",{ref:"form",on:{submit:function(t){return t.preventDefault(),e.onSubmit()}}},[a("div",{staticClass:"subtitle font-weight-bold mt-5 ml-5"},[e._v(" Data Diri ")]),a("v-container",{attrs:{fluid:""}},[a("v-row",[a("v-col",{attrs:{cols:"6"}},[a("v-text-field",{attrs:{color:"teal darken-2",label:"Nama Lengkap",outlined:"",dense:"",required:""},model:{value:e.form.nama_lengkap,callback:function(t){e.$set(e.form,"nama_lengkap",t)},expression:"form.nama_lengkap"}}),a("v-select",{attrs:{"item-text":"text","item-value":"value",items:e.jenis_kelamin,color:"teal",label:"Jenis Kelamin",outlined:"",dense:"",required:""},model:{value:e.form.jenis_kelamin,callback:function(t){e.$set(e.form,"jenis_kelamin",t)},expression:"form.jenis_kelamin"}}),a("v-text-field",{attrs:{color:"teal darken-2",label:"Nomor Telepon",outlined:"",dense:"",required:""},model:{value:e.form.nomor_hp,callback:function(t){e.$set(e.form,"nomor_hp",t)},expression:"form.nomor_hp"}})],1),a("v-col",{attrs:{cols:"6"}},[a("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on,r=t.attrs;return[a("v-text-field",e._g(e._b({attrs:{label:"Tanggal Lahir","prepend-icon":"mdi-calendar",readonly:"",outlined:"",dense:""},model:{value:e.form.tanggal_lahir,callback:function(t){e.$set(e.form,"tanggal_lahir",t)},expression:"form.tanggal_lahir"}},"v-text-field",r,!1),o))]}}]),model:{value:e.menu,callback:function(t){e.menu=t},expression:"menu"}},[a("v-date-picker",{on:{input:function(t){e.menu=!1}},model:{value:e.form.tanggal_lahir,callback:function(t){e.$set(e.form,"tanggal_lahir",t)},expression:"form.tanggal_lahir"}})],1),a("v-textarea",{attrs:{color:"teal darken-2",rows:"4",outlined:"",dense:"","row-height":"5"},scopedSlots:e._u([{key:"label",fn:function(){return[a("div",[e._v(" Alamat ")])]},proxy:!0}]),model:{value:e.form.alamat,callback:function(t){e.$set(e.form,"alamat",t)},expression:"form.alamat"}})],1)],1)],1),a("div",{staticClass:"subtitle font-weight-bold mt-5 ml-5"},[e._v(" Informasi Akun ")]),a("v-container",{attrs:{fluid:""}},[a("v-row",[a("v-col",{attrs:{cols:"6"}},[a("v-text-field",{attrs:{color:"teal darken-2",label:"Email",outlined:"",dense:"",required:""},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}}),a("v-select",{attrs:{items:e.items,color:"teal darken-2",label:"Status",outlined:"",dense:""},model:{value:e.form.user_st,callback:function(t){e.$set(e.form,"user_st",t)},expression:"form.user_st"}})],1),e.id_customer?e._e():a("v-col",{attrs:{cols:"6"}},[a("v-text-field",{attrs:{color:"teal darken-2",label:"Password",outlined:"",dense:"",required:"","append-icon":e.show_password?"mdi-eye":"mdi-eye-off",type:e.show_password?"text":"password"},on:{"click:append":function(t){e.show_password=!e.show_password}},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}}),a("v-text-field",{attrs:{color:"teal darken-2",label:"Konfirmasi Password",outlined:"",dense:"",required:"","append-icon":e.show_password_confirmation?"mdi-eye":"mdi-eye-off",type:e.show_password_confirmation?"text":"password"},on:{"click:append":function(t){e.show_password_confirmation=!e.show_password_confirmation}},model:{value:e.form.password_confirmation,callback:function(t){e.$set(e.form,"password_confirmation",t)},expression:"form.password_confirmation"}})],1)],1),a("v-row",{staticClass:"text-right"},[a("v-col",[a("v-btn",{attrs:{type:"submit",color:"primary"}},[e._v(" Simpan ")])],1)],1)],1)],1)],1)],1)],1)},r=[],s=(a("b0c0"),a("5ce5")),n=a("bc3a"),i=a.n(n),l={components:{},data:function(){return{id_customer:"",show_password:!1,show_password_confirmation:!1,breadcrumbs:[{text:"User",disabled:!0},{text:"customer",disabled:!0},{text:"Tambah Data",disabled:!0}],items:["Aktif","Tidak Aktif"],form:{},jenis_kelamin:[{text:"Laki-laki",value:"L"},{text:"Perempuan",value:"P"}],menu:!1}},mounted:function(){var e=this;this.id_customer=this.$route.params.id||"",this.$route.params.id&&i.a.get("/customer/"+this.$route.params.id).then((function(t){e.form=t.data.customer}))},methods:{onSubmit:function(){var e=this;this.form.name=this.form.nama_lengkap,this.$route.params.id?(s["k"].setHeader(),s["k"].put("users/"+this.form.id_user,this.form).then((function(){s["k"].put("customer/"+e.id_customer,e.form).then((function(){e.$router.push({path:"/user/customer"})}))}))):(this.form.role_id="4",s["k"].setHeader(),s["k"].post("users",this.form).then((function(t){e.form.id_user=t.data.user.id,s["k"].post("customer",e.form).then((function(){e.$router.push({path:"/user/customer"})}))})))}}},d=l,m=a("2877"),c=a("6544"),u=a.n(c),f=a("2bc5"),p=a("8336"),v=a("b0af"),b=a("99d9"),_=a("62ad"),h=a("a523"),k=a("2e4b"),w=a("ce7e"),x=a("4bd4"),g=a("e449"),V=a("0fd9"),$=a("b974"),y=a("2fa4"),T=a("8654"),j=a("a844"),C=a("71d9"),S=a("2a7f"),D=Object(m["a"])(d,o,r,!1,null,null,null);t["default"]=D.exports;u()(D,{VBreadcrumbs:f["a"],VBtn:p["a"],VCard:v["a"],VCardText:b["c"],VCol:_["a"],VContainer:h["a"],VDatePicker:k["a"],VDivider:w["a"],VForm:x["a"],VMenu:g["a"],VRow:V["a"],VSelect:$["a"],VSpacer:y["a"],VTextField:T["a"],VTextarea:j["a"],VToolbar:C["a"],VToolbarTitle:S["a"]})},"2a7f":function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var o=a("71d9"),r=a("80d2"),s=Object(r["i"])("v-toolbar__title"),n=Object(r["i"])("v-toolbar__items");o["a"]},afdd:function(e,t,a){"use strict";var o=a("8336");t["a"]=o["a"]}}]);
//# sourceMappingURL=chunk-a3207600.a9aee074.js.map