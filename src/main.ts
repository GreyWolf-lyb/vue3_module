import { createApp } from 'vue';
import  App from  './App.vue'
import  router from './router/index';
import store from './store/index';
import  './assets/common/index.css';
import 'element-plus/dist/index.css';
import jsonViewer from "vue-json-viewer";

const app = createApp(App);
app.use(router);
app.use(store);
app.use(jsonViewer);
app.mount('#app');
