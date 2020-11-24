import moment from 'moment'

export default {
  YYYYMMDDHHmmss() {
    return moment().format('YYYY/MM/DD HH:mm:ss')
  },
  MMDDHHmm(x) {
    return moment(x).format('MM/DD HH:mm')
  }
}