(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-542277dc"],{"04bd":function(e,t,n){},a9fc:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-dialog",e._g(e._b({attrs:{title:"外部资源引用",width:"600px","close-on-click-modal":!1},on:{open:e.onOpen,close:e.onClose}},"el-dialog",e.$attrs,!1),e.$listeners),[e._l(e.resources,(function(t,o){return n("el-input",{key:o,staticClass:"url-item",attrs:{placeholder:"请输入 css 或 js 资源路径","prefix-icon":"el-icon-link",clearable:""},model:{value:e.resources[o],callback:function(t){e.$set(e.resources,o,t)},expression:"resources[index]"}},[n("el-button",{attrs:{slot:"append",icon:"el-icon-delete"},on:{click:function(t){return e.deleteOne(o)}},slot:"append"})],1)})),n("el-button-group",{staticClass:"add-item"},[n("el-button",{attrs:{plain:""},on:{click:function(t){return e.addOne("https://lib.baomitu.com/jquery/1.8.3/jquery.min.js")}}},[e._v(" jQuery1.8.3 ")]),n("el-button",{attrs:{plain:""},on:{click:function(t){return e.addOne("https://unpkg.com/http-vue-loader")}}},[e._v(" http-vue-loader ")]),n("el-button",{attrs:{icon:"el-icon-circle-plus-outline",plain:""},on:{click:function(t){return e.addOne("")}}},[e._v(" 添加其他 ")])],1),n("div",{attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:e.close}},[e._v(" 取消 ")]),n("el-button",{attrs:{type:"primary"},on:{click:e.handelConfirm}},[e._v(" 确定 ")])],1)],2)],1)},s=[],i=(n("4de4"),n("d3b7"),n("a434"),n("14d9"),n("ed08")),c={components:{},inheritAttrs:!1,props:["originResource"],data:function(){return{resources:null}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{onOpen:function(){this.resources=this.originResource.length?Object(i["d"])(this.originResource):[""]},onClose:function(){},close:function(){this.$emit("update:visible",!1)},handelConfirm:function(){var e=this.resources.filter((function(e){return!!e}))||[];this.$emit("save",e),this.close(),e.length&&(this.resources=e)},deleteOne:function(e){this.resources.splice(e,1)},addOne:function(e){this.resources.indexOf(e)>-1?this.$message("资源已存在"):this.resources.push(e)}}},r=c,l=(n("dccb"),n("2877")),u=Object(l["a"])(r,o,s,!1,null,"5ed905cd",null);t["default"]=u.exports},dccb:function(e,t,n){"use strict";n("04bd")}}]);