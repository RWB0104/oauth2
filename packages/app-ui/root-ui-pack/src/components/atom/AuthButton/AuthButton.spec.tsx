/**
 * 인증 버튼 atom 컴포넌트 테스트
 *
 * @author RWB
 * @since 2025.09.30 Tue 03:06:59
 */

import { PlatformEnum } from '@oauth2/constant/platform';

import { render, screen } from '@testing-library/react';

import AuthButton from '.';

const platforms: Platform[] = [PlatformEnum.Github, PlatformEnum.Google, PlatformEnum.Kakao, PlatformEnum.Naver];

describe('[oauth2/root-ui-pack] 인증 버튼 atom 컴포넌트 테스트', () => {
	describe.each(platforms)('%s 인증 버튼 테스트', (platform) => {
		beforeEach(() => {
			render(<AuthButton platform={platform} />);
		});

		it('기본 렌더링 테스트', () => {
			const target = screen.getByTestId('AuthButton');

			expect(target).toBeInTheDocument();
			expect(target).toHaveAttribute('data-platform', platform);
		});

		it('링크 테스트', () => {
			const target = screen.getByTestId('AuthButton');

			expect(target).toHaveAttribute('href', `http://localhost:8080/oauth2/authorization/${platform}`);
		});
	});
});
