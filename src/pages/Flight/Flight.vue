<template>
	
	<div class="content-class">
        <!-- select area -->
		<div class="ticket-sale">
			<el-form ref="ticketForm" :inline="true" :model="ticketForm" label-position="left" class="demo-form-inline"
				label-width="100px">
				<el-form-item label="depart airport">
					<!-- dept -->
					<el-select v-model="ticketForm.start" :popper-append-to-body="false" filterable remote
						reserve-keyword default-first-option placeholder="departure" 
						:loading="loading" @change="searchStart">
						<el-option v-for="item in startList" :key="item.id" :label="item.airportName"
							:value="item.id">
						</el-option>
					</el-select>
				</el-form-item>
				
				<el-form-item label="arrive airport">
					<!-- arrival -->
					<el-select v-model="ticketForm.end" :popper-append-to-body="false" filterable remote reserve-keyword
						default-first-option placeholder="arrive" :loading="loading"
						@change="searchEnd" style="width: 252px;">
						<el-option v-for="item in endList" :key="item.id" :label="item.airportName"
							:value="item.id">
						</el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="date">
					<!-- date -->
					<el-date-picker class="date-choose" @change="getDateChange" v-model="ticketForm.date"
						:clearable="false" type="date" placeholder="date" :picker-options="datePicker">
					</el-date-picker>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="onSubmit">search</el-button>
				</el-form-item>
			</el-form>
		</div>

        <!-- ticket area -->
		<div class="ticket-case">
            <!-- left button -->
			<el-tabs type="border-card" v-model="activeName" :stretch="true" @tab-click="handleClick"
				:before-leave="beforeLeave">
				<el-tab-pane class="forward-class" name="toForward" :disabled="disabled">
					<span slot="label">
						<i class="el-icon-caret-left"></i>
					</span>
				</el-tab-pane>

				<el-tab-pane v-for="(item, index) in list" :key="index" :name="item.time">
					<span slot="label">
						<div>{{item.time.split("-")[1]+"-"+item.time.split("-")[2]}}</div>
						<div>{{item.week}}</div>
					</span>
					<!-- ticket -->
					<div>
						<el-table :data="tableData" style="width: 100%"
							:default-sort="{prop: 'date', order: 'descending'}"
							:header-cell-style="{ color: '#000000D8',background:'#f0f0f0'}"
							:cell-style="{ height: '50px', padding: '4px 0' }">
							<!-- flight code -->
							<el-table-column prop="flightCode" label="flight code">
							</el-table-column>
							<!-- departure time -->
							<el-table-column prop="deptTime" label="dep time" sortable width="120">
								<template v-slot="scope">
									{{ scope.row.deptTime ? scope.row.deptTime.substring(11, 19) : '' }}
								</template>
							</el-table-column>
							<!-- airplane model -->
							<el-table-column prop="planeModel" label="plane model">
							</el-table-column>
							<!-- departure and arrival airport -->
							<el-table-column label="dept/arr airport" width="150">
								<template slot-scope="scope">
									<div class="">
										<i class="fas fa-plane-departure"></i>
										<span style="margin-left: 5px;">{{scope.row.deptAirportCode}}</span>
									</div>
									
									<div v-if="scope.row.stopoverAirportCode">
										<i class="fas fa-exchange-alt"></i>
										<span style="margin-left: 5px;">{{ scope.row.stopoverAirportCode }}</span>
									</div>
									<div class="">
										<i class="fas fa-plane-arrival"></i>
										<span style="margin-left: 5px;">{{scope.row.arrAirportCode}}</span>
									</div>
								</template>
							</el-table-column>
							<!-- consume time -->
							<el-table-column prop="consuming" label="consuming" width="130">
							</el-table-column>
							<!-- price -->
							<el-table-column prop="price" label="price" sortable width="120">
							</el-table-column>
							<!-- flight time -->
							<el-table-column prop="status" label="status" sortable width="120">
							</el-table-column>
							<el-table-column align="center" label="order" width="300">
								
								<!-- order button -->
								<template slot-scope="scope">
									<el-button size="small" class="order-button" type="warning" 
										@click="order(scope.row, 'E')">
										economy
									</el-button>
										
									<el-button size="small" class="order-button" type="warning"
										@click="order(scope.row, 'B')">
										bussiness
									</el-button>
								</template>
							</el-table-column>
						</el-table>
					</div>
				</el-tab-pane>
				<el-tab-pane name="toNext">
					<span slot="label">
						<i class="el-icon-caret-right"></i>
					</span>
				</el-tab-pane>
			</el-tabs>
		</div>
	</div>
