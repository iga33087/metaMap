(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21f2cd"],{d968:function(e,t,o){"use strict";o.r(t);var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return e.weatherElement?o("div",{staticClass:"home"},[o("div",{staticClass:"homeTitle"},[e._v("未來1週天氣預報"),o("Timer")],1),o("div",{staticClass:"homeSlider"},[o("div",{staticClass:"homeSliderTitle"},[e._v("請選擇時段")]),o("el-slider",{attrs:{min:0,max:e.timeList.length-1,step:1,"show-stops":"","show-tooltip":!1},model:{value:e.time,callback:function(t){e.time=t},expression:"time"}}),o("div",{staticClass:"homeSliderLabel"},e._l(e.timeList,(function(t,n){return o("div",{key:n,staticClass:"homeSliderLabelItem",on:{click:function(t){e.time=n}}},[e._v(e._s(t))])})),0)],1),o("div",{staticClass:"homeBox"},[o("div",{staticClass:"homeBoxCol"},[o("HomeBoxColItem",{attrs:{title:"Wx(天氣現象)",icon:e.getIcon(Number(e.weatherElement.records.locations[0].location[e.getWeatherIndex].weatherElement[6].time[e.time].elementValue[1].value)),content:e.weatherElement.records.locations[0].location[e.getWeatherIndex].weatherElement[6].time[e.time].elementValue[0].value}}),o("HomeBoxColItem",{attrs:{title:"PoP(降雨機率)",content:e.weatherElement.records.locations[0].location[e.getWeatherIndex].weatherElement[0].time[e.time].elementValue[0].value+"%"}}),o("HomeBoxColItem",{attrs:{title:"平均濕度",content:e.weatherElement.records.locations[0].location[e.getWeatherIndex].weatherElement[2].time[e.time].elementValue[0].value+"%"}}),o("HomeBoxColItem",{attrs:{title:"紫外線指數",content:e.weatherElement.records.locations[0].location[e.getWeatherIndex].weatherElement[9].time[e.time]?e.weatherElement.records.locations[0].location[e.getWeatherIndex].weatherElement[9].time[e.time].elementValue[1].value:""}}),o("HomeBoxColItem",{attrs:{title:"MinT(最低溫度)",content:e.weatherElement.records.locations[0].location[e.getWeatherIndex].weatherElement[8].time[e.time].elementValue[0].value+"°C"}}),o("HomeBoxColItem",{attrs:{title:"MaxT(最高溫度)",content:e.weatherElement.records.locations[0].location[e.getWeatherIndex].weatherElement[12].time[e.time].elementValue[0].value+"°C"}})],1),o("Map",{attrs:{map:e.mapAndColor,pathMode:"week",time:e.time,mapMode:e.mapMode,weatherElement:e.weatherElement,iconPoint:e.iconPointAndIcon},on:{getFocus:e.getFocus}},[o("div",{staticClass:"mapMode"},[o("div",{staticClass:"mapModeItem",class:{mapModeChange:0==e.mapMode},on:{click:function(t){return e.changeMapMode(0)}}},[e._v("降雨機率")]),o("div",{staticClass:"mapModeItem",class:{mapModeChange:8==e.mapMode},on:{click:function(t){return e.changeMapMode(8)}}},[e._v("最低溫度")]),o("div",{staticClass:"mapModeItem",class:{mapModeChange:4==e.mapMode},on:{click:function(t){return e.changeMapMode(12)}}},[e._v("最高溫度")]),o("div",{staticClass:"mapModeItem",class:{mapModeChange:1==e.mapMode},on:{click:function(t){return e.changeMapMode(1)}}},[e._v("平均溫度")]),o("div",{staticClass:"mapModeItem",class:{mapModeChange:2==e.mapMode},on:{click:function(t){return e.changeMapMode(2)}}},[e._v("平均濕度")]),o("div",{staticClass:"mapModeItem",class:{mapModeChange:9==e.mapMode},on:{click:function(t){return e.changeMapMode(9)}}},[e._v("紫外線指數")])]),o("div",{staticClass:"country"},[e._v(e._s(e.focusAear.properties&&e.focusAear.properties.COUNTYNAME?e.focusAear.properties.COUNTYNAME:""))])]),o("div",{staticClass:"homeBoxCol"},[o("RouterList")],1)],1)]):e._e()},a=[],i=(o("4de4"),o("c975"),o("d81d"),o("a9e3"),o("96cf"),o("1da1")),r=o("b85c"),s=o("a0be"),c=o("84ac"),l=o("b4f8"),m=o("1b99"),u=o("82e9"),d=o("3e16"),h={name:"Home",components:{Map:s["a"],Timer:c["a"],HomeBoxColItem:l["a"],RouterList:m["a"]},data:function(){return{time:0,mapMode:0,weatherElement:"",focusAear:d.features[6],iconPoint:u}},computed:{mapAndColor:function(){var e=d;for(var t in e.features)e.features[t].properties.color=this.getColor(e.features[t]),t==this.getFocusIndex&&(e.features[t].properties.color="rgba(255,255,255,0.5)");return JSON.parse(JSON.stringify(e))},timeList:function(){var e=[],t=this.weatherElement.records.locations[0].location[0].weatherElement[this.mapMode].time;for(var o in t)0==o?e.push(this.$global.MMDDHHmm(t[o].startTime)):e.push(this.$global.MMDDHHmm(t[o].endTime));return e},getFocusIndex:function(){if(!this.focusAear)return 0;var e=d.features.map((function(e){return e.properties.COUNTYNAME})),t=e.indexOf(this.focusAear.properties.COUNTYNAME);return t},getWeatherIndex:function(){if(!this.focusAear)return 0;var e=this.weatherElement.records.locations[0].location.map((function(e){return e.locationName})),t=e.indexOf(this.focusAear.properties.COUNTYNAME);return t},iconPointAndIcon:function(){var e,t=this.iconPoint,o=Object(r["a"])(t);try{for(o.s();!(e=o.n()).done;){var n=e.value,a=this.weatherElement.records.locations[0].location.map((function(e){return e.locationName})),i=a.indexOf(n.country),s=Number(this.weatherElement.records.locations[0].location[i].weatherElement[6].time[this.time].elementValue[1].value);n.icon=this.getIcon(s)}}catch(c){o.e(c)}finally{o.f()}return t}},created:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$api.FD0047091();case 2:e.weatherElement=t.sent;case 3:case"end":return t.stop()}}),t)})))()},methods:{getFocus:function(e){this.focusAear=e},getIcon:function(e){for(var t="",o=[{num:1,icon:"el-icon-sunny"},{num:4,icon:"el-icon-cloudy-and-sunny"},{num:7,icon:"el-icon-cloudy"},{num:10,icon:"el-icon-light-rain"},{num:14,icon:"el-icon-heavy-rain"}],n=0,a=o;n<a.length;n++){var i=a[n];e>=i.num&&(t=i.icon)}return t},getColor:function(e){var t=this.weatherElement.records.locations[0].location.filter((function(t){return t.locationName==e.properties.COUNTYNAME}))[0],o=t.weatherElement[this.mapMode].time[this.time].elementValue[0].value;o=9==this.mapMode?.1*Number(o):.01*Number(o);var n=0==this.mapMode?"rgba(0,0,255,"+o+")":9==this.mapMode?"rgba(112,0,209,"+o+")":"rgba(255,0,0,"+o+")";return n},changeMapMode:function(e){this.mapMode=e,this.time>this.timeList.length-1&&(this.time=this.timeList.length-1)}}},p=h,f=o("2877"),M=Object(f["a"])(p,n,a,!1,null,null,null);t["default"]=M.exports}}]);
//# sourceMappingURL=chunk-2d21f2cd.6ef8019b.js.map