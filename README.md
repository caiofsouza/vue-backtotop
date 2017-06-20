# Vue-backtotop Component

A Back-to-top component for Vue.js, which scroll page to the top when clicked

## Install via npm

```bash
npm install vue-backtotop --save
```

## Import and use

```javascript
import Vue from 'vue'
import BackToTop from 'vue-backtotop'
import 'vue-backtotop/src/styles.css'

Vue.use(BackToTop);
...
```

## How to use


* Currently, the vue-backtotop has a property named "text", that is the text which will be visible on button. The default value is "Voltar ao topo".

```html
<back-to-top text="Back to top"></back-to-top>
```

* The button to back to top become visible at window scroll at 800 > px. If you want to change this value, pass a property named "visibleOffset" with a number value. 

```html
<back-to-top text="Back to top" visibleOffset="500"></back-to-top>
```



