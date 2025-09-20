import type { StorybookConfig } from '@storybook/react-vite';

/**
 * Storybook 설정 반환 메서드
 *
 * @param {StorybookConfig} config StorybookConfig
 *
 * @returns {StorybookConfig} StorybookConfig
 */
export function getStorybookConfig(config?: StorybookConfig): StorybookConfig {
	return {
		addons: ['@storybook/addon-docs'],
		framework: {
			name: '@storybook/react-vite',
			options: {}
		},
		stories: [
			// 👇 Your documentation written in MDX along with your stories goes here
			'../src/**/*.mdx',
			'../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'
		],
		...config
	};
}
