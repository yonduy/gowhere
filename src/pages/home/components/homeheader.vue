
<template>
<!-- template只能向外暴露一个标签 -->
<div class="header">
    <div class="header-left">
        <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
        <span class="iconfont">&#xe632;</span>
        输入景点/城市/游玩主题</div>
        <router-link to="/city">
    <div class="header-right">{{this.city}}
        <span class="iconfont arrow-icon">&#xe62d;</span>
    </div>
</router-link>
</div>
</template>

<script>
export default
{
  name: 'homeheader',
  props: {
    city: String
  }

}
</script>
<style lang="stylus" scoped>
    @import '../../../assets/style/varibles.styl'
    .header
        display: flex
        height: .86rem
        line-height: .86rem
        background: $bgColor
        color: #fff
        .header-left
            width: .64rem
            float: left
            .back-icon
                text-align: center
                font-size: .4rem
        .header-input
            flex: 1
            height: .64rem
            line-height: .64rem
            margin-top: .12rem
            margin-left: .2rem
            padding-left: .2rem
            background: #fff
            border-radius: .1rem
            color: #ccc
        .header-right
            color: #fff
            width: 1.24rem
            float: right
            text-align: center
            .arrow-icon
                margin-left:-.04rem
                font-size: .24rem
</style>
