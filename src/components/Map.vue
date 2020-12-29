<template>
  <div class="map">
    <slot></slot>
    <div class="mapPoint" v-for="(item,index) in iconPoint" :key="index" :style="{'top':item.y-20+'px','left':item.x-10+'px'}">
      <i :class="item.icon"></i>
    </div>
    <svg width=800 height=700 class="svg">
      <g></g>
    </svg>
  </div>
</template>

<script>
// @ is an alias to /src
import map from '@/assets/json/map.json'
import * as d3 from "d3";

export default {
  props:["map","time","weatherElement","mapMode","iconPoint","pathMode"],
  data() {
    return {
      jsonData:map,
      lastChange:""
    }
  },
  watch: {
    map() {
      this.clearSVG()
      this.initSVG()
    },
    time() {
      this.clearSVG()
      this.initSVG()
    },
    mapMode() {
      this.clearSVG()
      this.initSVG()
    }
  },
  async mounted() {
    this.initSVG()
    //console.log(d3)
    //console.log(this.weatherElement)
  },
  methods: {
    initSVG() {
      var that=this
      var projection = d3.geoEquirectangular().translate([-20170,4400]).scale(9800)
      var geoGenerator = d3.geoPath()
        .projection(projection);
      var u = d3.select('.svg g')
        .selectAll('path')
        .data(this.map.features);
      u.enter()
        .append('path')
        .attr('d', geoGenerator)
        .attr('fill', function(e) {
          //return that.getColor(e)
          return e.properties.color
        })
        .attr('stroke', '#fff')
        .attr('stroke-width', 2)
        .on("click", function(e,data) {
          console.log("data",data)
          that.$emit("getFocus",data)
        })
        .on("mouseover", function() {
          d3.select(this).attr('stroke', "rgba(255,255,0)")
        })
        .on("mouseout", function() {
          d3.select(this).attr('stroke', "#fff")
        })
    },
    getColor(x) {
      let arr=""
      if(this.pathMode=='week') {
        arr=this.weatherElement.records.locations[0].location.filter(res=>res.locationName==x.properties.COUNTYNAME)[0]
      }
      else {
        arr=this.weatherElement.records.location.filter(res=>res.locationName==x.properties.COUNTYNAME)[0]
      }
      let value=""
      if(this.pathMode=='week') {
        value=arr.weatherElement[this.mapMode].time[this.time].elementValue[0].value
      }
      else {
        value=arr.weatherElement[this.mapMode].time[this.time].parameter.parameterName
      }
      value=value.length==1 ? "0"+value : value
      let res=""
      if(this.pathMode=='week') {
        res=this.mapMode==0||this.mapMode==2 ? "rgba(0,0,255,0."+value*10+")" : this.mapMode==9 ? "rgba(112,0,209,0."+value*10+")" :"rgba(255,0,0,0."+value*10+")"
      }
      else {
        res=this.mapMode==1 ? "rgba(0,0,255,0."+value*10+")" : "rgba(255,0,0,0."+value*10+")"
      }
      //console.log(x,arr,value,res)
      return res
    },
    clearSVG() {
      let dom=document.querySelectorAll(".svg g path")
      for(let item of dom) {
        item.remove()
      }
    }
  }
  
}
</script>