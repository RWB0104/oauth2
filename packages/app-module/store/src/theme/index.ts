/**
 * 테마 스토어 모듈
 *
 * @author RWB
 * @since 2025.10.05 Sun 01:08:34
 */

import { create } from 'zustand';

export type ThemeStateHandler = () => void;

export interface ThemeStoreProps {
	/**
	 * 테마
	 */
	themeState?: Theme;

	/**
	 * 테마 토글 핸들러
	 */
	toogleThemeState: ThemeStateHandler;

	/**
	 * 테마 리셋 핸들러
	 */
	resetThemeState: ThemeStateHandler;
}

export const themeStore = create<ThemeStoreProps>((set, get) => ({
	resetThemeState: () => {
		set((state) => ({
			...state,
			themeState: undefined
		}));
	},
	toogleThemeState: () => {
		const { themeState } = get();

		const to: Theme = themeState === 'dark' ? 'light' : 'dark';

		set((state) => ({
			...state,
			themeState: to
		}));
	}
}));
