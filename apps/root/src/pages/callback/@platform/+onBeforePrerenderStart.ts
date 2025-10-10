/**
 * prerender 사전 이벤트 모듈
 *
 * @author RWB
 * @since 2025.10.06 Mon 10:20:22
 */

const platforms: Platform[] = ['github', 'google', 'kakao', 'naver'];

/**
 * prerender 사전 이벤트 프로퍼티 반환 메서드
 *
 * @returns {string[]} 프로퍼티
 */
export function onBeforePrerenderStart(): VitePrerenderReturns[] {
	return platforms.map<VitePrerenderReturns>((platform) => ({
		pageContext: {
			data: 'ewrwwer'
		},
		url: `/callback/${platform}`
	}));
}
