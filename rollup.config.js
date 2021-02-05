import buble from 'rollup-plugin-buble'
import common from 'rollup-plugin-commonjs'
import node from 'rollup-plugin-node-resolve'
import vue from 'rollup-plugin-vue'

export default {
  input: 'src/main.js',
  output: [
    {
      file: 'dist/vue-backtotop.umd.js',
      format: 'umd',
      name: 'vue-backtotop.umd',
    }
  ],
  plugins: [common(), node(), vue(), buble()]
}
