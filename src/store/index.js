// 파일 위치: /root/src/store/index.js
import Vue from 'vue';
import Vuex from 'vuex';
import camelCase from 'lodash/camelCase';

Vue.use(Vuex);

const files = require.context('.', false, /\.js$/);
const modules = {};

files.keys().forEach(fileName => {
	if (fileName === './index.js') return;
	const moduleName = camelCase(fileName.replace(/(\.\/|\.js)/g, ''));
	modules[moduleName] = files(fileName).default;
});
// export default modules;
// 작성한 모듈을 가져옵니다.
// import userStore from '@/store/modules/userStore.js';
// import postStore from '@/store/modules/postStore.js';

// const store = new Vuex.Store({
// 	modules: {
// 		// 키: 값 형태로 저장됩니다.
// 		userStore: userStore,
// 		postStore: postStore,
// 	},
// });
// import modules from './modules';
// export const store = new Vuex.Store({
// 	modules: modules,
// });

export default modules;
