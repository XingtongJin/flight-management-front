<template>
  <div class="box">
    <div class="zhuce">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="username" prop="user">
          <el-input v-model="ruleForm.user" clearable></el-input>
        </el-form-item>
        <el-form-item label="password" prop="pass">
          <el-input type="password" v-model="ruleForm.pass" clearable></el-input>
        </el-form-item>
        <el-form-item label="checkPass" prop="checkPass">
          <el-input type="password" v-model="ruleForm.checkPass" clearable></el-input>
        </el-form-item>
        <el-form-item label="nickname" prop="nickname">
          <el-input v-model="ruleForm.nickname" clearable></el-input>
        </el-form-item>
        <el-form-item label="tel" prop="tel">
          <el-input v-model="ruleForm.tel" clearable></el-input>
        </el-form-item>
        <el-form-item label="email" prop="email">
          <el-input v-model="ruleForm.email" clearable></el-input>
        </el-form-item>
        <el-form-item label="name" prop="name">
          <el-input v-model="ruleForm.name" clearable></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm2')">sign up</el-button>
          <el-button @click="returnForm">cancel</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Register',
    data() {
      var checkUser = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('The user name cannot be empty'))
        }
        const regUser = /^[a-zA-Z0-9_-]{3,16}$/
        if (regUser.test(value)) {
          return callback()
        }
        callback(new Error('The user name format is incorrect'))
      }
      var checkMobile = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('The mobile phone number cannot be empty'))
        }
        const regUser = /^((0[34679]\d{1}-?\d{7})|(02\d{1,2}-?\d{7,8}))$/
        if (regUser.test(value)) {
          return callback()
        }
        callback(new Error('The mobile phone number format is incorrect'))
      }
      var checkEmail = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('The email cannot be empty'))
        }
        const regUser = /^([a-zA-Z0-9]+[-_]?)+@[a-zA-Z0-9]+\.[a-z]+$/
        if (regUser.test(value)) {
          return callback()
        }
        callback(new Error('email format is incorrect'))
      }
      var checkName = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('name cannot be empty'))
        } else {
          callback()
        }
      }
      var checkNickName = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('nickname cannot be empty'))
        } else {
          callback()
        }
      }
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('please input your password'))
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass')
          }
          callback()
        }
      }
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('please input your password again'))
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('Two password inconsistencies!'))
        } else {
          callback()
      }
      }
      return {
        ruleForm: {
          user: '',
          pass: '',
          checkPass: '',
          nickname: '',
          tel: '',
          email: '',
          name: ''
        },
        rules: {
          user: [{ validator: checkUser, trigger: 'blur' }],
          pass: [{ validator: validatePass, trigger: 'blur' }],
          checkPass: [{ validator: validatePass2, trigger: 'blur' }],
          nickname: [{ validator: checkNickName, trigger: 'blur' }],
          tel: [{ validator: checkMobile, trigger: 'blur' }],
          email: [{ validator: checkEmail, trigger: 'blur' }],
          name: [{ validator: checkName, trigger: 'blur'}]
        }
      }
    },
    methods: {
      returnForm() {
        // back to login page
        this.$router.push('/login')
      },
      submitForm() {
        console.log(this.user)
        this.$axios.post('/user/register', 
        {
          username: this.ruleForm.user, 
          password: this.ruleForm.pass, 
          nickname: this.ruleForm.nickname,
          tel: this.ruleForm.tel, 
          email: this.ruleForm.email, 
          name: this.ruleForm.name}).then(
          (response) => {
            console.log(response.body)
            if (response.status == 200) {
              this.grouplist = response.body
              alert('registeration success!')
              this.$router.push('/login')
            } else {
              alert('registeration failed!')
            }
            
          },
          (response) => {
            console.log(response)
            alert('problems happened!!!')
          }
        )
      }
  }
}
</script>

<style lang="scss" scoped>
.box {
  height: 100%;
  background-color: #2e4e6e;
}
.zhuce {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 450px;
  height: 450px;
  background-color: #fff;
  border-radius: 3px;
}
.el-form-item {
  margin-top: 30px;
  width: 400px;
}
</style>