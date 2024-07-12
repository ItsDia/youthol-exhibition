<template>
  <div id="fh5co-page">
    <a href="#" class="js-fh5co-nav-toggle fh5co-nav-toggle"><i></i></a>
    <aside id="fh5co-aside" role="complementary" class="border js-fullheight">
      这里用来显示每个学院的LOGO
      <h1 id="fh5co-logo">
        <a href="../index.html">
          <img src="@/components/images/logo-colored.png" alt="Free HTML5 Bootstrap Website Template">
        </a>
        <hr style="height: 1px; background-color: grey; border: none;">
      </h1>
      <nav id="fh5co-main-menu" role="navigation">
        <ul>
          <p><a href="#" class="btn btn-primary btn-outline">返回</a></p>
          这里太空了，试着加点啥东西
        </ul>
      </nav>

      <div class="fh5co-footer">
        <p><small>&copy; 2024 Blend Free HTML5. All Rights Reserved.</small></p>
      </div>
    </aside>

    <div id="fh5co-main">
      <div class="fh5co-gallery">
        <div v-if="content">
        <a v-for="image in images" :key="image.id" class="gallery-item" href="single.html">
          <img :src="image.src" :alt="image.title">
          <span class="overlay">
            <h2>{{ image.title }}</h2>
            <span>{{ image.count }} Photos</span>
          </span>
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

<!--      <div class="fh5co-narrow-content">-->
<!--        <div class="row">-->
<!--          <div class="col-md-4 animate-box" data-animate-effect="fadeInLeft">-->
<!--            <h1 class="fh5co-heading-colored">Get in touch</h1>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="row">-->
<!--          <div class="col-md-12 animate-box" data-animate-effect="fadeInLeft">-->
<!--            <p class="fh5co-lead">Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>-->
<!--            <p><a href="#" class="btn btn-primary btn-outline">Learn More</a></p>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  props: ['id'],
  created() {
    console.log(this.id);
  },
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
        console.log(this.content); // 确认数据是否正确
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

/* Add any additional component-specific styles here */
</style>