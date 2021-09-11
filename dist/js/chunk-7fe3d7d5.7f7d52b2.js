(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7fe3d7d5"],{"169a":function(t,e,a){"use strict";var i=a("5530"),n=a("2909"),s=a("ade3"),r=(a("a9e3"),a("498a"),a("caad"),a("2532"),a("7db0"),a("368e"),a("480e")),o=a("4ad4"),l=a("b848"),c=a("75eb"),u=a("e707"),h=a("e4d3"),v=a("21be"),d=a("f2e7"),g=a("a293"),f=a("58df"),m=a("d9bd"),p=a("80d2"),b=Object(f["a"])(o["a"],l["a"],c["a"],u["a"],h["a"],v["a"],d["a"]);e["a"]=b.extend({name:"v-dialog",directives:{ClickOutside:g["a"]},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200,previousActiveElement:null}},computed:{classes:function(){var t;return t={},Object(s["a"])(t,"v-dialog ".concat(this.contentClass).trim(),!0),Object(s["a"])(t,"v-dialog--active",this.isActive),Object(s["a"])(t,"v-dialog--persistent",this.persistent),Object(s["a"])(t,"v-dialog--fullscreen",this.fullscreen),Object(s["a"])(t,"v-dialog--scrollable",this.scrollable),Object(s["a"])(t,"v-dialog--animated",this.animate),t},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(t){var e;t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null==(e=this.previousActiveElement)||e.focus())},fullscreen:function(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(m["e"])("full-width",this)},beforeMount:function(){var t=this;this.$nextTick((function(){t.isBooted=t.isActive,t.isActive&&t.show()}))},beforeDestroy:function(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick:function(){var t=this;this.animate=!1,this.$nextTick((function(){t.animate=!0,window.clearTimeout(t.animateTimeout),t.animateTimeout=window.setTimeout((function(){return t.animate=!1}),150)}))},closeConditional:function(t){var e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):u["a"].options.methods.hideScroll.call(this)},show:function(){var t=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){t.$nextTick((function(){t.previousActiveElement=document.activeElement,t.$refs.content.focus(),t.bind()}))}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(t){if(t.keyCode===p["y"].esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var e=this.getActivator();this.$nextTick((function(){return e&&e.focus()}))}this.$emit("keydown",t)},onFocusin:function(t){if(t&&this.retainFocus){var e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(t){return t.contains(e)}))){var a=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),i=Object(n["a"])(a).find((function(t){return!t.hasAttribute("disabled")}));i&&i.focus()}}},genContent:function(){var t=this;return this.showLazyContent((function(){return[t.$createElement(r["a"],{props:{root:!0,light:t.light,dark:t.dark}},[t.$createElement("div",{class:t.contentClasses,attrs:Object(i["a"])({role:"document",tabindex:t.isActive?0:void 0},t.getScopeIdAttrs()),on:{keydown:t.onKeydown},style:{zIndex:t.activeZIndex},ref:"content"},[t.genTransition()])])]}))},genTransition:function(){var t=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[t]):t},genInnerContent:function(){var t={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(t.style=Object(i["a"])(Object(i["a"])({},t.style),{},{maxWidth:"none"===this.maxWidth?void 0:Object(p["g"])(this.maxWidth),width:"auto"===this.width?void 0:Object(p["g"])(this.width)})),this.$createElement("div",t,this.getContentSlot())}},render:function(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},[this.genActivator(),this.genContent()])}})},"17b3":function(t,e,a){},"368e":function(t,e,a){},"891e":function(t,e,a){"use strict";var i=a("2909"),n=a("5530"),s=(a("a9e3"),a("99af"),a("d3b7"),a("25f0"),a("d81d"),a("17b3"),a("9d26")),r=a("dc22"),o=a("a9ad"),l=a("de2c"),c=a("7560"),u=a("58df");e["a"]=Object(u["a"])(o["a"],Object(l["a"])({onVisible:["init"]}),c["a"]).extend({name:"v-pagination",directives:{Resize:r["a"]},props:{circle:Boolean,disabled:Boolean,length:{type:Number,default:0,validator:function(t){return t%1===0}},nextIcon:{type:String,default:"$next"},prevIcon:{type:String,default:"$prev"},totalVisible:[Number,String],value:{type:Number,default:0},pageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.page"},currentPageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.currentPage"},previousAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.previous"},nextAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.next"},wrapperAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.wrapper"}},data:function(){return{maxButtons:0,selected:null}},computed:{classes:function(){return Object(n["a"])({"v-pagination":!0,"v-pagination--circle":this.circle,"v-pagination--disabled":this.disabled},this.themeClasses)},items:function(){var t=parseInt(this.totalVisible,10);if(0===t)return[];var e=Math.min(Math.max(0,t)||this.length,Math.max(0,this.maxButtons)||this.length,this.length);if(this.length<=e)return this.range(1,this.length);var a=e%2===0?1:0,n=Math.floor(e/2),s=this.length-n+1+a;if(this.value>n&&this.value<s){var r=this.value-n+2,o=this.value+n-2-a;return[1,"..."].concat(Object(i["a"])(this.range(r,o)),["...",this.length])}if(this.value===n){var l=this.value+n-1-a;return[].concat(Object(i["a"])(this.range(1,l)),["...",this.length])}if(this.value===s){var c=this.value-n+1;return[1,"..."].concat(Object(i["a"])(this.range(c,this.length)))}return[].concat(Object(i["a"])(this.range(1,n)),["..."],Object(i["a"])(this.range(s,this.length)))}},watch:{value:function(){this.init()}},mounted:function(){this.init()},methods:{init:function(){var t=this;this.selected=null,this.$nextTick(this.onResize),setTimeout((function(){return t.selected=t.value}),100)},onResize:function(){var t=this.$el&&this.$el.parentElement?this.$el.parentElement.clientWidth:window.innerWidth;this.maxButtons=Math.floor((t-96)/42)},next:function(t){t.preventDefault(),this.$emit("input",this.value+1),this.$emit("next")},previous:function(t){t.preventDefault(),this.$emit("input",this.value-1),this.$emit("previous")},range:function(t,e){var a=[];t=t>0?t:1;for(var i=t;i<=e;i++)a.push(i);return a},genIcon:function(t,e,a,i,n){return t("li",[t("button",{staticClass:"v-pagination__navigation",class:{"v-pagination__navigation--disabled":a},attrs:{disabled:a,type:"button","aria-label":n},on:a?{}:{click:i}},[t(s["a"],[e])])])},genItem:function(t,e){var a=this,i=e===this.value&&(this.color||"primary"),n=e===this.value,s=n?this.currentPageAriaLabel:this.pageAriaLabel;return t("button",this.setBackgroundColor(i,{staticClass:"v-pagination__item",class:{"v-pagination__item--active":e===this.value},attrs:{type:"button","aria-current":n,"aria-label":this.$vuetify.lang.t(s,e)},on:{click:function(){return a.$emit("input",e)}}}),[e.toString()])},genItems:function(t){var e=this;return this.items.map((function(a,i){return t("li",{key:i},[isNaN(Number(a))?t("span",{class:"v-pagination__more"},[a.toString()]):e.genItem(t,a)])}))},genList:function(t,e){return t("ul",{directives:[{modifiers:{quiet:!0},name:"resize",value:this.onResize}],class:this.classes},e)}},render:function(t){var e=[this.genIcon(t,this.$vuetify.rtl?this.nextIcon:this.prevIcon,this.value<=1,this.previous,this.$vuetify.lang.t(this.previousAriaLabel)),this.genItems(t),this.genIcon(t,this.$vuetify.rtl?this.prevIcon:this.nextIcon,this.value>=this.length,this.next,this.$vuetify.lang.t(this.nextAriaLabel))];return t("nav",{attrs:{role:"navigation","aria-label":this.$vuetify.lang.t(this.wrapperAriaLabel)}},[this.genList(t,e)])}})},bef1:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-breadcrumbs",{attrs:{items:t.breadcrumbs,divider:"\\"}}),a("v-card",{attrs:{elevation:"4"}},[a("v-card-text",[a("v-toolbar",{attrs:{flat:""}},[a("v-toolbar-title",[a("div",{staticClass:"title font-weight-bold my-2 ml-2"},[t._v(" Data Transaksi ")])]),a("v-spacer")],1),a("v-row",[a("v-col",{attrs:{sm:"12",md:"4"}},[a("v-text-field",{staticClass:"ml-2",attrs:{"append-icon":"mdi-magnify",label:"Search",solo:"",clearable:"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)],1),a("v-row",[a("v-col",[a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.transaksi,search:t.search,page:t.page,"item-key":"transaksi.id","items-per-page":t.itemsPerPage,"hide-default-footer":""},on:{"update:page":function(e){t.page=e},"page-count":function(e){t.pageCount=e}},scopedSlots:t._u([{key:"item.foto",fn:function(e){var i=e.item;return[a("v-img",{attrs:{"max-height":"70px","max-width":"70px","lazy-src":i.file_path,src:i.file_path,"aspect-ratio":"1.8"},on:{error:function(t){t.target.src="img/default.png"},click:function(e){return t.showImage(i.file_path)}}})]}},{key:"item.masa_perawatan",fn:function(e){var a=e.item;return[t._v(" "+t._s(a.masa_perawatan)+" Bulan ")]}},{key:"item.ternak_harga",fn:function(e){var a=e.item;return[t._v(" "+t._s(t.formatPrice(a.ternak_harga))+" ")]}},{key:"item.total_harga",fn:function(e){var a=e.item;return[t._v(" "+t._s(t.formatPrice(a.total_harga))+" ")]}},{key:"item.transaksi_tanggal",fn:function(e){var a=e.item;return[t._v(" "+t._s(t._f("moment")(a.transaksi_tanggal,"MMM Do YYYY"))+" ")]}},{key:"item.transaksi_st",fn:function(e){var i=e.item;return["PAID"==i.transaksi_st?a("v-chip",{attrs:{color:"success","text-color":"white",small:""}},[t._v(" PAID ")]):"PENDING"==i.transaksi_st?a("v-chip",{attrs:{color:"orange","text-color":"white",small:""}},[t._v(" PENDING ")]):"EXPIRED"==i.transaksi_st?a("v-chip",{attrs:{color:"red","text-color":"white",small:""}},[t._v(" EXPIRED ")]):"CART"==i.transaksi_st?a("v-chip",{attrs:{color:"orange","text-color":"white",small:""}},[t._v(" Cart ")]):t._e()]}},{key:"item.actions",fn:function(e){var i=e.item;return[a("v-btn",{staticClass:"mr-2",attrs:{small:"",icon:"",color:"primary"},on:{click:function(e){return t.showDetail(i.id)}}},[a("v-icon",[t._v(" mdi-eye ")])],1)]}}],null,!0)})],1)],1),a("v-row",[a("v-col",[a("v-pagination",{attrs:{length:t.pageCount},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1)],1)],1)],1),a("v-dialog",{attrs:{"max-width":"600px"},model:{value:t.dialogDetail,callback:function(e){t.dialogDetail=e},expression:"dialogDetail"}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[a("span",[t._v(" Detail Transaksi ")]),a("v-spacer"),a("span",{staticClass:"subtitle grey--text"},[t._v(" "+t._s(t.detail.invoice))])],1),a("v-divider",{staticClass:"mx-5"}),a("v-card-text",[a("div",{staticClass:"mt-5 ml-3"},[a("v-row",[a("v-col",{attrs:{cols:"4"}},[t._v("Hewan Ternak")]),a("v-col",{attrs:{cols:"1"}},[t._v(":")]),a("v-col",{attrs:{cols:"7"}},[t._v(t._s(t.detail.ternak_nama))])],1),a("v-row",[a("v-col",{attrs:{cols:"4"}},[t._v("Penerima")]),a("v-col",{attrs:{cols:"1"}},[t._v(":")]),a("v-col",{attrs:{cols:"7"}},[t._v(t._s(t.detail.nama_penerima))])],1),a("v-row",[a("v-col",{attrs:{cols:"4"}},[t._v("Masa Perawatan")]),a("v-col",{attrs:{cols:"1"}},[t._v(":")]),a("v-col",{attrs:{cols:"7"}},[t._v(t._s(t.detail.masa_perawatan)+" Bulan")])],1),a("v-row",[a("v-col",{attrs:{cols:"4"}},[t._v("Harga Perawatan")]),a("v-col",{attrs:{cols:"1"}},[t._v(":")]),a("v-col",{attrs:{cols:"7"}},[t._v("Rp. "+t._s(t.formatPrice(t.detail.masa_perawatan*t.detail.perawatan_harga)))])],1),a("v-row",[a("v-col",{attrs:{cols:"4"}},[t._v("Harga Pengiriman")]),a("v-col",{attrs:{cols:"1"}},[t._v(":")]),a("v-col",{attrs:{cols:"7"}},[t._v("Rp. "+t._s(t.formatPrice(t.detail.harga_ongkir)))])],1),a("v-row",[a("v-col",{attrs:{cols:"4"}},[t._v("Harga Ternak")]),a("v-col",{attrs:{cols:"1"}},[t._v(":")]),a("v-col",{attrs:{cols:"7"}},[t._v("Rp. "+t._s(t.formatPrice(t.detail.ternak_harga)))])],1),a("v-row",{staticClass:"font-weight-bold"},[a("v-col",{attrs:{cols:"4"}},[t._v("Total Harga")]),a("v-col",{attrs:{cols:"1"}},[t._v(":")]),a("v-col",{attrs:{cols:"7"}},[t._v("Rp. "+t._s(t.formatPrice(t.detail.total_harga)))])],1)],1)]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.closeDetail}},[t._v("Close")])],1)],1)],1),a("v-dialog",{attrs:{"max-width":"700px"},model:{value:t.dialogImage,callback:function(e){t.dialogImage=e},expression:"dialogImage"}},[a("v-img",{attrs:{"max-height":"700px","max-width":"700px",src:t.foto,"aspect-ratio":"1.8"},on:{error:function(t){t.target.src="img/default.png"}}})],1)],1)},n=[],s=a("5530"),r=(a("d3b7"),a("3ca3"),a("ddb0"),a("ac1f"),a("5319"),a("b680"),a("25f0"),a("2f62")),o=a("6c33"),l=a("4360"),c=a("bc3a"),u=a.n(c),h={data:function(){return{page:1,pageCount:0,itemsPerPage:10,search:"",breadcrumbs:[{text:"Monitoring",disabled:!0},{text:"Transaksi",disabled:!0}],headers:[{text:"ID",align:"start",sortable:!1,value:"id"},{text:"Invoice",align:"start",sortable:!0,value:"invoice"},{text:"Hewan Ternak",align:"start",sortable:!1,value:"ternak_nama"},{text:"Foto",align:"start",sortable:!1,value:"foto"},{text:"Customer",align:"start",sortable:!1,value:"name"},{text:"Harga Ternak",align:"center",sortable:!1,value:"ternak_harga"},{text:"Masa Perawatan",align:"center",sortable:!1,value:"masa_perawatan"},{text:"Total",align:"center",sortable:!1,value:"total_harga"},{text:"Status",align:"center",sortable:!1,value:"transaksi_st"},{text:"Tanggal",align:"center",sortable:!1,value:"transaksi_tanggal"},{text:"Actions",align:"center",sortable:!1,value:"actions"}],dialogDetail:!1,dialogImage:!1,detail:{}}},beforeRouteEnter:function(t,e,a){Promise.all([l["a"].dispatch(o["l"],t.params.slug)]).then((function(){a()}))},computed:Object(s["a"])({},Object(r["b"])(["transaksi"])),methods:{formatPrice:function(t){var e=(t/1).toFixed(2).replace(".",",");return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")},closeDetail:function(){this.dialogDetail=!1},showDetail:function(t){var e=this;u.a.get("/transaksi/"+t+"/detail").then((function(t){console.log(t.data.cart),e.detail=t.data.cart,e.dialogDetail=!0}))},showImage:function(t){this.foto=t,this.dialogImage=!0}}},v=h,d=a("2877"),g=a("6544"),f=a.n(g),m=a("2bc5"),p=a("8336"),b=a("b0af"),_=a("99d9"),x=a("cc20"),w=a("62ad"),k=a("a523"),y=a("8fea"),C=a("169a"),$=a("ce7e"),I=a("132d"),A=a("adda"),O=a("891e"),T=a("0fd9"),D=a("2fa4"),P=a("8654"),S=a("71d9"),j=a("2a7f"),B=Object(d["a"])(v,i,n,!1,null,null,null);e["default"]=B.exports;f()(B,{VBreadcrumbs:m["a"],VBtn:p["a"],VCard:b["a"],VCardActions:_["a"],VCardText:_["c"],VCardTitle:_["d"],VChip:x["a"],VCol:w["a"],VContainer:k["a"],VDataTable:y["a"],VDialog:C["a"],VDivider:$["a"],VIcon:I["a"],VImg:A["a"],VPagination:O["a"],VRow:T["a"],VSpacer:D["a"],VTextField:P["a"],VToolbar:S["a"],VToolbarTitle:j["a"]})}}]);
//# sourceMappingURL=chunk-7fe3d7d5.7f7d52b2.js.map