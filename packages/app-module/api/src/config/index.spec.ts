/**
 * 설정 인덱스 테스트 모듈
 *
 * @author RWB
 * @since 2025.11.14 Fri 22:33:12
 */

import { getConfig, getConfigItem } from '.';

describe('[@oauth2/api] 설정 인덱스 테스트 모듈', () => {
	it('getConfigItem 메서드 테스트', () => {
		const configItem = getConfigItem('fetch');

		expect(configItem.client).toBe('fetch');
	});

	it('getConfig 메서드 테스트', () => {
		const config = getConfig('development');

		expect(config).toBeTruthy();
	});
});
