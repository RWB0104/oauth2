/**
 * 테마 스토어 테스트 모듈
 *
 * @author RWB
 * @since 2025.10.05 Sun 01:47:56
 */

import { act, renderHook } from '@testing-library/react';

import { type ThemeStoreProps, themeStore } from '.';

describe('[@oauth2/store] 테마 스토어 테스트 모듈', () => {
	it('themeState 기본값 테스트', () => {
		const { result } = renderHook<ThemeStoreProps, void>(themeStore);

		expect(result.current.themeState).toBeUndefined();
	});

	it('resetThemeState 테스트', () => {
		const { result } = renderHook<ThemeStoreProps, void>(themeStore);

		act(() => {
			result.current.toogleThemeState();
		});

		expect(result.current.themeState).toBe('dark');

		act(() => {
			result.current.resetThemeState();
		});

		expect(result.current.themeState).toBeUndefined();
	});

	describe('toogleThemeState 테스트', () => {
		beforeEach(() => {
			const { result } = renderHook<ThemeStoreProps, void>(themeStore);

			act(() => {
				result.current.resetThemeState();
			});
		});

		it('dark 토글 테스트', () => {
			const { result } = renderHook<ThemeStoreProps, void>(themeStore);

			act(() => {
				result.current.toogleThemeState();
			});

			expect(result.current.themeState).toBe('dark');
		});

		it('light 토글 테스트', () => {
			const { result } = renderHook<ThemeStoreProps, void>(themeStore);

			act(() => {
				result.current.toogleThemeState();
				result.current.toogleThemeState();
			});

			expect(result.current.themeState).toBe('light');
		});
	});
});
