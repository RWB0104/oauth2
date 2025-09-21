/**
 * Storybook 메인 설정 인덱스 모듈
 *
 * @author RWB
 * @since 2025.09.21 Sun 21:33:54
 */

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
