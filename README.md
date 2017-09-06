# Vue Backtotop Component

[![npm](https://img.shields.io/npm/v/vue-backtotop.svg)](https://www.npmjs.com/package/vue-backtotop)

A Back-to-top component for Vue.js, which scroll page to the top when clicked

## Demo

See [demo](http://caiofsouza.github.io/vue-backtotop/example).

## Install via npm

```bash
npm install vue-backtotop --save
```

## Import and use

Import for global usage
```javascript
import Vue from 'vue'
import BackToTop from 'vue-backtotop'

Vue.use(BackToTop);
...
```

Or on a single component
```javascript
import BackToTop from 'vue-backtotop'
...
},
components: { BackToTop }
...
```

## How to use


* Currently, the vue-backtotop has a property named "text", that is the text which will be visible on button. The default value is "Voltar ao topo".

```html
<back-to-top text="Back to top"></back-to-top>
```

* The button to back to top become visible at window scroll at 600 > px. If you want to change this value, pass a property named "visibleOffset" with a number value. 

```html
<back-to-top text="Back to top" visibleOffset="500"></back-to-top>
```



