/**
 * Storybook 유틸 인덱스 테스트 모듈
 *
 * @author RWB
 * @since 2025.09.21 Sun 22:17:44
 */

import { getArgType, getParameters } from '.';

describe('[@oauth2/storybook-module] Storybook 유틸 인덱스 테스트 모듈', () => {
	describe('getArgType 메서드 테스트', () => {
		it('기본 테스트', () => {
			const result = getArgType('component-name');

			expect(result.children).toBeTruthy();
			expect(result.className).toBeTruthy();
			expect(result.id).toBeTruthy();
		});
	});

	describe('getParameters 메서드 테스트', () => {
		it('기본 테스트', () => {
			const ref = 'component name';
			const result = getParameters(ref);

			expect(result.componentSubtitle).toBe(ref);
		});

		it('body 배열 테스트', () => {
			const ref = 'component name';
			const body = ['line number 1', 'line number 2'];
			const result = getParameters(ref, body);

			expect(result.componentSubtitle).toBe(ref);
			expect(result.docs.description.component).toBe(body.join('<br />'));
		});
	});
});
