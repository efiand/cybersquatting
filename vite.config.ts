import copy from 'rollup-plugin-copy';
import { ViteMinifyPlugin } from 'vite-plugin-minify';

// https://vite.dev/config/
export default {
	build: {
		emptyOutDir: true
	},
	css: {
		preprocessorOptions: {
			scss: {
				api: 'modern-compiler'
			}
		}
	},
	plugins: [
		ViteMinifyPlugin(),
		copy({
			hook: 'writeBundle',
			targets: [
				{
					dest: 'dist',
					rename: '404.html',
					src: 'dist/index.html'
				}
			]
		})
	]
};
