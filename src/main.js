import { createApp } from 'vue'
import App from '@/App'
import components from '@/components/ui/index'

import router from '@/router/index'
import store from '@/store'

import '@/assets/styles/main.css'

const app = createApp(App)

components.forEach(component => {
    app.component(component.name, component)
})

app
    .use(router)
    .use(store)
    .mount('#app')
