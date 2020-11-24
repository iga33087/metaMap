import axios from "axios"

export default {
  baseURL:"https://opendata.cwb.gov.tw/api",
  key:"CWB-EEE2BDCF-A6D8-48E4-80A9-B18D2817E1CF",
  FC0032001() {  //一般天氣預報-今明 36 小時天氣預報
    return axios.get(this.baseURL+"/v1/rest/datastore/F-C0032-001?Authorization="+this.key).then(res=>res.data)
  },
  FD0047091() {  //臺灣各鄉鎮市區預報資料-臺灣各鄉鎮市區未來1週天氣預報
    return axios.get(this.baseURL+"/v1/rest/datastore/F-D0047-091?Authorization="+this.key).then(res=>res.data)
  }
}