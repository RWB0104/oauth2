/**
 * Storybook 메인 설정 인덱스 테스트 모듈
 *
 * @author RWB
 * @since 2025.09.21 Sun 21:33:47
 */

import { getStorybookConfig } from '.';

describe('[@oauth2/storybook-module] Storybook 메인 설정 인덱스 테스트 모듈', () => {
	it('기본 테스트', () => {
		const result = getStorybookConfig();

		expect(result).toStrictEqual({
			addons: ['@storybook/addon-docs'],
			framework: {
				name: '@storybook/react-vite',
				options: {}
			},
			stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)']
		});
	});
});
