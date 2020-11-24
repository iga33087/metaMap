<template>
  <div class="homeBoxColItem">
    <div class="homeBoxColItemTitle">{{title}}</div>
    <div class="homeBoxColItemContent">
      <div class="homeBoxColItemContentIcon" v-if="icon">
        <i :class="icon"></i>
      </div>
      <div>
        {{content}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:["title","icon","content"]
}
</script>