(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-77514ce0"],{"23a7":function(e,t,a){"use strict";var i=a("2909"),n=a("5530"),r=a("53ca"),s=(a("a9e3"),a("caad"),a("13d5"),a("d81d"),a("b0c0"),a("99af"),a("a434"),a("159b"),a("fb6a"),a("5803"),a("2677")),o=a("cc20"),l=a("80d2"),c=a("d9bd"),u=a("d9f7");t["a"]=s["a"].extend({name:"v-file-input",model:{prop:"value",event:"change"},props:{chips:Boolean,clearable:{type:Boolean,default:!0},counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},hideInput:Boolean,placeholder:String,prependIcon:{type:String,default:"$file"},readonly:{type:Boolean,default:!1},showSize:{type:[Boolean,Number],default:!1,validator:function(e){return"boolean"===typeof e||[1e3,1024].includes(e)}},smallChips:Boolean,truncateLength:{type:[Number,String],default:22},type:{type:String,default:"file"},value:{default:void 0,validator:function(e){return Object(l["H"])(e).every((function(e){return null!=e&&"object"===Object(r["a"])(e)}))}}},computed:{classes:function(){return Object(n["a"])(Object(n["a"])({},s["a"].options.computed.classes.call(this)),{},{"v-file-input":!0})},computedCounterValue:function(){var e=this.isMultiple&&this.lazyValue?this.lazyValue.length:this.lazyValue instanceof File?1:0;if(!this.showSize)return this.$vuetify.lang.t(this.counterString,e);var t=this.internalArrayValue.reduce((function(e,t){var a=t.size,i=void 0===a?0:a;return e+i}),0);return this.$vuetify.lang.t(this.counterSizeString,e,Object(l["w"])(t,1024===this.base))},internalArrayValue:function(){return Object(l["H"])(this.internalValue)},internalValue:{get:function(){return this.lazyValue},set:function(e){this.lazyValue=e,this.$emit("change",this.lazyValue)}},isDirty:function(){return this.internalArrayValue.length>0},isLabelActive:function(){return this.isDirty},isMultiple:function(){return this.$attrs.hasOwnProperty("multiple")},text:function(){var e=this;return this.isDirty||!this.isFocused&&this.hasLabel?this.internalArrayValue.map((function(t){var a=t.name,i=void 0===a?"":a,n=t.size,r=void 0===n?0:n,s=e.truncateText(i);return e.showSize?"".concat(s," (").concat(Object(l["w"])(r,1024===e.base),")"):s})):[this.placeholder]},base:function(){return"boolean"!==typeof this.showSize?this.showSize:void 0},hasChips:function(){return this.chips||this.smallChips}},watch:{readonly:{handler:function(e){!0===e&&Object(c["b"])("readonly is not supported on <v-file-input>",this)},immediate:!0},value:function(e){var t=this.isMultiple?e:e?[e]:[];Object(l["j"])(t,this.$refs.input.files)||(this.$refs.input.value="")}},methods:{clearableCallback:function(){this.internalValue=this.isMultiple?[]:null,this.$refs.input.value=""},genChips:function(){var e=this;return this.isDirty?this.text.map((function(t,a){return e.$createElement(o["a"],{props:{small:e.smallChips},on:{"click:close":function(){var t=e.internalValue;t.splice(a,1),e.internalValue=t}}},[t])})):[]},genControl:function(){var e=s["a"].options.methods.genControl.call(this);return this.hideInput&&(e.data.style=Object(u["d"])(e.data.style,{display:"none"})),e},genInput:function(){var e=s["a"].options.methods.genInput.call(this);return delete e.data.domProps.value,delete e.data.on.input,e.data.on.change=this.onInput,[this.genSelections(),e]},genPrependSlot:function(){var e=this;if(!this.prependIcon)return null;var t=this.genIcon("prepend",(function(){e.$refs.input.click()}));return this.genSlot("prepend","outer",[t])},genSelectionText:function(){var e=this.text.length;return e<2?this.text:this.showSize&&!this.counter?[this.computedCounterValue]:[this.$vuetify.lang.t(this.counterString,e)]},genSelections:function(){var e=this,t=[];return this.isDirty&&this.$scopedSlots.selection?this.internalArrayValue.forEach((function(a,i){e.$scopedSlots.selection&&t.push(e.$scopedSlots.selection({text:e.text[i],file:a,index:i}))})):t.push(this.hasChips&&this.isDirty?this.genChips():this.genSelectionText()),this.$createElement("div",{staticClass:"v-file-input__text",class:{"v-file-input__text--placeholder":this.placeholder&&!this.isDirty,"v-file-input__text--chips":this.hasChips&&!this.$scopedSlots.selection}},t)},genTextFieldSlot:function(){var e=this,t=s["a"].options.methods.genTextFieldSlot.call(this);return t.data.on=Object(n["a"])(Object(n["a"])({},t.data.on||{}),{},{click:function(){return e.$refs.input.click()}}),t},onInput:function(e){var t=Object(i["a"])(e.target.files||[]);this.internalValue=this.isMultiple?t:t[0],this.initialValue=this.internalValue},onKeyDown:function(e){this.$emit("keydown",e)},truncateText:function(e){if(e.length<Number(this.truncateLength))return e;var t=Math.floor((Number(this.truncateLength)-1)/2);return"".concat(e.slice(0,t),"…").concat(e.slice(e.length-t))}}})},2677:function(e,t,a){"use strict";var i=a("8654");t["a"]=i["a"]},"2a7f":function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var i=a("71d9"),n=a("80d2"),r=Object(n["i"])("v-toolbar__title"),s=Object(n["i"])("v-toolbar__items");i["a"]},"2bc5":function(e,t,a){"use strict";var i=a("5530"),n=(a("a15b"),a("abd3"),a("ade3")),r=a("1c87"),s=a("58df"),o=Object(s["a"])(r["a"]).extend({name:"v-breadcrumbs-item",props:{activeClass:{type:String,default:"v-breadcrumbs__item--disabled"},ripple:{type:[Boolean,Object],default:!1}},computed:{classes:function(){return Object(n["a"])({"v-breadcrumbs__item":!0},this.activeClass,this.disabled)}},render:function(e){var t=this.generateRouteLink(),a=t.tag,n=t.data;return e("li",[e(a,Object(i["a"])(Object(i["a"])({},n),{},{attrs:Object(i["a"])(Object(i["a"])({},n.attrs),{},{"aria-current":this.isActive&&this.isLink?"page":void 0})}),this.$slots.default)])}}),l=a("80d2"),c=Object(l["i"])("v-breadcrumbs__divider","li"),u=a("7560");t["a"]=Object(s["a"])(u["a"]).extend({name:"v-breadcrumbs",props:{divider:{type:String,default:"/"},items:{type:Array,default:function(){return[]}},large:Boolean},computed:{classes:function(){return Object(i["a"])({"v-breadcrumbs--large":this.large},this.themeClasses)}},methods:{genDivider:function(){return this.$createElement(c,this.$slots.divider?this.$slots.divider:this.divider)},genItems:function(){for(var e=[],t=!!this.$scopedSlots.item,a=[],i=0;i<this.items.length;i++){var n=this.items[i];a.push(n.text),t?e.push(this.$scopedSlots.item({item:n})):e.push(this.$createElement(o,{key:a.join("."),props:n},[n.text])),i<this.items.length-1&&e.push(this.genDivider())}return e}},render:function(e){var t=this.$slots.default||this.genItems();return e("ul",{staticClass:"v-breadcrumbs",class:this.classes},t)}})},5803:function(e,t,a){},"768d":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-breadcrumbs",{attrs:{items:e.breadcrumbs,divider:"\\"}}),a("v-card",{attrs:{elevation:"4"}},[a("v-card-text",[a("v-toolbar",{attrs:{flat:""}},[a("v-toolbar-title",[a("div",{staticClass:"title font-weight-bold my-2 ml-2"},[e._v(" Pengajuan Ternak ")])]),a("v-spacer"),a("v-btn",{attrs:{to:"/modal/pengajuan",dense:"",color:"secondary"}},[e._v(" Kembali ")])],1),a("v-divider"),a("div",{staticClass:"subtitle font-weight-bold mt-5 ml-5"},[e._v(" Informasi Ternak ")]),a("v-form",{ref:"form",attrs:{enctype:"multipart/form-data"},on:{submit:function(t){return t.preventDefault(),e.onSubmit()}}},[a("v-container",{attrs:{fluid:""}},[e.errors?a("v-row",[a("ul",{staticClass:"red--text my-3"},e._l(e.errors,(function(t,i){return a("li",{key:i},[e._v(" "+e._s(e._f("error")(t[0])))])})),0)]):e._e(),a("v-row",[a("v-col",{attrs:{cols:"12",lg:"4",sm:"12"}},[a("v-text-field",{attrs:{color:"teal darken-2",label:"Nama Ternak",outlined:"",dense:"",required:""},model:{value:e.form.ternak_nama,callback:function(t){e.$set(e.form,"ternak_nama",t)},expression:"form.ternak_nama"}})],1),a("v-col",{attrs:{cols:"12",lg:"2",sm:"12"}},[a("v-select",{attrs:{"item-text":"text","item-value":"value",items:e.jenis_kelamin,color:"teal",label:"Kelamin",outlined:"",dense:"",required:""},on:{change:e.filterJenis},model:{value:e.form.jenis_kelamin,callback:function(t){e.$set(e.form,"jenis_kelamin",t)},expression:"form.jenis_kelamin"}})],1),a("v-col",{attrs:{cols:"12",lg:"3",sm:"12"}},[a("v-select",{attrs:{"item-text":"golongan_nama","item-value":"id",items:e.golongan,color:"teal",label:"Jenis",outlined:"",dense:"",required:""},on:{change:e.filterJenis},model:{value:e.form.id_golongan,callback:function(t){e.$set(e.form,"id_golongan",t)},expression:"form.id_golongan"}})],1),a("v-col",{attrs:{cols:"12",lg:"3",sm:"12"}},[a("v-select",{attrs:{"item-text":"jenis_nama","item-value":"id",items:e.jenis,color:"teal",label:"Breed",outlined:"",dense:"",required:""},model:{value:e.form.id_jenis,callback:function(t){e.$set(e.form,"id_jenis",t)},expression:"form.id_jenis"}})],1),a("v-col",{attrs:{cols:"12",lg:"6",sm:"12"}},[a("v-file-input",{attrs:{"show-size":"",counter:"",multiple:"",outlined:"",dense:"",label:"Foto Ternak"},on:{change:e.onFilePicked}})],1),a("v-col",{attrs:{cols:"4",lg:"2",sm:"4"}},[a("v-text-field",{attrs:{color:"teal darken-2",label:"Berat",outlined:"",dense:"",required:""},model:{value:e.form.ternak_berat,callback:function(t){e.$set(e.form,"ternak_berat",t)},expression:"form.ternak_berat"}})],1),a("v-col",{attrs:{cols:"4",lg:"2",sm:"4"}},[a("v-text-field",{attrs:{color:"teal darken-2",label:"Umur",outlined:"",dense:"",required:""},model:{value:e.form.ternak_umur,callback:function(t){e.$set(e.form,"ternak_umur",t)},expression:"form.ternak_umur"}})],1),a("v-col",{attrs:{cols:"4",lg:"2",sm:"4"}},[a("v-text-field",{attrs:{color:"teal darken-2",label:"Lingkar Perut",outlined:"",dense:"",required:""},model:{value:e.form.lingkar_perut,callback:function(t){e.$set(e.form,"lingkar_perut",t)},expression:"form.lingkar_perut"}})],1),e.id_ternak?a("v-col",{attrs:{cols:"12",lg:"6",sm:"12"}},[a("v-img",{attrs:{"lazy-src":e.form.file_path,src:e.form.file_path,"aspect-ratio":"1.8"},on:{error:function(e){e.target.src="img/default.png"}}})],1):e._e(),e.id_ternak?a("v-col",{attrs:{cols:"12",lg:"6",sm:"12"}},[a("v-textarea",{attrs:{color:"teal darken-2",rows:"10",outlined:"",dense:"","row-height":"30"},scopedSlots:e._u([{key:"label",fn:function(){return[a("div",[e._v(" Deskripsi ")])]},proxy:!0}],null,!1,3913337887),model:{value:e.form.ternak_deskripsi,callback:function(t){e.$set(e.form,"ternak_deskripsi",t)},expression:"form.ternak_deskripsi"}})],1):a("v-col",{attrs:{cols:"12"}},[a("v-textarea",{attrs:{color:"teal darken-2",rows:"10",outlined:"",dense:"","row-height":"30"},scopedSlots:e._u([{key:"label",fn:function(){return[a("div",[e._v(" Deskripsi ")])]},proxy:!0}]),model:{value:e.form.ternak_deskripsi,callback:function(t){e.$set(e.form,"ternak_deskripsi",t)},expression:"form.ternak_deskripsi"}})],1),a("v-col",{attrs:{cols:"12",lg:"6",sm:"12"}},[a("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:e._u([{key:"activator",fn:function(t){var i=t.on,n=t.attrs;return[a("v-text-field",e._g(e._b({attrs:{label:"Tanggal Penerimaan","prepend-icon":"mdi-calendar",readonly:"",outlined:"",dense:""},model:{value:e.form.tgl_penerimaan,callback:function(t){e.$set(e.form,"tgl_penerimaan",t)},expression:"form.tgl_penerimaan"}},"v-text-field",n,!1),i))]}}]),model:{value:e.menu,callback:function(t){e.menu=t},expression:"menu"}},[a("v-date-picker",{on:{input:function(t){e.menu=!1}},model:{value:e.form.tgl_penerimaan,callback:function(t){e.$set(e.form,"tgl_penerimaan",t)},expression:"form.tgl_penerimaan"}})],1),a("v-text-field",{attrs:{color:"teal darken-2",label:"Harga",outlined:"",dense:"",required:""},model:{value:e.form.harga_pengajuan,callback:function(t){e.$set(e.form,"harga_pengajuan",t)},expression:"form.harga_pengajuan"}})],1),a("v-col",{attrs:{cols:"12",lg:"6",sm:"12"}},[a("v-select",{attrs:{"item-text":"province","item-value":"province_id",items:e.provinsi,color:"teal",label:"Provinsi",outlined:"",dense:"",required:""},on:{change:e.filterCity},model:{value:e.form.province_id,callback:function(t){e.$set(e.form,"province_id",t)},expression:"form.province_id"}}),a("v-select",{attrs:{"item-text":"city_name","item-value":"city_id",items:e.kota,color:"teal",label:"Kota / Kabupaten",outlined:"",dense:"",required:""},on:{change:e.filterCity},model:{value:e.form.city_id,callback:function(t){e.$set(e.form,"city_id",t)},expression:"form.city_id"}})],1)],1),a("v-row",{staticClass:"text-right"},[a("v-col",[a("v-btn",{attrs:{type:"submit",color:"primary",disabled:e.isLoading}},[e._v(" Simpan ")])],1)],1)],1)],1)],1)],1)],1)},n=[],r=a("5530"),s=a("2f62"),o=a("6c33"),l=a("bc3a"),c=a.n(l),u={components:{},data:function(){return{isLoading:!1,id_ternak:"",jenis_kelamin:[{text:"Betina",value:"B"},{text:"Jantan",value:"J"}],form:{},jenis:[{jenis_nama:"Pilih golongan terlebih dahulu",id:""}],breadcrumbs:[{text:"Modal",disabled:!0},{text:"Pengajuan",disabled:!0},{text:"Tambah Data",disabled:!0}],menu:!1,errors:{},provinsi:[],kota:[{city_name:"Pilih provinsi terlebih dahulu",city_id:""}]}},mounted:function(){var e=this;c.a.get("/lokasi/provinsi").then((function(t){e.provinsi=t.data.provinsi})),this.$store.dispatch(o["f"]),this.id_ternak=this.$route.params.id||"",this.$route.params.id&&c.a.get("/ternak/"+this.$route.params.id).then((function(t){e.form=t.data.ternak,e.jenis={id:t.data.ternak.id_jenis,jenis_nama:t.data.ternak.jenis_nama},e.kota={city_id:t.data.ternak.city_id,city_name:t.data.ternak.city_name}}))},computed:Object(r["a"])({},Object(s["b"])(["golongan"])),methods:{filterJenis:function(){var e=this;c.a.get("/jenis/"+this.form.id_golongan+"/"+this.form.jenis_kelamin).then((function(t){e.jenis=t.data.jenis}))},filterCity:function(){var e=this;c.a.get("lokasi/kota/"+this.form.province_id).then((function(t){e.kota=t.data.kota}))},onFilePicked:function(e){this.form.file=e[0]},onSubmit:function(){var e=this;this.isLoading=!0;var t=new FormData;t.append("ternak_nama",this.form.ternak_nama),t.append("id_jenis",this.form.id_jenis),t.append("jenis_kelamin",this.form.jenis_kelamin),t.append("lingkar_perut",this.form.lingkar_perut),t.append("ternak_berat",this.form.ternak_berat),t.append("ternak_umur",this.form.ternak_umur),t.append("file",this.form.file),t.append("ternak_deskripsi",this.form.ternak_deskripsi),t.append("harga_pengajuan",this.form.harga_pengajuan),t.append("tgl_penerimaan",this.form.tgl_penerimaan),t.append("province_id",this.form.province_id),t.append("city_id",this.form.city_id),this.$route.params.id?c.a.post("/ternak/"+this.id_ternak+"?_method=PUT",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(){e.$router.push({path:"/modal/pengajuan"}),e.isLoading=!1})).catch((function(t){e.errors=t.response.data,e.isLoading=!1})):c.a.post("/ternak",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(){e.$router.push({path:"/modal/pengajuan"}),e.isLoading=!1})).catch((function(t){e.errors=t.response.data,e.isLoading=!1}))}}},d=u,m=a("2877"),f=a("6544"),p=a.n(f),h=a("2bc5"),v=a("8336"),g=a("b0af"),b=a("99d9"),_=a("62ad"),k=a("a523"),y=a("2e4b"),j=a("ce7e"),x=a("23a7"),$=a("4bd4"),S=a("adda"),V=a("e449"),w=a("0fd9"),C=a("b974"),O=a("2fa4"),T=a("8654"),z=a("a844"),D=a("71d9"),I=a("2a7f"),L=Object(m["a"])(d,i,n,!1,null,null,null);t["default"]=L.exports;p()(L,{VBreadcrumbs:h["a"],VBtn:v["a"],VCard:g["a"],VCardText:b["c"],VCol:_["a"],VContainer:k["a"],VDatePicker:y["a"],VDivider:j["a"],VFileInput:x["a"],VForm:$["a"],VImg:S["a"],VMenu:V["a"],VRow:w["a"],VSelect:C["a"],VSpacer:O["a"],VTextField:T["a"],VTextarea:z["a"],VToolbar:D["a"],VToolbarTitle:I["a"]})},abd3:function(e,t,a){},afdd:function(e,t,a){"use strict";var i=a("8336");t["a"]=i["a"]}}]);
//# sourceMappingURL=chunk-77514ce0.20cd2b5e.js.map