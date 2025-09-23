/**
 * Storybook 프리뷰 모듈
 *
 * @author RWB
 * @since 2025.09.22 Mon 17:57:12
 */

import { withThemeByClassName } from '@storybook/addon-themes';

import '@oauth2/headless-ui-pack/styles/globals';

import { baseTheme } from '@oauth2/storybook-module/config/theme';

import type { Preview } from '@storybook/react-vite';

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
	parameters: { docs: { theme: baseTheme } }
};

export default preview;
