import path from 'path';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';
import copy from 'rollup-plugin-copy';
import { renderSync } from 'node-sass';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const packageJson = require('./package.json');

export default {
  input: './src/index.ts',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    postcss(),
    copy({
      targets: [
        {
          src: 'src/styles/abstracts/*',
          dest: 'dist/styles',
        },
        {
          src: 'src/styles/*.scss',
          dest: 'dist/styles',
          rename: (name) => `${name}.css`,
          transform: (contents) => {
            const result = renderSync({
              data: contents.toString(),
              includePaths: [path.join(__dirname, '/src/styles')],
            });

            return result.css;
          },
        },
      ],
    }),
  ],
};
