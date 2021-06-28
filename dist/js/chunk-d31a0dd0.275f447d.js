(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d31a0dd0"],{"169a":function(t,e,i){"use strict";var n=i("5530"),a=i("2909"),s=i("ade3"),o=(i("a9e3"),i("498a"),i("caad"),i("2532"),i("7db0"),i("368e"),i("480e")),r=i("4ad4"),l=i("b848"),c=i("75eb"),u=i("e707"),d=i("e4d3"),h=i("21be"),v=i("f2e7"),f=i("a293"),g=i("58df"),m=i("d9bd"),p=i("80d2"),b=Object(g["a"])(r["a"],l["a"],c["a"],u["a"],d["a"],h["a"],v["a"]);e["a"]=b.extend({name:"v-dialog",directives:{ClickOutside:f["a"]},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200,previousActiveElement:null}},computed:{classes:function(){var t;return t={},Object(s["a"])(t,"v-dialog ".concat(this.contentClass).trim(),!0),Object(s["a"])(t,"v-dialog--active",this.isActive),Object(s["a"])(t,"v-dialog--persistent",this.persistent),Object(s["a"])(t,"v-dialog--fullscreen",this.fullscreen),Object(s["a"])(t,"v-dialog--scrollable",this.scrollable),Object(s["a"])(t,"v-dialog--animated",this.animate),t},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(t){var e;t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null==(e=this.previousActiveElement)||e.focus())},fullscreen:function(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(m["e"])("full-width",this)},beforeMount:function(){var t=this;this.$nextTick((function(){t.isBooted=t.isActive,t.isActive&&t.show()}))},beforeDestroy:function(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick:function(){var t=this;this.animate=!1,this.$nextTick((function(){t.animate=!0,window.clearTimeout(t.animateTimeout),t.animateTimeout=window.setTimeout((function(){return t.animate=!1}),150)}))},closeConditional:function(t){var e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):u["a"].options.methods.hideScroll.call(this)},show:function(){var t=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){t.$nextTick((function(){t.previousActiveElement=document.activeElement,t.$refs.content.focus(),t.bind()}))}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(t){if(t.keyCode===p["y"].esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var e=this.getActivator();this.$nextTick((function(){return e&&e.focus()}))}this.$emit("keydown",t)},onFocusin:function(t){if(t&&this.retainFocus){var e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(t){return t.contains(e)}))){var i=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),n=Object(a["a"])(i).find((function(t){return!t.hasAttribute("disabled")}));n&&n.focus()}}},genContent:function(){var t=this;return this.showLazyContent((function(){return[t.$createElement(o["a"],{props:{root:!0,light:t.light,dark:t.dark}},[t.$createElement("div",{class:t.contentClasses,attrs:Object(n["a"])({role:"document",tabindex:t.isActive?0:void 0},t.getScopeIdAttrs()),on:{keydown:t.onKeydown},style:{zIndex:t.activeZIndex},ref:"content"},[t.genTransition()])])]}))},genTransition:function(){var t=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[t]):t},genInnerContent:function(){var t={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(t.style=Object(n["a"])(Object(n["a"])({},t.style),{},{maxWidth:"none"===this.maxWidth?void 0:Object(p["g"])(this.maxWidth),width:"auto"===this.width?void 0:Object(p["g"])(this.width)})),this.$createElement("div",t,this.getContentSlot())}},render:function(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},[this.genActivator(),this.genContent()])}})},1763:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",[i("v-breadcrumbs",{attrs:{items:t.breadcrumbs,divider:"\\"}}),i("v-card",{attrs:{elevation:"4"}},[i("v-card-text",[i("v-toolbar",{attrs:{flat:""}},[i("v-toolbar-title",[i("div",{staticClass:"title font-weight-bold my-2 ml-2"},[t._v(" Data Jenis ")])]),i("v-spacer")],1),i("v-row",[i("v-col",{attrs:{sm:"12",md:"4"}},[i("v-text-field",{staticClass:"ml-2",attrs:{"append-icon":"mdi-magnify",label:"Search",solo:"",clearable:"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)],1),i("v-row",[i("v-col",[i("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.golongan,search:t.search,page:t.page,"item-key":"golongan.id","items-per-page":t.itemsPerPage,"hide-default-footer":""},on:{"update:page":function(e){t.page=e},"page-count":function(e){t.pageCount=e}},scopedSlots:t._u([{key:"item.status",fn:function(e){var n=e.item;return["1"==n.status?i("span",[t._v("Aktif")]):i("span",[t._v("Tidak Aktif")])]}},{key:"item.actions",fn:function(e){var n=e.item;return[i("v-btn",{staticClass:"mr-2",attrs:{small:"",icon:"",color:"primary"},on:{click:function(e){return t.showForm(n.id)}}},[i("v-icon",[t._v(" mdi-pencil ")])],1)]}}],null,!0)})],1)],1),i("v-row",[i("v-col",[i("v-pagination",{attrs:{length:t.pageCount},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1)],1)],1)],1),i("v-dialog",{attrs:{persistent:"","max-width":"600px"},model:{value:t.dialogForm,callback:function(e){t.dialogForm=e},expression:"dialogForm"}},[i("v-card",[i("v-form",{ref:"form",on:{submit:function(e){return e.preventDefault(),t.onSubmit()}}},[i("v-card-title",[i("span",{staticClass:"headline"},[t._v("Detail Menu")])]),i("v-divider"),i("v-card-text",[i("v-container",{staticClass:"mt-3"},[i("v-row",[i("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[i("v-text-field",{attrs:{label:"Nama Jenis",outlined:"",dense:"",required:""},model:{value:t.form.golongan_nama,callback:function(e){t.$set(t.form,"golongan_nama",e)},expression:"form.golongan_nama"}})],1),i("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[i("v-select",{attrs:{"item-text":"text","item-value":"value",items:t.items,color:"teal darken-2",label:"Status",outlined:"",dense:""},model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}})],1)],1)],1)],1),i("v-divider"),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){t.dialogForm=!1}}},[t._v(" Close ")]),i("v-btn",{attrs:{color:"blue darken-1",text:"",type:"submit"}},[t._v(" Save ")])],1)],1)],1)],1)],1)},a=[],s=i("5530"),o=(i("d3b7"),i("3ca3"),i("ddb0"),i("2f62")),r=i("6c33"),l=i("4360"),c=i("bc3a"),u=i.n(c),d=i("5ce5"),h={data:function(){return{page:1,pageCount:0,itemsPerPage:10,search:"",breadcrumbs:[{text:"Setting",disabled:!0},{text:"Menu",disabled:!0}],items:[{text:"Tidak Aktif",value:"0"},{text:"Aktif",value:"1"}],headers:[{text:"ID",align:"start",sortable:!1,value:"id"},{text:"Nama Jenis",align:"start",sortable:!1,value:"golongan_nama"},{text:"Status",align:"center",sortable:!1,value:"status"},{text:"Actions",align:"center",sortable:!1,value:"actions"}],dialogText:"",dialogDelete:!1,dialogForm:!1,form:{}}},beforeRouteEnter:function(t,e,i){Promise.all([l["a"].dispatch(r["f"],t.params.slug)]).then((function(){i()}))},watch:{dialogDelete:function(t){t||this.closeDelete()}},computed:Object(s["a"])({},Object(o["b"])(["golongan"])),methods:{showForm:function(t){var e=this;this.id_golongan=t,u.a.get("/golongan/"+t).then((function(t){e.form=t.data.golongan})),this.dialogForm=!0},onSubmit:function(){var t=this;d["k"].setHeader(),d["k"].put("menu/"+this.id_golongan,this.form).then((function(){t.dialogForm=!1,t.$router.go()}))}}},v=h,f=i("2877"),g=i("6544"),m=i.n(g),p=i("2bc5"),b=i("8336"),x=i("b0af"),y=i("99d9"),w=i("62ad"),$=i("a523"),k=i("8fea"),_=i("169a"),O=i("ce7e"),C=i("4bd4"),A=i("132d"),B=i("891e"),S=i("0fd9"),V=i("b974"),j=i("2fa4"),I=i("8654"),T=i("71d9"),E=i("2a7f"),L=Object(f["a"])(v,n,a,!1,null,null,null);e["default"]=L.exports;m()(L,{VBreadcrumbs:p["a"],VBtn:b["a"],VCard:x["a"],VCardActions:y["a"],VCardText:y["c"],VCardTitle:y["d"],VCol:w["a"],VContainer:$["a"],VDataTable:k["a"],VDialog:_["a"],VDivider:O["a"],VForm:C["a"],VIcon:A["a"],VPagination:B["a"],VRow:S["a"],VSelect:V["a"],VSpacer:j["a"],VTextField:I["a"],VToolbar:T["a"],VToolbarTitle:E["a"]})},"17b3":function(t,e,i){},"2a7f":function(t,e,i){"use strict";i.d(e,"a",(function(){return s}));var n=i("71d9"),a=i("80d2"),s=Object(a["i"])("v-toolbar__title"),o=Object(a["i"])("v-toolbar__items");n["a"]},"368e":function(t,e,i){},"4bd4":function(t,e,i){"use strict";var n=i("5530"),a=(i("caad"),i("2532"),i("07ac"),i("4de4"),i("159b"),i("7db0"),i("58df")),s=i("7e2b"),o=i("3206");e["a"]=Object(a["a"])(s["a"],Object(o["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,i=function(t){return t.$watch("hasError",(function(i){e.$set(e.errorBag,t._uid,i)}),{immediate:!0})},n={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=t.$watch("shouldValidate",(function(a){a&&(e.errorBag.hasOwnProperty(t._uid)||(n.valid=i(t)))})):n.valid=i(t),n},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var i=this.watchers.find((function(t){return t._uid===e._uid}));i&&(i.valid(),i.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object(n["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},"891e":function(t,e,i){"use strict";var n=i("2909"),a=i("5530"),s=(i("a9e3"),i("99af"),i("d3b7"),i("25f0"),i("d81d"),i("17b3"),i("9d26")),o=i("dc22"),r=i("a9ad"),l=i("de2c"),c=i("7560"),u=i("58df");e["a"]=Object(u["a"])(r["a"],Object(l["a"])({onVisible:["init"]}),c["a"]).extend({name:"v-pagination",directives:{Resize:o["a"]},props:{circle:Boolean,disabled:Boolean,length:{type:Number,default:0,validator:function(t){return t%1===0}},nextIcon:{type:String,default:"$next"},prevIcon:{type:String,default:"$prev"},totalVisible:[Number,String],value:{type:Number,default:0},pageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.page"},currentPageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.currentPage"},previousAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.previous"},nextAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.next"},wrapperAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.wrapper"}},data:function(){return{maxButtons:0,selected:null}},computed:{classes:function(){return Object(a["a"])({"v-pagination":!0,"v-pagination--circle":this.circle,"v-pagination--disabled":this.disabled},this.themeClasses)},items:function(){var t=parseInt(this.totalVisible,10);if(0===t)return[];var e=Math.min(Math.max(0,t)||this.length,Math.max(0,this.maxButtons)||this.length,this.length);if(this.length<=e)return this.range(1,this.length);var i=e%2===0?1:0,a=Math.floor(e/2),s=this.length-a+1+i;if(this.value>a&&this.value<s){var o=this.value-a+2,r=this.value+a-2-i;return[1,"..."].concat(Object(n["a"])(this.range(o,r)),["...",this.length])}if(this.value===a){var l=this.value+a-1-i;return[].concat(Object(n["a"])(this.range(1,l)),["...",this.length])}if(this.value===s){var c=this.value-a+1;return[1,"..."].concat(Object(n["a"])(this.range(c,this.length)))}return[].concat(Object(n["a"])(this.range(1,a)),["..."],Object(n["a"])(this.range(s,this.length)))}},watch:{value:function(){this.init()}},mounted:function(){this.init()},methods:{init:function(){var t=this;this.selected=null,this.$nextTick(this.onResize),setTimeout((function(){return t.selected=t.value}),100)},onResize:function(){var t=this.$el&&this.$el.parentElement?this.$el.parentElement.clientWidth:window.innerWidth;this.maxButtons=Math.floor((t-96)/42)},next:function(t){t.preventDefault(),this.$emit("input",this.value+1),this.$emit("next")},previous:function(t){t.preventDefault(),this.$emit("input",this.value-1),this.$emit("previous")},range:function(t,e){var i=[];t=t>0?t:1;for(var n=t;n<=e;n++)i.push(n);return i},genIcon:function(t,e,i,n,a){return t("li",[t("button",{staticClass:"v-pagination__navigation",class:{"v-pagination__navigation--disabled":i},attrs:{disabled:i,type:"button","aria-label":a},on:i?{}:{click:n}},[t(s["a"],[e])])])},genItem:function(t,e){var i=this,n=e===this.value&&(this.color||"primary"),a=e===this.value,s=a?this.currentPageAriaLabel:this.pageAriaLabel;return t("button",this.setBackgroundColor(n,{staticClass:"v-pagination__item",class:{"v-pagination__item--active":e===this.value},attrs:{type:"button","aria-current":a,"aria-label":this.$vuetify.lang.t(s,e)},on:{click:function(){return i.$emit("input",e)}}}),[e.toString()])},genItems:function(t){var e=this;return this.items.map((function(i,n){return t("li",{key:n},[isNaN(Number(i))?t("span",{class:"v-pagination__more"},[i.toString()]):e.genItem(t,i)])}))},genList:function(t,e){return t("ul",{directives:[{modifiers:{quiet:!0},name:"resize",value:this.onResize}],class:this.classes},e)}},render:function(t){var e=[this.genIcon(t,this.$vuetify.rtl?this.nextIcon:this.prevIcon,this.value<=1,this.previous,this.$vuetify.lang.t(this.previousAriaLabel)),this.genItems(t),this.genIcon(t,this.$vuetify.rtl?this.prevIcon:this.nextIcon,this.value>=this.length,this.next,this.$vuetify.lang.t(this.nextAriaLabel))];return t("nav",{attrs:{role:"navigation","aria-label":this.$vuetify.lang.t(this.wrapperAriaLabel)}},[this.genList(t,e)])}})}}]);
//# sourceMappingURL=chunk-d31a0dd0.275f447d.js.map