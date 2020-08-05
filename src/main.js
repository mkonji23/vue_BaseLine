import Vue from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import axios from 'axios';

// store의 index.js를 가져옵니다.
import store from '@/store/index.js';

Vue.config.productionTip = false;
Vue.prototype.$http = axios;
new Vue({
	router,
	store,
	vuetify,
	render: h => h(App),
}).$mount('#app');
