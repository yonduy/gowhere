
<template>
<!-- template只能向外暴露一个标签 -->
<div>
    <homeheader></homeheader>
    <homeswiper></homeswiper>
    <homeIcons></homeIcons>
    <homeRecommend></homeRecommend>
    <homeWeekend></homeWeekend>
</div>
</template>

<script>
import homeheader from './components/homeheader.vue'
import homeswiper from './components/Swiper.vue'
import homeIcons from './components/icons.vue'
import homeRecommend from './components/Recommend.vue'
import homeWeekend from './components/Weekend.vue'
export default {name: 'home',
  components: {
    homeheader: homeheader,
    homeswiper: homeswiper,
    homeIcons: homeIcons,
    homeRecommend: homeRecommend,
    homeWeekend: homeWeekend

  }
}
</script>
<style></style>
