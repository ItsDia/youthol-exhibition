<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <el-menu mode="horizontal">
          <el-menu-item index="1">首页</el-menu-item>
          <el-menu-item index="2">关于我们</el-menu-item>
          <el-menu-item index="3">联系我们</el-menu-item>
        </el-menu>
      </el-header>
      <el-main>
        <el-carousel height="60vh">
          <el-carousel-item @click="goToDetails">
            <h3>计算机科学与技术学院</h3>
          </el-carousel-item>
          <el-carousel-item @click="goToDetails">
            <h3>电气工程及其自动化学院</h3>
          </el-carousel-item>
          <el-carousel-item @click="goToDetails">
            <h3>车辆工程学院</h3>
          </el-carousel-item>
          <el-carousel-item @click="goToDetails">
            <h3>食品工程学院</h3>
          </el-carousel-item>
          <el-carousel-item @click="goToDetails">
            <h3>建筑工程学院</h3>
          </el-carousel-item>
          <el-carousel-item @click="goToDetails">
            <h3>机械工程学院</h3>
          </el-carousel-item>

        </el-carousel>
      </el-main>
      <el-footer>© 2024 YOUTH OL</el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    goToDetails() {
      // TODO :how to jump to details/index.php
      window.location.href = 'details/index.php';
    }
  }
}
</script>

<style scoped>
.demonstration {
  color: var(--el-text-color-secondary);
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
</style>