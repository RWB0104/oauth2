/**
 * Storybook 테마 인덱스 테스트 모듈
 *
 * @author RWB
 * @since 2025.09.21 Mon 21:36:34
 */

import { baseTheme } from '.';

describe('[@oauth2/storybook-module] Storybook 테마 인덱스 테스트 모듈', () => {
	it('기본 테스트', () => {
		expect(baseTheme.base).toBe('dark');
		expect(baseTheme.fontBase).toBe('Pretendard, sans-serif');
	});
});
