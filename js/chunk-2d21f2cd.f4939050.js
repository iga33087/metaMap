(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21f2cd"],{d968:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.weatherElement?n("div",{staticClass:"home"},[n("div",{staticClass:"homeTitle"},[e._v("未來1週天氣預報"),n("Timer")],1),n("div",{staticClass:"homeSlider"},[n("div",{staticClass:"homeSliderTitle"},[e._v("請選擇時段")]),n("el-slider",{attrs:{min:0,max:e.timeList.length-1,step:1,"show-stops":"","show-tooltip":!1},model:{value:e.time,callback:function(t){e.time=t},expression:"time"}}),n("div",{staticClass:"homeSliderLabel"},e._l(e.timeList,(function(t,a){return n("div",{key:a,staticClass:"homeSliderLabelItem",on:{click:function(t){e.time=a}}},[e._v(e._s(t))])})),0)],1),n("div",{staticClass:"homeBox"},[n("div",{staticClass:"homeBoxCol"},[n("HomeBoxColItem",{attrs:{title:"Wx(天氣現象)",icon:e.getIcon(Number(e.weatherElement.records.locations[0].location[e.getWeatherIndex].weatherElement[6].time[e.time].elementValue[1].value)),content:e.weatherElement.records.locations[0].location[e.getWeatherIndex].weatherElement[6].time[e.time].elementValue[0].value}}),n("HomeBoxColItem",{attrs:{title:"PoP(降雨機率)",content:e.weatherElement.records.locations[0].location[e.getWeatherIndex].weatherElement[0].time[e.time].elementValue[0].value+"%"}}),n("HomeBoxColItem",{attrs:{title:"平均濕度",content:e.weatherElement.records.locations[0].location[e.getWeatherIndex].weatherElement[2].time[e.time].elementValue[0].value+"%"}}),n("HomeBoxColItem",{attrs:{title:"紫外線指數",content:e.weatherElement.records.locations[0].location[e.getWeatherIndex].weatherElement[9].time[e.time]?e.weatherElement.records.locations[0].location[e.getWeatherIndex].weatherElement[9].time[e.time].elementValue[1].value:""}}),n("HomeBoxColItem",{attrs:{title:"MinT(最低溫度)",content:e.weatherElement.records.locations[0].location[e.getWeatherIndex].weatherElement[8].time[e.time].elementValue[0].value+"°C"}}),n("HomeBoxColItem",{attrs:{title:"MaxT(最高溫度)",content:e.weatherElement.records.locations[0].location[e.getWeatherIndex].weatherElement[12].time[e.time].elementValue[0].value+"°C"}})],1),n("Map",{attrs:{map:e.mapAndColor,pathMode:"week",time:e.time,mapMode:e.mapMode,weatherElement:e.weatherElement,iconPoint:e.iconPointAndIcon},on:{getFocus:e.getFocus}},[n("div",{staticClass:"mapMode"},[n("div",{staticClass:"mapModeItem",class:{mapModeChange:0==e.mapMode},on:{click:function(t){return e.changeMapMode(0)}}},[e._v("降雨機率")]),n("div",{staticClass:"mapModeItem",class:{mapModeChange:8==e.mapMode},on:{click:function(t){return e.changeMapMode(8)}}},[e._v("最低溫度")]),n("div",{staticClass:"mapModeItem",class:{mapModeChange:12==e.mapMode},on:{click:function(t){return e.changeMapMode(12)}}},[e._v("最高溫度")]),n("div",{staticClass:"mapModeItem",class:{mapModeChange:1==e.mapMode},on:{click:function(t){return e.changeMapMode(1)}}},[e._v("平均溫度")]),n("div",{staticClass:"mapModeItem",class:{mapModeChange:2==e.mapMode},on:{click:function(t){return e.changeMapMode(2)}}},[e._v("平均濕度")]),n("div",{staticClass:"mapModeItem",class:{mapModeChange:9==e.mapMode},on:{click:function(t){return e.changeMapMode(9)}}},[e._v("紫外線指數")])]),n("div",{staticClass:"country"},[e._v(e._s(e.focusAear.properties&&e.focusAear.properties.COUNTYNAME?e.focusAear.properties.COUNTYNAME:""))])]),n("div",{staticClass:"homeBoxCol"},[n("LineBarChart",{attrs:{weatherElement:e.weatherElement,mapMode:e.mapMode,time:e.time}})],1)],1)]):e._e()},o=[],r=n("a34a"),i=n.n(r),l=n("a0be"),s=n("84ac"),c=n("b4f8"),m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"lineBarChart"},[n("div",{staticClass:"homeBoxColItemTitle"},[e._v(e._s(e.getTitle()))]),n("div",{staticClass:"lineBarChartItem"},[n("div",{staticClass:"lineBarChartItemTitle"}),n("div",{staticClass:"lineBarChartNum"},[n("div",{staticClass:"lineBarChartNumMin"},[e._v(e._s(e.min))]),n("div",{staticClass:"lineBarChartNumMax"},[e._v(e._s(e.max))])])]),e._l(e.weatherElement.records.locations[0].location,(function(t,a){return n("div",{key:a,staticClass:"lineBarChartItem"},[n("div",{staticClass:"lineBarChartItemTitle"},[e._v(e._s(t.locationName))]),n("div",{staticClass:"lineBarChartItemBar",style:{width:" "!=t.weatherElement[e.mapMode].time[e.time].elementValue[0].value?Number(t.weatherElement[e.mapMode].time[e.time].elementValue[0].value-e.min)*e.eachWidth+"px":"0px"}},[e._v(e._s(t.weatherElement[e.mapMode].time[e.time].elementValue[0].value))])])}))],2)},u=[];function h(e){return v(e)||f(e)||p(e)||d()}function d(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function p(e,t){if(e){if("string"===typeof e)return M(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?M(e,t):void 0}}function f(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function v(e){if(Array.isArray(e))return M(e)}function M(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var C={props:["weatherElement","mapMode","time"],computed:{min:function(){var e=this,t=this.weatherElement.records.locations[0].location.map((function(t){return t.weatherElement[e.mapMode].time[e.time].elementValue[0].value}));return Math.min.apply(Math,h(t))},max:function(){var e=this,t=this.weatherElement.records.locations[0].location.map((function(t){return t.weatherElement[e.mapMode].time[e.time].elementValue[0].value}));return Math.max.apply(Math,h(t))},eachWidth:function(){var e=120/(this.max-this.min);return e}},methods:{getTitle:function(){var e=0==this.mapMode?"降雨機率(%)":8==this.mapMode?"最低溫度(°C)":12==this.mapMode?"最高溫度(°C)":1==this.mapMode?"平均溫度(°C)":2==this.mapMode?"平均濕度(RH)":"紫外線指數";return e}}},w=C,g=n("2877"),E=Object(g["a"])(w,m,u,!1,null,null,null),y=E.exports,x=n("82e9"),I=n("3e16");function b(e,t,n,a,o,r,i){try{var l=e[r](i),s=l.value}catch(c){return void n(c)}l.done?t(s):Promise.resolve(s).then(a,o)}function A(e){return function(){var t=this,n=arguments;return new Promise((function(a,o){var r=e.apply(t,n);function i(e){b(r,a,o,i,l,"next",e)}function l(e){b(r,a,o,i,l,"throw",e)}i(void 0)}))}}function _(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=N(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var a=0,o=function(){};return{s:o,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,i=!0,l=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return i=e.done,e},e:function(e){l=!0,r=e},f:function(){try{i||null==n.return||n.return()}finally{if(l)throw r}}}}function N(e,t){if(e){if("string"===typeof e)return B(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?B(e,t):void 0}}function B(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var T={name:"Home",components:{Map:l["a"],Timer:s["a"],HomeBoxColItem:c["a"],LineBarChart:y},data:function(){return{time:0,mapMode:0,weatherElement:"",focusAear:I.features[6],iconPoint:x}},computed:{mapAndColor:function(){var e=I;for(var t in e.features)e.features[t].properties.color=this.getColor(e.features[t]),t==this.getFocusIndex&&(e.features[t].properties.color="rgba(255,255,255,0.5)");return JSON.parse(JSON.stringify(e))},timeList:function(){var e=[],t=this.weatherElement.records.locations[0].location[0].weatherElement[this.mapMode].time;for(var n in t)0==n?e.push(this.$global.MMDDHHmm(t[n].startTime)):e.push(this.$global.MMDDHHmm(t[n].endTime));return e},getFocusIndex:function(){if(!this.focusAear)return 0;var e=I.features.map((function(e){return e.properties.COUNTYNAME})),t=e.indexOf(this.focusAear.properties.COUNTYNAME);return t},getWeatherIndex:function(){if(!this.focusAear)return 0;var e=this.weatherElement.records.locations[0].location.map((function(e){return e.locationName})),t=e.indexOf(this.focusAear.properties.COUNTYNAME);return t},iconPointAndIcon:function(){var e,t=this.iconPoint,n=_(t);try{for(n.s();!(e=n.n()).done;){var a=e.value,o=this.weatherElement.records.locations[0].location.map((function(e){return e.locationName})),r=o.indexOf(a.country),i=Number(this.weatherElement.records.locations[0].location[r].weatherElement[6].time[this.time].elementValue[1].value);a.icon=this.getIcon(i)}}catch(l){n.e(l)}finally{n.f()}return t}},created:function(){var e=this;return A(i.a.mark((function t(){return i.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.$store.dispatch("loading",!0),t.next=3,e.$api.FD0047091();case 3:e.weatherElement=t.sent,e.$store.dispatch("loading",!1);case 5:case"end":return t.stop()}}),t)})))()},methods:{getFocus:function(e){this.focusAear=e},getIcon:function(e){for(var t="",n=[{num:1,icon:"el-icon-sunny"},{num:4,icon:"el-icon-cloudy-and-sunny"},{num:7,icon:"el-icon-cloudy"},{num:10,icon:"el-icon-light-rain"},{num:14,icon:"el-icon-heavy-rain"}],a=0,o=n;a<o.length;a++){var r=o[a];e>=r.num&&(t=r.icon)}return t},getColor:function(e){var t=this.weatherElement.records.locations[0].location.filter((function(t){return t.locationName==e.properties.COUNTYNAME}))[0],n=t.weatherElement[this.mapMode].time[this.time].elementValue[0].value;n=9==this.mapMode?.1*Number(n):.01*Number(n);var a=0==this.mapMode||2==this.mapMode?"rgba(0,0,255,"+n+")":9==this.mapMode?"rgba(112,0,209,"+n+")":"rgba(255,0,0,"+n+")";return a},changeMapMode:function(e){this.mapMode=e,this.time>this.timeList.length-1&&(this.time=this.timeList.length-1)}}},O=T,S=Object(g["a"])(O,a,o,!1,null,null,null);t["default"]=S.exports}}]);
//# sourceMappingURL=chunk-2d21f2cd.f4939050.js.map