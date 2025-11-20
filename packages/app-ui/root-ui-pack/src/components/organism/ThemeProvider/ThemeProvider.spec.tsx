/**
 * 테마 프로바이더 organism 컴포넌트 테스트
 *
 * @author RWB
 * @since 2025.10.05 Sun 11:16:59
 */

import { type ThemeStoreProps, themeStore } from '@oauth2/store/theme';

import { ThemeEnum } from '@oauth2/constant/theme';

import { act, render, renderHook } from '@testing-library/react';

import ThemeProvider from '.';

const themes: Theme[] = [ThemeEnum.Light, ThemeEnum.Dark];

describe('[@oauth2/root-ui-pack] 테마 프로바이더 organism 컴포넌트 테스트', () => {
	it('기본 렌더링 테스트', () => {
		const html = render(<ThemeProvider />);

		expect(html.container).toBeInTheDocument();
	});

	describe('테마 테스트', () => {
		beforeEach(() => {
			const { result } = renderHook<ThemeStoreProps, void>(themeStore);

			act(() => {
				result.current.resetThemeState();
			});

			render(<ThemeProvider />);
		});

		it('지정되지 않은 테마 동작 테스트', () => {
			const { result } = renderHook<ThemeStoreProps, void>(themeStore);

			act(() => {
				result.current.setThemeState(undefined);
			});

			expect(document.documentElement.hasAttribute('class')).toBeFalsy();
		});

		it.each(themes)('%s 테마 동작 테스트', (theme) => {
			const { result } = renderHook<ThemeStoreProps, void>(themeStore);

			act(() => {
				result.current.setThemeState(theme);
			});

			expect(document.documentElement.classList.contains(theme));
		});
	});
});
