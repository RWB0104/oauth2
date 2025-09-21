/**
 * Storybook 섹션 template 컴포넌트 테스트
 *
 * @author RWB
 * @since 2025.09.22 Mon 01:05:48
 */

import { render } from '@testing-library/react';

import StorybookSection from '.';

describe('[@oauth2/storybook-module] Storybook 컨테이너 template 컴포넌트 테스트', () => {
	it('기본 렌더링 테스트', () => {
		const html = render(<StorybookSection title="Lorem Ipsum" />);
		const target = html.getByTestId('StorybookSection');

		expect(target).toBeInTheDocument();
		expect(target).toHaveTextContent('Lorem Ipsum');
	});

	it('subtitle 테스트', () => {
		const html = render(<StorybookSection subtitle="subtitle typography" title="Lorem Ipsum" />);
		const target = html.getByTestId('StorybookSection');

		expect(target).toHaveTextContent('subtitle typography');
	});

	it('vertical 테스트', () => {
		const html = render(<StorybookSection title="Lorem Ipsum" vertical />);
		const target = html.getByTestId('StorybookSection');

		expect(target.classList).not.toContain('sm:flex-row');
	});

	it('container 테스트', () => {
		const html = render(
			<StorybookSection container title="Lorem Ipsum">
				children props
			</StorybookSection>
		);
		const target = html.getByText('children props');

		expect(target.classList).not.toContain('sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6');
	});
});
