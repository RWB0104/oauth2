/**
 * Storybook 프리뷰 모듈
 *
 * @author RWB
 * @since 2025.09.21 Sun 05:27:59
 */

import { withThemeByClassName } from '@storybook/addon-themes';

import './index.css';

import { baseTheme } from '@oauth2/storybook-module/config/theme';

import { ThemeEnum } from '@oauth2/constant/theme';

import type { Preview } from '@storybook/react-vite';

const preview: Preview = {
	decorators: [
		withThemeByClassName({
			defaultTheme: ThemeEnum.Dark,
			themes: {
				dark: ThemeEnum.Dark,
				light: ''
			}
		})
	],
	globalTypes: {
		theme: {
			defaultValue: ThemeEnum.Dark,
			description: 'Global theme for components',
			name: 'Theme',
			toolbar: {
				icon: 'moon',
				items: [
					{
						icon: 'sun',
						title: 'Light Mode',
						value: ThemeEnum.Light
					},
					{
						icon: 'moon',
						title: 'Dark Mode',
						value: ThemeEnum.Dark
					}
				],
				showName: true
			}
		}
	},
	parameters: { docs: { theme: baseTheme } }
};

export default preview;
