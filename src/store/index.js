// 파일 위치: /root/src/store/index.js
import Vue from 'vue';
import Vuex from 'vuex';
import modules from './modules';

Vue.use(Vuex);

// 작성한 모듈을 가져옵니다.
// import userStore from '@/store/modules/userStore.js';
// import postStore from '@/store/modules/postStore.js';

const store = new Vuex.Store({
	modules,
});
// console.log(store);

// import modules from './modules';
// export const store = new Vuex.Store({
// 	modules: modules,
// });

export default store;

///직빵용
// const context = require.context('./modules', true, /index.js/);
// const modules = {};

// context.keys().forEach((file) => {

//   // create the module name from file
//   const moduleName = file.replace(/(\.\/|\/index.js)/g, '');

//   // register file context under module name
//   modules[moduleName] = context(file).default || context(file);

//   // override namespaced option
//   modules[moduleName].namespaced = true;
// });

// const store = new Vuex.Store({
//   modules, // ES6 shorthand for modules: modules
// })

// export default store;
