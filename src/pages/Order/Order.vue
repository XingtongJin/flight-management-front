<template>
  <div class="common-layout">
      <el-container>
          <!-- navi header -->
          <el-header height="30px">
              <el-row :gutter="20">

                  <el-col :span="24">
                      <el-steps :space="200" :active="1" simple>
                          <el-step title="passenger info" :icon="Edit" />
                          <el-step title="advanced service" :icon="UploadFilled" />
                          <el-step title="payment" :icon="CreditCard" />
                      </el-steps>
                  </el-col>
              </el-row>
          </el-header>

          <el-container>
              <el-aside width="425px" style=" margin-top: 23px;margin-left: 20px;">
                  <el-card class="box-card2">

                          <div class="a2">
                              <el-row class="el-row1" style="margin-top:8px;">
                                  <el-col :span="12" class="line2">
                                      <span> FlightCode: {{ flightInfo.flightCode }}</span>
                                  </el-col>
                                  
                              </el-row>
                              <el-row class="el-row1"> 
                                <el-col :span="15" class="line2">
                                    <span v-if="seatType == 'B'">Seat: bussiness class {{seatNumber}}</span>
                                    <span v-else-if="seatType == 'E'">Seat: economy class {{seatNumber}}</span>
                                </el-col>
                              </el-row>
                          </div>

                          <div class="a3">
                              <el-row class="row-bg" justify="space-evenly" style="margin-top:5px;">
                                  <el-col :span="7" style="font-size: 18px;">
                                      <span>{{ flightInfo.deptTime }}</span>
                                  </el-col>
                                  <el-col class="el-row1" :span="6" style="font-size: 12px;margin-top: 0px;">
                                      <span style="position: relative;top:5px;">
                                          <svg t="1670645198330" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                              xmlns="http://www.w3.org/2000/svg" p-id="31664" width="16" height="16">
                                              <path
                                                  d="M554.666667 537.6l115.2 115.2-29.866667 29.866667-128-128V341.333333h42.666667v196.266667z m-21.333334 358.4C332.8 896 170.666667 733.866667 170.666667 533.333333S332.8 170.666667 533.333333 170.666667 896 332.8 896 533.333333 733.866667 896 533.333333 896z m0-42.666667c174.933333 0 320-145.066667 320-320S708.266667 213.333333 533.333333 213.333333 213.333333 358.4 213.333333 533.333333 358.4 853.333333 533.333333 853.333333z"
                                                  fill="#444444" p-id="31665"></path>
                                          </svg>
                                      </span>

                                      <span>{{ flightInfo.consuming }}</span>
                                      <br/>
                                      <span style="">
                                          ========
                                      </span>

                                  </el-col>
                                  <el-col :span="7" style="font-size: 18px;">
                                    <!-- {{ flightInfo.arrivalTime }} -->
                                      <span> {{ flightInfo.arrTime }} </span>
                                  </el-col>
                                  <br>
                              </el-row>

                          </div>

                          <div class="a7">
                              <el-row class="row-bg" justify="space-evenly">

                                  <el-col :span="8" style="font-size: 15px;">
                                      <span>{{ flightInfo.deptAirportCode }} airport</span>
                                  </el-col>
                                  <el-col :span="8">
                                      <span style="">
                                          ========
                                      </span>
                                  </el-col>
                                  <el-col :span="8" style="font-size: 15px;">
                                      <span>{{ flightInfo.arrAirportCode }} airport</span>
                                  </el-col>
                              </el-row>
                              <el-divider border-style="dashed" />
                          </div>
                      <div class="a5">
                          <span> Price: {{ flightInfo.price }}</span>
                          <br>
                      </div>
                  </el-card>
              </el-aside>

              <el-container>
                  <el-main>
                      <div>
                          <!-- passenger information -->
                          <div class="aa">
                              <el-card class="box-card">
                                  <template #header>
                                      <div class="card-header">
                                          <span style="margin-left:30px; ">passenger info</span>
                                          <el-switch v-model="value1" class="mb-2" active-text="default" @change="user" />
                                      </div>
                                  </template>
                                  <div>
                                      <div class="group">
                                          <input required="" type="text" class="input" v-model="name">
                                          <span class="highlight"></span>
                                          <span class="bar"></span>
                                          <label>name</label>
                                      </div>
                                  </div>
                                  <br>
                                  <div class="group">
                                      <input required="" type="text" class="input" v-model="email">
                                      <span class="highlight"></span>
                                      <span class="bar"></span>
                                      <label>email</label>
                                  </div>
                                  <br>
                                  <div class="group">
                                      <input required="" type="text" class="input" v-model="telphone">
                                      <span class="highlight"></span>
                                      <span class="bar"></span>
                                      <label>telphone</label>
                                  </div>

                                  <br>

                                  <el-button type="primary" @click="gogo"
                                      style="width:415px;height:45px;margin-left: 50px;">
                                      next step
                                  </el-button>

                                  <el-divider />
                              </el-card>
                          </div>
                      </div>
                      
                  </el-main>
                  <el-footer></el-footer>
              </el-container>
          </el-container>
      </el-container>
  </div>

