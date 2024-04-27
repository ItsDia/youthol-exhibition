<template>
  <div id="app" class="container" @wheel="handleScroll">
    <div
      v-for="(card, index) in cards"
      :key="card.id"
      class="card"
      :style="{
        zIndex: card.zIndex,
        transform: `translateZ(${card.zIndex === maxZIndex ? 0 : -100}px)`
      }"
    >
      <img :src="card.imageUrl" :alt="`Image ${index + 1}`" class="card-image" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        //通过读取JSON格式的数据，动态生成卡片
          //读取JSON
          //import data from './data.json'
          //动态生成卡片
          // data.forEach((item, index) => {
          //   return {
          //     id: index,
          //     imageUrl: item.imageUrl,
          //     zIndex: 0
          //   };
        //   })
        // }
      ],
      maxZIndex: 1,
    };
  },
  methods: {
    handleScroll(event) {
      const direction = event.deltaY > 0 ? 1 : -1;

      this.cards.forEach(card => {
        card.zIndex += direction;

        if (card.zIndex > this.maxZIndex) {
          card.zIndex = 0;
        } else if (card.zIndex < 0) {
          card.zIndex = this.maxZIndex;
        }
      });

      this.cards.sort((a, b) => b.zIndex - a.zIndex);
    }
  }
};
</script>

<style>
.container {
  position: relative;
  width: 1920px;
  height: 1080px;
  perspective: 1000px;
}

.card {
  position: absolute;
  width: 100%;
  height: 100%;
  transition: transform 0.5s, z-index 0s;
  top: 0;
  left: 0;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
