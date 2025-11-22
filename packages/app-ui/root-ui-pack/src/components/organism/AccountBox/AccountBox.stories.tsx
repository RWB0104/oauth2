/**
 * 계정 박스 organism 컴포넌트 Storybook
 *
 * @author RWB
 * @since 2025.11.23 Sun 04:49:24
 */

import { useGetMeApi } from '@oauth2/api/react-query/me-controller/me-controller';
import type { MeDto } from '@oauth2/api/react-query/schemas/me-dto';

import { getParameters, type StroybookName } from '@oauth2/storybook-module/utils';

import type { Meta, StoryObj } from '@storybook/react-vite';
import { mocked } from 'storybook/test';

import AccountBox from '.';

type Story = StoryObj;

const title: StroybookName = 'organism/AccountBox';
const meta: Meta = {
	beforeEach: () => {
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
		mocked(useGetMeApi).mockReturnValueOnce({
			data: returns
		});
	},
	component: AccountBox,
	parameters: getParameters(
		'계정 박스 organism 컴포넌트',
		'`AccountCard`를 감싸 API 요청을 통해 데이터를 주입시키는 컴포넌트'
	),
	tags: ['autodocs'],
	title
};

export default meta;

export const Playground: Story = {};
