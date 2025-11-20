/**
 * 플랫폼 툴 인덱스 모듈
 *
 * @author RWB
 * @since 2025.11.13 Thu 22:11:19
 */

import { PlatformEnum } from '@oauth2/constant/platform';

/**
 * 플랫폼 변환 메서드
 *
 * @param {string} str 문자열
 *
 * @returns {Platform | undefined} 플랫폼
 */
export function str2platform(str?: string): Platform | undefined {
	switch (str?.toLocaleLowerCase()) {
		case PlatformEnum.Github:
			return PlatformEnum.Github;

		case PlatformEnum.Google:
			return PlatformEnum.Google;

		case PlatformEnum.Kakao:
			return PlatformEnum.Kakao;

		case PlatformEnum.Naver:
			return PlatformEnum.Naver;

		default:
			return;
	}
}
