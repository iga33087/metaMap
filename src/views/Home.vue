<template>
  <div class="home" v-if="weatherElement">
    <div class="homeTitle">今明36小時天氣預報<Timer></Timer></div>
    <div class="homeSlider">
      <div class="homeSliderTitle">請選擇時段</div>
      <el-slider v-model="time" :min="0" :max="timeList.length-1" :step="1" show-stops :show-tooltip="false"></el-slider>
      <div class="homeSliderLabel">
        <div class="homeSliderLabelItem" v-for="(item,index) in timeList" :key="index" @click="time=index">{{item}}</div>
      </div>
    </div>
    <div class="homeBox">
      <div class="homeBoxCol">
        <HomeBoxColItem title="Wx(天氣現象)" :icon="getIcon(weatherElement.records.location[getWeatherIndex].weatherElement[0].time[time].parameter.parameterValue)" :content="weatherElement.records.location[getWeatherIndex].weatherElement[0].time[time].parameter.parameterName"></HomeBoxColItem>
        <HomeBoxColItem title="PoP(降雨機率)" :content="weatherElement.records.location[getWeatherIndex].weatherElement[1].time[time].parameter.parameterName+'%'"></HomeBoxColItem>
        <HomeBoxColItem title="CI(舒適度)" :content="weatherElement.records.location[getWeatherIndex].weatherElement[3].time[time].parameter.parameterName"></HomeBoxColItem>
        <HomeBoxColItem title="MinT(最低溫度)" :content="weatherElement.records.location[getWeatherIndex].weatherElement[2].time[time].parameter.parameterName+'°C'"></HomeBoxColItem>
        <HomeBoxColItem title="MaxT(最高溫度)" :content="weatherElement.records.location[getWeatherIndex].weatherElement[4].time[time].parameter.parameterName+'°C'"></HomeBoxColItem>
      </div>
      <Map :map="mapAndColor" :time="time" :mapMode="mapMode" :weatherElement="weatherElement" :iconPoint="iconPointAndIcon" @getFocus="getFocus">
        <div class="mapMode">
          <div class="mapModeItem" :class="{'mapModeChange':mapMode==1}" @click="mapMode=1">降雨機率</div>
          <div class="mapModeItem" :class="{'mapModeChange':mapMode==2}" @click="mapMode=2">最低溫度</div>
          <div class="mapModeItem" :class="{'mapModeChange':mapMode==4}" @click="mapMode=4">最高溫度</div>
        </div>
        <div class="country">{{focusAear.properties&&focusAear.properties.COUNTYNAME ? focusAear.properties.COUNTYNAME : ''}}</div>
      </Map>
      <div class="homeBoxCol">
        <RouterList></RouterList>
      </div>
    </div>
  </div>
</template>

<script>
import Map from '@/components/Map'
import Timer from '@/components/Timer'
import HomeBoxColItem from '@/components/HomeBoxColItem'
import RouterList from '@/components/RouterList'
import iconPoint from '@/assets/json/iconPoint.json'
import map from '@/assets/json/map.json'

export default {
  name: 'Home',
  components: {
    Map,Timer,HomeBoxColItem,RouterList
  },
  data() {
    return {
      time:0,
      mapMode:1,
      weatherElement:"",
      focusAear:map.features[6],
      iconPoint:iconPoint
    }
  },
  computed: {
    mapAndColor() {
      let res=map
      for(let i in res.features) {
        res.features[i].properties.color=this.getColor(res.features[i])
        if(i==this.getFocusIndex) {
          res.features[i].properties.color="rgba(255,255,255,0.5)"
        }
      }
      return JSON.parse(JSON.stringify(res))
    },
    timeList() {
      let res=[]
      let arr=this.weatherElement.records.location[0].weatherElement[this.mapMode].time
      for(let i in arr) {
        if(i==0) {
          res.push(this.$global.MMDDHHmm(arr[i].startTime))
        }
        else {
          res.push(this.$global.MMDDHHmm(arr[i].endTime))
        }
      }
      return res
    },
    getFocusIndex() {
      if(!this.focusAear) return 0
      let arr=map.features.map(res=>res.properties.COUNTYNAME)
      let index=arr.indexOf(this.focusAear.properties.COUNTYNAME)
      return index
    },
    getWeatherIndex() {
      let arr=this.weatherElement.records.location.map(res=>res.locationName)
      let index=arr.indexOf(this.focusAear.properties.COUNTYNAME)
      return index   
    },
    iconPointAndIcon() {
      let res=this.iconPoint
      for(let item of res) {
        let arr=this.weatherElement.records.location.map(res=>res.locationName)
        let index=arr.indexOf(item.country)
        let value=this.weatherElement.records.location[index].weatherElement[0].time[this.time].parameter.parameterValue
        //console.log(value)
        item.icon=this.getIcon(value)
      }
      return res
    }
  },
  async created() {
    this.weatherElement=await this.$api.FC0032001()
    console.log(this.mapAndColor)
  },
  methods: {
    getFocus(e) {
      this.focusAear=e
      console.log(this.focusAear)
      //console.log(this.weatherElement.records.location[this.getFocusIndex])
    },
    getIcon(x) {
      let res=""
      let arr=[
        {num:1,icon:"el-icon-sunny"},
        {num:4,icon:"el-icon-cloudy-and-sunny"},
        {num:7,icon:"el-icon-cloudy"},
        {num:10,icon:"el-icon-light-rain"},
        {num:14,icon:"el-icon-heavy-rain"},
      ]
      for(let item of arr) {
        if(x>=item.num) {
          res=item.icon
        }
      }
      return res
    },
    getColor(x) {
      let arr=this.weatherElement.records.location.filter(res=>res.locationName==x.properties.COUNTYNAME)[0]
      let value=arr.weatherElement[this.mapMode].time[this.time].parameter.parameterName
      value=0.01*Number(value)
      let res=this.mapMode==1 ? "rgba(0,0,255,"+value+")" : "rgba(255,0,0,"+value+")"
      return res
    }
  }
  
}
</script>
