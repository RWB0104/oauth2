/**
 * 아이콘 atom 컴포넌트 테스트
 *
 * @author RWB
 * @since 2025.09.26 Fri 02:19:40
 */

import { render } from '@testing-library/react';

import type { IconName } from '.';
import Icon from '.';

const icons: IconName[] = ['GitHubIcon', 'GoogleIcon', 'KakaoIcon', 'NaverIcon'];

describe('[@oauth2/root-ui-pack] 아이콘 atom 컴포넌트 테스트', () => {
	it.each(icons)('기본 렌더링 테스트 (%s)', (icon) => {
		const html = render(<Icon icon={icon} />);
		const target = html.getByTestId('Icon');

		expect(target).toBeInTheDocument();
		expect(target).toHaveAttribute('name', icon);
	});
});
