/**
 * PostCSS 설정 모듈
 *
 * @author RWB
 * @since 2025.09.22 Mon 18:41:56
 */

// Note: If you use library-specific PostCSS/Tailwind configuration then you should remove the `postcssConfig` build
// option from your application's configuration (i.e. project.json).
//
// See: https://nx.dev/guides/using-tailwind-css-in-react#step-4:-applying-configuration-to-libraries

export default {
	plugins: {
		'@tailwindcss/postcss': {},
		autoprefixer: {}
	}
};
