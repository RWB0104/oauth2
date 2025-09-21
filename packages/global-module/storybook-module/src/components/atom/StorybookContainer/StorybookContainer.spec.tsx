/**
 * Storybook 컨테이너 atom 컴포넌트 테스트
 *
 * @author RWB
 * @since 2025.09.21 Sun 21:30:52
 */

import { render } from '@testing-library/react';

import StorybookContainer from '.';

describe('[@oauth2/storybook-module] Storybook 컨테이너 atom 컴포넌트 테스트', () => {
	it('기본 렌더링 테스트', () => {
		const html = render(<StorybookContainer />);
		const target = html.getByTestId('StorybookContainer');

		expect(target).toBeInTheDocument();
	});
});
