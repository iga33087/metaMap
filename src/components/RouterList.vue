<template>
  <div class="routerList">
    <router-link :to="{'name':'Home'}">
      <div class="routerListItem">今明36小時天氣預報</div>
    </router-link>
    <router-link :to="{'name':'Week'}">
      <div class="routerListItem">未來1週天氣預報</div>
    </router-link>
  </div>
</template>

<script>
export default {

}
</script>