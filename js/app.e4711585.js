(function(e){function t(t){for(var r,o,s=t[0],i=t[1],l=t[2],d=0,f=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&f.push(c[o][0]),c[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);u&&u(t);while(f.length)f.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,s=1;s<n.length;s++){var i=n[s];0!==c[i]&&(r=!1)}r&&(a.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},c={app:0},a=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/multiselect/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=i;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"0fe7":function(e,t,n){"use strict";var r=n("92d5"),c=n.n(r);c.a},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),c=n.n(r);c.a},"92d5":function(e,t,n){},"9c0c":function(e,t,n){},b9a6:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("0cdd");var r=n("2b0e"),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],o={components:{}},s=o,i=(n("5c0b"),n("2877")),l=Object(i["a"])(s,c,a,!1,null,null,null),u=l.exports,d=n("8c4f"),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"home"}},[n("MultiSelect")],1)},m=[],p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"multiselect"},[n("h3",[e._v(e._s(e.title))]),n("div",{staticClass:"search-box"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.searchterm,expression:"searchterm"}],staticClass:"search-input",attrs:{type:"text",placeholder:"Zoek op ..."},domProps:{value:e.searchterm},on:{keyup:e.onInput,input:function(t){t.target.composing||(e.searchterm=t.target.value)}}}),n("svg",{staticClass:"search-icon",attrs:{width:"14",height:"14",viewBox:"0 0 14 14",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M13.8 12.2l-3.9-4c.6-.8 1.1-2 1.1-3.1 0-2.8-2.3-5-5-5-2.8 0-5 2.3-5 5 0 2.8 2.2 5 5 5 .8 0 1.7-.2 2.3-.5l3.9 4.3c.2.2.6.2.8 0l.8-.8c.3-.3.3-.7 0-.9zM6 8.1c-1.7 0-3-1.4-3-3 0-1.7 1.4-3 3-3s3 1.4 3 3-1.4 3-3 3z","fill-rule":"evenodd"}})])]),n("div",{staticClass:"dropdown"},[n("ul",e._l(e.selectedItems,(function(t,r){return n("li",{key:r+t.name,staticClass:"selected"},[n("input",{attrs:{type:"checkbox",id:r+t.name},domProps:{checked:t.checked},on:{click:function(n){return e.select(t)}}}),n("label",{attrs:{for:r+t.name},domProps:{innerHTML:e._s(t.name)}})])})),0),n("ul",e._l(e.filteredItems,(function(t,r){return n("li",{key:r+t.name},[n("input",{attrs:{type:"checkbox",id:r+t.name},domProps:{checked:t.checked},on:{click:function(n){return e.select(t)}}}),n("label",{attrs:{for:r+t.name},domProps:{innerHTML:e._s(t.name)}})])})),0)]),n("input",{staticClass:"save-icon",attrs:{type:"button",value:"Toepassen"},on:{click:e.saveData}})])},h=[],v=(n("4de4"),n("4160"),n("c975"),n("d81d"),n("b0c0"),n("d3b7"),n("159b"),{name:"multiselect",components:{},data:function(){return{title:"Productgroep",multiSelectData:[],searchterm:"",multiSelectDataObjects:[],selectableItems:[],filteredItems:[]}},mounted:function(){var e=this,t=localStorage.getItem("multiselect");fetch("https://raw.githubusercontent.com/hvgeertruy/frontend-exercise/master/assets/items.json").then((function(e){return e.json()})).then((function(n){e.multiSelectData=n.data,e.multiSelectDataObjects=e.createMultiSelectData(e.multiSelectData),null!=t?(console.log("use saved data"),e.applySelectedData(JSON.parse(t))):console.log("no saved data"),e.filteredItems=e.getFilteredItems()})).catch((function(e){console.log("error"+e)}))},computed:{selectedItems:function(){return this.multiSelectDataObjects.filter((function(e){return e.checked}))}},methods:{select:function(e){e.checked=!e.checked,this.filteredItems=this.getFilteredItems(this.searchterm)},onInput:function(){this.filteredItems=this.getFilteredItems(this.searchterm)},saveData:function(){localStorage.setItem("multiselect",JSON.stringify(this.selectedItems))},applySelectedData:function(e){this.multiSelectDataObjects.forEach((function(t){e.forEach((function(e){t.name!==e.name||(t.checked=e.checked)}))}))},createMultiSelectData:function(e){return e.map((function(e){var t={};return t.name=e,t.checked=!1,t}))},getSelectableItems:function(){return this.multiSelectDataObjects.filter((function(e){return!e.checked}))},getFilteredItems:function(e){return this.selectableItems=this.getSelectableItems(),"undefined"===typeof e||""===e?this.selectableItems:this.selectableItems.filter((function(t){return t.name.toLowerCase().indexOf(e.toLowerCase())>-1}))}}}),b=v,g=(n("dd1f"),Object(i["a"])(b,p,h,!1,null,"316e2096",null)),y=g.exports,S={data:function(){return{}},name:"home",components:{MultiSelect:y}},w=S,k=(n("0fe7"),Object(i["a"])(w,f,m,!1,null,"3da90214",null)),I=k.exports;r["a"].use(d["a"]);var O=[{path:"/",name:"home",components:{default:I}}],j=new d["a"]({mode:"history",routes:O}),x=j;r["a"].config.productionTip=!1,new r["a"]({router:x,render:function(e){return e(u)}}).$mount("#app")},dd1f:function(e,t,n){"use strict";var r=n("b9a6"),c=n.n(r);c.a}});
//# sourceMappingURL=app.e4711585.js.map