</template>
 
<script>
import { Message } from 'element-ui';
import { mapState } from 'vuex';


export default {
    name: 'OrderPage',
    data() {
        return {
            name: '',
            email: '',
            telphone: '',
            passengerInfo: {}
        }
    },
    computed:{
      ...mapState({
        seatType: 'seatType',
        flightInfo: 'orderFlightInfo',
        seatNumber: 'seatNumber'
      })
    },
    beforeMount() {
        console.log("seat: " + this.$store.state.seatNumber)
        console.log(this.$store.state.orderFlightInfo)
    }, 
    methods: {
        // default user info
        user() {
          // 
            this.$axios.get('/user/userInfo')
            .then((response) => {
                let user = response.data.data
                this.name = user.realName
                this.email = user.email
                this.telphone = user.telphone
            }).catch((error)=>{
              console.log(error)
            })
        },
        //next step
        gogo() {
          this.passengerInfo = {
            name: this.name,
            email: this.email,
            telphone: this.telphone
          }
          if (this.passengerInfo.name != "" &&
           this.passengerInfo.email != "" &&
            this.passengerInfo.telphone != "") {
              console.log(this.passengerInfo);
              this.$store.commit("PUTPASSENGER", this.passengerInfo)
              // store.dispatch("orders")
              this.$router.push({
                  path: '/addedServices',
              })
          }
          else {
              Message({
                  showClose: true,
                  message: 'please full the passenger info',
                  type: 'warning',
              })
          }

        }
    }
}



</script>

<style scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  font-size: 22px;
  width: 100%;
}

.box-card2 {

  width: 90%;
  background: #f0f0f0;
}


/* input lines */
.group {
  position: relative;
  left: 60px;
}

.input {
  font-size: 16px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 400px;
  border: none;
  border-bottom: 1px solid #515151;
  background: transparent;
}

.input:focus {
  outline: none;
}

label {
  color: #999;
  font-size: 18px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
}

.input:focus~label,
.input:valid~label {
  top: -20px;
  font-size: 14px;
  color: #5264AE;
}

.bar {
  position: relative;
  display: block;
  width: 200px;
}

.bar:before,
.bar:after {
  content: '';
  height: 2px;
  width: 0;
  bottom: 1px;
  position: absolute;
  background: #5264AE;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
}

.bar:before {
  left: 50%;
}

.bar:after {
  right: 50%;
}

.input:focus~.bar:before,
.input:focus~.bar:after {
  width: 50%;
}

.highlight {
  position: absolute;
  height: 60%;
  width: 100px;
  top: 25%;
  left: 0;
  pointer-events: none;
  opacity: 0.5;
}

.input:focus~.highlight {
  animation: inputHighlighter 0.3s ease;
}

@keyframes inputHighlighter {
  from {
      background: #5264AE;
  }

  to {
      width: 0;
      background: transparent;
  }
}

.aaaaa {
  position: relative;
  top: 35px;
}

.el-row1 {
    margin: 20px;
}
.a1{
    margin: 10px;
}

.a4 {
  height: 30px;
}

.a5 {

  position: relative;
  left: 30%;
  font-size: 28px;
  color: rgb(255, 145, 0);
}

.a6 {
  position: relative;
  left: 45%;

}

.a7 {
  position: relative;
  top: 20px;

}

.line1 {
  color: #333;
  font-size: 16px;
  font-weight: 600;
}

.line2 {
  font-size: 16px;
  font-weight: 200;
  color: #181717;
}
</style>
  