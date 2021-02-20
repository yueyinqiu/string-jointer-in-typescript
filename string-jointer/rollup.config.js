import typescript from '@rollup/plugin-typescript';
import {
    join
} from 'path';

/**
 * @type {import('rollup').RollupOptions} 
 */
const config = {
    input: 'src/index.ts',
    output: [{
        sourcemap: true,
        dir: join(__dirname, 'dist'),
        format: 'esm',
        entryFileNames: (chunk) => `${chunk.name}.esm.js`,
    }, {
        sourcemap: true,
        dir: join(__dirname, 'dist'),
        format: 'cjs',
        entryFileNames: (chunk) => `${chunk.name}.js`,
    }],
    plugins: [
        typescript({
            tsconfig: "tsconfig.json",
            declaration: true,
            declarationMap: true,
            sourceMap: true,
            outDir: 'dist',
        }),
    ]
}

export default config;