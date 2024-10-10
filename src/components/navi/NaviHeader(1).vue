<template>

<div style="background-color: #545c64">
  <el-row type="flex" justify="start" align="middle">
    <!-- 右边的菜单导航栏 -->
     <el-col :span="1" style="height:50px; align-items: center;">
      <img class="logoImg" src="@/assets/img/airLineLogo.png" alt="airline Logo" style="max-height: 100%;"/>
     </el-col>
    <el-col :span="19">
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
        <el-menu-item index="4">person Information</el-menu-item>

      </el-menu>
    </el-col>
    
      <!-- 左边的退出按钮 -->
      <el-col :span="4" style="background-color: #545c64">
        <el-button type="danger" @click="logout" icon="el-icon-power" style="color: white; ">
          Logout
        </el-button>
      </el-col>
  </el-row>
  
  
</div>

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
                { index: '3', path: '/myOrder' },
                { index: '4', path: '/personInfo'}
            ]
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
        this.activeIndex = key;
        const route = this.routes.find(route => route.index === key);
        this.$router.push(route.path)
      },
      logout() {
        localStorage.removeItem('token');
        this.$router.push('/login');
      }
    }
}
</script>

<style>
.logoImg {
  background-size: cover; 
}
</style>