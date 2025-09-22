/**
 * Storybook 프리뷰 모듈
 *
 * @author RWB
 * @since 2025.09.21 Sun 05:27:59
 */

import { withThemeByClassName } from '@storybook/addon-themes';

import './index.css';

import type { Preview } from '@storybook/react-vite';

import { baseTheme } from '../src/config/theme';

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
