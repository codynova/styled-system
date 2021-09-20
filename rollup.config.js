import typescript from '@rollup/plugin-typescript'
import { terser } from 'rollup-plugin-terser'
import { sizeSnapshot } from 'rollup-plugin-size-snapshot'
import pkg from './package.json'

export default [
	{
		input: './src/index.ts',
		external: Object.keys(pkg.peerDependencies),
		output: {
			file: pkg.module,
			format: 'esm',
		},
		plugins: [
			typescript({ tsconfig: './tsconfig.json' }),
			sizeSnapshot(),
			terser(),
		],
	},
]
