import { createApp } from 'vue'
import App from '@/App'
import router from '@/router/index'

import '@/assets/styles/main.css'

const app = createApp(App)

app
    .use(router)
    .mount('#app')
