// rollup.config.js
import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';

export default [
  {
    input: "index.js",
    output: {
      file: `dist/index.umd.js`,
      format: "umd",
      name: "insertTextAnywhere",
      sourcemap: true
    },
    plugins: [ resolve(), babel()]
  },
  {
    input: "index.js",
    output: {
      file: "dist/index.esm.js",
      format: "es",
      name: "insertTextAnywhere",
      sourcemap: true
    },
    plugins: [ resolve(), babel()]
  }
];