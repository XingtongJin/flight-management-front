<template>
    <div>
        <el-tabs type="border-card" @tab-click="handleClick">
            <el-tab-pane label="all orders" style="height:800px">
                <el-empty v-if="orders.length == 0" description="nothing here"></el-empty>
                <div v-for="(item, index) in orders" :key="index"
                    style="border-top:1px solid #e0e0e0;border-bottom:1px solid #e0e0e0">
                    <div>
                        <div class="clearfix">
                            <span style="font-size:18px">订单号：</span>
                            <span style="color:blue;margin-right: 20px;font-size:18px">{{ item.oid }}</span>
                            <span style="font-size:18px">预订日期:{{ item.createTime.slice(0, 10) }}</span>
                            <span style="color:blue;margin-left: 20px;opacity: 0.8;font-size:18px;cursor: pointer;"
                                @click="deleteorder(index)">删除订单</span>
                            <!-- <span style="color:blue;margin-left: 20px;opacity: 0.8;font-size:8px;cursor: pointer;"
                                @click="seat(index)">值机选座</span> -->
                            <!-- <el-button style="float: right; padding: 3px 0" type="text" @click="rebook(index)">
                                改签</el-button> -->
                            <h1 class="price" style="font-size:25px;font-weight:normal ;">{{ '$' + item.price }}
                            </h1>
                        </div >
                        <div class="text item" style="margin-top: 10px;">
                            <span style="font-weight:bold;">{{ item.flight.deptAirportCode + ' —— ' + item.flight.arrAirportCode }}</span>

                            <h1 style="font-size:20px;font-weight:normal ;">flight time:<span style="margin-left:5px">{{
                                    item.flight.deptTime + '-' +
                                    item.flight.arrTime
                            }}</span>
                            </h1>
                            <h1 style="font-size:20px;font-weight:normal ;">passenger: <span style="margin-left:5px">{{
                                    item.passengerName
                            }}</span></h1>
                        </div>
                    </div>
                </div>
            </el-tab-pane>
            <el-tab-pane label="completed" style="height:800px">
                <el-empty v-if="orders.length == 0" description="nothing here"></el-empty>
                <div v-for="(item, index) in orders" :key="index"
                    style="border-top:1px solid #e0e0e0;border-bottom:1px solid #e0e0e0">
                    <div>
                        <div class="clearfix">
                            <span style="font-size:18px">订单号：</span>
                            <span style="color:blue;margin-right: 20px;font-size:18px">{{ item.oid }}</span>
                            <span style="font-size:18px">预订日期:{{ item.createTime.slice(0, 10) }}</span>
                            <span style="color:blue;margin-left: 20px;opacity: 0.8;font-size:18px;cursor: pointer;"
                                @click="deleteorder(index)">删除订单</span>
                            <!-- <span style="color:blue;margin-left: 20px;opacity: 0.8;font-size:8px;cursor: pointer;"
                                @click="seat(index)">值机选座</span> -->
                            <!-- <el-button style="float: right; padding: 3px 0" type="text" @click="rebook(index)">
                                改签</el-button> -->
                            <h1 class="price" style="font-size:25px;font-weight:normal ;">{{ '$' + item.price }}
                            </h1>
                        </div >
                        <div class="text item" style="margin-top: 10px;">
                            <span style="font-weight:bold;">{{ item.flight.deptAirportCode + ' —— ' + item.flight.arrAirportCode }}</span>

                            <h1 style="font-size:20px;font-weight:normal ;">flight time:<span style="margin-left:5px">{{
                                    item.flight.deptTime + '-' +
                                    item.flight.arrTime
                            }}</span>
                            </h1>
                            <h1 style="font-size:20px;font-weight:normal ;">passenger: <span style="margin-left:5px">{{
                                    item.passengerName
                            }}</span></h1>
                        </div>
                    </div>
                </div>
            </el-tab-pane>
            <el-tab-pane label="ready" style="height:800px">
                <el-empty v-if="orders.length == 0" description="nothing here"></el-empty>
                <div v-for="(item, index) in orders" :key="index"
                    style="border-top:1px solid #e0e0e0;border-bottom:1px solid #e0e0e0">
                    <div>
                        <div class="clearfix">
                            <span style="font-size:18px">订单号：</span>
                            <span style="color:blue;margin-right: 20px;font-size:18px">{{ item.oid }}</span>
                            <span style="font-size:18px">预订日期:{{ item.createTime.slice(0, 10) }}</span>
                            <span style="color:blue;margin-left: 20px;opacity: 0.8;font-size:18px;cursor: pointer;"
                                @click="deleteorder(index)">删除订单</span>
                            <!-- <span style="color:blue;margin-left: 20px;opacity: 0.8;font-size:8px;cursor: pointer;"
                                @click="seat(index)">值机选座</span> -->
                            <!-- <el-button style="float: right; padding: 3px 0" type="text" @click="rebook(index)">
                                改签</el-button> -->
                            <h1 class="price" style="font-size:25px;font-weight:normal ;">{{ '$' + item.price }}
                            </h1>
                        </div >
                        <div class="text item" style="margin-top: 10px;">
                            <span style="font-weight:bold;">{{ item.flight.deptAirportCode + ' —— ' + item.flight.arrAirportCode }}</span>

                            <h1 style="font-size:20px;font-weight:normal ;">flight time:<span style="margin-left:5px">{{
                                    item.flight.deptTime + '-' +
                                    item.flight.arrTime
                            }}</span>
                            </h1>
                            <h1 style="font-size:20px;font-weight:normal ;">passenger: <span style="margin-left:5px">{{
                                    item.passengerName
                            }}</span></h1>
                        </div>
                    </div>
                </div>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