</template>



<script>
	// import {getQuickMenuList} from '@/api/ticket/ticketApi.js'
import moment from 'moment'
import { mapState } from 'vuex';


	export default {
        name: "FlightPage",
		data() {
			return {
				searchInput: '',
				activeIndex2: '1',
				activeName: moment(new Date()).format("YYYY-MM-DD"),
				ticketForm: {
					start: "",
					end: "",
					date: null
				},
				list: [],
				disabled: false,
				checkedTime: [],
				checkedBegin: [],
				checkedEnd: [],
				tableData: [],
				startList: [],
				loading: false,
				endList: [],
				datePicker: this.getDatePicker(),
			}
		},
		async created() {
			await this.getAirportList();

			console.log("startList: " + this.startList)

			this.getTimeList();

			this.tableData.date = this.list[0].time;

			console.log("list" + this.list)

			console.log('Initial ticketForm:', this.ticketForm);
		},
		mounted() {

			this.activeName = this.list[0].time;

			this.disabled = true;
		},
		...mapState({

		}),
		methods: {
			async getAirportList() {
				console.log("getAirportList")
				this.$axios.get("/flight/airports")
				.then((response) => {
					var airportList = response.data.data
					console.log("airportList: " + airportList);
					this.startList = airportList
					this.endList = airportList
				}).catch((error)=>{
					console.log(error)
				})
			},
			order(row, flightType) {
				this.$store.commit('PUTFLIGHTINFO', row)
				this.$store.commit('PUTFLIGHTTYPE', flightType)
				console.log(this.$store.state.orderFlightInfo)
				this.$router.push("/seat")
			},
			handleSelect(key, keyPath) {
				console.log(key, keyPath);
			},
			searchStart(e) {
				console.log("you select: ", e);
				console.log("sdkajdasljd", this.saleForm.startStation);
			},
			searchEnd(e) {
				console.log("you select: ", e);
			},
			handleClick(tab) {
				let arrTime = [];
				let arrWeek = [];
				let newArray = [];

				// only can select date for 14 days
				let limitDate = moment(new Date()).add(14, 'days').format("YYYY-MM-DD");
				console.log("limitDate: " + limitDate)

				if (tab.name == "toForward") {
					console.log(tab.name, 'tab.name')
					// If the first in the array is the date of the day, the button on the left cannot be clicked 
					if (this.activeName == moment(new Date()).format("YYYY-MM-DD")) {
						this.activeName = this.list[0].time;
						this.disabled = true;
					} else {
						// If the date is not the same day, you can click, and want to subtract a day from the previous 
						this.disabled = false;
						let listFirst = this.list[0].time;
						let nowDate = this.activeName;
						const dayDiff = moment(limitDate, "YYYY-MM-DD").diff(moment(nowDate, "YYYY-MM-DD"), 'days') + 1
						console.log("dayDiff: " + dayDiff)
						if (dayDiff > 6) {
							for (var index = -1; index < 6; index++) {
								let nextDate = this.getNextDate(listFirst, index)

								arrTime.push(nextDate);
								arrWeek.push(this.getWeek(listFirst, index));
							}
							for (var i = 0; i < arrTime.length; i++) {
								let obj = {
									time: arrTime[i],
									week: arrWeek[i]
								};
								newArray.push(obj)
							}
							this.list = newArray
						}
						
						if (dayDiff > 5) {
							this.activeName = this.list[1].time;
						} else {
							// The difference between date and next 14 days is less than or equal to 5
							this.activeName = this.list[7 - dayDiff].time;
						}
					}
					// the right button, click Add a day
				} else if (tab.name == "toNext") {
					console.log("toNext", this.activeName);
					this.disabled = false;
					if (this.activeName == this.list[0].time) {
						this.activeName = this.list[1].time
					} else {
						let listFirst = this.activeName;
						// convert to day
						const dayDiff = moment(limitDate, "YYYY-MM-DD").diff(moment(listFirst, "YYYY-MM-DD"), 'days') - 1
						console.log("dayDiff: " + dayDiff)

						for (var index1 = (-6 + ((dayDiff > 6) ? 6 : dayDiff)); index1 <= ((dayDiff > 6) ? 6 : dayDiff); index1++) {
							console.log("index1: " + index1)
							let nextDate = this.getNextDate(listFirst, index1)
							console.log("nextDateClick: " + nextDate)
							console.log("limit date: " + limitDate)

							arrTime.push(nextDate);
							arrWeek.push(this.getWeek(listFirst, index1));
						}
						for (var j = 0; j < arrTime.length; j++) {
							let obj = {
								time: arrTime[j],
								week: arrWeek[j]
							};
							newArray.push(obj)
						}
						this.list = newArray;
						// If the date difference is greater than or equal to 5, it is in second place
						if (dayDiff > 5) {
							this.activeName = this.list[1].time;
						} else {
							// The difference between the date and the next 14 days is less than 5, which is in the rear position
							console.log(8 - dayDiff)
							this.activeName = this.list[7 - dayDiff].time;
							console.log()
						}
					}
					// If the date of the day is clicked, it is displayed in the first one
					//  otherwise everything else is displayed in the second tab 
				} else if (tab.name == moment(new Date()).format("YYYY-MM-DD")) {
					// this.getTimeList();
					this.activeName = this.list[0].time;
					this.disabled = true;
				} else {
					this.disabled = false;
					let listFirst = tab.name;

					// convert to day
					const dayDiff = moment(limitDate, "YYYY-MM-DD").diff(moment(listFirst, "YYYY-MM-DD"), 'days') 

					for (var index2 = (-7 + ((dayDiff > 6) ? 6 : dayDiff)); index2 < ((dayDiff > 6) ? 6 : dayDiff); index2++) {
						console.log("index2: " + index2)
							let nextDate = this.getNextDate(listFirst, index2)
							console.log("nextDateClick: " + nextDate)
							console.log("limit date: " + limitDate)
						arrTime.push(nextDate);
						arrWeek.push(this.getWeek(tab.name, index2));
					}
					for (var l = 0; l < arrTime.length; l++) {
						let obj = {
							time: arrTime[l],
							week: arrWeek[l]
						};
						newArray.push(obj)
					}
					
					this.list = newArray;
					// If the date difference is greater than or equal to 5, it is in second place
					if (dayDiff >= 6) {
						this.activeName = this.list[1].time;
					} else {
						// The difference between the date and the next 14 days is less than 5, which is in the rear position
						this.activeName = this.list[7 - dayDiff].time;
						console.log()
					}
					
				}
				//update chosen date
				console.log(this.activeName)
				this.ticketForm.date = this.activeName
				this.searchFlight(this.ticketForm.start, this.ticketForm.end, this.ticketForm.date)
			},
			beforeLeave(currentName) {
				//重点，如果name是add，则什么都不触发
				if (currentName == "toForward") {
					return false
				} else if (currentName == "toNext") {
					return false
				} else {
					// this.currentIndex = currentName;
				}
			},

			// Get seven days of the month
			getNextDate(date, item) {
				var dd = new Date(date);
				dd.setDate(dd.getDate() + item);
				var y = dd.getFullYear();
				var m = dd.getMonth() + 1 < 10 ? "0" + (dd.getMonth() + 1) : dd.getMonth() + 1;
				var d = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate();
				console.log("nextDate: " + y + "-" + m + "-" + d)
				return y + "-" + m + "-" + d;
			},
			// get weekdays
			getWeek(dateTime, index) {
				let time = new Date(dateTime);
				// days number
				time.setDate(time.getDate() + index)
				let day = time.getDay();
				let weeks = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
				let week = weeks[day];
				return week;
			},
			// Get time list
			getTimeList() {
				let timeArr = [];
				let weekArr = [];
				let newArr = [];
				// If the data is empty, the row starts seven days from the current date by default 
				if (this.ticketForm.date == "" || this.ticketForm.date == null) {
					console.log("date is empty")
					for (var index = 0; index < 7; index++) {
						var date = moment(new Date()).format("YYYY-MM-DD");
						console.log(date, 'datedatedatedate')
						timeArr.push(this.getNextDate(date, index));
						weekArr.push(this.getWeek(date, index));
					}
					// Update the selected date
					this.ticketForm.date = date;
				} 
				for (var i = 0; i < timeArr.length; i++) {
					let obj = {
						time: timeArr[i],
						week: weekArr[i]
					};
					newArr.push(obj)
				}
				this.list = newArr;
			},
			
			// choose time
			timeChange() {
				console.log("you select time: ", this.checkedTime);
				let value = this.checkedTime
				if (value.length == "") {
					this.noLimitTime = true;
				} else {
					this.noLimitTime = false;
				}
			},
			// choose date
			getDateChange() {

			},
			// search
			onSubmit() {
				let timeArr = [];
				let weekArr = [];
				let newArr = [];
				// Clicking the query button is the date of your choice
				let dateForm = moment(this.ticketForm.date).format("YYYY-MM-DD")

				console.log("时间", dateForm);

				// If the date chosen is the same day, start with the first, otherwise start with the second 
				if (dateForm == moment(new Date()).format("YYYY-MM-DD")) {
					this.disabled = true;
					this.list = [];
					console.log("日期选择今天的", this.list);
					for (var index = 0; index < 7; index++) {
						timeArr.push(this.getNextDate(dateForm, index));
						weekArr.push(this.getWeek(dateForm, index));
					}
					for (var i = 0; i < timeArr.length; i++) {
						let obj = {
							time: timeArr[i],
							week: weekArr[i]
						};
						newArr.push(obj)
					}
					this.list = newArr;
					this.activeName = this.list[0].time
				} else {
					this.disabled = false;
					for (var index5 = -1; index5 < 6; index5++) {
						timeArr.push(this.getNextDate(dateForm, index5));
						weekArr.push(this.getWeek(dateForm, index5));
					}
					for (var k = 0; k < timeArr.length; k++) {
						let obj = {
							time: timeArr[k],
							week: weekArr[k]
						};
						newArr.push(obj)
					}
					this.list = newArr;
					this.activeName = this.list[1].time
				}
				this.searchFlight(this.ticketForm.start, this.ticketForm.end, this.ticketForm.date);
			},
			// Less than today cannot be selected
			getDatePicker() {
				return {
					disabledDate(time) {
						// If the start time is not selected, the maximum end time is less than or equal to the current day.
						// If -8.64e7 is not followed, today cannot be selected 
						return time.getTime() < Date.now() - 8.64e7 
					}
				}
			},
			searchFlight(departure, arrive, date) {
				console.log("searchFlight" + departure + " " + arrive, + " " + date)
				this.$axios.post("/flight/searchFlights", {
					deptId: departure,
					arrId: arrive,
					date: date
				}).then((response) => {
					this.tableData = response.data.data;
					console.log(response.data.data)
					console.log(this.tableData)
					this.tableData.forEach(item => {
						console.log(item.consuming)
						// String splicing
						item.consuming = "about " + item.consuming + " hours";
						item.price = "$" + item.price
						// item.deptTime = item.deptTime;
						// item.arrTime = item.arrTime.substring(11, 19);
					});
					console.log(this.tableData)
				}).catch((error)=>{
					console.log(error)
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	::v-deep .el-tabs--border-card {
		flex-grow: 1;
		border: unset;
		box-shadow: unset;
	}

	::v-deep .el-tabs--border-card>.el-tabs__header {
		border: 1px solid #DCDFE6 !important;
	}

	::v-deep .el-tabs--border-card>.el-tabs__content {
		padding: 15px 0;
	}

	.content-class {
		position: relative;
	}

	.search-row {
		margin: 0 auto !important;
		padding: 0 20px;
		display: flex;
		justify-content: center;
		align-items: center;
		min-width: 980px;
		max-width: 1180px;
		text-align: center;
	}

	.menu-class {
		background-color: #2577e3 !important;
		margin-top: 20px;
		height: 40px;
		line-height: 40px;
	}

	.el-menu-demo {
		min-width: 980px !important;
		max-width: 1180px;
		margin: 0 auto;
		padding: 0;
		font-size: 15px;
		background-color: #2577e3 !important;
	}

	/deep/ .el-menu--horizontal>.el-menu-item {
		height: 40px;
		line-height: 40px;
	}

	/deep/ .el-menu--horizontal>.el-submenu .el-submenu__title {
		height: 40px;
		line-height: 40px;
	}

	/deep/ .el-submenu__title i {
		color: #FFFFFF;
	}

	.menu-btn {
		min-width: 980px !important;
		max-width: 1180px;
		margin: 0 auto;
		padding: 0;
		font-size: 15px;
		padding-bottom: 10px;
		padding-top: 10px;
		border: 1px solid #2577e3;
		border-top: none !important;

	}

	.sale-content {
		min-width: 980px !important;
		max-width: 1180px;
		margin: 0 auto;
		padding: 0;
		font-size: 15px;
		margin-top: 10px;
		margin-bottom: 10px;
		display: flex;
	}

	.sale-image {
		margin-left: 20px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	/deep/ .el-link {
		margin-left: 20px;
	}

	.ticket-sale {
		min-width: 980px !important;
		max-width: 1180px;
		margin: 0 auto;
		padding: 0;
		font-size: 15px;
		padding-bottom: 10px;
		padding-top: 10px;
	}

	.ticket-case {
		min-width: 980px !important;
		max-width: 1180px;
		margin: 0 auto;
		padding: 0;
		font-size: 15px;
		padding-bottom: 10px;
		display: flex;
		justify-content: space-between;
	}

	.change-image {
		width: 20px;
		cursor: pointer;
		padding-top: 12px;
		margin-right: 10px;
	}

	/deep/ .el-tabs {
		width: 901px;
	}

	/deep/ .el-tabs__item {
		border-right: 1px solid #dcdfe6 !important;
		height: 55px;
		line-height: 25px;
	}

	/deep/ #tab-toForward {
		background: #ffffff;
		border-right: 1px solid #dcdfe6;
		border-bottom: 1px solid #dcdfe6;
		display: flex;
		align-items: center;
		padding: 0 10px;
		flex: none;
	}

	/deep/ #tab-toNext {
		background: #ffffff;
		border-left: 1px solid #dcdfe6;
		border-bottom: 1px solid #dcdfe6;
		display: flex;
		align-items: center;
		padding: 0 10px;
		flex: none;
	}

	.choose-time {
		display: flex;
		align-items: center;
	}

	.begin-station {
		margin-top: 10px;
		display: flex;
		align-items: center;
	}

	.end-station {
		margin-top: 10px;
		display: flex;
		align-items: center;
		margin-bottom: 10px;
	}

	.no-limit {
		margin-left: 10px;
	}

	.no-limit /deep/ .el-checkbox-button__inner {
		padding: 2px 5px;
		border: none;
	}

	.time-check {
		margin-left: 10px;
	}

	.time-check /deep/ .el-checkbox {
		width: 120px;
	}

	/deep/.el-table .el-table__cell {
		padding: 4px 0;
		height: 40px;
	}

	.ticket-tips {
		margin-left: 10px;
	}

	.ticket-point {
		width: 300px;
		border: 1px solid #dcdfe6;
	}

	.point-title {
		font-size: 16px;
		background-color: #f4fcf8;
		padding: 10px 5px;
	}

	.point-content {
		padding: 5px 10px;
		font-size: 12px;
	}

	.point-content-detail {
		margin-top: 5px;
		display: block;
		color: #666;
	}
</style>