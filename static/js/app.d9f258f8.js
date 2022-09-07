(function(e){function t(t){for(var n,o,s=t[0],c=t[1],l=t[2],h=0,f=[];h<s.length;h++)o=s[h],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&f.push(r[o][0]),r[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);u&&u(t);while(f.length)f.shift()();return a.push.apply(a,l||[]),i()}function i(){for(var e,t=0;t<a.length;t++){for(var i=a[t],n=!0,s=1;s<i.length;s++){var c=i[s];0!==r[c]&&(n=!1)}n&&(a.splice(t--,1),e=o(o.s=i[0]))}return e}var n={},r={app:0},a=[];function o(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=e,o.c=n,o.d=function(e,t,i){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(i,n,function(t){return e[t]}.bind(null,n));return i},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=c;a.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"2fa2":function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},r=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{attrs:{id:"cesiumContainer"}})])}],a=i("c218"),o={name:"CesiumMap",data:function(){return{}},components:{},methods:{},mounted:function(){a["a"].init()}},s=o,c=(i("789e"),i("2877")),l=Object(c["a"])(s,n,r,!1,null,null,null);t["default"]=l.exports},"4f8e":function(e,t,i){},5143:function(e,t,i){},"56d7":function(e,t,i){"use strict";i.r(t);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[i("router-view")],1)},a=[],o=(i("5c0b"),i("2877")),s={},c=Object(o["a"])(s,r,a,!1,null,null,null),l=c.exports,u=i("8c4f"),h=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"home"},[i("CesiumMap"),i("CesiumTools"),i("TiltPhotography")],1)},f=[],d={name:"Home",components:{}},v=d,m=Object(o["a"])(v,h,f,!1,null,"0604f9e8",null),p=m.exports;n["a"].use(u["a"]);var g=[{path:"/",name:"Home",component:p}],b=new u["a"]({mode:"hash",base:"",routes:g}),y=b,_=i("2f62"),w=i("fcc2"),C={changeTiltPhotographyVisibility:function(e,t){e.tiltPhotographyVisibility=t}},O=C;n["a"].use(_["a"]);var x=new _["a"].Store({state:w["a"],mutations:O,actions:{},modules:{}}),P=(i("d3b7"),i("159b"),i("ddb0"),i("b0c0"),i("ffe0")),T={install:function(e){P.keys().forEach((function(t){var i=P(t).default;e.component(i.name,i)}))}},M=i("5143"),k=i.n(M);n["a"].use(k.a),n["a"].use(T),n["a"].config.productionTip=!1,new n["a"]({router:y,store:x,render:function(e){return e(l)}}).$mount("#app")},"5c0b":function(e,t,i){"use strict";var n=i("9c0c"),r=i.n(n);r.a},"789e":function(e,t,i){"use strict";var n=i("9288"),r=i.n(n);r.a},"78a0":function(e,t,i){"use strict";var n=i("ab03"),r=i.n(n);r.a},9288:function(e,t,i){},"9c0c":function(e,t,i){},a9c3:function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"cesium-tools"},[i("div",{staticClass:"cesium-tools-btn",on:{click:e.resetZoomView}},[e._v("H")]),i("div",{staticClass:"cesium-tools-btn",on:{click:e.resetPitch}},[e._v("L")]),i("div",{staticClass:"cesium-tools-btn",on:{click:function(t){return e.changeZoomLevel(1)}}},[e._v("+")]),i("div",{staticClass:"cesium-tools-btn"},[e._v(e._s(e.currentLevel))]),i("div",{staticClass:"cesium-tools-btn",on:{click:function(t){return e.changeZoomLevel(-1)}}},[e._v("-")]),i("div",{class:"cesium-tools-btn "+(e.tiltPhotographyVisibility?"cesium-tools-btn-hover":""),on:{click:e.changeTiltPhotographyVisibility}},[e._v(" 倾 ")])])},r=[],a=i("c218"),o={name:"CesiumTools",data:function(){return{currentLevel:2,tiltPhotographyVisibility:!1}},components:{},methods:{changeTiltPhotographyVisibility:function(){this.tiltPhotographyVisibility=!this.tiltPhotographyVisibility,this.$store.commit("changeTiltPhotographyVisibility",this.tiltPhotographyVisibility)},resetZoomView:function(){a["a"].resetZoomView()},resetPitch:function(){a["a"].resetPitch()},changeZoomLevel:function(e){var t=this.currentLevel+e;t<1||t>24||(this.currentLevel=t,a["a"].zoomLevel(t))},_zoomChanged:function(){var e=Math.ceil(a["a"].viewer.camera.positionCartographic.height);this.currentLevel=+a["a"].heightToZoom(e)}},mounted:function(){a["a"].viewer.camera.moveEnd.addEventListener(this._zoomChanged)}},s=o,c=(i("cc73"),i("2877")),l=Object(c["a"])(s,n,r,!1,null,"da065ece",null);t["default"]=l.exports},ab03:function(e,t,i){},c218:function(e,t,i){"use strict";i("d3b7"),i("4ae1");var n=i("d4ec"),r=i("bee2"),a=i("257e"),o=i("262e"),s=i("99de"),c=i("7e84"),l=i("9072"),u=(i("b680"),i("fcc2")),h=(i("a434"),i("159b"),i("ddb0"),function(e){if(e.extensionsUsed){var t=e.extensionsUsed.indexOf("KHR_technique_webgl"),i=e.extensionsRequired.indexOf("KHR_technique_webgl");if(-1!==t){e.extensionsRequired.splice(i,1,"KHR_techniques_webgl"),e.extensionsUsed.splice(t,1,"KHR_techniques_webgl"),e.extensions=e.extensions||{},e.extensions["KHR_techniques_webgl"]={},e.extensions["KHR_techniques_webgl"].programs=e.programs,e.extensions["KHR_techniques_webgl"].shaders=e.shaders,e.extensions["KHR_techniques_webgl"].techniques=e.techniques;var n=e.extensions["KHR_techniques_webgl"].techniques;e.materials.forEach((function(t,i){e.materials[i].extensions["KHR_technique_webgl"].values=e.materials[i].values,e.materials[i].extensions["KHR_techniques_webgl"]=e.materials[i].extensions["KHR_technique_webgl"];var r=e.materials[i].extensions["KHR_techniques_webgl"];for(var a in r.values){var o=n[r.technique].uniforms;for(var s in o)if(o[s]===a){r.values[s]=r.values[a],delete r.values[a];break}}})),n.forEach((function(e){for(var t in e.attributes){var i=e.attributes[t];e.attributes[t]=e.parameters[i]}for(var n in e.uniforms){i=e.uniforms[n];e.uniforms[n]=e.parameters[i]}}))}}}),f=function(){Object.defineProperties(Cesium.Model.prototype,{_cachedGltf:{set:function(e){this._vtxf_cachedGltf=e,this._vtxf_cachedGltf&&this._vtxf_cachedGltf._gltf&&h(this._vtxf_cachedGltf._gltf)},get:function(){return this._vtxf_cachedGltf}}})};function d(e){var t=v();return function(){var i,n=Object(c["a"])(e);if(t){var r=Object(c["a"])(this).constructor;i=Reflect.construct(n,arguments,r)}else i=n.apply(this,arguments);return Object(s["a"])(this,i)}}function v(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}var m=window,p=m.Cesium,g=function(e){Object(o["a"])(i,e);var t=d(i);function i(){var e;return Object(n["a"])(this,i),e=t.call(this),e.mapCenterLongitude=107.34145981478143,e.mapCenterLatitude=36.26907364872889,e.viewer=null,e.state=u["a"],window.mapSdk=Object(a["a"])(e),f(),e}return Object(r["a"])(i,[{key:"init",value:function(){p.Ion.defaultAccessToken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI1Y2EzNzVjYS04NmQyLTRmMTAtODJiOS1lZGM5ZDRiM2FhOWQiLCJpZCI6MTA2MzA4LCJpYXQiOjE2NjE4MjM0MTZ9.DGLjWbAslgVOr34TMPn0tN2UWXqafI4qWCGxzQ9G_nI",this.viewer=new p.Viewer("cesiumContainer",{animation:!1,baseLayerPicker:!1,geocoder:!1,infoBox:!1,selectionIndicator:!1,navigationHelpButton:!1,fullscreenButton:!1,timeline:!1,clock:new p.Clock,shadows:!0,shouldAnimate:!0}),this.viewer._cesiumWidget._creditContainer.style.display="none",this.resetZoomView(),this.initOtherMap()}},{key:"initOtherMap",value:function(){this.viewer.imageryLayers.addImageryProvider(new p.UrlTemplateImageryProvider({url:"https://webst04.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}"})),this.viewer.imageryLayers.addImageryProvider(new p.WebMapTileServiceImageryProvider({url:"https://onemapserver.img.net/OneMapServer/rest/services/2020_2M_05/Transfer"}))}},{key:"add3DTileset",value:function(e){var t=this,i=e.url,n=e.heightDifference,r=void 0===n?0:n;if(i){this.tilesetObj&&(this.tilesetObj.destroy(),this.tilesetObj=null);var a=this.viewer.scene.primitives.add(new p.Cesium3DTileset({url:i,maximumMemoryUsage:100,maximumScreenSpaceError:20,maximumNumberOfLoadedTiles:1e3,shadows:!1,skipLevelOfDetail:!0,baseScreenSpaceError:1024,skipScreenSpaceErrorFactor:16,skipLevels:1,immediatelyLoadDesiredLevelOfDetail:!1,loadSiblings:!1,cullWithChildrenBounds:!0,dynamicScreenSpaceError:!0,dynamicScreenSpaceErrorDensity:.00278,dynamicScreenSpaceErrorFactor:4,dynamicScreenSpaceErrorHeightFalloff:.25}));this.viewer.scene.primitives.add(a),a.readyPromise.then((function(e){var i=p.Cartographic.fromCartesian(e.boundingSphere.center),n=p.Cartesian3.fromRadians(i.longitude,i.latitude,0),a=p.Cartesian3.fromRadians(i.longitude,i.latitude,r),o=p.Cartesian3.subtract(a,n,new p.Cartesian3);e.modelMatrix=p.Matrix4.fromTranslation(o),t.viewer.flyTo(e),console.log("HJJ -> MapSdk -> add3DTileset -> translation",o)})),this.tilesetObj=a}}},{key:"flyToPoint",value:function(e){var t=e.longitude,i=void 0===t?this.mapCenterLongitude:t,n=e.latitude,r=void 0===n?this.mapCenterLatitude:n,a=e.duration,o=void 0===a?2:a,s=e.height,c=void 0===s?5e3:s,l=e.heading,u=void 0===l?0:l,h=e.pitch,f=void 0===h?-89:h;this.viewer.scene.camera.flyTo({destination:p.Cartesian3.fromDegrees(i,r,c),orientation:{heading:p.Math.toRadians(u),pitch:p.Math.toRadians(f),roll:0},duration:o})}},{key:"resetZoomView",value:function(){this.flyToPoint({longitude:this.mapCenterLongitude,latitude:this.mapCenterLatitude,duration:1,height:this.zoomToHeight(2),heading:0,pitch:-90})}},{key:"resetPitch",value:function(){var e=this.getCurrentMapCenterPoint(),t=e.longitude,i=e.latitude;this.viewer.scene.camera.flyTo({destination:p.Cartesian3.fromDegrees(t,i,Math.ceil(this.viewer.camera.positionCartographic.height)),orientation:{heading:p.Math.toRadians(0),pitch:p.Math.toRadians(-90),roll:0},duration:2})}},{key:"zoomLevel",value:function(e){var t=this.zoomToHeight(e),i=this.getCurrentMapCenterPoint(),n=i.longitude,r=i.latitude;this.viewer.scene.camera.flyTo({destination:p.Cartesian3.fromDegrees(n,r,t),duration:1})}},{key:"getCurrentMapCenterPoint",value:function(){var e=this.viewer.camera.pickEllipsoid(new p.Cartesian2(this.viewer.canvas.clientWidth/2,this.viewer.canvas.clientHeight/2)),t=p.Ellipsoid.WGS84.cartesianToCartographic(e);return{longitude:180*t.longitude/Math.PI,latitude:180*t.latitude/Math.PI}}},{key:"zoomToHeight",value:function(e){var t=40487.57,i=7096758e-11,n=91610.74,r=-40467.74;return Math.round(n*Math.pow((t-r)/(e-r)-1,1/i))}},{key:"heightToZoom",value:function(e){var t=40487.57,i=7096758e-11,n=91610.74,r=-40467.74,a=Math.round(r+(t-r)/(1+Math.pow(e/n,i))).toFixed();return a<1&&(a=1),a>24&&(a=24),+a}}]),i}(Object(l["a"])(EventTarget));t["a"]=new g},c570:function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.tiltPhotographyVisibility?i("div",{staticClass:"tilt-photography-tools"},[i("div",{staticClass:"title"},[e._v("加载倾斜摄影")]),i("div",{staticClass:"list"},e._l(e.cesium3DTilesetList,(function(t,n){return i("div",{key:n,staticClass:"list-item",on:{click:function(i){return e.clickItem(t)}}},[e._v(" "+e._s(t.label)+" ")])})),0)]):e._e()},r=[],a=i("5530"),o=i("2f62"),s=i("c218"),c={name:"TiltPhotography",data:function(){return{cesium3DTilesetList:[{label:"高桥",url:"https://higis.img.net/b3dm/gaoqiao_b3dm/tileset.json",heightDifference:-45},{label:"江华县白芒营镇小贝村",url:"https://higis.img.net/b3dm/3D_Unknown/tileset.json",heightDifference:-270}]}},computed:Object(a["a"])({},Object(o["b"])({tiltPhotographyVisibility:function(e){return e.tiltPhotographyVisibility||!1}})),components:{},methods:{clickItem:function(e){s["a"].add3DTileset(e)}}},l=c,u=(i("78a0"),i("2877")),h=Object(u["a"])(l,n,r,!1,null,"4c0e3b5b",null);t["default"]=h.exports},cc73:function(e,t,i){"use strict";var n=i("4f8e"),r=i.n(n);r.a},fcc2:function(e,t,i){"use strict";var n={tiltPhotographyVisibility:!1};t["a"]=n},ffe0:function(e,t,i){var n={"./CesiumMap.vue":"2fa2","./CesiumTools.vue":"a9c3","./TiltPhotography.vue":"c570"};function r(e){var t=a(e);return i(t)}function a(e){if(!i.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=a,e.exports=r,r.id="ffe0"}});
//# sourceMappingURL=app.d9f258f8.js.map