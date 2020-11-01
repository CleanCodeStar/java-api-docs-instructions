import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
// 默认主题
import 'element-ui/lib/theme-chalk/index.css';
import VueHighlightJS from 'vue-highlightjs'
import 'highlight.js/styles/railscasts.css'

Vue.config.productionTip = false
Vue.use(ElementUI, {
  size: 'small'
});
Vue.use(VueHighlightJS)
new Vue({
  render: h => h(App),
}).$mount('#app')
