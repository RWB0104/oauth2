/**
 * 인덱스 페이지 컴포넌트
 *
 * @author RWB
 * @since 2025.09.16 Tue 22:05:30
 */

import '@oauth2/headless-ui-pack/styles/globals';

import AuthButton from '@oauth2/root-ui-pack/components/atom/AuthButton';

const platforms: Platform[] = ['github', 'google', 'kakao', 'naver'];

/**
 * 인덱스 페이지 컴포넌트 JSX 반환 메서드
 *
 * @returns {React.JSX.Element} JSX
 */
export default function IndexPage(): React.JSX.Element {
	return (
		<div className="flex h-dvh w-full items-center justify-center">
			<section className="flex w-full max-w-lg flex-col gap-4 p-4">
				{platforms.map((platform) => (
					<AuthButton key={platform} platform={platform} />
				))}
			</section>
		</div>
	);
}
