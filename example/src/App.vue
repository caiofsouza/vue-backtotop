<template>
  <div id="app">
    <h1>Vue-backtotop</h1>
    <p>Change the values and scroll down the page to see the button :D</p>
    <br><br>
    <div class="form-control">
      <label for="">
        <strong>Visible on scroll, in px</strong>
      </label><br>
      <input type="text" v-model="visibleoffset" onkeypress='return event.charCode >= 48 && event.charCode <= 57'>
    </div>
    <div class="form-control">
      <label for="">
        <strong>Button text</strong>
      </label><br>
      <input type="text" v-model="text">
    </div>
    <div class="form-control">
      <label for="">
        <strong>Bottom</strong>
      </label><br>
      <input type="text" v-model="bottom">
    </div>
    <div class="form-control">
      <label for="">
        <strong>Right</strong>
      </label><br>
      <input type="text" v-model="right">
    </div>
    <div class="fork-me">
      <a href="https://github.com/caiofsouza/vue-backtotop" target="_blank">
        <img src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" width="30" alt="Fork me on Github" title="Fork me on Github">
      </a>
    </div>
    <footer class="footer">
      <h2>Footer</h2>
      <back-to-top 
        :visibleoffset="visibleoffset" 
        :text="text" 
        :bottom="bottom" 
        :right="right"
        :scrollFn="scrollFn"
        :class="{ 'vue-back-to-top--is-footer': isBackTopFooter }"
        @scrolled="scrolled" />
    </footer>
  </div>
</template>

<script>
import BackToTop from 'vue-backtotop'

export default {
  name: 'app',
  data () {
    return {
      isBackTopFooter: false,
      visibleoffset: 600,
      text: 'Back to top',
      bottom: '40px',
      right: '40px'
    }
  },
  created () {
    // private
    this.scrollIndentBackTop = 0;
    this.scrollHeight = 0;
  },
  mounted () {
      this.scrollHeight = Math.max(
          document.body.scrollHeight, document.documentElement.scrollHeight,
          document.body.offsetHeight, document.documentElement.offsetHeight,
          document.body.clientHeight, document.documentElement.clientHeight
      ) - window.innerHeight;
      this.scrollIndentBackTop = document.getElementsByClassName('footer')[0].clientHeight / 2;
  },
  watch: {
    visibleoffset (newVal, oldVal) {
      document.body.style.height = (parseInt(newVal) + 2000) + 'px';
    }
  },
  methods: {
    scrolled () {
      console.log('Scrolled !')
    },
    scrollFn: function (eventObject) {
      let diff = this.scrollHeight - window.pageYOffset;
      this.isBackTopFooter = diff < (this.scrollIndentBackTop - 40 - 15);
    }
  },
  components: { BackToTop }
}
</script>

<style>
*{
  box-sizing: border-box;
}
body{
  height:2000px;
  background-color: #fcfcff;
  position: relative;
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
  max-width: 980px;
  min-width: 320px;
  margin: 0 auto;
}

h1{
  margin-top:100px;
  font-weight: 600;
  font-size: 40px; 
  padding-bottom:20px;
  border-bottom: 1px solid #2c3e50;
}

.form-control{
  margin-bottom: 20px;
}
label{
  display: inline-block;
  margin-bottom: 8px;
}
input{
  border: 1px solid #cccccc;
  outline: none;
  padding: 5px 15px 5px 10px;
  border-radius: 3px;
  font-size: 15px;
  width:200px;
  height:35px;
}
.footer {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #999;
}
.footer h2 {
  font-size: 30px;
  color: #fff;
}
</style>
