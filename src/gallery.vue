<template>
  <div id="fh5co-page">
    <aside id="fh5co-aside" role="complementary" class="border js-fullheight">
      <div class="btnHub">
        <router-link :to="{ path: `/` }">
          <el-button>
            <el-icon size="15" style="margin-right: 5px;"><House /></el-icon>
            首页
          </el-button>
        </router-link>
        <el-button @click="toggleDark()">
          <el-icon size="15" color="#82B351">
            <Sunny v-if="isDark" />
            <Moon v-else />
          </el-icon>
        </el-button>
      </div>
      <h1 id="fh5co-logo">计算机科学与技术学院</h1>
      <div class="college-logo"><img src="" alt=""></div>
      <nav id="fh5co-main-menu" role="navigation">
      </nav>
      <div class="fh5co-footer">
        <p><small>&copy; 2024 Blend Free HTML5. All Rights Reserved.</small></p>
        <p><small>Remade by CSBigCaptain and ItsDia</small></p>
      </div>
    </aside>

    <div id="fh5co-main">
      <div class="fh5co-gallery">
        <div v-if="content">
        <a v-for="image in images" :key="image.id" class="gallery-item" href="single.html">
          <img :src="image.src" :alt="image.title">
          <div class="overlay">
            <h2>{{ image.title }}</h2>
            <span>{{ image.count }} Photos</span>
          </div>
        </a>
        </div>
        <div v-else>
          <div class="fh5co-narrow-content">
            <div class="row">
              <div class="col-md-4 animate-box" data-animate-effect="fadeInLeft">
                <h1 class="fh5co-heading-colored">没有找到相关内容</h1>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12 animate-box" data-animate-effect="fadeInLeft">
                <p class="fh5co-lead">请管理员在./public/images中添加 {{id}} 相关图片.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {useDark, useToggle} from "@vueuse/core";

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>


<script>
import axios from 'axios';
import {ArrowLeft, House, Sunny, Moon} from "@element-plus/icons-vue";

export default {
  components: {Sunny, House, ArrowLeft},
  props: ['id'],
  // created() {
  //   console.log(this.id);
  // },
  data() {
    return {
      content: null,
      loading: true,
      error: null,
    };
  },
  watch: {
    id: {
      handler(newId) {
        this.loadContent(newId);
      },
      immediate: true,
    },
  },
  methods: {
    async loadContent(id) {
      this.loading = true;
      this.error = null;
      try {
        const response = await axios.get(`/data/${id}.json`);
        this.content = response.data;
        // console.log(this.content); // 确认数据是否正确
      } catch (error) {
        this.error = error;
        this.content = null;
        console.error(error); // 输出错误信息
      } finally {
        this.loading = false;
      }
    },
  },
}
</script>
<style scoped>
@import '@/components/css/animate.css';
@import '@/components/css/icomoon.css';
@import '@/components/css/bootstrap.css';
@import '@/components/css/owl.carousel.min.css';
@import '@/components/css/owl.theme.default.min.css';
@import '@/components/css/style.css';

/* Gallery item styles */
.fh5co-active:hover{
   text-decoration-line: underline;
    cursor: grab;
    text-decoration-color: #00a78e;
}
.gallery-item {
  position: relative;
  overflow: hidden;
  display: block;
}

.gallery-item img {
  width: 100%;
  transition: transform 0.3s ease;
}

.gallery-item:hover img {
  transform: scale(1.1);
}

.overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 15px;
  transform: translateY(100%);
  transition: transform 0.3s ease;
}

.gallery-item:hover .overlay {
  transform: translateY(0);
}

#fh5co-aside .btnHub {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10%;
}

.btnHub .el-button {
  border: #82B351 solid 2px;
}

.college-logo {
  width: 80%;
  margin: 0 auto;
}
/* Add any additional component-specific styles here */
</style>