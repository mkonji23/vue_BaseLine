// 파일 위치: /root/src/store/index.js
import Vue from 'vue';
import Vuex from 'vuex';
import modules from './modules';

Vue.use(Vuex);

const store = new Vuex.Store({
	modules,
});

export default store;
