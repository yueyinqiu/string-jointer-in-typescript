import typescript from '@rollup/plugin-typescript';
import {
    join
} from 'path';
// typescript 的rollup 插件，让rollup能compile typescript

// this is the rollup config file to setup your bundler
/**
 * 加了 @type 你就有代码提示了，毕竟这些option我也记不住
 * @type {import('rollup').RollupOptions} 
 */
const config = {
    input: 'src/index.ts', // 入口文件
    output: [{
        sourcemap: true,
        dir: join(__dirname, 'dist'),
        format: 'esm', // 编译一个到 ESM 就是新的 module 格式
        entryFileNames: (chunk) => `${chunk.name}.esm.js`,
    }, {
        sourcemap: true,
        dir: join(__dirname, 'dist'),
        format: 'cjs', // 编译一个到 CommonJS， 是旧的 nodejs 用的
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