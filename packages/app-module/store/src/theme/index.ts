/**
 * 테마 스토어 모듈
 *
 * @author RWB
 * @since 2025.10.05 Sun 01:08:34
 */

import { create } from 'zustand';

export type SetThemeStateHandler = SetStoreHandler<Theme | undefined>;
export type ThemeStateHandler = () => void;

export interface ThemeStoreProps {
	/**
	 * 테마
	 */
	themeState?: Theme;

	/**
	 * 테마 할당 메서드
	 */
	setThemeState: SetThemeStateHandler;

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
	setThemeState: (state) => {
		const { themeState } = get();
		const theme = typeof state === 'function' ? state(themeState) : state;

		set((s) => ({
			...s,
			themeState: theme
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
