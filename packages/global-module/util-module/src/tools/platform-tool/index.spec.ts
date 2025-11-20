/**
 * 플랫폼 툴 인덱스 테스트 모듈
 *
 * @author RWB
 * @since 2025.11.13 Thu 22:16:45
 */

import { str2platform } from '.';

const platforms = ['GitHub', 'GOOGLE', 'kaKaO', 'nAVEr'];

describe('[@oauth2/util-module] 플랫폼 툴 인덱스 테스트 모듈', () => {
	describe('str2platform 메서드 테스트', () => {
		it('기본 테스트', () => {
			const platform = str2platform();

			expect(platform).toBeUndefined();
		});

		describe('각 플랫폼 변환 테스트', () => {
			it.each(platforms)('값 %s', (str) => {
				const platform = str2platform(str);

				expect(platform).toBe(str.toLocaleLowerCase());
			});
		});
	});
});
