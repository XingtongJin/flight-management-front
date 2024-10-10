<template>
  <div id="mainpage">
    <NaviHeader></NaviHeader>
    <div v-if="this.$route.path == '/'">
      <!-- 轮播图 -->
      <el-carousel height="800px" autoplay interval="3000">
        <el-carousel-item v-for="(image, index) in carouselImages" :key="index">
          <img :src="image" alt="carousel image" class="carousel-img" />
        </el-carousel-item>
      </el-carousel>

      <!-- 按钮区域 -->
      <div class="button-container">
        <el-button 
          class="custom-button" 
          @click="handleButtonClick(1)"
        >
          Ticket Service
        </el-button>
        <el-button 
          class="custom-button" 
          @click="handleButtonClick(2)"
        >
          Order Service
        </el-button>
        <el-button 
          class="custom-button" 
          @click="handleButtonClick(3)"
        >
          Account Information
        </el-button>
      </div>

      <div class="description-section">
        <h2>Welcome to Our Flight Website</h2>
        <br/>
        <p>
          Welcome to our flight website, your ultimate destination for booking air travel with ease and convenience. 
            We offer a user-friendly interface that allows you to search, compare, and book flights from a wide range of airlines at competitive prices. 
            With our advanced filtering options, you can quickly find flights that suit your preferences, whether you're looking for direct routes,
            specific departure times, or budget-friendly options. Additionally, our platform provides real-time updates on flight status,
              ensuring you stay informed about your travel plans. 
              Experience seamless travel planning and make your journey unforgettable with our comprehensive flight services.
          </p>
      </div>
    </div>
    
    <router-view v-if="this.$route.path !== '/'"></router-view>
  </div>
</template>


<script>
import NaviHeader from '@/components/navi/NaviHeader.vue'
export default {
  name: 'HomePage',
  data() {
    return{
      carouselImages: [
        // 轮播图图片的URL数组，可以放置从Unsplash下载的长图
        require('@/assets/img/slideshow01.jpg'), // 替换为你的图片文件名
        require('@/assets/img/slideshow02.jpg'),
        require('@/assets/img/slideshow03.jpg')
      ]
    }
  },
  components: { NaviHeader },
  methods: {
    handleButtonClick(index) {
      console.log(index)
      if(index == 1) {
        this.$router.push("/flight")
      } else if (index == 2) {
        this.$router.push("/myOrder")
      } else if (index == 3) {
        this.$router.push("/personInfo")
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.carousel-img {
  width: 100%;
  height: 800px;
  object-fit: cover;
}

.button-container {
  display: flex;
  justify-content: space-between; /* 平均分配空间 */
  margin-top: 20px; /* 可调节按钮和轮播图之间的间距 */
}

.custom-button {
  flex: 1; /* 平均占据整个行 */
  margin: 0 10px; /* 按钮之间的间距 */
  background-size: cover; /* 背景图填充方式 */
  height: 50px; /* 可调节按钮高度 */
  color: white; /* 按钮文字颜色 */
  font-size: 30px;
  height: 700px;
}

/* 设置按钮的背景图 */
.custom-button:nth-child(1) {
  background-image: url('@/assets/img/flight.jpg'); /* 替换为你的背景图 */
}

.custom-button:nth-child(2) {
  background-image: url('@/assets/img/myorders.jpg'); /* 替换为你的背景图 */
}

.custom-button:nth-child(3) {
  background-image: url('@/assets/img/personalInfo.jpg'); /* 替换为你的背景图 */
}

.description-section {
  display: flex;
  flex-direction: column; /* 垂直排列 */
  align-items: center; /* 水平居中 */
  border: 1px solid #ddd; /* Light border */
  color: rgb(64, 158, 255);
  border-radius: 8px; /* Rounded corners */
  padding: 20px; /* Padding for spacing */
  margin: 20px 0; /* Margin for spacing from other elements */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); /* Soft shadow */
  height: 500px;
  background-image: url('@/assets/img/Introduction.jpg');
  background-size: cover; 
}

.description-section h2 {
  font-size: 30px; /* Title size */
  margin-bottom: 10px; /* Space below title */
}

.description-section p {
  font-size: 20px; /* Description text size */
  line-height: 1.5; /* Line height for better readability */
}
</style>
