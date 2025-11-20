/**
 * 계정 카드 molecule 컴포넌트 테스트
 *
 * @author RWB
 * @since 2025.11.14 Fri 22:39:00
 */

import { PlatformEnum } from '@oauth2/constant/platform';

import { render } from '@testing-library/react';

import AccountCard from '.';

const platforms: Platform[] = [PlatformEnum.Github, PlatformEnum.Google, PlatformEnum.Kakao, PlatformEnum.Naver];

describe('[oauth2/root-ui-pack] 계정 카드 molecule 컴포넌트 테스트', () => {
	it('기본 테스트', () => {
		const html = render(<AccountCard />);
		const target = html.getByTestId('AccountCard');

		expect(target).toBeInTheDocument();
	});

	describe('platform 테스트', () => {
		it.each(platforms)('%s', (platform) => {
			const html = render(<AccountCard platform={platform} />);
			const target = html.getByTestId('AccountCard');

			expect(target).toBeInTheDocument();
		});
	});

	it('picture 테스트', () => {
		const html = render(<AccountCard picture="https://placehold.co/64" />);
		const target = html.getByTestId('AccountCard-img');

		expect(target).toBeInTheDocument();
	});

	it('onLogoutClick 메서드 테스트', () => {
		const mockFn = vi.fn();

		const html = render(<AccountCard onLogoutClick={mockFn} />);
		const target = html.getByTestId('AccountCard-logout');

		expect(target).toBeInTheDocument();
	});

	it('로딩 테스트', () => {
		const html = render(<AccountCard isLoading />);
		const target = html.getByTestId('AccountCard');

		expect(target).toBeInTheDocument();
		expect(target).toHaveAttribute('data-loading', 'true');
	});
});
