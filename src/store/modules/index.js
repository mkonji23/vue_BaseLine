import camelCase from 'lodash/camelCase';

const files = require.context('.', false, /\.js$/);
const modules = {};

files.keys().forEach(fileName => {
	console.info('fileName', fileName);
	if (fileName === './index.js') return;
	const moduleName = camelCase(fileName.replace(/(\.\/|\.js)/g, ''));
	modules[moduleName] = { namespaced: true, ...files(fileName).default };
	console.info('moduleName', moduleName);
	console.info('modules[moduleName]', modules[moduleName]);
});

export default modules;
