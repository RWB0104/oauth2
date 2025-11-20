/**
 * 테마 스토어 테스트 모듈
 *
 * @author RWB
 * @since 2025.10.05 Sun 01:47:56
 */

import { ThemeEnum } from '@oauth2/constant/theme';

import { act, renderHook } from '@testing-library/react';

import { type ThemeStoreProps, themeStore } from '.';

describe('[@oauth2/store] 테마 스토어 테스트 모듈', () => {
	beforeEach(() => {
		const { result } = renderHook<ThemeStoreProps, void>(themeStore);

		act(() => {
			result.current.resetThemeState();
		});
	});

	it('themeState 기본값 테스트', () => {
		const { result } = renderHook<ThemeStoreProps, void>(themeStore);

		expect(result.current.themeState).toBeUndefined();
	});

	it('resetThemeState 테스트', () => {
		const { result } = renderHook<ThemeStoreProps, void>(themeStore);

		act(() => {
			result.current.toogleThemeState();
		});

		expect(result.current.themeState).toBe(ThemeEnum.Dark);

		act(() => {
			result.current.resetThemeState();
		});

		expect(result.current.themeState).toBeUndefined();
	});

	describe('setThemeState 테스트', () => {
		it('function 타입 테스트', () => {
			const { result } = renderHook<ThemeStoreProps, void>(themeStore);

			act(() => {
				result.current.setThemeState((state) => (state === ThemeEnum.Dark ? ThemeEnum.Light : ThemeEnum.Dark));
			});

			expect(result.current.themeState).toBe(ThemeEnum.Dark);
		});

		it('변수형 타입 테스트', () => {
			const { result } = renderHook<ThemeStoreProps, void>(themeStore);

			act(() => {
				result.current.setThemeState(ThemeEnum.Light);
			});

			expect(result.current.themeState).toBe(ThemeEnum.Light);
		});
	});

	describe('toogleThemeState 테스트', () => {
		it('dark 토글 테스트', () => {
			const { result } = renderHook<ThemeStoreProps, void>(themeStore);

			act(() => {
				result.current.toogleThemeState();
			});

			expect(result.current.themeState).toBe(ThemeEnum.Dark);
		});

		it('light 토글 테스트', () => {
			const { result } = renderHook<ThemeStoreProps, void>(themeStore);

			act(() => {
				result.current.toogleThemeState();
				result.current.toogleThemeState();
			});

			expect(result.current.themeState).toBe(ThemeEnum.Light);
		});
	});
});
