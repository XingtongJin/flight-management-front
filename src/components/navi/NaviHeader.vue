<template>
<el-menu :default-active="activeIndex" 
    class="el-menu-demo" 
    mode="horizontal" 
    @select="handleSelect"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b">
    <el-menu-item index="1">homepage</el-menu-item>
    <el-menu-item index="2">ticket service</el-menu-item>
    <el-menu-item index="3">order service</el-menu-item>
</el-menu>
</template>

<script>
export default {
    name: "NaviHeader",
    data() {
      return {
        activeIndex: '1',
        routes: [
                { index: '1', path: '/' },
                { index: '2', path: '/flight' },
                { index: '3', path: '/order' }
            ]
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
        this.activeIndex = key;
        const route = this.routes.find(route => route.index === key);
        this.$router.push(route.path)
      }
    }
}
</script>

<style>

</style>