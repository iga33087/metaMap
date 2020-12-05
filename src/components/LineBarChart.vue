<template>
  <div class="lineBarChart">
    <div class="homeBoxColItemTitle">{{getTitle()}}</div>
    <div class="lineBarChartItem">
      <div class="lineBarChartItemTitle"></div>
      <div class="lineBarChartNum">
        <div class="lineBarChartNumMin">{{min}}</div>
        <div class="lineBarChartNumMax">{{max}}</div>
      </div>
    </div>
    <div class="lineBarChartItem" v-for="(item,index) in weatherElement.records.locations[0].location" :key="index">
      <div class="lineBarChartItemTitle">{{item.locationName}}</div>
      <div class="lineBarChartItemBar" :style="{'width':item.weatherElement[mapMode].time[time].elementValue[0].value!=' ' ? Number(item.weatherElement[mapMode].time[time].elementValue[0].value-min)*eachWidth+'px' : '0px'}">{{item.weatherElement[mapMode].time[time].elementValue[0].value}}</div> 
    </div>
  </div>
</template>

<script>
export default {
  props:["weatherElement","mapMode","time"],
  computed: {
    min() {
      let arr=this.weatherElement.records.locations[0].location.map(res=>res.weatherElement[this.mapMode].time[this.time].elementValue[0].value)
      return Math.min(...arr)
    },
    max() {
      let arr=this.weatherElement.records.locations[0].location.map(res=>res.weatherElement[this.mapMode].time[this.time].elementValue[0].value)
      return Math.max(...arr)
    },
    eachWidth() {
      let num=120/(this.max-this.min)
      return num
    }
  },
  methods: {
    getTitle() {
      let title=this.mapMode==0 ? "降雨機率(%)" : this.mapMode==8 ? "最低溫度(°C)" : this.mapMode==12 ? "最高溫度(°C)" : this.mapMode==1 ? "平均溫度(°C)" : this.mapMode==2 ? "平均濕度(RH)" : "紫外線指數"
      return title
    }
  }
}
</script>