<template>
  <div class="box">
     <full-slider :imageList="imageList" ></full-slider>
  </div>
</template>
<style scoped>
  
</style>
<script>

  import FullSlider from '../components/FullSlider.vue'
  export default {
    components: {
      'full-slider': FullSlider,
    },
    data () {
      return {
        imageList: [
          { title: '', src: 'https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg'},
          { title: '', src: 'https://gd1.alicdn.com/bao/uploaded/i1/TB1PXJCJFXXXXciXFXXXXXXXXXX_!!0-item_pic.jpg'},
          { title: '', src: 'https://gd3.alicdn.com/bao/uploaded/i3/TB1x6hYLXXXXXazXVXXXXXXXXXX_!!0-item_pic.jpg'},
        ]
      }
    },
    methods: {
      onchange (event) {
        console.log('changed:', event.index)
        console.log( event.index  , this.$ref.btn);
      }
    }
  }
</script>