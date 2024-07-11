<template>
  <title>山东理工大学辅导员风采</title>

  <div class="common-layout">
    <el-container>
      <el-header>
        <el-menu mode="horizontal">
          <div class="LOGO">
            山东理工大学辅导员风采
          </div>
          <el-sub-menu>
            <template #title>选项</template>
          <div class="header-buttons">
            <el-button type="primary">
              <el-link type="default" href="https://youth.sdut.edu.cn">返回青春在线</el-link>
            </el-button>
            <el-button type="primary" @click="toggleDark()">
              <i :class="isDark ? 'el-icon-sunny' : 'el-icon-moon'"></i>
              {{ isDark ? "浅色" : "深色" }}模式
            </el-button>
          </div>
          </el-sub-menu>
        </el-menu>
      </el-header>

      <el-main>
        <el-carousel
            class = "customedCarousel"
            height="79vh"
            interval="40000"
            type="card"
            indicator-position="none"
        >
          <el-carousel-item
              v-for="(item, index) in carouselItems" :key="index" @click="goToDetails">
            <div class="carousel-content" :style="{ backgroundImage: `url(${item.image})` }">
              <h3>{{ item.title }}</h3>
            </div>
          </el-carousel-item>
        </el-carousel>
      </el-main>

      <el-footer class="customedFooter">Youthol © 2001-2024 Created by CSBigCaptain and ItsDia</el-footer>
    </el-container>
  </div>
</template>

<script setup>
import { ref } from 'vue';
// import MainPageTopic from "@/components/MainPageTopic.vue";
import { useDark, useToggle } from '@vueuse/core';
import CS from "@/components/GalleryCS.vue"
const isDark = useDark();
const toggleDark = useToggle(isDark);

import image1 from '@/assets/image/schoolOfCS.png';
// import image2 from '@/assets/image/schoolOfEE.png';
// import image3 from '@/assets/image/schoolOfLaw.png';
// import image4 from '@/assets/image/schoolOfManagement.png';
// import image5 from '@/assets/image/schoolOfInternationalEducation.png';
// import image6 from '@/assets/image/schoolOfChemicalEngineering.png';
// import image7 from '@/assets/image/schoolOfMechanicalEngineering.png';
// import image8 from '@/assets/image/schoolOfComputerScience.png';
// import image9 from '@/assets/image/schoolOfConstruction.png';
// import image10 from '@/assets/image/schoolOfTransportation.png';
// import image11 from '@/assets/image/schoolOfEconomics.png';
// import image12 from '@/assets/image/schoolOfLutai.png';
// import image13 from '@/assets/image/schoolOfMarxism.png';
// import image14 from '@/assets/image/schoolOfFineArts.png';
// import image15 from '@/assets/image/schoolOfAgriculturalEngineering.png';
// import image16 from '@/assets/image/schoolOfLifeScience.png';
// import image17 from '@/assets/image/schoolOfMathematics.png';
// import image18 from '@/assets/image/schoolOfPhysicalOptics.png';
// import image19 from '@/assets/image/schoolOfMusic.png';
// import image20 from '@/assets/image/schoolOfEnvironmentalScience.png';

const carouselItems = ref([
    //材料学院、电气学院、法学院、管理学院、国际教育学院、化工学院、机械工程学院、计算机学院、建工学院、交通与车辆工程学院、经济学院、鲁泰学院、马克思主义学院、美术学院、农业工程与食品科学学院、生命科学学院、数统学院、体育学院、图书馆、外国语学院、文学院、物光学院、音乐学院、资环学院
  {title:'材料学院'},
  {title:'电气学院'},
  {title:'法学院'},
  {title:'管理学院'},
  {title:'国际教育学院'},
  {title:'化工学院'},
  {title:'机械工程学院'},
  {title:'计算机学院',image:image1},
  {title:'建工学院'},
  {title:'交通与车辆工程学院'},
  {title:'经济学院'},
  {title:'鲁泰学院'},
  {title:'马克思主义学院'},
  {title:'美术学院'},
  {title:'农业工程与食品科学学院'},
  {title:'生命科学学院'},
  {title:'数统学院'},
  {title:'体育学院'},
  {title:'图书馆'},
  {title:'外国语学院'},
  {title:'文学院'},
  {title:'物光学院'},
  {title:'音乐学院'},
  {title:'资环学院'},
]);

const Routes={
  path:'/',
  name:SchoolofComputerScience,
  component: CS
}
</script>

<style scoped>
body{
  font-family: Inter, 'Helvetica Neue', Helvetica, 'PingFang SC',
  'Hiragino Sans GB', 'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
}
.customedCarousel .el-carousel__item {
  transition: transform 1s !important;
}

.customedCarousel .el-carousel__container {
  transition: transform 1s !important;
}
.customedFooter{
  font-weight: lighter;
  font-size: smaller;
}
.common-layout {
  background-color: #f0f2f5;
}

.el-header {
  background-color: #ffffff;
  box-shadow: 0 2px 8px rgba(0,0,0,.1);
}

.el-footer {
  background-color: #2c3e50;
  color: #ffffff;
  padding: 20px 0;
  text-align: center;
  border-top: 2px solid #4C4D4F;
}
.LOGO{
  font-size: 23px;
  margin-right: auto;
  display: flex;
  align-items: center;
  letter-spacing: 4px;
  transition-duration: 0.5s;
}
.LOGO:hover
{
  color: #409EFF;
  transition-duration: 0.5s;
  font-size: 25px;
}
.header-buttons {
  display: flex;
  align-items: center;
  margin-left: auto;
}
.el-button {
  border-radius: 20px;
  padding: 10px 20px;
  margin: 0 5px;
  transition: all 0.3s ease;
}

.el-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,.1);
}

.el-menu .el-button a {
  color: white;
}

.el-carousel__item {
  border-radius: 10px;
  overflow: hidden;
}

.carousel-content {
  height: 100%;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: flex-end;
}

.el-carousel__item h3 {
  background: rgba(0,0,0,0.6);
  color: #ffffff;
  padding: 20px;
  width: 100%;
  margin: 0;
  font-size: 24px;
}

.el-menu-item,
.el-button,
.el-carousel__item {
  transition: all 0.3s ease;
}

@media (max-width: 768px) {
  .el-carousel {
    height: 50vh;
  }

  .el-button {
    padding: 8px 15px;
    font-size: 14px;
  }
}
</style>