// { "framework": "Vue"} 

!function(t){function e(o){if(r[o])return r[o].exports;var s=r[o]={i:o,l:!1,exports:{}};return t[o].call(s.exports,s,s.exports,e),s.l=!0,s.exports}var r={};e.m=t,e.c=r,e.i=function(t){return t},e.d=function(t,r,o){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=100)}({100:function(t,e,r){var o,s,a=[];a.push(r(29)),o=r(27);var i=r(36);s=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(Object.keys(o).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),s=o=o.default),"function"==typeof s&&(s=s.options),s.__file="/Users/zwwill/workspace/dev/github/weex-pro/YanXuanDemo/src/components/topChannel.vue",s.render=i.render,s.staticRenderFns=i.staticRenderFns,s._scopeId="data-v-10f3f602",s.style=s.style||{},a.forEach(function(t){for(var e in t)s.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(s._scopeId,a),t.exports=o,t.exports.el="true",new Vue(t.exports)},27:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=(weex.requireModule("dom"),weex.requireModule("animation"));weex.requireModule("modal");e.default={data:function(){return{jLPosition:"left:30px;width:82px;"}},mounted:function(){},methods:{initJLine:function(){this.$refs.actJC},chooseChannel:function(t){var e=t.target,r=e.offsetLeft||0,s=e.offsetWidth||0;s<=0||o.transition(this.$refs.jcLine,{styles:{left:r+30+"px",width:s-60+"px"},duration:300,timingFunction:"ease",delay:0},function(){})}}}},29:function(t,e){t.exports={iconfont:{fontFamily:"iconfont"},wrapper:{position:"fixed",top:114,left:0,right:0,height:54,zIndex:10,backgroundColor:"#fafafa",borderBottomWidth:1,borderBottomColor:"#d9d9d9"},scroller:{height:54},"i-c":{paddingTop:10,paddingLeft:45,paddingRight:45,paddingBottom:6,fontSize:26,color:"#333333"},"c-act":{color:"#b4282d"},"j-uline":{position:"absolute",left:30,bottom:0,width:82,height:4,backgroundColor:"#b4282d"},more:{position:"absolute",top:0,right:0,height:52,width:100,backgroundColor:"#fafafa",textAlign:"center",paddingTop:10,opacity:.96,boxShadow:"-6px -4px 4px #fafafa"}}},36:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:["wrapper"]},[r("scroller",{staticClass:["scroller"],attrs:{scrollDirection:"horizontal",flexDirection:"row",loadmoreoffset:"750px",showScrollbar:"false"},on:{click:t.chooseChannel}},[r("div",{ref:"jcLine",staticClass:["j-uline"],style:t.jLPosition}),r("text",{ref:"actJC",staticClass:["i-c","c-act"],attrs:{jact:"true"}},[t._v("推荐")]),r("text",{staticClass:["i-c"],attrs:{jact:"true"}},[t._v("限时购")]),r("text",{staticClass:["i-c"],attrs:{jact:"true"}},[t._v("新品")]),r("text",{staticClass:["i-c"],attrs:{jact:"true"}},[t._v("居家")]),r("text",{staticClass:["i-c"],attrs:{jact:"true"}},[t._v("餐厨")]),r("text",{staticClass:["i-c"],attrs:{jact:"true"}},[t._v("配件")]),r("text",{staticClass:["i-c"],attrs:{jact:"true"}},[t._v("服装")]),r("text",{staticClass:["i-c"],attrs:{jact:"true"}},[t._v("电器")]),r("text",{staticClass:["i-c"],attrs:{jact:"true"}},[t._v("洗护")]),r("text",{staticClass:["i-c"],attrs:{jact:"true"}},[t._v("杂货")]),r("text",{staticClass:["i-c"],attrs:{jact:"true"}},[t._v("饮食")]),r("text",{staticClass:["i-c"],attrs:{jact:"true"}},[t._v("婴童")]),r("text",{staticClass:["i-c"],attrs:{jact:"true"}},[t._v("志趣")])]),r("text",{staticClass:["more","iconfont"]},[t._v("")])])},staticRenderFns:[]},t.exports.render._withStripped=!0}});