<template>
    <div class="common-layout" >
        <el-container>
          <!-- 导航条 -->
          <el-header height="30px">
            <el-row :gutter="20">
                <el-col :span="24">
                    <el-steps :space="200" :active="1" simple>
                        <el-step title="passenger info" :icon="Edit" status="success"/>
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
                    <el-row>
                        <el-col :span="8">
                            <br>
                            <div v-if="checked1 == true">
                                <span>Baggage Check</span>
                            </div>
                            <br>
                            <div v-if="checked2 == true">
                                <span>Food Service</span>
                            </div>

                        </el-col>
                        <el-col :span="4">

                        </el-col>
                        <el-col :span="6">

                        </el-col>
                        <el-col :span="6">
                            <br>
                            <div v-if="checked1 == true">
                                <span>$ 30</span>
                            </div>
                            <br>
                            <div v-if="checked2 == true">
                                <span>$ 20</span>
                            </div>
                        </el-col>
                    </el-row>


                    <div class="a5">
                        <span>$ {{ Price }}</span>
                        <br>
                    </div>
                </el-card>
            </el-aside>

              <el-container>
                  <el-main>
                    <div>
                        <el-card class="box-card" style="height:427px;">
                            <template #header>
                                <div class="card-header">
                                    <span>advanced service</span>
                                </div>
                            </template>
                            <div>
                                <el-checkbox @change="aa" v-model="checked1" label="Baggage Check (20kg)" size="large" />
                                <br>
                                <el-checkbox @change="bb" v-model="checked2" label="Food Service" size="large" />
                            </div>

                            <br>
                            <br>
                            <div class="a6" style="margin-top:100px">
                                <el-button type="primary" @click="gogo" style="width:250px;height:45px;">
                                    confirm
                                </el-button>
                            </div>
                            <el-divider />
                        </el-card>
                    </div>
                      
                  </el-main>
                  <el-footer></el-footer>
              </el-container>
          </el-container>
      </el-container>
    </div>

</template>


  

   
<script>
import { mapState } from 'vuex';

export default {
    name: 'addedService',
    data() {
        return {
            Price: 0,
            checked1: false,
            checked2: false,
        }
    },
    computed:{
      ...mapState({
        seatType: 'seatType',
        flightInfo: 'orderFlightInfo',
        seatNumber: 'seatNumber',
        passengerInfo: 'passenger',
      })
    },
    beforeMount() {
        this.Price = Number(this.flightInfo.price.slice(1))
    }, 
    methods: {
        aa() {
            if (this.checked1 == true) {
                console.log("a");
                this.Price = this.Price + 30

            } else {
                this.Price = this.Price - 30
            }
        },
        bb() {
            if (this.checked2 == true) {
                console.log("b");
                this.Price = this.Price + 20
            } else {
                this.Price = this.Price - 20
            }
        },
        gogo() {
            this.flightInfo.price = this.Price
            console.log(this.flightInfo)

            this.$axios.post('/order/createOrder', {
                flightId: this.flightInfo.id,
                seatType: this.seatType,
                seatNumber: this.seatNumber,
                totalPrice: this.Price,
                passengerName: this.passengerInfo.name,
                email: this.passengerInfo.email,
                phone: this.passengerInfo.telphone,
                baggageService: this.checked1,
                foodService: this.checked2
            }).then( () => {
                console.log("create new Order")
            }).catch((error)=>{
					console.log(error)
				})

            this.$router.push({
                path: "/myOrder",
            })
            
        }
    }
}



</script>

<style scoped>
.box-card2 {
    width: 90%;
    background: #f0f0f0;
}

.aaaaa {
    position: relative;
    top: 35px;
}

.box-card {
    font-size: 22px;
    width: 100%;
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
  left: 25%;
  font-size: 28px;
  color: rgb(255, 145, 0);
}

.a6 {
  position: relative;
  left: 35%;

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