/**
 * 토큰 스토어 모듈
 *
 * @author RWB
 * @since 2025.11.08 Sat 05:04:39
 */

import { SessionStorageKey } from '@oauth2/constant/browser';

import { create } from 'zustand';

export type SetTokenStateHandler = SetStoreHandler<string | undefined>;
export type TokenStateHandler = () => void;

export interface TokenStoreProps {
	/**
	 * 토큰
	 */
	tokenState?: string;

	/**
	 * 토큰 할당 메서드
	 */
	setTokenState: SetTokenStateHandler;

	/**
	 * 토큰 초기 동작 메서드
	 */
	initTokenState: TokenStateHandler;
}

export const tokenStore = create<TokenStoreProps>((set, get) => ({
	initTokenState: () => {
		const token = sessionStorage.getItem(SessionStorageKey.AccessToken) ?? undefined;

		set({
			tokenState: token
		});
	},
	setTokenState: (state) => {
		const { tokenState } = get();
		const to = typeof state === 'function' ? state(tokenState) : state;

		// 대상 토큰이 유효할 경우 세션 스토리지 저장
		if (to) {
			sessionStorage.setItem(SessionStorageKey.AccessToken, to);
		}

		// 대상 토큰이 유효하지 않을 경우, 제거
		else {
			sessionStorage.removeItem(SessionStorageKey.AccessToken);
		}

		set({
			tokenState: to
		});
	}
}));
