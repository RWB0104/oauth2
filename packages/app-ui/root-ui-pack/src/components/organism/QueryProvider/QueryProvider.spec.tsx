/**
 * 쿼리 프로바이더 organism 컴포넌트 테스트
 *
 * @author RWB
 * @since 2025.09.21 Sun 02:45:26
 */

import { render } from '@testing-library/react';

import QueryProvider from '.';

describe('[@oauth2/root-ui-pack] 쿼리 프로바이더 organism 컴포넌트 테스트', () => {
	it('기본 렌더링 테스트', () => {
		const html = render(<QueryProvider>lorem ipsum</QueryProvider>);
		const target = html.getByText('lorem ipsum');

		expect(target).toBeInTheDocument();
	});
});
