(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-778ce376"],{"17b3":function(t,a,e){},"2a7f":function(t,a,e){"use strict";e.d(a,"a",(function(){return r}));var i=e("71d9"),n=e("80d2"),r=Object(n["i"])("v-toolbar__title"),s=Object(n["i"])("v-toolbar__items");i["a"]},"891e":function(t,a,e){"use strict";var i=e("2909"),n=e("5530"),r=(e("a9e3"),e("99af"),e("d3b7"),e("25f0"),e("d81d"),e("17b3"),e("9d26")),s=e("dc22"),l=e("a9ad"),o=e("de2c"),u=e("7560"),c=e("58df");a["a"]=Object(c["a"])(l["a"],Object(o["a"])({onVisible:["init"]}),u["a"]).extend({name:"v-pagination",directives:{Resize:s["a"]},props:{circle:Boolean,disabled:Boolean,length:{type:Number,default:0,validator:function(t){return t%1===0}},nextIcon:{type:String,default:"$next"},prevIcon:{type:String,default:"$prev"},totalVisible:[Number,String],value:{type:Number,default:0},pageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.page"},currentPageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.currentPage"},previousAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.previous"},nextAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.next"},wrapperAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.wrapper"}},data:function(){return{maxButtons:0,selected:null}},computed:{classes:function(){return Object(n["a"])({"v-pagination":!0,"v-pagination--circle":this.circle,"v-pagination--disabled":this.disabled},this.themeClasses)},items:function(){var t=parseInt(this.totalVisible,10);if(0===t)return[];var a=Math.min(Math.max(0,t)||this.length,Math.max(0,this.maxButtons)||this.length,this.length);if(this.length<=a)return this.range(1,this.length);var e=a%2===0?1:0,n=Math.floor(a/2),r=this.length-n+1+e;if(this.value>n&&this.value<r){var s=this.value-n+2,l=this.value+n-2-e;return[1,"..."].concat(Object(i["a"])(this.range(s,l)),["...",this.length])}if(this.value===n){var o=this.value+n-1-e;return[].concat(Object(i["a"])(this.range(1,o)),["...",this.length])}if(this.value===r){var u=this.value-n+1;return[1,"..."].concat(Object(i["a"])(this.range(u,this.length)))}return[].concat(Object(i["a"])(this.range(1,n)),["..."],Object(i["a"])(this.range(r,this.length)))}},watch:{value:function(){this.init()}},mounted:function(){this.init()},methods:{init:function(){var t=this;this.selected=null,this.$nextTick(this.onResize),setTimeout((function(){return t.selected=t.value}),100)},onResize:function(){var t=this.$el&&this.$el.parentElement?this.$el.parentElement.clientWidth:window.innerWidth;this.maxButtons=Math.floor((t-96)/42)},next:function(t){t.preventDefault(),this.$emit("input",this.value+1),this.$emit("next")},previous:function(t){t.preventDefault(),this.$emit("input",this.value-1),this.$emit("previous")},range:function(t,a){var e=[];t=t>0?t:1;for(var i=t;i<=a;i++)e.push(i);return e},genIcon:function(t,a,e,i,n){return t("li",[t("button",{staticClass:"v-pagination__navigation",class:{"v-pagination__navigation--disabled":e},attrs:{disabled:e,type:"button","aria-label":n},on:e?{}:{click:i}},[t(r["a"],[a])])])},genItem:function(t,a){var e=this,i=a===this.value&&(this.color||"primary"),n=a===this.value,r=n?this.currentPageAriaLabel:this.pageAriaLabel;return t("button",this.setBackgroundColor(i,{staticClass:"v-pagination__item",class:{"v-pagination__item--active":a===this.value},attrs:{type:"button","aria-current":n,"aria-label":this.$vuetify.lang.t(r,a)},on:{click:function(){return e.$emit("input",a)}}}),[a.toString()])},genItems:function(t){var a=this;return this.items.map((function(e,i){return t("li",{key:i},[isNaN(Number(e))?t("span",{class:"v-pagination__more"},[e.toString()]):a.genItem(t,e)])}))},genList:function(t,a){return t("ul",{directives:[{modifiers:{quiet:!0},name:"resize",value:this.onResize}],class:this.classes},a)}},render:function(t){var a=[this.genIcon(t,this.$vuetify.rtl?this.nextIcon:this.prevIcon,this.value<=1,this.previous,this.$vuetify.lang.t(this.previousAriaLabel)),this.genItems(t),this.genIcon(t,this.$vuetify.rtl?this.prevIcon:this.nextIcon,this.value>=this.length,this.next,this.$vuetify.lang.t(this.nextAriaLabel))];return t("nav",{attrs:{role:"navigation","aria-label":this.$vuetify.lang.t(this.wrapperAriaLabel)}},[this.genList(t,a)])}})},bef1:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",[e("v-breadcrumbs",{attrs:{items:t.breadcrumbs,divider:"\\"}}),e("v-card",{attrs:{elevation:"4"}},[e("v-card-text",[e("v-toolbar",{attrs:{flat:""}},[e("v-toolbar-title",[e("div",{staticClass:"title font-weight-bold my-2 ml-2"},[t._v(" Data Transaksi ")])]),e("v-spacer")],1),e("v-row",[e("v-col",{attrs:{sm:"12",md:"4"}},[e("v-text-field",{staticClass:"ml-2",attrs:{"append-icon":"mdi-magnify",label:"Search",solo:"",clearable:"","hide-details":""},model:{value:t.search,callback:function(a){t.search=a},expression:"search"}})],1)],1),e("v-row",[e("v-col",[e("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.transaksi,search:t.search,page:t.page,"item-key":"transaksi.id","items-per-page":t.itemsPerPage,"hide-default-footer":""},on:{"update:page":function(a){t.page=a},"page-count":function(a){t.pageCount=a}},scopedSlots:t._u([{key:"item.masa_perawatan",fn:function(a){var e=a.item;return[t._v(" "+t._s(e.masa_perawatan)+" Bulan ")]}},{key:"item.ternak_harga",fn:function(a){var e=a.item;return[t._v(" "+t._s(t.formatPrice(e.ternak_harga))+" ")]}},{key:"item.total_harga",fn:function(a){var e=a.item;return[t._v(" "+t._s(t.formatPrice(e.total_harga))+" ")]}},{key:"item.transaksi_tanggal",fn:function(a){var e=a.item;return[t._v(" "+t._s(t._f("moment")(e.transaksi_tanggal,"MMM Do YYYY"))+" ")]}},{key:"item.transaksi_st",fn:function(a){var i=a.item;return["settlement"==i.transaksi_st?e("v-chip",{attrs:{color:"success","text-color":"white",small:""}},[t._v(" Settlement ")]):"expire"==i.transaksi_st?e("v-chip",{attrs:{color:"red","text-color":"white",small:""}},[t._v(" Expire ")]):"cart"==i.transaksi_st?e("v-chip",{attrs:{color:"orange","text-color":"white",small:""}},[t._v(" Cart ")]):t._e()]}}],null,!0)})],1)],1),e("v-row",[e("v-col",[e("v-pagination",{attrs:{length:t.pageCount},model:{value:t.page,callback:function(a){t.page=a},expression:"page"}})],1)],1)],1)],1)],1)},n=[],r=e("5530"),s=(e("d3b7"),e("3ca3"),e("ddb0"),e("ac1f"),e("5319"),e("b680"),e("25f0"),e("2f62")),l=e("6c33"),o=e("4360"),u={data:function(){return{page:1,pageCount:0,itemsPerPage:10,search:"",breadcrumbs:[{text:"Monitoring",disabled:!0},{text:"Transaksi",disabled:!0}],headers:[{text:"ID",align:"start",sortable:!1,value:"id"},{text:"Hewan Ternak",align:"start",sortable:!1,value:"ternak_nama"},{text:"Customer",align:"start",sortable:!1,value:"name"},{text:"Harga Ternak",align:"center",sortable:!1,value:"ternak_harga"},{text:"Masa Perawatan",align:"center",sortable:!1,value:"masa_perawatan"},{text:"Total",align:"center",sortable:!1,value:"total_harga"},{text:"Status",align:"center",sortable:!1,value:"transaksi_st"},{text:"Tanggal",align:"center",sortable:!1,value:"transaksi_tanggal"}]}},beforeRouteEnter:function(t,a,e){Promise.all([o["a"].dispatch(l["l"],t.params.slug)]).then((function(){e()}))},computed:Object(r["a"])({},Object(s["b"])(["transaksi"])),methods:{formatPrice:function(t){var a=(t/1).toFixed(2).replace(".",",");return a.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}}},c=u,h=e("2877"),v=e("6544"),g=e.n(v),p=e("2bc5"),d=e("b0af"),f=e("99d9"),b=e("cc20"),m=e("62ad"),_=e("a523"),x=e("8fea"),k=e("891e"),y=e("0fd9"),w=e("2fa4"),$=e("8654"),C=e("71d9"),L=e("2a7f"),S=Object(h["a"])(c,i,n,!1,null,null,null);a["default"]=S.exports;g()(S,{VBreadcrumbs:p["a"],VCard:d["a"],VCardText:f["c"],VChip:b["a"],VCol:m["a"],VContainer:_["a"],VDataTable:x["a"],VPagination:k["a"],VRow:y["a"],VSpacer:w["a"],VTextField:$["a"],VToolbar:C["a"],VToolbarTitle:L["a"]})}}]);
//# sourceMappingURL=chunk-778ce376.72455d08.js.map