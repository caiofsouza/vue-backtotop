<template>
  <transition name="fade">
    <div class="vue-back-to-top" v-show="visible">
      <a @click="backToTop">
        {{ text }}
      </a>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'BackToTop',
  props: {
    text: {
      type: String,
      default: 'Voltar ao topo'
    }
  },
  data () {
    return {
      visible: false
    }
  },
  /**
   * Catch window scroll event 
   * @return {void}
   */
  created () {
    let catchScroll = () => {
      this.visible = (window.pageYOffset > 800)
    }
    window.onscroll = catchScroll
  },
  methods: {
    /**
     * The function who make the magics
     * @return {void}
     */
    backToTop () {
      let currentScroll = document.documentElement.scrollTop || document.body.scrollTop
      if (currentScroll > 0) {
        window.requestAnimationFrame(window.smoothscroll)
        window.scrollTo(0, currentScroll - (currentScroll / 5))
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .7s;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
}

.back-to-top{
  position: fixed;
  bottom: 40px;
  right: 30px;
  width: 160px;
  color: #ffffff;
  text-align: center;
  line-height: 30px;
  background-color: #f5c85c;
  border-radius: 3px;
  z-index: 1000;

  a{
    color:#ffffff;
  }
}
</style>
