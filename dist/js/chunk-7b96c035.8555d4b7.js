(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7b96c035"],{"00a8":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",[i("v-breadcrumbs",{attrs:{items:t.breadcrumbs,divider:"\\"}}),i("v-card",{attrs:{elevation:"4"}},[i("v-card-text",[i("v-toolbar",{attrs:{flat:""}},[i("v-toolbar-title",[i("div",{staticClass:"title font-weight-bold my-2 ml-2"},[t._v(" Konfirmasi Pembayaran ")])]),i("v-spacer")],1),i("v-row",[i("v-col",{attrs:{sm:"12",md:"4"}},[i("v-text-field",{staticClass:"ml-2",attrs:{"append-icon":"mdi-magnify",label:"Search",solo:"",clearable:"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)],1),i("v-row",[i("v-col",[i("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.transaksi,search:t.search,page:t.page,"item-key":"transaksi.id","items-per-page":t.itemsPerPage,"hide-default-footer":""},on:{"update:page":function(e){t.page=e},"page-count":function(e){t.pageCount=e}},scopedSlots:t._u([{key:"item.actions",fn:function(e){var a=e.item;return[i("v-btn",{staticClass:"mr-2",attrs:{small:"",icon:"",color:"primary"},on:{click:function(e){return t.showModal(a.id)}}},[i("v-icon",[t._v(" mdi-check-decagram ")])],1)]}}],null,!0)})],1)],1),i("v-row",[i("v-col",[i("v-pagination",{attrs:{length:t.pageCount},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1)],1)],1)],1),i("v-dialog",{attrs:{persistent:"","max-width":"600px"},model:{value:t.dialogModal,callback:function(e){t.dialogModal=e},expression:"dialogModal"}},[i("v-card",[i("v-form",{ref:"form",on:{submit:function(e){return e.preventDefault(),t.onSubmit()}}},[i("v-card-title",[i("span",{staticClass:"headline"},[t._v("Detail Transaksi")])]),i("v-divider"),i("v-card-text",[i("v-container",{staticClass:"mt-3"},[i("v-row",[i("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[i("v-img",{attrs:{"lazy-src":t.form.file_path,src:t.form.file_path,"aspect-ratio":"1.8"},on:{error:function(t){t.target.src="img/default.png"}}})],1),i("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[i("v-text-field",{attrs:{label:"Pembeli",outlined:"",dense:"",required:"",readonly:""},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}}),i("v-text-field",{attrs:{label:"Hewan Ternak",outlined:"",dense:"",required:"",readonly:""},model:{value:t.form.ternak_nama,callback:function(e){t.$set(t.form,"ternak_nama",e)},expression:"form.ternak_nama"}})],1),i("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[i("v-text-field",{attrs:{label:"Masa Perawatan",outlined:"",dense:"",required:"",readonly:""},model:{value:t.form.masa_perawatan,callback:function(e){t.$set(t.form,"masa_perawatan",e)},expression:"form.masa_perawatan"}}),i("v-text-field",{attrs:{label:"Tanggal Transaksi",outlined:"",dense:"",required:"",readonly:""},model:{value:t.form.transaksi_tanggal,callback:function(e){t.$set(t.form,"transaksi_tanggal",e)},expression:"form.transaksi_tanggal"}})],1)],1)],1)],1),i("v-divider"),i("v-card-actions",[i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){t.dialogModal=!1}}},[t._v(" Close ")]),i("v-spacer"),i("v-btn",{attrs:{color:"blue darken-1",text:"",type:"submit"}},[t._v(" Konfirmasi ")])],1)],1)],1)],1)],1)},n=[],s=i("5530"),r=(i("d3b7"),i("3ca3"),i("ddb0"),i("2f62")),o=i("6c33"),l=i("4360"),c=i("bc3a"),u=i.n(c),d=i("5ce5"),h={data:function(){return{page:1,pageCount:0,itemsPerPage:10,search:"",breadcrumbs:[{text:"Monitoring",disabled:!0},{text:"Pembayaran",disabled:!0}],headers:[{text:"ID",align:"start",sortable:!1,value:"id"},{text:"Hewan Ternak",align:"start",sortable:!1,value:"ternak_nama"},{text:"Customer",align:"start",sortable:!1,value:"name"},{text:"Harga",align:"center",sortable:!1,value:"ternak_harga"},{text:"Masa Perawatan",align:"center",sortable:!1,value:"masa_perawatan"},{text:"Total",align:"center",sortable:!1,value:"total_harga"},{text:"Status",align:"center",sortable:!1,value:"transaksi_st"},{text:"Tanggal",align:"center",sortable:!1,value:"transaksi_tanggal"},{text:"Actions",align:"center",sortable:!1,value:"actions"}],form:{},dialogModal:!1}},beforeRouteEnter:function(t,e,i){Promise.all([l["a"].dispatch(o["l"],t.params.slug)]).then((function(){i()}))},computed:Object(s["a"])({},Object(r["b"])(["transaksi"])),methods:{showModal:function(t){var e=this;u.a.get("/transaksi/"+t+"/detail").then((function(t){e.form=t.data.transaksi})),this.dialogModal=!0},onSubmit:function(){var t=this;this.form.transaksi_st="paid",d["k"].put("transaksi/"+this.form.id,this.form).then((function(){t.dialogModal=!1,t.$router.go()}))}}},v=h,f=i("2877"),m=i("6544"),g=i.n(m),p=i("2bc5"),b=i("8336"),x=i("b0af"),y=i("99d9"),w=i("62ad"),k=i("a523"),_=i("8fea"),$=i("169a"),C=i("ce7e"),O=i("4bd4"),A=i("132d"),B=i("adda"),V=i("891e"),j=i("0fd9"),I=i("2fa4"),S=i("8654"),T=i("71d9"),E=i("2a7f"),L=Object(f["a"])(v,a,n,!1,null,null,null);e["default"]=L.exports;g()(L,{VBreadcrumbs:p["a"],VBtn:b["a"],VCard:x["a"],VCardActions:y["a"],VCardText:y["c"],VCardTitle:y["d"],VCol:w["a"],VContainer:k["a"],VDataTable:_["a"],VDialog:$["a"],VDivider:C["a"],VForm:O["a"],VIcon:A["a"],VImg:B["a"],VPagination:V["a"],VRow:j["a"],VSpacer:I["a"],VTextField:S["a"],VToolbar:T["a"],VToolbarTitle:E["a"]})},"169a":function(t,e,i){"use strict";var a=i("5530"),n=i("2909"),s=i("ade3"),r=(i("a9e3"),i("498a"),i("caad"),i("2532"),i("7db0"),i("368e"),i("480e")),o=i("4ad4"),l=i("b848"),c=i("75eb"),u=i("e707"),d=i("e4d3"),h=i("21be"),v=i("f2e7"),f=i("a293"),m=i("58df"),g=i("d9bd"),p=i("80d2"),b=Object(m["a"])(o["a"],l["a"],c["a"],u["a"],d["a"],h["a"],v["a"]);e["a"]=b.extend({name:"v-dialog",directives:{ClickOutside:f["a"]},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200,previousActiveElement:null}},computed:{classes:function(){var t;return t={},Object(s["a"])(t,"v-dialog ".concat(this.contentClass).trim(),!0),Object(s["a"])(t,"v-dialog--active",this.isActive),Object(s["a"])(t,"v-dialog--persistent",this.persistent),Object(s["a"])(t,"v-dialog--fullscreen",this.fullscreen),Object(s["a"])(t,"v-dialog--scrollable",this.scrollable),Object(s["a"])(t,"v-dialog--animated",this.animate),t},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(t){var e;t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null==(e=this.previousActiveElement)||e.focus())},fullscreen:function(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(g["e"])("full-width",this)},beforeMount:function(){var t=this;this.$nextTick((function(){t.isBooted=t.isActive,t.isActive&&t.show()}))},beforeDestroy:function(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick:function(){var t=this;this.animate=!1,this.$nextTick((function(){t.animate=!0,window.clearTimeout(t.animateTimeout),t.animateTimeout=window.setTimeout((function(){return t.animate=!1}),150)}))},closeConditional:function(t){var e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):u["a"].options.methods.hideScroll.call(this)},show:function(){var t=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){t.$nextTick((function(){t.previousActiveElement=document.activeElement,t.$refs.content.focus(),t.bind()}))}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(t){if(t.keyCode===p["y"].esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var e=this.getActivator();this.$nextTick((function(){return e&&e.focus()}))}this.$emit("keydown",t)},onFocusin:function(t){if(t&&this.retainFocus){var e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(t){return t.contains(e)}))){var i=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),a=Object(n["a"])(i).find((function(t){return!t.hasAttribute("disabled")}));a&&a.focus()}}},genContent:function(){var t=this;return this.showLazyContent((function(){return[t.$createElement(r["a"],{props:{root:!0,light:t.light,dark:t.dark}},[t.$createElement("div",{class:t.contentClasses,attrs:Object(a["a"])({role:"document",tabindex:t.isActive?0:void 0},t.getScopeIdAttrs()),on:{keydown:t.onKeydown},style:{zIndex:t.activeZIndex},ref:"content"},[t.genTransition()])])]}))},genTransition:function(){var t=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[t]):t},genInnerContent:function(){var t={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(t.style=Object(a["a"])(Object(a["a"])({},t.style),{},{maxWidth:"none"===this.maxWidth?void 0:Object(p["g"])(this.maxWidth),width:"auto"===this.width?void 0:Object(p["g"])(this.width)})),this.$createElement("div",t,this.getContentSlot())}},render:function(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},[this.genActivator(),this.genContent()])}})},"17b3":function(t,e,i){},"368e":function(t,e,i){},"4bd4":function(t,e,i){"use strict";var a=i("5530"),n=(i("caad"),i("2532"),i("07ac"),i("4de4"),i("159b"),i("7db0"),i("58df")),s=i("7e2b"),r=i("3206");e["a"]=Object(n["a"])(s["a"],Object(r["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,i=function(t){return t.$watch("hasError",(function(i){e.$set(e.errorBag,t._uid,i)}),{immediate:!0})},a={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?a.shouldValidate=t.$watch("shouldValidate",(function(n){n&&(e.errorBag.hasOwnProperty(t._uid)||(a.valid=i(t)))})):a.valid=i(t),a},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var i=this.watchers.find((function(t){return t._uid===e._uid}));i&&(i.valid(),i.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object(a["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},"891e":function(t,e,i){"use strict";var a=i("2909"),n=i("5530"),s=(i("a9e3"),i("99af"),i("d3b7"),i("25f0"),i("d81d"),i("17b3"),i("9d26")),r=i("dc22"),o=i("a9ad"),l=i("de2c"),c=i("7560"),u=i("58df");e["a"]=Object(u["a"])(o["a"],Object(l["a"])({onVisible:["init"]}),c["a"]).extend({name:"v-pagination",directives:{Resize:r["a"]},props:{circle:Boolean,disabled:Boolean,length:{type:Number,default:0,validator:function(t){return t%1===0}},nextIcon:{type:String,default:"$next"},prevIcon:{type:String,default:"$prev"},totalVisible:[Number,String],value:{type:Number,default:0},pageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.page"},currentPageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.currentPage"},previousAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.previous"},nextAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.next"},wrapperAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.wrapper"}},data:function(){return{maxButtons:0,selected:null}},computed:{classes:function(){return Object(n["a"])({"v-pagination":!0,"v-pagination--circle":this.circle,"v-pagination--disabled":this.disabled},this.themeClasses)},items:function(){var t=parseInt(this.totalVisible,10);if(0===t)return[];var e=Math.min(Math.max(0,t)||this.length,Math.max(0,this.maxButtons)||this.length,this.length);if(this.length<=e)return this.range(1,this.length);var i=e%2===0?1:0,n=Math.floor(e/2),s=this.length-n+1+i;if(this.value>n&&this.value<s){var r=this.value-n+2,o=this.value+n-2-i;return[1,"..."].concat(Object(a["a"])(this.range(r,o)),["...",this.length])}if(this.value===n){var l=this.value+n-1-i;return[].concat(Object(a["a"])(this.range(1,l)),["...",this.length])}if(this.value===s){var c=this.value-n+1;return[1,"..."].concat(Object(a["a"])(this.range(c,this.length)))}return[].concat(Object(a["a"])(this.range(1,n)),["..."],Object(a["a"])(this.range(s,this.length)))}},watch:{value:function(){this.init()}},mounted:function(){this.init()},methods:{init:function(){var t=this;this.selected=null,this.$nextTick(this.onResize),setTimeout((function(){return t.selected=t.value}),100)},onResize:function(){var t=this.$el&&this.$el.parentElement?this.$el.parentElement.clientWidth:window.innerWidth;this.maxButtons=Math.floor((t-96)/42)},next:function(t){t.preventDefault(),this.$emit("input",this.value+1),this.$emit("next")},previous:function(t){t.preventDefault(),this.$emit("input",this.value-1),this.$emit("previous")},range:function(t,e){var i=[];t=t>0?t:1;for(var a=t;a<=e;a++)i.push(a);return i},genIcon:function(t,e,i,a,n){return t("li",[t("button",{staticClass:"v-pagination__navigation",class:{"v-pagination__navigation--disabled":i},attrs:{disabled:i,type:"button","aria-label":n},on:i?{}:{click:a}},[t(s["a"],[e])])])},genItem:function(t,e){var i=this,a=e===this.value&&(this.color||"primary"),n=e===this.value,s=n?this.currentPageAriaLabel:this.pageAriaLabel;return t("button",this.setBackgroundColor(a,{staticClass:"v-pagination__item",class:{"v-pagination__item--active":e===this.value},attrs:{type:"button","aria-current":n,"aria-label":this.$vuetify.lang.t(s,e)},on:{click:function(){return i.$emit("input",e)}}}),[e.toString()])},genItems:function(t){var e=this;return this.items.map((function(i,a){return t("li",{key:a},[isNaN(Number(i))?t("span",{class:"v-pagination__more"},[i.toString()]):e.genItem(t,i)])}))},genList:function(t,e){return t("ul",{directives:[{modifiers:{quiet:!0},name:"resize",value:this.onResize}],class:this.classes},e)}},render:function(t){var e=[this.genIcon(t,this.$vuetify.rtl?this.nextIcon:this.prevIcon,this.value<=1,this.previous,this.$vuetify.lang.t(this.previousAriaLabel)),this.genItems(t),this.genIcon(t,this.$vuetify.rtl?this.prevIcon:this.nextIcon,this.value>=this.length,this.next,this.$vuetify.lang.t(this.nextAriaLabel))];return t("nav",{attrs:{role:"navigation","aria-label":this.$vuetify.lang.t(this.wrapperAriaLabel)}},[this.genList(t,e)])}})}}]);
//# sourceMappingURL=chunk-7b96c035.8555d4b7.js.map