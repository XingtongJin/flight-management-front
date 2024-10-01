<template>
  <div id="mainpage">
    <NaviHeader></NaviHeader>
    <router-view></router-view>
  </div>
</template>


<script>
import NaviHeader from '@/components/navi/NaviHeader.vue'
export default {
  name: 'HomePage',
  components: { NaviHeader },
    
}
</script>

<style lang="scss" scoped>

</style>
