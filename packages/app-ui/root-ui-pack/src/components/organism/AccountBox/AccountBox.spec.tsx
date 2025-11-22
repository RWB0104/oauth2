/**
 * 계정 박스 organism 컴포넌트 테스트
 *
 * @author RWB
 * @since 2025.11.23 Sun 04:49:06
 */

import { useGetMeApi } from '@oauth2/api/react-query/me-controller/me-controller';
import type { MeDto } from '@oauth2/api/react-query/schemas/me-dto';

import { fireEvent, render } from '@testing-library/react';

import AccountBox from '.';

const mocks = vi.hoisted(() => {
	return {
		navigate: vi.fn()
	};
});

vi.mock('vike/client/router', () => ({
	navigate: mocks.navigate
}));

vi.mock('@oauth2/api/react-query/me-controller/me-controller', async () => ({
	useGetMeApi: vi.fn(() => ({ data: undefined }))
}));

describe('[oauth2/root-ui-pack] 계정 박스 organism 컴포넌트 테스트', () => {
	it('기본 테스트', () => {
		const html = render(<AccountBox />);
		const target = html.getByTestId('AccountBox');
		const subTarget = html.getByTestId('AccountCard');

		expect(target).toBeInTheDocument();
		expect(subTarget).toHaveAttribute('data-loading', 'true');
	});

	it('API 테스트', () => {
		const returns: MeDto = {
			body: {
				email: 'test@domain.tld',
				name: 'John Doe',
				picture: 'https://placehold.co/32?text=J',
				platform: 'GOOGLE'
			},
			path: '/',
			timestamp: Date.now(),
			uuid: 'UUID'
		};

		// @ts-expect-error
		vi.mocked(useGetMeApi).mockReturnValueOnce({
			data: returns
		});

		const html = render(<AccountBox />);
		const target = html.getByTestId('AccountBox');
		const subTarget = html.getByTestId('AccountCard');

		expect(target).toBeInTheDocument();
		expect(subTarget).not.toHaveAttribute('data-loading', 'true');
	});

	it('handleLogoutClick 메서드 테스트', () => {
		const returns: MeDto = {
			body: {
				email: 'test@domain.tld',
				name: 'John Doe',
				picture: 'https://placehold.co/32?text=J',
				platform: 'GOOGLE'
			},
			path: '/',
			timestamp: Date.now(),
			uuid: 'UUID'
		};

		vi.mocked('vike/client/router');

		// @ts-expect-error
		vi.mocked(useGetMeApi).mockReturnValueOnce({
			data: returns
		});

		const html = render(<AccountBox />);
		const target = html.getByTestId('AccountBox');
		const subTarget = html.getByTestId('AccountCard-logout');

		fireEvent.click(subTarget);

		expect(target).toBeInTheDocument();
		expect(mocks.navigate).toHaveBeenCalledOnce();
	});

	it('에러 테스트', () => {
		// @ts-expect-error
		vi.mocked(useGetMeApi).mockReturnValueOnce({
			isError: true
		});

		const html = render(<AccountBox />);
		const target = html.getByTestId('AccountBox');

		expect(target).toBeInTheDocument();
	});
});
