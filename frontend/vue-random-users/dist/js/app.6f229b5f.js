(function(e){function t(t){for(var a,o,i=t[0],c=t[1],d=t[2],u=0,m=[];u<i.length;u++)o=i[u],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&m.push(n[o][0]),n[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);l&&l(t);while(m.length)m.shift()();return r.push.apply(r,d||[]),s()}function s(){for(var e,t=0;t<r.length;t++){for(var s=r[t],a=!0,i=1;i<s.length;i++){var c=s[i];0!==n[c]&&(a=!1)}a&&(r.splice(t--,1),e=o(o.s=s[0]))}return e}var a={},n={app:0},r=[];function o(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=e,o.c=a,o.d=function(e,t,s){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(s,a,function(t){return e[t]}.bind(null,a));return s},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var l=c;r.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"081b":function(e,t,s){},"432e":function(e,t,s){},4678:function(e,t,s){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(e){var t=r(e);return s(t)}function r(e){if(!s.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}n.keys=function(){return Object.keys(a)},n.resolve=r,e.exports=n,n.id="4678"},"539c":function(e,t,s){"use strict";s("081b")},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),n=(s("cabf"),s("3c76"),s("becf"),function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view")],1)}),r=[],o={name:"App",data:function(){return{users:[],usersFiltered:[],numUsers:1,usersPag:[],page:1,value:[0,122],natSelected:"",genderSelected:"",loaded:!1}}},i=o,c=(s("5c0b"),s("2877")),d=Object(c["a"])(i,n,r,!1,null,null,null),l=d.exports,u=s("9483");Object(u["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var m=s("8c4f"),b=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("mdb-container",{staticClass:"mt-4"},[s("mdb-row",{staticClass:"d-flex justify-content-end"},[s("mdb-btn",{staticClass:"mr-3",attrs:{color:"primary"},on:{click:e.fetchData}},[s("mdb-icon",{attrs:{icon:"search"}})],1),s("mdb-btn",{staticClass:"mr-3",attrs:{color:"primary"},on:{click:e.goExports}},[s("mdb-icon",{attrs:{icon:"file-export"}})],1)],1),s("mdb-row",{staticClass:"table-height"},[s("mdb-col",[s("mdb-tbl",[s("mdb-tbl-head",[s("tr",[s("th",[e._v("Género")]),s("th",[e._v("Nombre")]),s("th",[e._v("Email")]),s("th",[e._v("Nacionalidad")]),s("th",[e._v("Fecha de nacimiento")]),s("th",[e._v("Fecha de registro")]),s("th")])]),e.users.length>0?s("mdb-tbl-body",e._l(e.limitedItems,(function(t){return s("tr",{key:t.name},[s("td",{staticClass:"width-gender"},[e._v(e._s(t.gender))]),s("td",{staticClass:"width-name"},[e._v(e._s(t.name))]),s("td",{staticClass:"width-email"},[e._v(e._s(t.email))]),s("td",[e._v(e._s(t.nationality))]),s("td",[e._v(e._s(e._f("moment")(t.birthdate,"MM-DD-YYYY")))]),s("td",[e._v(e._s(e._f("moment")(t.registrationDate,"MM-DD-YYYY")))]),s("td",[s("mdb-btn",{staticClass:"m-0",attrs:{size:"sm",color:"primary"},on:{click:function(s){return e.$router.push({name:"Details",params:{user:t}})}}},[s("mdb-icon",{attrs:{icon:"info"}})],1)],1)])})),0):s("mdb-tbl-body",{staticClass:"table-body"},[s("tr",[s("td",[s("h4",[e._v("NO DATA")])])])])],1)],1)],1),s("mdb-row",{staticClass:"mb-5 pagination-height"},[e.numPags>1?s("mdb-col",{staticClass:"d-flex justify-content-center"},[s("mdb-pagination",[s("mdb-page-nav",{class:{disabled:1==e.page},attrs:{prev:""},nativeOn:{click:function(t){return e.prevPag()}}}),e._l(e.numPags,(function(t){return s("mdb-page-item",{key:t,class:{active:e.page==t},nativeOn:{click:function(s){return e.changePag(t)}}},[e._v(e._s(t))])})),s("mdb-page-nav",{class:{disabled:e.page==e.numPags},attrs:{next:""},nativeOn:{click:function(t){return e.nextPag()}}})],2)],1):e._e()],1),s("mdb-row",{staticClass:"mt-3"},[s("mdb-col",[s("h6",[e._v("Género")]),s("select",{directives:[{name:"model",rawName:"v-model",value:e.genderSelected,expression:"genderSelected"}],staticClass:"browser-default custom-select",on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.genderSelected=t.target.multiple?s:s[0]}}},e._l(e.genderOptions,(function(t){return s("option",{key:t.value,domProps:{value:t.value}},[e._v(e._s(t.text))])})),0)]),s("mdb-col",[s("h6",[e._v("Edad")]),s("div",{staticClass:"app-content pt-2"},[s("vue-range-slider",{attrs:{min:e.min,max:e.max,"enable-cross":e.enableCross},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1)]),s("mdb-col",[s("h6",[e._v("Nacionalidad")]),s("select",{directives:[{name:"model",rawName:"v-model",value:e.natSelected,expression:"natSelected"}],staticClass:"browser-default custom-select",on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.natSelected=t.target.multiple?s:s[0]}}},e._l(e.natOptions,(function(t){return s("option",{key:t.value,domProps:{value:t.value}},[e._v(e._s(t.text))])})),0)])],1)],1)},f=[],h=s("1da1"),p=(s("96cf"),s("fb6a"),s("b65f"),s("4de4"),s("d81d"),s("b0c0"),s("91c9")),v=(s("e1b1"),s("b8c8")),g=s("c1df"),j=s.n(g),_={name:"Users",components:{mdbContainer:p["mdbContainer"],mdbRow:p["mdbRow"],mdbCol:p["mdbCol"],mdbTbl:p["mdbTbl"],mdbTblHead:p["mdbTblHead"],mdbBtn:p["mdbBtn"],mdbIcon:p["mdbIcon"],mdbTblBody:p["mdbTblBody"],mdbPagination:p["mdbPagination"],mdbPageItem:p["mdbPageItem"],mdbPageNav:p["mdbPageNav"],vueRangeSlider:v["a"]},data:function(){return{users:[],usersFiltered:[],numUsers:1,usersPag:[],page:1,value:[0,122],natSelected:"",genderSelected:"",loaded:!1,genderOptions:[{text:"Todos",value:""},{text:"Male",value:"male"},{text:"female",value:"Female"}],natOptions:[{text:"Todas",value:""},{text:"AU",value:"AU"},{text:"BR",value:"BR"},{text:"CA",value:"CA"},{text:"CH",value:"CH"},{text:"DE",value:"DE"},{text:"DK",value:"DK"},{text:"ES",value:"ES"},{text:"FI",value:"FI"},{text:"FR",value:"FR"},{text:"GB",value:"GB"},{text:"IE",value:"IE"},{text:"IR",value:"IR"},{text:"NO",value:"NO"},{text:"NL",value:"NL"},{text:"NZ",value:"NZ"},{text:"TR",value:"TR"},{text:"US",value:"US"}]}},created:function(){this.min=0,this.max=122,this.enableCross=!1,this.users=this.$parent.users,this.usersFiltered=this.$parent.usersFiltered,this.numUsers=this.$parent.numUsers,this.usersPag=this.$parent.usersPag,this.page=this.$parent.page,this.value=this.$parent.value,this.natSelected=this.$parent.natSelected,this.genderSelected=this.$parent.genderSelected,this.loaded=this.$parent.loaded},beforeDestroy:function(){this.$parent.users=this.users,this.$parent.usersFiltered=this.usersFiltered,this.$parent.numUsers=this.numUsers,this.$parent.usersPag=this.usersPag,this.$parent.page=this.page,this.$parent.value=this.value,this.$parent.natSelected=this.natSelected,this.$parent.genderSelected=this.genderSelected,this.$parent.loaded=this.loaded},mounted:function(){this.fetchData},computed:{limitedItems:function(){return this.usersFiltered.slice(10*parseInt(this.page-1),10*parseInt(this.page))},numPags:function(){return Math.trunc(parseInt(this.numUsers)/10)}},methods:{goExports:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.fetchData();case 2:e.$router.push({name:"Exports",params:{users:e.users}});case 3:case"end":return t.stop()}}),t)})))()},changePag:function(e){this.page=e},prevPag:function(){this.page=this.page-1},nextPag:function(){this.page=this.page+1},filterItems:function(){var e=this,t=this.users;""!==this.natSelected&&(t=t.filter((function(t){return t.nationality==e.natSelected}))),""!==this.genderSelected&&(t=t.filter((function(t){return t.gender==e.genderSelected}))),t=t.filter((function(t){return t.age>e.value[0]&&t.age<e.value[1]})),this.usersFiltered=t,this.getNumUsers()},getDataUsers:function(e){this.users2=e.data.results},getNumUsers:function(){this.numUsers=this.usersFiltered.length,this.page=1},prepareData:function(){this.users=this.users2.map((function(e){return{id:e.login.uuid,name:e.name.title+" "+e.name.first+" "+e.name.last,username:e.login.username,gender:e.gender,nationality:e.nat,streetNumber:e.location.street.number,streetName:e.location.street.name,city:e.location.city,state:e.location.state,postcode:e.location.postcode,latitude:e.location.coordinates.latitude,longitude:e.location.coordinates.longitude,registered:e.registered.date,phone:e.phone,cell:e.cell,email:e.email,imageLarge:e.picture.large,birthdate:j()().subtract(e.dob.age,"years").format("YYYY-MM-DD"),age:e.dob.age,registrationDate:e.registered.date,favourite:!1}}))},fetchData:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,0!=e.loaded){t.next=9;break}return t.next=4,a["a"].axios({url:"/api/1.3/?results=100&seed=abc"});case 4:return s=t.sent,t.next=7,e.getDataUsers(s);case 7:return t.next=9,e.prepareData();case 9:return t.next=11,e.filterItems();case 11:return t.next=13,e.getNumUsers();case 13:e.loaded=!0,t.next=19;break;case 16:t.prev=16,t.t0=t["catch"](0),console.log(t.t0);case 19:case"end":return t.stop()}}),t,null,[[0,16]])})))()}}},x=_,y=(s("539c"),Object(c["a"])(x,b,f,!1,null,null,null)),w=y.exports,C=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("mdb-container",{staticClass:"mt-4"},[s("mdb-row",{staticClass:"d-flex justify-content-end"},[s("mdb-btn",{staticClass:"mr-3",attrs:{color:"primary"},on:{click:function(t){return e.$router.push({name:"Users"})}}},[s("mdb-icon",{attrs:{icon:"arrow-left"}})],1)],1),s("mdb-card",{attrs:{wide:""}},[s("mdb-view",{attrs:{hover:"",cascade:""}},[s("mdb-row",[s("mdb-col",{attrs:{col:"4"}},[s("mdb-card-image",{attrs:{src:e.user.imageLarge,alt:"Card image cap"}}),s("mdb-mask",{attrs:{"flex-center":"",waves:"",overlay:"white-slight"}})],1),s("mdb-col",{attrs:{col:"6"}}),s("mdb-col",{attrs:{col:"2"}},[s("mdb-btn",{attrs:{tag:"a",floating:"",size:"lg",color:"primary"},on:{click:function(t){return e.changeFavourite(e.user.id,e.user.name)}}},[s("mdb-icon",{class:e.user.favourite?"fa-star":"fa-star-ini",attrs:{icon:"star"}})],1)],1)],1)],1),s("mdb-card-body",{staticClass:"text-center pb-0",attrs:{cascade:""}},[s("mdb-card-title",[s("strong",[e._v(e._s(e.user.name))])]),s("h5",{staticClass:"blue-text"},[s("strong",[e._v(e._s(e.user.email))])]),s("mdb-card-footer",{staticClass:"text-muted mt-4"},[s("mdb-card-text",{staticClass:"width-footer"},[e._v(e._s(e.user.streetName)+", "+e._s(e.user.streetNumber)+", "+e._s(e.user.city)+", "+e._s(e.user.state))])],1)],1)],1)],1)},k=[],F=(s("7db0"),{name:"Users",props:{user:Object},data:function(){return{favouritesUsers:[],error:!1}},components:{mdbContainer:p["mdbContainer"],mdbRow:p["mdbRow"],mdbCol:p["mdbCol"],mdbBtn:p["mdbBtn"],mdbIcon:p["mdbIcon"],mdbCard:p["mdbCard"],mdbView:p["mdbView"],mdbMask:p["mdbMask"],mdbCardImage:p["mdbCardImage"],mdbCardTitle:p["mdbCardTitle"],mdbCardText:p["mdbCardText"],mdbCardFooter:p["mdbCardFooter"],mdbCardBody:p["mdbCardBody"]},mounted:function(){this.initFavourites()},methods:{initFavourites:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getFavourites();case 2:return t.next=4,e.matchFavourites();case 4:case"end":return t.stop()}}),t)})))()},changeFavourite:function(e,t){1==this.user.favourite?this.deleteFavourite(e):this.postFavourite(e,t)},postFavourite:function(e,t){var s=this,n={id:e,name:t};a["a"].axios.post("http://localhost:3000/users",n).then((function(){s.getFavourites()})).then((function(){s.matchFavourites()})).catch((function(){s.error=!0}))},getFavourites:function(){var e=this;a["a"].axios("http://localhost:3000/users").then((function(t){e.favouritesUsers=t.data})).then((function(e){console.log(e)})).catch((function(){e.error=!0}))},deleteFavourite:function(e){var t=this;a["a"].axios.delete("http://localhost:3000/users/"+e).then((function(){t.getFavourites()})).then((function(){t.matchFavourites()})).catch((function(){t.error=!0}))},matchFavourites:function(){var e=this;console.log(this.favouritesUsers);for(var t=function(t){e.favouritesUsers.find((function(s){return s.id==e.$parent.users[t].id}))&&(console.log("entra"),1==e.$parent.users[t].favourite?(e.$parent.users[t].favourite=!1,e.user.favourite=!1,console.log("es false")):(e.$parent.users[t].favourite=!0,e.user.favourite=!0,console.log("es true")))},s=0;s<this.$parent.users.length;s++)t(s)}}}),O=F,S=(s("72d6"),Object(c["a"])(O,C,k,!1,null,"70b16c82",null)),D=S.exports,$=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("mdb-container",{staticClass:"mt-4"},[s("mdb-row",{staticClass:"d-flex justify-content-end"},[s("mdb-btn",{staticClass:"mr-3",attrs:{color:"primary"},on:{click:function(t){return e.$router.push({name:"Users"})}}},[s("mdb-icon",{attrs:{icon:"arrow-left"}})],1),s("mdb-btn",{staticClass:"mr-3",attrs:{color:"primary"},on:{click:e.exportData}},[s("mdb-icon",{attrs:{icon:"file-download"}})],1)],1),s("mdb-row",{staticClass:"table-height"},[s("mdb-col",[s("mdb-tbl",[s("mdb-tbl-head",[s("tr",[s("th",[e._v("Género")]),s("th",[e._v("Nombre")]),s("th",[e._v("Email")]),s("th",[e._v("Nacionalidad")]),s("th",[e._v("Fecha de nacimiento")]),s("th",[e._v("Fecha de registro")])])]),e.users.length>0?s("mdb-tbl-body",e._l(e.users,(function(t){return s("tr",{key:t.name},[s("td",{staticClass:"width-gender"},[e._v(e._s(t.gender))]),s("td",{staticClass:"width-name"},[e._v(e._s(t.name))]),s("td",{staticClass:"width-email"},[e._v(e._s(t.email))]),s("td",[e._v(e._s(t.nationality))]),s("td",[e._v(e._s(e._f("moment")(t.birthdate,"MM-DD-YYYY")))]),s("td",[e._v(e._s(e._f("moment")(t.registrationDate,"MM-DD-YYYY")))])])})),0):s("mdb-tbl-body",{staticClass:"table-body"},[s("tr",[s("td",[s("h4",[e._v("NO DATA")])])])])],1)],1)],1)],1)},P=[],U=s("2909"),N=(s("5319"),s("ac1f"),s("a15b"),s("99af"),s("b64b"),s("07ac"),{name:"Users",data:function(){return{users:[]}},components:{mdbContainer:p["mdbContainer"],mdbRow:p["mdbRow"],mdbCol:p["mdbCol"],mdbTbl:p["mdbTbl"],mdbTblHead:p["mdbTblHead"],mdbBtn:p["mdbBtn"],mdbIcon:p["mdbIcon"],mdbTblBody:p["mdbTblBody"]},methods:{exportData:function(){var e="data:text/csv;charset=utf-8,";e+=[Object.keys(this.users[0]).join(";")].concat(Object(U["a"])(this.users.map((function(e){return Object.values(e).join(";")})))).join("\n").replace(/(^\[)|(\]$)/gm,"");var t=encodeURI(e),s=document.createElement("a");s.setAttribute("href",t),s.setAttribute("download","export.csv"),s.click()},filterItems:function(){this.users=this.users.filter((function(e){return 1==e.favourite}))}},mounted:function(){this.users=this.$parent.users,this.filterItems()}}),z=N,I=Object(c["a"])(z,$,P,!1,null,null,null),T=I.exports;a["a"].use(m["a"]);var R=[{path:"/",name:"Users",component:w},{path:"/details",name:"Details",component:D,props:!0},{path:"/exports",name:"Exports",component:T},{path:"*",redirect:"/",component:w}],E=new m["a"]({mode:"history",base:"/",routes:R}),Y=E,M=s("2f62");a["a"].use(M["a"]);var B=new M["a"].Store({state:{users:[],usersFiltered:[],numUsers:1,usersPag:[],page:1,value:[0,122],natSelected:"",genderSelected:""},mutations:{},actions:{},modules:{}});s("6912"),a["a"].config.productionTip=!1,a["a"].use(s("2ead")),new a["a"]({router:Y,store:B,render:function(e){return e(l)}}).$mount("#app")},"5c0b":function(e,t,s){"use strict";s("9c0c")},6912:function(e,t,s){s("d435")},"72d6":function(e,t,s){"use strict";s("432e")},"9c0c":function(e,t,s){},d435:function(e,t,s){"use strict";s.r(t);var a=s("2b0e"),n=s("bc3a"),r=s.n(n),o=s("2106"),i=s.n(o),c="https://randomuser.me";r.a.defaults.baseURL=c,a["a"].use(i.a,r.a)}});
//# sourceMappingURL=app.6f229b5f.js.map