// import request from '@/axios/request';
export default {
    name: 'AllOrders',
    data() {
        return {
            activeName: 'first',
            orders: []
        };
    },
    methods: {
        handleClick(tab, event) {
            console.log(tab.label, event);
            if (tab.label == 'all orders') {
                this.getAllOrders()
            } else if (tab.label == 'completed') {
                this.getCompletedOrders()
            } else if (tab.label == 'ready') {
                this.getUncompletedOrders()
            }
        },
        allorders() {
            console.log("allorders")
        },
        deleteorder(index) {
            // alert("删除订单将自动退票！")
            this.$axios.delete({
                url: "/order/delete",
                params: {
                    id: this.orders[index].oid
                },
            }
            ).then(function (response) {
                console.log(response);
                this.orders = []
                response.data.data.forEach(passenger => {
                    console.log(passenger)
                    console.log("createdTime" + passenger.createdTime)
                    let passengerData = {}
                    passengerData.oid = passenger.id,
                    passengerData.passengerName = passenger.passengerName,
                    passengerData.seatNumber = passenger.seatNumber,
                    passengerData.seatType = passenger.seatType == 'E'? 'Economy' : 'Bussiness',
                    passengerData.price = passenger.price,
                    passengerData.createTime = passenger.createdTime,
                    passengerData.flight = passenger.flightVO;
                    this.orders.push(passengerData)
                })
            }).catch(error => {
                console.log('错误', error)
            });
            this.$message.success("退票成功！")
        },
        getAllOrders() {
            this.$axios.get('/order/allOrders')
            .then((response) => {
                this.orders = []
                response.data.data.forEach(passenger => {
                    console.log(passenger)
                    console.log("createdTime" + passenger.createdTime)
                    let passengerData = {}
                    passengerData.oid = passenger.id,
                    passengerData.passengerName = passenger.passengerName,
                    passengerData.seatNumber = passenger.seatNumber,
                    passengerData.seatType = passenger.seatType == 'E'? 'Economy' : 'Bussiness',
                    passengerData.price = passenger.price,
                    passengerData.createTime = passenger.createdTime,
                    passengerData.flight = passenger.flightVO;
                    this.orders.push(passengerData)
                })
                console.log(this.orders)
            }).catch((error)=>{
                console.log(error)
            })
        },
        getCompletedOrders() {
            this.$axios.get('/order/completedOrders')
            .then((response) => {
                this.orders = []
                response.data.data.forEach(passenger => {
                    console.log(passenger)
                    console.log("createdTime" + passenger.createdTime)
                    let passengerData = {}
                    passengerData.oid = passenger.id,
                    passengerData.passengerName = passenger.passengerName,
                    passengerData.seatNumber = passenger.seatNumber,
                    passengerData.seatType = passenger.seatType == 'E'? 'Economy' : 'Bussiness',
                    passengerData.price = passenger.price,
                    passengerData.createTime = passenger.createdTime,
                    passengerData.flight = passenger.flightVO;
                    this.orders.push(passengerData)
                })
                console.log(this.orders)
            }).catch((error)=>{
                console.log(error)
            })
        },
        getUncompletedOrders() {
            this.$axios.get('/order/readyOrders')
            .then((response) => {
                this.orders = []
                response.data.data.forEach(passenger => {
                    console.log(passenger)
                    console.log("createdTime" + passenger.createdTime)
                    let passengerData = {}
                    passengerData.oid = passenger.id,
                    passengerData.passengerName = passenger.passengerName,
                    passengerData.seatNumber = passenger.seatNumber,
                    passengerData.seatType = passenger.seatType == 'E'? 'Economy' : 'Bussiness',
                    passengerData.price = passenger.price,
                    passengerData.createTime = passenger.createdTime,
                    passengerData.flight = passenger.flightVO;
                    this.orders.push(passengerData)
                })
                console.log(this.orders)
            }).catch((error)=>{
                console.log(error)
            })
        }
    },
    
    beforeMount() {
        console.log("mount")
        this.getAllOrders()
    }

    // beforeMount: function () {
    //     console.log("the component is now mounted");
    //     let thay = this

    //     request({
    //         url: "/orders/order",
    //         params: {
    //             id: store.state.userInfo.userId
    //         },
    //         method: "get",
    //         headers: { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
    //     }).then(function (response) {

    //         // console.log(typeof(store.state.userInfo.userId));

    //         console.log(response);
    //         thay.orders = response.data.data//数组替换
    //     }).catch(function (error) {
    //         console.log("请求失败");
    //         console.log(error);
    //     });
    // }
};
</script>
<style scoped>
/* .Myorder {
    height: 100vh;
    background: #e0e0e0;
}

.goback {
    position: fixed;
    right: 5vw;
    top: -10px;
} */
::deep(el-tabs__item) {
    /* 修改为您想要的文字大小 */
    font-size: 10px !important;
}

/* 卡片布局 */
.box-card2 {
    width: 100%;
    min-height: 70px;
}

.el-row {
    margin-bottom: 0px;
}

.el-row:last-child {
    margin-bottom: 0;
}

.el-col {
    border-radius: 4px;
}

.grid-content {
    border-radius: 4px;
    min-height: 20px;
}

.text {
    font-size: 14px;
}

.item {
    margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}

.clearfix:after {
    clear: both
}

.box-card {
    width: 100vw;
}

.price {
    position: absolute;
    right: 15px;
}
</style>