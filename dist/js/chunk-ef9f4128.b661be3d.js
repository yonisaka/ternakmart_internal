(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ef9f4128"],{"2df5":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-breadcrumbs",{attrs:{items:t.breadcrumbs,divider:"\\"}}),a("v-card",{attrs:{elevation:"4"}},[a("v-card-text",[a("v-toolbar",{attrs:{flat:""}},[a("v-toolbar-title",[a("div",{staticClass:"title font-weight-bold my-2 ml-2"},[t._v(" Form Produk ")])]),a("v-spacer"),a("v-btn",{attrs:{to:"/modal/produk",dense:"",color:"secondary"}},[t._v(" Kembali ")])],1),a("v-divider"),a("v-form",{ref:"form",attrs:{enctype:"multipart/form-data"},on:{submit:function(e){return e.preventDefault(),t.onSubmit()}}},[a("v-container",{attrs:{fluid:""}},[t.errors?a("v-row",[a("ul",{staticClass:"red--text my-3"},t._l(t.errors,(function(e,r){return a("li",{key:r},[t._v(" "+t._s(t._f("error")(e[0])))])})),0)]):t._e(),a("v-row",[a("v-col",{attrs:{cols:"12",lg:"3",sm:"12"}},[a("v-text-field",{attrs:{color:"teal darken-2",label:"Nama Produk",outlined:"",dense:"",required:""},model:{value:t.form.produk_nama,callback:function(e){t.$set(t.form,"produk_nama",e)},expression:"form.produk_nama"}})],1),a("v-col",{attrs:{cols:"12",lg:"3",sm:"12"}},[a("v-text-field",{attrs:{type:"number",color:"teal darken-2",label:"Harga Produk",outlined:"",dense:"",required:""},model:{value:t.form.produk_harga,callback:function(e){t.$set(t.form,"produk_harga",e)},expression:"form.produk_harga"}})],1),a("v-col",{attrs:{cols:"12",lg:"3",sm:"12"}},[a("v-select",{attrs:{"item-text":"province","item-value":"province_id",items:t.provinsi,color:"teal",label:"Provinsi",outlined:"",dense:"",required:""},on:{change:t.filterCity},model:{value:t.form.province_id,callback:function(e){t.$set(t.form,"province_id",e)},expression:"form.province_id"}})],1),a("v-col",{attrs:{cols:"12",lg:"3",sm:"12"}},[a("v-select",{attrs:{"item-text":"city_name","item-value":"city_id",items:t.kota,color:"teal",label:"Kota / Kabupaten",outlined:"",dense:"",required:""},on:{change:t.filterCity},model:{value:t.form.city_id,callback:function(e){t.$set(t.form,"city_id",e)},expression:"form.city_id"}})],1),a("v-col",{attrs:{cols:"12",lg:"6",sm:"12"}},[a("v-select",{attrs:{"item-text":"text","item-value":"value",items:t.kategori,color:"teal",label:"Kategori Produk",outlined:"",dense:"",required:""},model:{value:t.form.kategori,callback:function(e){t.$set(t.form,"kategori",e)},expression:"form.kategori"}})],1),a("v-col",{attrs:{cols:"12",lg:"6",sm:"12"}},[a("v-file-input",{attrs:{"show-size":"",counter:"",multiple:"",outlined:"",dense:"",label:"Foto Produk"},on:{change:t.onFilePicked}})],1),a("v-col",{attrs:{cols:"12",lg:"3",sm:"12"}},[a("v-select",{attrs:{"item-text":"text","item-value":"value",items:t.jenis,color:"teal",label:"Jenis Produk",outlined:"",dense:"",required:""},model:{value:t.form.produk_jenis,callback:function(e){t.$set(t.form,"produk_jenis",e)},expression:"form.produk_jenis"}})],1),a("v-col",{attrs:{cols:"12",lg:"3",sm:"12"}},[a("v-text-field",{attrs:{type:"number",color:"teal darken-2",label:"Quantity",outlined:"",dense:"",required:""},model:{value:t.form.qty,callback:function(e){t.$set(t.form,"qty",e)},expression:"form.qty"}})],1),a("v-col",{attrs:{cols:"12"}},[a("label",{staticClass:"ml-1"},[t._v("Deskripsi")]),a("vue-editor",{attrs:{"editor-toolbar":t.customToolbar},model:{value:t.form.produk_deskripsi,callback:function(e){t.$set(t.form,"produk_deskripsi",e)},expression:"form.produk_deskripsi"}})],1)],1),a("v-row",{staticClass:"text-right"},[a("v-col",[a("v-btn",{attrs:{type:"submit",color:"primary",disabled:t.isLoading}},[t.isLoading?a("span",[t._v(" Loading "),a("v-progress-circular",{attrs:{size:15,indeterminate:"",color:"secondary"}})],1):a("span",[t._v(" Simpan ")])])],1)],1)],1)],1)],1)],1)],1)},i=[],o=a("bc3a"),n=a.n(o),s=a("5873"),d={components:{VueEditor:s["a"]},data:function(){return{breadcrumbs:[{text:"Modal",disabled:!0},{text:"Produk",disabled:!0},{text:"Form Produk",disabled:!0}],snackbar:!1,message:"",isLoading:!1,id_produk:"",form:{},provinsi:[],kota:[{city_name:"Pilih provinsi terlebih dahulu",city_id:""}],kategori:[{text:"Produk",value:"produk"},{text:"Aqiqah",value:"aqiqah"}],errors:{},jenis:[{text:"Pack",value:"pack"},{text:"Kaleng",value:"kaleng"},{text:"Aqiqah",value:"aqiqah"}],customToolbar:[["bold","italic","underline"],[{list:"ordered"},{list:"bullet"}]]}},mounted:function(){var t=this;n.a.get("/lokasi/provinsi").then((function(e){t.provinsi=e.data.provinsi})),this.id_produk=this.$route.params.id||"",this.$route.params.id&&n.a.get("/produk/"+this.$route.params.id).then((function(e){t.form=e.data.data,t.jenis={value:e.data.data.produk_jenis,text:e.data.data.produk_jenis},n.a.get("lokasi/kota/"+e.data.data.province_id).then((function(e){t.kota=e.data.kota})),t.kota={city_id:e.data.data.city_id,city_name:e.data.data.city_name}}))},methods:{filterCity:function(){var t=this;n.a.get("lokasi/kota/"+this.form.province_id).then((function(e){t.kota=e.data.kota}))},onFilePicked:function(t){this.form.file=t[0]},onSubmit:function(){var t=this;this.isLoading=!0;var e=new FormData;e.append("produk_nama",this.form.produk_nama),e.append("produk_jenis",this.form.produk_jenis),e.append("kategori",this.form.kategori),e.append("qty",this.form.qty),e.append("produk_harga",this.form.produk_harga),e.append("produk_deskripsi",this.form.produk_deskripsi),e.append("file",this.form.file),e.append("province_id",this.form.province_id),e.append("city_id",this.form.city_id),this.$route.params.id?n.a.post("/produk/"+this.id_produk+"?_method=PUT",e,{headers:{"Content-Type":"multipart/form-data"}}).then((function(){t.snackbar=!0,t.message="Berhasil Update Data",t.color="#139CA4",setTimeout((function(){return t.$router.push({path:"/modal/produk"})}),1e3),t.isLoading=!1})).catch((function(e){t.errors=e.response.data,t.snackbar=!0,t.message="Gagal Update Data",t.color="red",t.isLoading=!1})):n.a.post("/produk",e,{headers:{"Content-Type":"multipart/form-data"}}).then((function(){t.snackbar=!0,t.message="Berhasil Tambah Data",t.color="#139CA4",setTimeout((function(){return t.$router.push({path:"/modal/produk"})}),1e3),t.isLoading=!1})).catch((function(e){t.errors=e.response.data,t.snackbar=!0,t.message="Gagal Tambah Data",t.color="red",t.isLoading=!1}))}}},l=d,u=a("2877"),c=a("6544"),m=a.n(c),p=a("2bc5"),f=a("8336"),h=a("b0af"),v=a("99d9"),k=a("62ad"),b=a("a523"),_=a("ce7e"),g=a("23a7"),y=a("4bd4"),x=a("490a"),V=a("0fd9"),w=a("b974"),$=a("2fa4"),q=a("8654"),B=a("71d9"),C=a("2a7f"),P=Object(u["a"])(l,r,i,!1,null,null,null);e["default"]=P.exports;m()(P,{VBreadcrumbs:p["a"],VBtn:f["a"],VCard:h["a"],VCardText:v["c"],VCol:k["a"],VContainer:b["a"],VDivider:_["a"],VFileInput:g["a"],VForm:y["a"],VProgressCircular:x["a"],VRow:V["a"],VSelect:w["a"],VSpacer:$["a"],VTextField:q["a"],VToolbar:B["a"],VToolbarTitle:C["a"]})},"4bd4":function(t,e,a){"use strict";var r=a("5530"),i=(a("caad"),a("2532"),a("07ac"),a("4de4"),a("159b"),a("7db0"),a("58df")),o=a("7e2b"),n=a("3206");e["a"]=Object(i["a"])(o["a"],Object(n["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,a=function(t){return t.$watch("hasError",(function(a){e.$set(e.errorBag,t._uid,a)}),{immediate:!0})},r={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?r.shouldValidate=t.$watch("shouldValidate",(function(i){i&&(e.errorBag.hasOwnProperty(t._uid)||(r.valid=a(t)))})):r.valid=a(t),r},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var a=this.watchers.find((function(t){return t._uid===e._uid}));a&&(a.valid(),a.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object(r["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})}}]);
//# sourceMappingURL=chunk-ef9f4128.b661be3d.js.map