<template>
  <div class="common-layout">
    <el-container>
      <el-header height="100px">
        <el-row>
          <el-col :span="12">
            <div class="grid-content ep-bg-purple" />
            <h3>{{planeModel}}</h3>
          </el-col>
          <el-col :span="12">
            <div class="grid-content ep-bg-purple-light" />
            <el-row>
              <el-col :span="6">
                <br>
                <br>
                <!-- sold seat -->
                <span>
                  sold:
                  <svg t="1669614123076" class="icon" viewBox="0 0 1024 1024" version="1.1"
                    xmlns="http://www.w3.org/2000/svg" p-id="3933" width="28" height="28"
                    data-spm-anchor-id="a313x.7781069.0.i6">
                    <path
                      d="M921.809455 928.395636h-102.423273v18.059637c0 30.045091-22.970182 54.272-51.2 54.272-28.253091 0-51.223273-24.343273-51.223273-54.272v-18.059637H307.269818v18.059637c0 30.045091-22.970182 54.272-51.2 54.272-28.253091 0-51.223273-24.343273-51.223273-54.272v-18.059637H102.423273C64.721455 928.395636 0 859.810909 0 819.758545v-398.196363c0-39.936 30.510545-72.424727 68.235636-72.424727h68.258909c37.701818 0 68.235636 32.349091 68.235637 72.424727V711.214545h614.539636V421.562182c0-39.936 30.510545-72.424727 68.235637-72.424727h68.258909c37.701818 0 68.235636 32.349091 68.235636 72.424727V819.898182c0.232727 39.936-64.465455 108.520727-102.190545 108.520727zM853.550545 276.712727c-56.552727 0-102.4 48.686545-102.4 108.660364v253.416727H273.058909V385.349818c0-59.973818-45.847273-108.660364-102.4-108.660363-12.008727 0-23.458909-4.072727-34.210909 0V131.956364C136.494545 71.959273 182.341818 23.272727 238.941091 23.272727h546.280727c56.599273 0 102.423273 48.686545 102.423273 108.660364v144.872727c-10.752-4.189091-22.062545-0.116364-34.071273-0.116363z"
                      p-id="3934" fill="#f4ea2a" data-spm-anchor-id="a313x.7781069.0.i7" class="selected">
                    </path>
                  </svg>
                </span>
              </el-col>
              <el-col :span="5">
                <br>
                <br>
                <!-- selected seat -->
                <span>
                  selected:
                  <svg t="1669614123076" class="icon" viewBox="0 0 1024 1024" version="1.1"
                    xmlns="http://www.w3.org/2000/svg" p-id="3933" width="28" height="28"
                    data-spm-anchor-id="a313x.7781069.0.i6">
                    <path
                      d="M921.809455 928.395636h-102.423273v18.059637c0 30.045091-22.970182 54.272-51.2 54.272-28.253091 0-51.223273-24.343273-51.223273-54.272v-18.059637H307.269818v18.059637c0 30.045091-22.970182 54.272-51.2 54.272-28.253091 0-51.223273-24.343273-51.223273-54.272v-18.059637H102.423273C64.721455 928.395636 0 859.810909 0 819.758545v-398.196363c0-39.936 30.510545-72.424727 68.235636-72.424727h68.258909c37.701818 0 68.235636 32.349091 68.235637 72.424727V711.214545h614.539636V421.562182c0-39.936 30.510545-72.424727 68.235637-72.424727h68.258909c37.701818 0 68.235636 32.349091 68.235636 72.424727V819.898182c0.232727 39.936-64.465455 108.520727-102.190545 108.520727zM853.550545 276.712727c-56.552727 0-102.4 48.686545-102.4 108.660364v253.416727H273.058909V385.349818c0-59.973818-45.847273-108.660364-102.4-108.660363-12.008727 0-23.458909-4.072727-34.210909 0V131.956364C136.494545 71.959273 182.341818 23.272727 238.941091 23.272727h546.280727c56.599273 0 102.423273 48.686545 102.423273 108.660364v144.872727c-10.752-4.189091-22.062545-0.116364-34.071273-0.116363z"
                      p-id="3934" fill="#1296db" data-spm-anchor-id="a313x.7781069.0.i7" class="selected">
                    </path>
                  </svg>
                </span>
              </el-col>
              <el-col :span="6">
                <br>
                <br>
                <!--  selectable seat -->
                <span>
                  available:
                  <svg t="1669571566025" class="icon" viewBox="0 0 1024 1024" version="1.1"
                    xmlns="http://www.w3.org/2000/svg" p-id="2950" width="28" height="28">
                    <path
                      d="M935.292 958.682H729.154c-13.727 0-24.855-11.129-24.855-24.855v-38.712H320.181v38.712c0 13.727-11.129 24.855-24.855 24.855H90.189c-13.726 0-24.856-11.129-24.856-24.855V408.563c0-13.726 11.13-24.856 24.856-24.856h38.712V138.436c0-41.18 33.375-74.568 74.568-74.568h618.542c41.18 0 74.567 33.388 74.567 74.568v245.271h38.713c13.727 0 24.854 11.13 24.854 24.856v525.263c0.001 13.727-11.126 24.856-24.853 24.856zM832.866 152.436c0-13.727-11.128-24.856-24.854-24.856H216.469c-13.726 0-24.856 11.129-24.856 24.856v231.271h41.712c13.726 0 22.855 11.13 22.855 24.856v166.992h512.118V408.563c0-13.726 11.129-24.856 24.855-24.856h39.712V152.436z m63.572 294.984h-64.426v166.99c0 13.727-11.129 24.856-24.857 24.856H217.326c-13.728 0-24.856-11.13-24.856-24.856V447.419h-64.424v448.55H256.47v-38.712c0-13.727 11.129-24.855 24.856-24.855h460.829c13.729 0 24.857 11.129 24.857 24.855v38.712h129.426V447.42z"
                      p-id="2951"></path>
                  </svg>
                </span>
              </el-col>
            </el-row>
          </el-col>
        </el-row>

      </el-header>
      <el-main>
        <el-row>
          <el-col :span="1"> </el-col>
          <el-col :span="10" v-if="seatType == 'B'">
            <div>
              <span>bussiness class</span>
            </div>
            <div class="hhh">
              <div v-for="(aaa, index1) in seatlist" :key="index1">
                <span>
                  {{ bussinessLine[index1] }}
                </span>

                <div v-if="aaa.length == 0" class="hh">
                  <span class="h">passage </span>
                </div>

                <span v-for="(hhh, index2) in aaa" :key="index2" @click="clickseat({ hhh, index1, index2 })">

                  <el-button link size="small">
                    <div>
                      <i size="20px">
                        <div v-if="hhh == 2">
                          <svg t="1669614123076" class="icon" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="3933" width="28" height="28"
                            data-spm-anchor-id="a313x.7781069.0.i6">
                            <path
                              d="M921.809455 928.395636h-102.423273v18.059637c0 30.045091-22.970182 54.272-51.2 54.272-28.253091 0-51.223273-24.343273-51.223273-54.272v-18.059637H307.269818v18.059637c0 30.045091-22.970182 54.272-51.2 54.272-28.253091 0-51.223273-24.343273-51.223273-54.272v-18.059637H102.423273C64.721455 928.395636 0 859.810909 0 819.758545v-398.196363c0-39.936 30.510545-72.424727 68.235636-72.424727h68.258909c37.701818 0 68.235636 32.349091 68.235637 72.424727V711.214545h614.539636V421.562182c0-39.936 30.510545-72.424727 68.235637-72.424727h68.258909c37.701818 0 68.235636 32.349091 68.235636 72.424727V819.898182c0.232727 39.936-64.465455 108.520727-102.190545 108.520727zM853.550545 276.712727c-56.552727 0-102.4 48.686545-102.4 108.660364v253.416727H273.058909V385.349818c0-59.973818-45.847273-108.660364-102.4-108.660363-12.008727 0-23.458909-4.072727-34.210909 0V131.956364C136.494545 71.959273 182.341818 23.272727 238.941091 23.272727h546.280727c56.599273 0 102.423273 48.686545 102.423273 108.660364v144.872727c-10.752-4.189091-22.062545-0.116364-34.071273-0.116363z"
                              p-id="3934" fill="#1296db" data-spm-anchor-id="a313x.7781069.0.i7" class="selected">
                            </path>
                          </svg>
                        </div>
                        <div v-if="hhh == 1">
                          <svg t="1669614123076" class="icon" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="3933" width="28" height="28"
                            data-spm-anchor-id="a313x.7781069.0.i6">
                            <path
                              d="M921.809455 928.395636h-102.423273v18.059637c0 30.045091-22.970182 54.272-51.2 54.272-28.253091 0-51.223273-24.343273-51.223273-54.272v-18.059637H307.269818v18.059637c0 30.045091-22.970182 54.272-51.2 54.272-28.253091 0-51.223273-24.343273-51.223273-54.272v-18.059637H102.423273C64.721455 928.395636 0 859.810909 0 819.758545v-398.196363c0-39.936 30.510545-72.424727 68.235636-72.424727h68.258909c37.701818 0 68.235636 32.349091 68.235637 72.424727V711.214545h614.539636V421.562182c0-39.936 30.510545-72.424727 68.235637-72.424727h68.258909c37.701818 0 68.235636 32.349091 68.235636 72.424727V819.898182c0.232727 39.936-64.465455 108.520727-102.190545 108.520727zM853.550545 276.712727c-56.552727 0-102.4 48.686545-102.4 108.660364v253.416727H273.058909V385.349818c0-59.973818-45.847273-108.660364-102.4-108.660363-12.008727 0-23.458909-4.072727-34.210909 0V131.956364C136.494545 71.959273 182.341818 23.272727 238.941091 23.272727h546.280727c56.599273 0 102.423273 48.686545 102.423273 108.660364v144.872727c-10.752-4.189091-22.062545-0.116364-34.071273-0.116363z"
                              p-id="3934" fill="#f4ea2a" data-spm-anchor-id="a313x.7781069.0.i7" class="selected">
                            </path>
                          </svg>
                        </div>

                        <div v-if="hhh == 0">
                          <svg t="1669571566025" class="icon" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="2950" width="28" height="28">
                            <path
                              d="M935.292 958.682H729.154c-13.727 0-24.855-11.129-24.855-24.855v-38.712H320.181v38.712c0 13.727-11.129 24.855-24.855 24.855H90.189c-13.726 0-24.856-11.129-24.856-24.855V408.563c0-13.726 11.13-24.856 24.856-24.856h38.712V138.436c0-41.18 33.375-74.568 74.568-74.568h618.542c41.18 0 74.567 33.388 74.567 74.568v245.271h38.713c13.727 0 24.854 11.13 24.854 24.856v525.263c0.001 13.727-11.126 24.856-24.853 24.856zM832.866 152.436c0-13.727-11.128-24.856-24.854-24.856H216.469c-13.726 0-24.856 11.129-24.856 24.856v231.271h41.712c13.726 0 22.855 11.13 22.855 24.856v166.992h512.118V408.563c0-13.726 11.129-24.856 24.855-24.856h39.712V152.436z m63.572 294.984h-64.426v166.99c0 13.727-11.129 24.856-24.857 24.856H217.326c-13.728 0-24.856-11.13-24.856-24.856V447.419h-64.424v448.55H256.47v-38.712c0-13.727 11.129-24.855 24.856-24.855h460.829c13.729 0 24.857 11.129 24.857 24.855v38.712h129.426V447.42z"
                              p-id="2951"></path>
                          </svg>
                        </div>
                      </i>
                    </div>
                  </el-button>
                </span>
              </div>
            </div>
          </el-col>
          <el-col :span="18" v-if="seatType == 'E'">
            <div>
              <div>
                <span>economy class</span>
              </div>

              <div v-for="(aaa, index1) in listmax" :key="index1">
                <span>
                  {{ economyLine[index1] }}
                </span>
                <div v-if="aaa.length == 0" class="hh">
                  <span class="h">passage</span>
                </div>
                <span v-for="(hhh, index2) in aaa" :key="index2" @click="clickseat({ hhh, index1, index2 })">
                  
                  <el-button link size="small">
                    <div>
                      <i size="20px">
                        <div v-if="hhh == 2">
                          <svg t="1669614123076" class="icon" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="3933" width="28" height="28"
                            data-spm-anchor-id="a313x.7781069.0.i6">
                            <path d="M921.809455 928.395636h-102.423273v18.059637c0 30.045091-22.970182 54.272-51.2 54.272-28.253091 
                              0-51.223273-24.343273-51.223273-54.272v-18.059637H307.269818v18.059637c0 30.045091-22.970182 54.272-51.2 
                              54.272-28.253091 0-51.223273-24.343273-51.223273-54.272v-18.059637H102.423273C64.721455 928.395636 0 
                              859.810909 0 819.758545v-398.196363c0-39.936 30.510545-72.424727 68.235636-72.424727h68.258909c37.701818 
                              0 68.235636 32.349091 68.235637 72.424727V711.214545h614.539636V421.562182c0-39.936 30.510545-72.424727 
                              68.235637-72.424727h68.258909c37.701818 0 68.235636 32.349091 68.235636 72.424727V819.898182c0.232727 
                              39.936-64.465455 108.520727-102.190545 108.520727zM853.550545 276.712727c-56.552727 0-102.4 48.686545-102.4 
                              108.660364v253.416727H273.058909V385.349818c0-59.973818-45.847273-108.660364-102.4-108.660363-12.008727 
                              0-23.458909-4.072727-34.210909 0V131.956364C136.494545 71.959273 182.341818 23.272727 238.941091 
                              23.272727h546.280727c56.599273 0 102.423273 48.686545 102.423273 
                              108.660364v144.872727c-10.752-4.189091-22.062545-0.116364-34.071273-0.116363z"
                              p-id="3934" fill="#1296db" data-spm-anchor-id="a313x.7781069.0.i7" class="selected">
                            </path>
                          </svg>
                        </div>
                        <div v-if="hhh == 1">
                          <svg t="1669614123076" class="icon" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="3933" width="28" height="28"
                            data-spm-anchor-id="a313x.7781069.0.i6">
                            <path
                              d="M921.809455 928.395636h-102.423273v18.059637c0 30.045091-22.970182 54.272-51.2 54.272-28.253091 0-51.223273-24.343273-51.223273-54.272v-18.059637H307.269818v18.059637c0 30.045091-22.970182 54.272-51.2 54.272-28.253091 0-51.223273-24.343273-51.223273-54.272v-18.059637H102.423273C64.721455 928.395636 0 859.810909 0 819.758545v-398.196363c0-39.936 30.510545-72.424727 68.235636-72.424727h68.258909c37.701818 0 68.235636 32.349091 68.235637 72.424727V711.214545h614.539636V421.562182c0-39.936 30.510545-72.424727 68.235637-72.424727h68.258909c37.701818 0 68.235636 32.349091 68.235636 72.424727V819.898182c0.232727 39.936-64.465455 108.520727-102.190545 108.520727zM853.550545 276.712727c-56.552727 0-102.4 48.686545-102.4 108.660364v253.416727H273.058909V385.349818c0-59.973818-45.847273-108.660364-102.4-108.660363-12.008727 0-23.458909-4.072727-34.210909 0V131.956364C136.494545 71.959273 182.341818 23.272727 238.941091 23.272727h546.280727c56.599273 0 102.423273 48.686545 102.423273 108.660364v144.872727c-10.752-4.189091-22.062545-0.116364-34.071273-0.116363z"
                              p-id="3934" fill="#f4ea2a" data-spm-anchor-id="a313x.7781069.0.i7" class="selected">
                            </path>
                          </svg>
                        </div>

                        <div v-if="hhh == 0">
                          <svg t="1669571566025" class="icon" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="2950" width="28" height="28">
                            <path
                              d="M935.292 958.682H729.154c-13.727 0-24.855-11.129-24.855-24.855v-38.712H320.181v38.712c0 13.727-11.129 24.855-24.855 24.855H90.189c-13.726 0-24.856-11.129-24.856-24.855V408.563c0-13.726 11.13-24.856 24.856-24.856h38.712V138.436c0-41.18 33.375-74.568 74.568-74.568h618.542c41.18 0 74.567 33.388 74.567 74.568v245.271h38.713c13.727 0 24.854 11.13 24.854 24.856v525.263c0.001 13.727-11.126 24.856-24.853 24.856zM832.866 152.436c0-13.727-11.128-24.856-24.854-24.856H216.469c-13.726 0-24.856 11.129-24.856 24.856v231.271h41.712c13.726 0 22.855 11.13 22.855 24.856v166.992h512.118V408.563c0-13.726 11.129-24.856 24.855-24.856h39.712V152.436z m63.572 294.984h-64.426v166.99c0 13.727-11.129 24.856-24.857 24.856H217.326c-13.728 0-24.856-11.13-24.856-24.856V447.419h-64.424v448.55H256.47v-38.712c0-13.727 11.129-24.855 24.856-24.855h460.829c13.729 0 24.857 11.129 24.857 24.855v38.712h129.426V447.42z"
                              p-id="2951"></path>
                          </svg>
                        </div>
                      </i>
                    </div>
                  </el-button>
                </span>
              </div>
            </div>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
    <div class="h">
      <el-button @click="confirmSeat" type="primary"> confirm </el-button>
    </div>
  </div>
  
