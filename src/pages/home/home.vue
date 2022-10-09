
<template>
<!-- template只能向外暴露一个标签 -->
<div>
    <homeheader :city="city"></homeheader>
    <homeswiper></homeswiper>
    <homeIcons :list="iconsList"></homeIcons>
    <homeRecommend :list="recommendList"></homeRecommend>
    <homeWeekend :list="weekendList"></homeWeekend>
</div>
</template>

<script>
import homeheader from './components/homeheader.vue'
import homeswiper from './components/Swiper.vue'
import homeIcons from './components/icons.vue'
import homeRecommend from './components/Recommend.vue'
import homeWeekend from './components/Weekend.vue'
import axios from 'axios'
/* import string from 'es6-iterator/string' */
export default {
  name: 'home',
  components: {
    homeheader: homeheader,
    homeswiper: homeswiper,
    homeIcons: homeIcons,
    homeRecommend: homeRecommend,
    homeWeekend: homeWeekend

  },
  data () {
    return {
      city: '',
      iconsList: [],
      recommendList: [],
      weekendList: []

    }
  },
  methods: {
    getHomeInfo () {
      axios.get('/static/mock/index.json')
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.city = data.city
        this.iconsList = data.iconsList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    }
  },
  mounted () {
    this.getHomeInfo()
  }

}
</script>
<style></style>
