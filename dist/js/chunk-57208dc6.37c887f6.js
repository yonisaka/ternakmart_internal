(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-57208dc6"],{"124d":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",[i("v-breadcrumbs",{attrs:{items:t.breadcrumbs,divider:"\\"}}),i("v-card",{attrs:{elevation:"4"}},[i("v-card-text",[i("v-toolbar",{attrs:{flat:""}},[i("v-toolbar-title",[i("div",{staticClass:"title font-weight-bold my-2 ml-2"},[t._v(" Data User Admin ")])]),i("v-spacer"),i("v-btn",{attrs:{to:"admin/form",dense:"",color:"primary"}},[t._v(" Tambah Data ")])],1),i("v-row",[i("v-col",{attrs:{sm:"12",md:"4"}},[i("v-text-field",{staticClass:"ml-2",attrs:{"append-icon":"mdi-magnify",label:"Search",solo:"",clearable:"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)],1),i("v-row",[i("v-col",[i("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.admin,search:t.search,page:t.page,"item-key":"admin.id","items-per-page":t.itemsPerPage,"hide-default-footer":""},on:{"update:page":function(e){t.page=e},"page-count":function(e){t.pageCount=e}},scopedSlots:t._u([{key:"item.actions",fn:function(e){var n=e.item;return[i("v-btn",{staticClass:"mr-2",attrs:{small:"",icon:"",color:"primary",to:"admin/form/"+n.id}},[i("v-icon",[t._v(" mdi-pencil ")])],1),i("v-btn",{attrs:{small:"",icon:"",color:"red"},on:{click:function(e){return t.deleteItem(n.id)}}},[i("v-icon",[t._v(" mdi-delete ")])],1)]}}],null,!0)})],1)],1),i("v-row",[i("v-col",[i("v-pagination",{attrs:{length:t.pageCount},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1)],1)],1)],1),i("v-dialog",{attrs:{"max-width":"400px"},model:{value:t.dialogDelete,callback:function(e){t.dialogDelete=e},expression:"dialogDelete"}},[i("v-card",[i("v-card-title",{staticClass:"headline"},[i("span",{staticClass:"mx-auto"},[t._v(" "+t._s(t.dialogText)+" ")])]),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.closeDelete}},[t._v("Cancel")]),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.deleteItemConfirm}},[t._v("OK")]),i("v-spacer")],1)],1)],1)],1)},a=[],s=i("5530"),o=(i("d3b7"),i("3ca3"),i("ddb0"),i("4de4"),i("2f62")),r=i("6c33"),l=i("4360"),c=i("bc3a"),u=i.n(c),d={data:function(){return{id_user:"",page:1,pageCount:0,itemsPerPage:5,search:"",breadcrumbs:[{text:"User",disabled:!0},{text:"Admin",disabled:!0}],headers:[{text:"ID",align:"start",sortable:!1,value:"id"},{text:"Nama",align:"start",sortable:!1,value:"name"},{text:"Email",align:"center",sortable:!1,value:"email"},{text:"Status",align:"center",sortable:!1,value:"user_st"},{text:"Actions",align:"center",sortable:!1,value:"actions"}],dialogText:"",dialogDelete:!1,dialogForm:!1}},beforeRouteEnter:function(t,e,i){Promise.all([l["a"].dispatch(r["m"],t.params.slug)]).then((function(){i()}))},watch:{dialogDelete:function(t){t||this.closeDelete()}},computed:Object(s["a"])(Object(s["a"])({},Object(o["b"])(["users"])),{},{admin:function(){return this.users.filter((function(t){return"1"==t.role_id}))}}),methods:{showForm:function(t){this.id_user=t,this.dialogText="Tambah Data",this.dialogForm=!0},deleteItem:function(t){this.id_user=t,this.dialogText="Yakin menghapus data ini?",this.dialogDelete=!0},closeDelete:function(){this.dialogDelete=!1},deleteItemConfirm:function(){var t=this;u.a.delete("users/"+this.id_user).then((function(e){console.log(e.data.message),t.dialogDelete=!1,t.$router.go()})).catch((function(t){console.log(t)}))}}},h=d,v=i("2877"),f=i("6544"),g=i.n(f),m=i("2bc5"),b=i("8336"),p=i("b0af"),x=i("99d9"),y=i("62ad"),w=i("a523"),C=i("8fea"),$=i("169a"),k=i("132d"),O=i("891e"),_=i("0fd9"),A=i("2fa4"),I=i("8654"),j=i("71d9"),S=i("2a7f"),T=Object(v["a"])(h,n,a,!1,null,null,null);e["default"]=T.exports;g()(T,{VBreadcrumbs:m["a"],VBtn:b["a"],VCard:p["a"],VCardActions:x["a"],VCardText:x["c"],VCardTitle:x["d"],VCol:y["a"],VContainer:w["a"],VDataTable:C["a"],VDialog:$["a"],VIcon:k["a"],VPagination:O["a"],VRow:_["a"],VSpacer:A["a"],VTextField:I["a"],VToolbar:j["a"],VToolbarTitle:S["a"]})},"169a":function(t,e,i){"use strict";var n=i("5530"),a=i("2909"),s=i("ade3"),o=(i("a9e3"),i("498a"),i("caad"),i("2532"),i("7db0"),i("368e"),i("480e")),r=i("4ad4"),l=i("b848"),c=i("75eb"),u=i("e707"),d=i("e4d3"),h=i("21be"),v=i("f2e7"),f=i("a293"),g=i("58df"),m=i("d9bd"),b=i("80d2"),p=Object(g["a"])(r["a"],l["a"],c["a"],u["a"],d["a"],h["a"],v["a"]);e["a"]=p.extend({name:"v-dialog",directives:{ClickOutside:f["a"]},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200,previousActiveElement:null}},computed:{classes:function(){var t;return t={},Object(s["a"])(t,"v-dialog ".concat(this.contentClass).trim(),!0),Object(s["a"])(t,"v-dialog--active",this.isActive),Object(s["a"])(t,"v-dialog--persistent",this.persistent),Object(s["a"])(t,"v-dialog--fullscreen",this.fullscreen),Object(s["a"])(t,"v-dialog--scrollable",this.scrollable),Object(s["a"])(t,"v-dialog--animated",this.animate),t},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(t){var e;t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null==(e=this.previousActiveElement)||e.focus())},fullscreen:function(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(m["e"])("full-width",this)},beforeMount:function(){var t=this;this.$nextTick((function(){t.isBooted=t.isActive,t.isActive&&t.show()}))},beforeDestroy:function(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick:function(){var t=this;this.animate=!1,this.$nextTick((function(){t.animate=!0,window.clearTimeout(t.animateTimeout),t.animateTimeout=window.setTimeout((function(){return t.animate=!1}),150)}))},closeConditional:function(t){var e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):u["a"].options.methods.hideScroll.call(this)},show:function(){var t=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){t.$nextTick((function(){t.previousActiveElement=document.activeElement,t.$refs.content.focus(),t.bind()}))}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(t){if(t.keyCode===b["y"].esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var e=this.getActivator();this.$nextTick((function(){return e&&e.focus()}))}this.$emit("keydown",t)},onFocusin:function(t){if(t&&this.retainFocus){var e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(t){return t.contains(e)}))){var i=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),n=Object(a["a"])(i).find((function(t){return!t.hasAttribute("disabled")}));n&&n.focus()}}},genContent:function(){var t=this;return this.showLazyContent((function(){return[t.$createElement(o["a"],{props:{root:!0,light:t.light,dark:t.dark}},[t.$createElement("div",{class:t.contentClasses,attrs:Object(n["a"])({role:"document",tabindex:t.isActive?0:void 0},t.getScopeIdAttrs()),on:{keydown:t.onKeydown},style:{zIndex:t.activeZIndex},ref:"content"},[t.genTransition()])])]}))},genTransition:function(){var t=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[t]):t},genInnerContent:function(){var t={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(t.style=Object(n["a"])(Object(n["a"])({},t.style),{},{maxWidth:"none"===this.maxWidth?void 0:Object(b["g"])(this.maxWidth),width:"auto"===this.width?void 0:Object(b["g"])(this.width)})),this.$createElement("div",t,this.getContentSlot())}},render:function(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},[this.genActivator(),this.genContent()])}})},"17b3":function(t,e,i){},"2a7f":function(t,e,i){"use strict";i.d(e,"a",(function(){return s}));var n=i("71d9"),a=i("80d2"),s=Object(a["i"])("v-toolbar__title"),o=Object(a["i"])("v-toolbar__items");n["a"]},"368e":function(t,e,i){},"891e":function(t,e,i){"use strict";var n=i("2909"),a=i("5530"),s=(i("a9e3"),i("99af"),i("d3b7"),i("25f0"),i("d81d"),i("17b3"),i("9d26")),o=i("dc22"),r=i("a9ad"),l=i("de2c"),c=i("7560"),u=i("58df");e["a"]=Object(u["a"])(r["a"],Object(l["a"])({onVisible:["init"]}),c["a"]).extend({name:"v-pagination",directives:{Resize:o["a"]},props:{circle:Boolean,disabled:Boolean,length:{type:Number,default:0,validator:function(t){return t%1===0}},nextIcon:{type:String,default:"$next"},prevIcon:{type:String,default:"$prev"},totalVisible:[Number,String],value:{type:Number,default:0},pageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.page"},currentPageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.currentPage"},previousAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.previous"},nextAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.next"},wrapperAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.wrapper"}},data:function(){return{maxButtons:0,selected:null}},computed:{classes:function(){return Object(a["a"])({"v-pagination":!0,"v-pagination--circle":this.circle,"v-pagination--disabled":this.disabled},this.themeClasses)},items:function(){var t=parseInt(this.totalVisible,10);if(0===t)return[];var e=Math.min(Math.max(0,t)||this.length,Math.max(0,this.maxButtons)||this.length,this.length);if(this.length<=e)return this.range(1,this.length);var i=e%2===0?1:0,a=Math.floor(e/2),s=this.length-a+1+i;if(this.value>a&&this.value<s){var o=this.value-a+2,r=this.value+a-2-i;return[1,"..."].concat(Object(n["a"])(this.range(o,r)),["...",this.length])}if(this.value===a){var l=this.value+a-1-i;return[].concat(Object(n["a"])(this.range(1,l)),["...",this.length])}if(this.value===s){var c=this.value-a+1;return[1,"..."].concat(Object(n["a"])(this.range(c,this.length)))}return[].concat(Object(n["a"])(this.range(1,a)),["..."],Object(n["a"])(this.range(s,this.length)))}},watch:{value:function(){this.init()}},mounted:function(){this.init()},methods:{init:function(){var t=this;this.selected=null,this.$nextTick(this.onResize),setTimeout((function(){return t.selected=t.value}),100)},onResize:function(){var t=this.$el&&this.$el.parentElement?this.$el.parentElement.clientWidth:window.innerWidth;this.maxButtons=Math.floor((t-96)/42)},next:function(t){t.preventDefault(),this.$emit("input",this.value+1),this.$emit("next")},previous:function(t){t.preventDefault(),this.$emit("input",this.value-1),this.$emit("previous")},range:function(t,e){var i=[];t=t>0?t:1;for(var n=t;n<=e;n++)i.push(n);return i},genIcon:function(t,e,i,n,a){return t("li",[t("button",{staticClass:"v-pagination__navigation",class:{"v-pagination__navigation--disabled":i},attrs:{disabled:i,type:"button","aria-label":a},on:i?{}:{click:n}},[t(s["a"],[e])])])},genItem:function(t,e){var i=this,n=e===this.value&&(this.color||"primary"),a=e===this.value,s=a?this.currentPageAriaLabel:this.pageAriaLabel;return t("button",this.setBackgroundColor(n,{staticClass:"v-pagination__item",class:{"v-pagination__item--active":e===this.value},attrs:{type:"button","aria-current":a,"aria-label":this.$vuetify.lang.t(s,e)},on:{click:function(){return i.$emit("input",e)}}}),[e.toString()])},genItems:function(t){var e=this;return this.items.map((function(i,n){return t("li",{key:n},[isNaN(Number(i))?t("span",{class:"v-pagination__more"},[i.toString()]):e.genItem(t,i)])}))},genList:function(t,e){return t("ul",{directives:[{modifiers:{quiet:!0},name:"resize",value:this.onResize}],class:this.classes},e)}},render:function(t){var e=[this.genIcon(t,this.$vuetify.rtl?this.nextIcon:this.prevIcon,this.value<=1,this.previous,this.$vuetify.lang.t(this.previousAriaLabel)),this.genItems(t),this.genIcon(t,this.$vuetify.rtl?this.prevIcon:this.nextIcon,this.value>=this.length,this.next,this.$vuetify.lang.t(this.nextAriaLabel))];return t("nav",{attrs:{role:"navigation","aria-label":this.$vuetify.lang.t(this.wrapperAriaLabel)}},[this.genList(t,e)])}})}}]);
//# sourceMappingURL=chunk-57208dc6.37c887f6.js.map