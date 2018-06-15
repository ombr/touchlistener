import pkg from './package.json';
import coffeescript from 'rollup-plugin-coffee-script';

export default [
  {
    input: 'src/main.coffee',
    external: ['referentiel'],
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' }
    ],
    plugins: [
      coffeescript()
    ]
  }
];
