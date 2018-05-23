import babel from 'rollup-plugin-babel';

export default {
  input: './src/index.js',
  output: {
    file: './demo/index.umd.js',
    format: 'umd',//iife|amd|cjs|umd|es6
    name:'image-valication-code-by-canvas'
  },
  plugins: [
    babel({
      exclude: 'node_modules/**'
    })
  ]
}