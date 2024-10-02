<template>
  <div class="login_container">
    <div class="login_box">
      <!--表单提交区域-->
      <el-form :rules="loginFormRules" ref="loginFormRef" label-width="0px" class="login_form" :model="loginForm">
        <!--用户名-->
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" prefix-icon="iconfont icon-user" placeholder="username" clearable></el-input>
        </el-form-item>
        <!--密码-->
        <el-form-item prop="password">
          <el-input type="password" v-model="loginForm.password" prefix-icon="iconfont icon-3702mima" placeholder="password" show-password clearable></el-input>
        </el-form-item>
        <!--按钮区-->
        <el-form-item class="btns">
          <el-checkbox class="remember" v-model="keepPassword">记住密码</el-checkbox>
          <br/>
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="primary" @click="register">注册</el-button>
          <el-button type="info" @click="resetLoginForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Login',
    data (){
      return {
        keepPassword: false, // 记住密码
        loginForm: {
          // 登录的表单数据的绑定对象
          username: 'admin',
          password: '123456'
        },
        loginFormRules: {
          // 验证用户名是否合法
          username: [
            { required: true, message: '请输入登录名称', trigger: 'blur' },
            { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
          ],
          // 验证密码是否合法
          password: [
            { required: true, message: '请输入登录密码', trigger: 'blur' },
            { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
    // 记住密码保存数据
    setCookie(name, pwd, exdays) {
      var exdate = new Date() // 获取时间
      exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000 * exdays) // 保存的天数
      // 字符串拼接cookie
      window.document.cookie = 'userName' + '=' + name + ';path=/;expires=' + exdate.toGMTString()
      window.document.cookie = 'userPwd' + '=' + pwd + ';path=/;expires=' + exdate.toGMTString()
    },
    // 读取cookie
    getCookie() {
      if (document.cookie.length > 0) {
        this.keepPassword = true
        var arr = document.cookie.split('; ') // 这里显示的格式需要切割一下自己可输出看下
        for (var i = 0; i < arr.length; i++) {
          var arr2 = arr[i].split('=') // 再次切割
          // 判断查找相对应的值
          if (arr2[0] === 'userName') {
            this.loginForm.username = arr2[1] // 保存到保存数据的地方
          } else if (arr2[0] === 'userPwd') {
            this.loginForm.password = arr2[1]
          }
        }
      }
    },
    // 清除cookie
    clearCookie: function() {
      this.setCookie('', '', -1) // 修改2值都为空，天数为负1天就好了
    },
    resetLoginForm() { // 点击重置按钮,重置登录表单
      this.$refs.loginFormRef.resetFields()
    },
    login() { // 点击登录按钮，跳转到Home.vue
      console.log(this.loginForm.username)
      this.$axios.post("/user/login", {
        "username": this.loginForm.username,
        "password": this.loginForm.password
    }, 
    // {
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // }
  ).then((response) => {
        console.log("token: " + response.data)
        console.log(this)
        if (response.status === 200) {
          if (response.data != null) {
            localStorage.setItem('token', JSON.stringify(response.data))
          } 
        } 
        this.$router.push('/')
      }).catch((error)=>{
          console.log(error)
      })

      // this.$refs.loginFormRef.validate(async valid => { // 验证登录数据
      //   if (!valid) { // 根据登录结果判断是否发起登录请求
      //     return (this.loginLoading = false)
      //   }
      //   const { data: res } = await this.$http.post('login', this.loginForm)
      //   if (res.meta.status !== 200) {
      //     this.loginLoading = false
      //     return this.$message.error('登录失败 帐号或密码错误!')
      //   }
      //   this.$message.success('登录成功!')
      //   window.sessionStorage.setItem('token', res.data.token)
      //   this.$router.push('/home') // 跳转到home.vue
      //   this.loginLoading = false
    },
    register() { // 跳转到注册界面
      this.$router.push('/register')
    }
  }
}
</script>

<style lang="less" scoped>
.login_container {
  height: 100%;
  background-color: #2e4e6e;
}
.login_box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 450px;
  height: 300px;
  background-color: #fff;
  border-radius: 3px;
  .login_form {
    box-sizing: border-box;
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0 20px;
  }
  .btns {
    display: flex;
    justify-content: center;
  }
}
</style>