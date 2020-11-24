<template>
  <div class="timer">
    <i class="el-icon-time" />
    {{time}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      time:this.$global.YYYYMMDDHHmmss()
    }
  },
  created() {
    setInterval(()=> {
      this.time=this.$global.YYYYMMDDHHmmss()
    },1000)
  }
}
</script>