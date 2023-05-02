const { createVuePlugin } = require('vite-plugin-vue2');
const yaml = require('@rollup/plugin-yaml');

module.exports = {
  plugins: [
    createVuePlugin(),
    yaml(),
  ],
};