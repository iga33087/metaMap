<template>
  <div class="home" v-if="weatherElement">
    <div class="homeTitle">未來1週天氣預報<Timer></Timer></div>
    <div class="homeSlider">
      <div class="homeSliderTitle">請選擇時段</div>
      <el-slider v-model="time" :min="0" :max="timeList.length-1" :step="1" show-stops :show-tooltip="false"></el-slider>
      <div class="homeSliderLabel">
        <div class="homeSliderLabelItem" v-for="(item,index) in timeList" :key="index" @click="time=index">{{item}}</div>
      </div>
    </div>
    <div class="homeBox">
      <div class="homeBoxCol">
        <HomeBoxColItem title="Wx(天氣現象)" :icon="getIcon(Number(weatherElement.records.locations[0].location[getWeatherIndex].weatherElement[6].time[time].elementValue[1].value))" :content="weatherElement.records.locations[0].location[getWeatherIndex].weatherElement[6].time[time].elementValue[0].value"></HomeBoxColItem>
        <HomeBoxColItem title="PoP(降雨機率)" :content="weatherElement.records.locations[0].location[getWeatherIndex].weatherElement[0].time[time].elementValue[0].value+'%'"></HomeBoxColItem>
        <HomeBoxColItem title="平均濕度" :content="weatherElement.records.locations[0].location[getWeatherIndex].weatherElement[2].time[time].elementValue[0].value+'%'"></HomeBoxColItem>
        <HomeBoxColItem title="紫外線指數" :content="weatherElement.records.locations[0].location[getWeatherIndex].weatherElement[9].time[time] ? weatherElement.records.locations[0].location[getWeatherIndex].weatherElement[9].time[time].elementValue[1].value : ''"></HomeBoxColItem>
        <HomeBoxColItem title="MinT(最低溫度)" :content="weatherElement.records.locations[0].location[getWeatherIndex].weatherElement[8].time[time].elementValue[0].value+'°C'"></HomeBoxColItem>
        <HomeBoxColItem title="MaxT(最高溫度)" :content="weatherElement.records.locations[0].location[getWeatherIndex].weatherElement[12].time[time].elementValue[0].value+'°C'"></HomeBoxColItem>
      </div>
      <Map :map="mapAndColor" pathMode="week" :time="time" :mapMode="mapMode" :weatherElement="weatherElement" :iconPoint="iconPointAndIcon" @getFocus="getFocus">
        <div class="mapMode">
          <div class="mapModeItem" :class="{'mapModeChange':mapMode==0}" @click="changeMapMode(0)">降雨機率</div>
          <div class="mapModeItem" :class="{'mapModeChange':mapMode==8}" @click="changeMapMode(8)">最低溫度</div>
          <div class="mapModeItem" :class="{'mapModeChange':mapMode==4}" @click="changeMapMode(12)">最高溫度</div>
          <div class="mapModeItem" :class="{'mapModeChange':mapMode==1}" @click="changeMapMode(1)">平均溫度</div>
          <div class="mapModeItem" :class="{'mapModeChange':mapMode==2}" @click="changeMapMode(2)">平均濕度</div>
          <div class="mapModeItem" :class="{'mapModeChange':mapMode==9}" @click="changeMapMode(9)">紫外線指數</div>
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
      mapMode:0,
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
      let arr=this.weatherElement.records.locations[0].location[0].weatherElement[this.mapMode].time
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
      if(!this.focusAear) return 0
      let arr=this.weatherElement.records.locations[0].location.map(res=>res.locationName)
      let index=arr.indexOf(this.focusAear.properties.COUNTYNAME)
      return index
    },
    iconPointAndIcon() {
      let res=this.iconPoint
      for(let item of res) {
        let arr=this.weatherElement.records.locations[0].location.map(res=>res.locationName)
        let index=arr.indexOf(item.country)
        let value=Number(this.weatherElement.records.locations[0].location[index].weatherElement[6].time[this.time].elementValue[1].value)
        //console.log(value)
        item.icon=this.getIcon(value)
      }
      return res
    }
  },
  async created() {
    this.weatherElement=await this.$api.FD0047091()
  },
  methods: {
    getFocus(e) {
      this.focusAear=e
      //console.log(this.weatherElement.records.locations[0].location[this.getFocusIndex])
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
      let arr=this.weatherElement.records.locations[0].location.filter(res=>res.locationName==x.properties.COUNTYNAME)[0]
      let value=arr.weatherElement[this.mapMode].time[this.time].elementValue[0].value
      value=this.mapMode==9 ? 0.1*Number(value) : 0.01*Number(value)
      let res=this.mapMode==0||this.mapMode==2 ? "rgba(0,0,255,"+value+")" : this.mapMode==9 ? "rgba(112,0,209,"+value+")" : "rgba(255,0,0,"+value+")"
      return res
    },
    changeMapMode(x) {
      this.mapMode=x
      if(this.time>this.timeList.length-1) {
        this.time=this.timeList.length-1
      }
    }
  }
  
}
</script>
