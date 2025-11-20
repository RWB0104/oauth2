import { SessionStorageKey } from '@oauth2/constant/browser';

import { act, renderHook } from '@testing-library/react';

import { type TokenStoreProps, tokenStore } from '.';

describe('[@oauth2/store] 토큰 스토어 테스트 모듈', () => {
	it('기본값 테스트', () => {
		const { result } = renderHook<TokenStoreProps, void>(tokenStore);

		act(() => {
			result.current.initTokenState();
		});

		expect(result.current.tokenState).toBeUndefined();
	});

	it('initTokenState 메서드 테스트', () => {
		sessionStorage.setItem(SessionStorageKey.AccessToken, 'test-token');

		const { result } = renderHook<TokenStoreProps, void>(tokenStore);

		act(() => {
			result.current.initTokenState();
		});

		expect(result.current.tokenState).toBe('test-token');
	});

	describe('setTokenState 메서드 테스트', () => {
		describe('변수형 테스트', () => {
			it('undefined 할당 테스트', () => {
				const { result } = renderHook<TokenStoreProps, void>(tokenStore);

				act(() => {
					result.current.setTokenState(undefined);
				});

				expect(result.current.tokenState).toBeUndefined();
			});

			it('값 할당 테스트', () => {
				const { result } = renderHook<TokenStoreProps, void>(tokenStore);

				act(() => {
					result.current.setTokenState('test-token');
				});

				expect(result.current.tokenState).toBe('test-token');
			});
		});

		describe('함수형 테스트', () => {
			it('undefined 할당 테스트', () => {
				const { result } = renderHook<TokenStoreProps, void>(tokenStore);

				act(() => {
					result.current.setTokenState(() => 'test-token');
				});

				expect(result.current.tokenState).toBe('test-token');
			});
		});
	});
});
