/**
 * Storybook 프리뷰 모듈
 *
 * @author RWB
 * @since 2025.09.22 Mon 17:57:12
 */

import { withThemeByClassName } from '@storybook/addon-themes';
import { create } from 'storybook/theming';

import '@oauth2/headless-ui-pack/styles/globals';

import type { Preview } from '@storybook/react-vite';

const customTheme = create({
	base: 'dark',
	fontBase: 'Pretendard, sans-serif'
});

const preview: Preview = {
	decorators: [
		withThemeByClassName({
			defaultTheme: 'dark',
			themes: {
				dark: 'dark',
				light: ''
			}
		})
	],
	globalTypes: {
		theme: {
			defaultValue: 'dark',
			description: 'Global theme for components',
			name: 'Theme',
			toolbar: {
				icon: 'moon',
				items: [
					{
						icon: 'sun',
						title: 'Light Mode',
						value: 'light'
					},
					{
						icon: 'moon',
						title: 'Dark Mode',
						value: 'dark'
					}
				],
				showName: true
			}
		}
	},
	parameters: { docs: { theme: customTheme } }
};

export default preview;
