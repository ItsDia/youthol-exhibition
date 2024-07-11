<template>
  <div id="fh5co-page">
    <a href="#" class="js-fh5co-nav-toggle fh5co-nav-toggle"><i></i></a>
    <aside id="fh5co-aside" role="complementary" class="border js-fullheight">
      <h1 id="fh5co-logo">
        <a href="../index.html">
<!--          <img src="@/assets/images/logo-colored.png" alt="Free HTML5 Bootstrap Website Template">-->
        </a>
      </h1>
      <nav id="fh5co-main-menu" role="navigation">
        <ul>
          <li><a href="../index.html">Home</a></li>
          <li class="fh5co-active"><a href="../portfolio.html">Photos</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </nav>

      <div class="fh5co-footer">
        <p><small>&copy; 2024 Blend Free HTML5. All Rights Reserved.</small></p>
        <ul>
          <li><a href="#"><i class="icon-facebook"></i></a></li>
          <li><a href="#"><i class="icon-twitter"></i></a></li>
          <li><a href="#"><i class="icon-instagram"></i></a></li>
          <li><a href="#"><i class="icon-linkedin"></i></a></li>
        </ul>
      </div>
    </aside>

    <div id="fh5co-main">
      <div class="fh5co-gallery">
        <a v-for="image in images" :key="image.id" class="gallery-item" href="single.html">
          <img :src="image.src" :alt="image.title">
          <span class="overlay">
            <h2>{{ image.title }}</h2>
            <span>{{ image.count }} Photos</span>
          </span>
        </a>
      </div>

      <div class="fh5co-narrow-content">
        <div class="row">
          <div class="col-md-4 animate-box" data-animate-effect="fadeInLeft">
            <h1 class="fh5co-heading-colored">Get in touch</h1>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 animate-box" data-animate-effect="fadeInLeft">
            <p class="fh5co-lead">Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            <p><a href="#" class="btn btn-primary btn-outline">Learn More</a></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const images = ref([]);

onMounted(async () => {
  try {
    //TODO:通过App.vue
    // const response = await fetch(differentSchool);
    images.value = await response.json();
  } catch (error) {
    console.error('Error loading images:', error);
  }
});
</script>

<style scoped>
@import '@/components/css/animate.css';
@import '@/components/css/icomoon.css';
@import '@/components/css/bootstrap.css';
@import '@/components/css/owl.carousel.min.css';
@import '@/components/css/owl.theme.default.min.css';
@import '@/components/css/style.css';

/* Gallery item styles */
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