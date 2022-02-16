import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/intelligent-ui/css/cssReset.css'
import '@/intelligent-ui/css/xw-style.css'
import * as icons from '@element-plus/icons'
import locale from 'element-plus/lib/locale/lang/zh-cn'
const app = createApp(App)

Object.keys(icons).forEach(key => {
  app.component(key, icons[key])
})

app.use(ElementPlus, { locale })
app.use(store)
app.use(router)
app.mount('#app')
