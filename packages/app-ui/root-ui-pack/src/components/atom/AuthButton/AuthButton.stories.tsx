/**
 * 인증 버튼 atom 컴포넌트 Storybook
 *
 * @author RWB
 * @since 2025.09.30 Tue 03:06:50
 */

import StorybookSection from '@oauth2/storybook-module/components/template/StorybookSection';
import { getArgType, getParameters, type StroybookName, SubCategory } from '@oauth2/storybook-module/utils';

import { PlatformEnum } from '@oauth2/constant/platform';

import type { Meta, StoryObj } from '@storybook/react-vite';

import type { AuthButtonProps } from '.';
import AuthButton from '.';

type Story = StoryObj<AuthButtonProps>;

const platforms: Platform[] = [PlatformEnum.Github, PlatformEnum.Google, PlatformEnum.Kakao, PlatformEnum.Naver];

const componentName = AuthButton.name;
const title: StroybookName = 'atom/AuthButton';
const defaultArgsTypes = getArgType(componentName);

const meta: Meta<AuthButtonProps> = {
	args: {
		platform: PlatformEnum.Github
	},
	argTypes: {
		...defaultArgsTypes,
		platform: {
			control: 'radio',
			options: platforms,
			table: {
				category: componentName,
				subcategory: SubCategory.Props,
				type: {
					detail: platforms.join(' | '),
					summary: 'Platform'
				}
			}
		}
	},
	component: AuthButton,
	parameters: getParameters('인증 버튼 atom 컴포넌트', 'OAuth 인증 페이지로 이동하는 인증 버튼'),
	tags: ['autodocs'],
	title
};

export default meta;

export const Playground: Story = {};

export const All: Story = {
	argTypes: {
		platform: { control: { disable: true } }
	},
	render: (props) => (
		<StorybookSection container subtitle="전체 컴포넌트 예시" title="All">
			{platforms.map((platform) => (
				<AuthButton key={platform} {...props} platform={platform} />
			))}
		</StorybookSection>
	)
};
