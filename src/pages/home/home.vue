
<template>
<!-- template只能向外暴露一个标签 -->
<div>
    <homeheader></homeheader>
    <homeswiper></homeswiper>
</div>
</template>

<script>
import homeheader from './components/homeheader.vue'
import homeswiper from './components/Swiper.vue'
export default {name: 'home', components: {homeheader: homeheader, homeswiper: homeswiper}
}
</script>
<style></style>