</template>


<script>
import {Message} from 'element-ui'
import { mapState } from 'vuex';

  export default {
    name: "chooseSeat",
    data() {
      return {
        height: 3,
        width: 3,
        planeModel: 'Boeing 737',
        seatData: [],
        // bussiness seat list
        seatlist: [[], [], []],
        // economy seat list
        listmax: [
                  [],
                  [],
                  [],
                  [],
                  [],
                ],
        // four lines for economy seats
        economyLine: [
          "A", "B", "", "D", "E"
        ],
        // two lines for bussiness seats
        bussinessLine: [
          "A", "", "B"
        ],
        info: 0
      }
    }, 
    beforeMount() {
      this.planeModel = this.flightInfo.planeModel
      if (this.flightInfo == '') {
        alert('please access this page by right way.')
        this.$router.push('/flight')
      }
      // bussiness seat
      if (this.seatType == 'B') {
        this.$axios.get('/flight/businessSeat', {
          params: {
            flightId: this.flightInfo.id,
          }
        }).then((response) => {
          console.log(response.data.data);
          this.seatData = response.data.data;
          response.data.data.forEach(seat => {
            const seatNumber = seat.seatNumber;
            // 1 is sold, 0 is unsold
            const soldValue = seat.sold ? 1 : 0; 
            const rowIndex = parseInt(seatNumber.slice(0, -1)) - 1;

            if (seatNumber.endsWith('A')) {
              // It ends with A in the first subarray
                this.seatlist[0].splice(rowIndex, 1, soldValue);
            } else if (seatNumber.endsWith('B')) {
              // It ends with B in the third subarray (second subarray is empty)
              this.seatlist[2].splice(rowIndex, 1, soldValue); 
            }
          });
        }).catch((error)=>{
					console.log(error)
				})
      } else if (this.seatType == 'E'){
        console.log("flight ID: " + this.flightInfo.id)
        this.$axios.get('/flight/economySeat', {
          params: {
            flightId: this.flightInfo.id,
          }
        }).then((response) => {
          console.log(response.data.data);
          this.seatData = response.data.data;
          response.data.data.forEach(seat => {
            const seatNumber = seat.seatNumber;
            // 1 is sold, 0 is unsold
            const soldValue = seat.sold ? 1 : 0; 
            const rowIndex = parseInt(seatNumber.slice(0, -1)) - 1;

            if (seatNumber.endsWith('A')) {
              // It ends with A in the first subarray
                this.listmax[0].splice(rowIndex, 1, soldValue);
            } else if (seatNumber.endsWith('B')) {
              // It ends with B in the second subarray
              this.listmax[1].splice(rowIndex, 1, soldValue); 
            } else if (seatNumber.endsWith('D')) {
              // It ends with D in the fourth subarray (third subarray is empty)
              this.listmax[3].splice(rowIndex, 1, soldValue); 
            } else if (seatNumber.endsWith('E')) {
              // It ends with E in the fifth subarray
              this.listmax[4].splice(rowIndex, 1, soldValue); 
            }
        });
        }).catch((error)=>{
					console.log(error)
				})
      }
      console.log("seatType: " + this.seatType)
      console.log("orderFlightInfo: " + this.flightInfo)
    },
    beforeUpdate() {
      console.log("update list: " + this.listmax)
    },
    computed:{
      ...mapState({
        seatType: 'seatType',
        flightInfo: 'orderFlightInfo'
      })
    },
    watch: {
      listmax: {
        deep: true,
        handler(newVal, oldVal) {
          console.log('list change', newVal, oldVal);
        },
      },
      seatlist: {
        deep: true,
        handler(newVal, oldVal) {
          console.log('list change', newVal, oldVal);
        },
      }
    },
    methods: {
      clickseat(seat) {
        console.log(seat)
        if(this.seatType === 'B') {
          console.log('bussiness class')
          // If the status is 0, change the unselected status to selected
          if (seat.hhh == 0) {
            this.seatlist[seat.index1].splice(seat.index2, 1, 2)
            // If the status is 1, that is, the selected state, clicking will change to unselected 
          } else if (seat.hhh == 2) {
            this.seatlist[seat.index1].splice(seat.index2, 1, 0)
            console.log("cancel selected");
            //In case of status 2, which is a seat that has already been sold, it is prompted to select a new seat
          } else if (seat.hhh == 1) {
            Message("already sold, please choose another seat");
          }
        } else if (this.seatType === 'E') {
          console.log('economy class')
          // If the status is 0, change the unselected status to selected
          if (seat.hhh == 0) {
            this.listmax[seat.index1].splice(seat.index2, 1, 2)
            // If the status is 1, that is, the selected state, clicking will change to unselected 
          } else if (seat.hhh == 2) {
            this.listmax[seat.index1].splice(seat.index2, 1, 0)
            console.log("cancel selected");
            // In case of status 2, which is a seat that has already been sold, it is prompted to select a new seat
          } else if (seat.hhh == 1) {
            Message("already sold, please choose another seat");
          }
          console.log(this.listmax)
        }
      },
      confirmSeat() {
        // economy class 
        if (this.seatType == "E") {
          // count seat number
          for (let a = 0; a < this.listmax.length; a++) {
            console.log(this.listmax[a])
            if (this.listmax[a].filter(item => item == 2).length > 0) {
              console.log("lail");
              this.info = this.info + this.listmax[a].filter(item => item == 2).length;
            }
          }
          console.log(this.info)
          //didn't select seat
          if (this.info == 0) {
            console.log(this.info);

            Message({
              message: 'Please select your seat before confirming your purchase!',
              type: 'warning',
            })
          }
          // seat selected more than 1
          else if (this.info > 1) {
            console.log(this.info);
            Message({
              message: 'Only one seat can be selected',
              type: 'warning',
            })
            this.info = 0;
          }
          // The seat selection meets the requirements and the information is saved in the store
          else {
            let bool = true;
            let seat = '';
            for (let a = 0; bool && a < this.listmax.length; a++) {
              console.log("listmax[a]: "+ this.listmax[a])
              for (let b = 0; bool && b < this.listmax[a].length; b++) {
                console.log(b)
                if (this.listmax[a][b] == 2) {
                  if (a == 0) {
                    seat = (b + 1) + 'A';
                  } else if (a == 1) {
                    seat = (b + 1) + 'B'
                  } else if (a == 3) {
                    seat = (b + 1) + 'D'
                  } else if (a == 4) {
                    seat = (b + 1) + 'E'
                  }
                  console.log("seat: " + seat)
                  this.$store.commit('PUTSEATNUMBER', seat)
                  bool = false
                }
              }
            }
            this.info = 0;
            this.$router.push('/order')
          }
        }
        // bussiness class
        else {
          
          for (let a = 0; a < this.seatlist.length; a++) {
            if (
              this.seatlist.value[a].filter((item) => {
                return item == 2;
              }).length > 0
            ) {
              console.log("lail");
              this.info =
              this.info +
                this.seatlist.filter((item) => {
                  return item == 2;
                }).length;
            }
          }
          if (this.info == 0) {
            console.log(this.info);
            Message("Please select your seat before confirming your purchase!");
          } else if (this.info > 1) {
            console.log(this.info);
            Message({
              message: 'Only one seat can be selected',
              type: 'warning',
            })
            this.info = 0;
          } 
          else {
            console.log(this.info);
            let seat = '';
            let bool = true
            for (let a = 0; bool && a < this.listmax.length; a++) {
              console.log(this.listmax[a])
              for (let b = 0; bool && b < this.listmax[a].length; b++) {
                if (this.listmax[a][b] == 2) {
                  if (a == 0) {
                    seat = (b + 1) + 'A';
                  } else if (a == 2) {
                    seat = (b + 1) + 'B'
                  } 
                  console.log(seat)
                  this.$store.commit('PUTSEATNUMBER', seat)
                  bool = false
                }
              }
            }
            this.info = 0;
            this.$router.push('/order')
          }
        }
      }
    }

  }
</script>

<style scoped>
.box {
  position: relative;
}

.aa {
  position: absolute;
}

.aaa {
  height: 20px;
  widows: 20px;
}

.hhh {
  position: relative;
  top: 15%;
}

.h {
  position: relative;
  margin: 20px;
}

.hh {
  height: 20px;

}
</style>