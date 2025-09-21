/**
 * 프리뷰리스 atom 컴포넌트 테스트
 *
 * @author RWB
 * @since 2025.09.21 Sun 20:55:20
 */

import { render } from '@testing-library/react';

import Previewless from '.';

describe('[@oauth2/storybook-module] 프리뷰리스 atom 컴포넌트 테스트', () => {
	it('기본 렌더링 테스트', () => {
		const html = render(<Previewless />);
		const target = html.getByTestId('Previewless');

		expect(target).toBeInTheDocument();
	});
});
