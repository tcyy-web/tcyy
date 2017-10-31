<template>
    <slider class="slider" auto-play="false" interval="5000" infinite="false"  @change="onchange">
        <div class="frame" v-for="img in imageList">
            <image class="image" resize="cover" :src="img.src"></image>
        </div>
        <indicator class="indicator"></indicator>
    </slider>
</template>
<style scoped>
    .iconfont {
        font-family:iconfont;
    }
    /* 16:9; */
    .image {
        width: 750px;
        height: 1333px;
    }
    .slider {
        width: 750px;
        height: 1333px;
    }
    .frame {
        width: 750px;
        height: 1333px;
        position: relative;
    }
    .indicator {
        width: 750px;
        height: 40px;
        item-color: white;
        item-selected-color: #b4282d;
        item-size: 12px;
        position: absolute;
        bottom: 10px;
        right: 0px;
    }
    .btn{
        display: inline-block;
        width: 600px;
        margin-left: 75px;
        height: 40px;
        text-align: center;
        position: absolute;
        bottom: 20px;
      }
</style>
<script>
    export default {
        props:["imageList"],
        data () {
            return {
            }
        },
        methods: {
            onchange (event) {
            }
        }
    }
</script>