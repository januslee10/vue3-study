import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from '@/App-old.vue'
import router from '@/router'
import '@/styles/index.less'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import VueGridLayout from 'vue-grid-layout'
// 全局引入vue-codemirror
// 引入主题 可以从 codemirror/theme/ 下引入多个
import 'codemirror/theme/idea.css'
// 引入语言模式 可以从 codemirror/mode/ 下引入多个
import 'codemirror/mode/sql/sql.js'

// 全局样式
import '@less/global.less'
window.addEventListener('hashchange', (hash) => {
  console.log('[hashchange]', hash)
})
window.addEventListener('popstate', (state) => {
  console.log('[popstate]', state)
})
createApp(App)
  .use(createPinia()) // 启用 Pinia
  .use(ElementPlus) // 启用element
  .use(router)
  .use(VueGridLayout)
  .mount('#app')
