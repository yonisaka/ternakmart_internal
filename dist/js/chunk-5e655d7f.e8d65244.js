(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5e655d7f"],{"0e8f":function(a,e,t){"use strict";t("20f6");var o=t("e8f2");e["a"]=Object(o["a"])("flex")},"72c6":function(a,e,t){"use strict";t.r(e);var o=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("v-app",{attrs:{id:"inspire"}},[t("v-container",{attrs:{fluid:"","fill-height":""}},[t("v-layout",{attrs:{"align-center":"","justify-center":""}},[t("v-flex",{attrs:{xs12:"",sm8:"",md8:""}},[t("v-card",{staticClass:"elevation-4 px-5 py-5"},[t("v-img",{staticClass:"mx-auto",attrs:{position:"center center",src:"img/brand/ternakmart.png","max-height":"100","max-width":"100"}}),t("v-card-text",[t("div",{staticClass:"display-1 font-weight-bold my-3"},[a._v(" Daftar Akun Baru Seller ")]),a.errors?t("ul",{staticClass:"red--text my-3"},a._l(a.errors,(function(e,o){return t("li",{key:o},[a._v(" "+a._s(a._f("error")(e[0])))])})),0):a._e(),t("v-form",{attrs:{id:"register"},on:{submit:function(e){return e.preventDefault(),a.onSubmit(e)}}},[t("v-row",[t("v-col",{attrs:{cols:"12",lg:"6",sm:"12"}},[t("v-text-field",{attrs:{color:"teal darken-2",label:"Nama Lengkap",required:""},model:{value:a.form.nama_lengkap,callback:function(e){a.$set(a.form,"nama_lengkap",e)},expression:"form.nama_lengkap"}}),t("v-select",{attrs:{"item-text":"text","item-value":"value",items:a.jenis_kelamin,color:"teal",label:"Jenis Kelamin",required:""},model:{value:a.form.jenis_kelamin,callback:function(e){a.$set(a.form,"jenis_kelamin",e)},expression:"form.jenis_kelamin"}}),t("v-text-field",{attrs:{color:"teal darken-2",label:"Nomor Telepon",required:""},model:{value:a.form.nomor_hp,callback:function(e){a.$set(a.form,"nomor_hp",e)},expression:"form.nomor_hp"}}),t("v-textarea",{attrs:{color:"teal darken-2",rows:"2","row-height":"5"},scopedSlots:a._u([{key:"label",fn:function(){return[t("div",[a._v(" Alamat ")])]},proxy:!0}]),model:{value:a.form.alamat,callback:function(e){a.$set(a.form,"alamat",e)},expression:"form.alamat"}})],1),t("v-col",{attrs:{cols:"12",lg:"6",sm:"12"}},[t("v-menu",{attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:a._u([{key:"activator",fn:function(e){var o=e.on,r=e.attrs;return[t("v-text-field",a._g(a._b({attrs:{label:"Tanggal Lahir","append-icon":"mdi-calendar",readonly:""},model:{value:a.form.tanggal_lahir,callback:function(e){a.$set(a.form,"tanggal_lahir",e)},expression:"form.tanggal_lahir"}},"v-text-field",r,!1),o))]}}]),model:{value:a.menu,callback:function(e){a.menu=e},expression:"menu"}},[t("v-date-picker",{attrs:{"year-icon":"mdi-calendar-blank","prev-icon":"mdi-skip-previous","next-icon":"mdi-skip-next"},on:{input:function(e){a.menu=!1}},model:{value:a.form.tanggal_lahir,callback:function(e){a.$set(a.form,"tanggal_lahir",e)},expression:"form.tanggal_lahir"}})],1),t("v-text-field",{attrs:{"append-icon":"mdi-gmail",label:"Email",type:"text"},model:{value:a.form.email,callback:function(e){a.$set(a.form,"email",e)},expression:"form.email"}}),t("v-text-field",{attrs:{"append-icon":a.show_password?"mdi-eye":"mdi-eye-off",type:a.show_password?"text":"password",label:"Password"},on:{"click:append":function(e){a.show_password=!a.show_password}},model:{value:a.form.password,callback:function(e){a.$set(a.form,"password",e)},expression:"form.password"}}),t("v-text-field",{attrs:{"append-icon":a.show_password_confirmation?"mdi-eye":"mdi-eye-off",type:a.show_password_confirmation?"text":"password",label:"Konfirmasi Password"},on:{"click:append":function(e){a.show_password_confirmation=!a.show_password_confirmation}},model:{value:a.form.password_confirmation,callback:function(e){a.$set(a.form,"password_confirmation",e)},expression:"form.password_confirmation"}})],1)],1)],1)],1),t("v-card-actions",[t("v-spacer"),t("v-btn",{staticClass:"white--text font-weight-bold",attrs:{type:"submit",color:"#139CA4",block:"",form:"register",disabled:a.isLoading}},[a.isLoading?t("span",[a._v(" Loading "),t("v-progress-circular",{attrs:{size:15,indeterminate:"",color:"secondary"}})],1):t("span",[a._v(" Daftar ")])])],1)],1),t("div",{staticClass:"text-center mt-3"},[t("router-link",{staticClass:"subtitle-2",attrs:{to:{name:"login"}}},[t("small",[a._v("Have an account?")])])],1)],1)],1)],1),t("v-snackbar",{attrs:{timeout:"2000",color:a.color},model:{value:a.snackbar,callback:function(e){a.snackbar=e},expression:"snackbar"}},[a._v(" "+a._s(a.message)+" ")])],1)},r=[],n=(t("b0c0"),t("5ce5")),s={name:"Register",data:function(){return{snackbar:!1,message:"",isLoading:!1,show_password:!1,show_password_confirmation:!1,name:"",email:"",password:"",password_confirmation:"",form:{},jenis_kelamin:[{text:"Laki-laki",value:"L"},{text:"Perempuan",value:"P"}],menu:!1,errors:{}}},computed:{},methods:{onSubmit:function(){var a=this;this.isLoading=!0,this.form.name=this.form.nama_lengkap,this.form.role_id="3",this.form.user_st="Tidak Aktif",n["k"].setHeader(),n["k"].post("users",this.form).then((function(e){a.isLoading=!1,a.form.id_user=e.data.user.id,n["k"].post("penjual",a.form).then((function(){a.snackbar=!0,a.message="Berhasil Pendaftaran",a.color="#139CA4",setTimeout((function(){return a.$router.push({path:"/login"})}),2e3)}))})).catch((function(e){a.errors=e.response.data,a.snackbar=!0,a.message="Gagal Pendaftaran",a.color="red",a.isLoading=!1}))}}},i=s,l=t("2877"),c=t("6544"),m=t.n(c),d=t("7496"),f=t("8336"),u=t("b0af"),p=t("99d9"),v=t("62ad"),_=t("a523"),k=t("2e4b"),g=t("0e8f"),b=t("4bd4"),h=t("adda"),w=t("a722"),x=t("e449"),y=t("490a"),V=t("0fd9"),C=t("b974"),L=t("2db4"),$=t("2fa4"),j=t("8654"),P=t("a844"),S=Object(l["a"])(i,o,r,!1,null,null,null);e["default"]=S.exports;m()(S,{VApp:d["a"],VBtn:f["a"],VCard:u["a"],VCardActions:p["a"],VCardText:p["c"],VCol:v["a"],VContainer:_["a"],VDatePicker:k["a"],VFlex:g["a"],VForm:b["a"],VImg:h["a"],VLayout:w["a"],VMenu:x["a"],VProgressCircular:y["a"],VRow:V["a"],VSelect:C["a"],VSnackbar:L["a"],VSpacer:$["a"],VTextField:j["a"],VTextarea:P["a"]})},a722:function(a,e,t){"use strict";t("20f6");var o=t("e8f2");e["a"]=Object(o["a"])("layout")},afdd:function(a,e,t){"use strict";var o=t("8336");e["a"]=o["a"]}}]);
//# sourceMappingURL=chunk-5e655d7f.e8d65244.js.map