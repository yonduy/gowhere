<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
    <!-- slides -->
    <swiper-slide>
      <img class="swiper-img"
      src="../../../assets/style/imgs/001.jpg"/>
    </swiper-slide>
    <swiper-slide>
      <img class="swiper-img"
      src="../../../assets/style/imgs/002.jpg"/>
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</div>
</template>
<script>
export default {name: 'HomeSwiper', data () { return {swiperOption: {pagination: '.swiper-pagination'}, swiperList: [{id: '0001', imgUrl: '../../../assets/style/imgs/001.jpg'}, {id: '0002', imgUrl: '../../../assets/style/imgs/002.jpg'}]} }}
</script>
<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background: #fff
  .wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 31.25%
    background: #eee
  .swiper-img
    width: 100%
</style>
