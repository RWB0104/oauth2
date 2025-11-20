/**
 * 테마 프로바이더 organism 컴포넌트
 *
 * @author RWB
 * @since 2025.10.05 Sun 11:15:29
 */

import { themeStore } from '@oauth2/store/theme';

import { ThemeEnum } from '@oauth2/constant/theme';

import { type PropsWithChildren, useEffect, useLayoutEffect } from 'react';

const themeKey = 'theme';

/**
 * 테마 프로바이더 organism 컴포넌트 반환 메서드
 *
 * @param {PropsWithChildren} param0 PropsWithChildren
 *
 * @returns {React.JSX.Element} JSX
 */
export default function ThemeProvider({ children }: PropsWithChildren): React.JSX.Element {
	const { themeState, setThemeState } = themeStore();

	/**
	 * 테마가 변경될 때마다 body class 반영 및 localStorage 저장
	 */
	useEffect(() => {
		const value = window.localStorage.getItem(themeKey);

		// 테마가 유효하고, 이전 테마와 일치하지 않는 경우 localStorage에 반영
		if (themeState && value !== themeState) {
			document.documentElement.classList.remove(themeState === ThemeEnum.Dark ? ThemeEnum.Light : ThemeEnum.Dark);
			document.documentElement.classList.add(themeState);

			window.localStorage.setItem(themeKey, themeState);
		}

		// 지정된 테마가 없지만, localStorage엔 있을 경우 제거
		else if (value) {
			document.documentElement.classList.remove(ThemeEnum.Light);
			document.documentElement.classList.remove(ThemeEnum.Dark);

			window.localStorage.removeItem(themeKey);
		}
	}, [themeState]);

	/**
	 * 페이지 로딩 시, localStorage에 저장된 테마 반영함
	 */
	useLayoutEffect(() => {
		const theme = window.localStorage.getItem(themeKey);

		switch (theme) {
			case ThemeEnum.Light:
			case ThemeEnum.Dark:
				setThemeState(theme);
				break;

			default:
				setThemeState(undefined);
				break;
		}
	}, [setThemeState]);

	return <>{children}</>;
}
