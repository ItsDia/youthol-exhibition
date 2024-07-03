<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <el-menu mode="horizontal">
          <main-page-topic></main-page-topic>
<!--          <div style="flex-grow: 1"></div> 这里注释掉是因为打算将按钮放到右侧，如果用这个语句会导致右侧按钮自动被折叠，暂无解决方法-->
          <div style="display: flex; align-items: center;">
            <el-button type="primary"><el-link type="default" href="https://youth.sdut.edu.cn">返回青春在线</el-link></el-button>
            <el-button type="primary" @click="toggleDark()">{{ isDark === true ? "浅色" : "深色" }}模式</el-button>
          </div>
        </el-menu>
      </el-header>
      <el-main>
        <el-carousel height="70vh" motion-blur arrow="always">
          <el-carousel-item @click="goToDetails">
            <h3>计算机科学与技术学院</h3>
          </el-carousel-item>
          <el-carousel-item @click="goToDetails">
            <h3>电气工程及其自动化学院</h3>
          </el-carousel-item>
          <el-carousel-item @click="goToDetails">
            <h3>交通与车辆工程学院</h3>
          </el-carousel-item>
          <el-carousel-item @click="goToDetails">
            <h3>农业工程与食品科学学院</h3>
          </el-carousel-item>
          <el-carousel-item @click="goToDetails">
            <h3>建筑工程与空间信息学院</h3>
          </el-carousel-item>
          <el-carousel-item @click="goToDetails">
            <h3>机械工程学院</h3>
          </el-carousel-item>
        </el-carousel>
      </el-main>
      <el-footer>Youthol © 2001-2024 Created by CSBigCaptain and ItsDia</el-footer>
    </el-container>
  </div>
</template>

<script setup>
import MainPageTopic from "@/components/MainPageTopic.vue";
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)

const goToDetails = function () {
  // TODO :how to jump to details/index.php
  window.location.href = 'details/index.php'
}
</script>

<style scoped>
.demonstration {
  color: var(--el-text-color-secondary);
}

.el-menu .el-button a{
  color: white;
}

.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.el-footer {
  border-top: #4C4D4F 2rpx solid;
}
</style>