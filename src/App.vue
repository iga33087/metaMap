<template>
  <div id="app">
    <Loading v-if="$store.state.loading"/>
    <img class="BG" src="https://cdn2.ettoday.net/images/4779/4779763.jpg">
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Loading from '@/components/Loading'

export default {
  components: {Loading}
}
</script>
