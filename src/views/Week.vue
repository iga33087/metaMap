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
        <HomeBoxColItem title="Wx(天氣現象)" :icon="getIcon(Number(weatherElement.records.locations[0].location[getFocusIndex].weatherElement[6].time[time].elementValue[1].value))" :content="weatherElement.records.locations[0].location[getFocusIndex].weatherElement[6].time[time].elementValue[0].value"></HomeBoxColItem>
        <HomeBoxColItem title="PoP(降雨機率)" :content="weatherElement.records.locations[0].location[getFocusIndex].weatherElement[0].time[time].elementValue[0].value+'%'"></HomeBoxColItem>
        <HomeBoxColItem title="平均濕度" :content="weatherElement.records.locations[0].location[getFocusIndex].weatherElement[2].time[time].elementValue[0].value+'%'"></HomeBoxColItem>
        <HomeBoxColItem title="MinT(最低溫度)" :content="weatherElement.records.locations[0].location[getFocusIndex].weatherElement[8].time[time].elementValue[0].value+'°C'"></HomeBoxColItem>
        <HomeBoxColItem title="MaxT(最高溫度)" :content="weatherElement.records.locations[0].location[getFocusIndex].weatherElement[12].time[time].elementValue[0].value+'°C'"></HomeBoxColItem>
      </div>
      <Map pathMode="week" :time="time" :mapMode="mapMode" :weatherElement="weatherElement" :iconPoint="iconPointAndIcon" @getFocus="getFocus">
        <div class="mapMode">
          <div class="mapModeItem" :class="{'mapModeChange':mapMode==0}" @click="mapMode=0">降雨機率</div>
          <div class="mapModeItem" :class="{'mapModeChange':mapMode==8}" @click="mapMode=8">最低溫度</div>
          <div class="mapModeItem" :class="{'mapModeChange':mapMode==4}" @click="mapMode=12">最高溫度</div>
          <div class="mapModeItem" :class="{'mapModeChange':mapMode==1}" @click="mapMode=1">平均溫度</div>
          <div class="mapModeItem" :class="{'mapModeChange':mapMode==2}" @click="mapMode=2">平均濕度</div>
          <div class="mapModeItem" :class="{'mapModeChange':mapMode==9}" @click="mapMode=9">紫外線指數</div>
        </div>
        <div class="country">{{focusAear.properties&&focusAear.properties.COUNTYNAME ? focusAear.properties.COUNTYNAME : ''}}</div>
      </Map>
      <div class="homeBoxCol">
        <router-link :to="{'name':'Home'}">
          <div class="homeBoxColItem"><div class="homeBoxColItemTitle">今明36小時天氣預報</div></div>
        </router-link>
        <router-link :to="{'name':'Week'}">
          <div class="homeBoxColItem"><div class="homeBoxColItemTitle">未來一周天氣預報</div></div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Map from '@/components/Map'
import Timer from '@/components/Timer'
import HomeBoxColItem from '@/components/HomeBoxColItem'
import iconPoint from '@/assets/json/iconPoint.json'

export default {
  name: 'Home',
  components: {
    Map,Timer,HomeBoxColItem
  },
  data() {
    return {
      time:0,
      mapMode:0,
      weatherElement:"",
      focusAear:"",
      iconPoint:iconPoint
    }
  },
  computed: {
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
        console.log(value)
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
      console.log(this.weatherElement.records.locations[0].location[this.getFocusIndex])
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
    }
  }
  
}
</script>
