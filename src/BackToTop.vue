<template>
  <transition name="back-to-top-fade">
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
    },
    visibleOffset: {
      type: [String, Number],
      default: 800
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
      this.visible = (window.pageYOffset > parseInt(this.visibleOffset))
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
