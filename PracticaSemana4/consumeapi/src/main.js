import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router';
import store from './store'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"

// npm i vuex@next --save
// npm i vuejs-paginate-next --save
// npm i bootstrap    

createApp(App)
    .use(router)
    .use(store)
    .mount('#app')

