/**
 * 계정 카드 molecule 컴포넌트 Storybook
 *
 * @author RWB
 * @since 2025.11.13 Thu 23:35:00
 */

import StorybookContainer from '@oauth2/storybook-module/components/atom/StorybookContainer';
import StorybookSection from '@oauth2/storybook-module/components/template/StorybookSection';
import { getArgType, getParameters, type StroybookName, SubCategory } from '@oauth2/storybook-module/utils';

import { PlatformEnum } from '@oauth2/constant/platform';

import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import AccountCard, { type AccountCardLoadedProps, type AccountCardLoadingProps, type AccountCardProps } from '.';

type Story = StoryObj<AccountCardProps>;

const componentName = AccountCard.name;
const title: StroybookName = 'molecule/AccountCard';
const defaultArgsTypes = getArgType(componentName);

const platforms: Platform[] = [PlatformEnum.Github, PlatformEnum.Google, PlatformEnum.Kakao, PlatformEnum.Naver];

const meta: Meta<AccountCardProps> = {
	argTypes: {
		className: defaultArgsTypes.className,
		email: {
			control: 'text',
			description: '이메일',
			if: {
				arg: 'isLoading',
				truthy: false
			},
			table: {
				category: componentName,
				subcategory: SubCategory.Props
			}
		},
		id: defaultArgsTypes.id,
		isLoading: {
			control: 'boolean',
			description: '로딩 여부',
			table: {
				category: componentName,
				subcategory: SubCategory.Props
			}
		},
		name: {
			control: 'text',
			description: '이름',
			if: {
				arg: 'isLoading',
				truthy: false
			},
			table: {
				category: componentName,
				subcategory: SubCategory.Props
			}
		},
		onLogoutClick: {
			control: { disable: true },
			description: '로그아웃 클릭 이벤트 메서드',
			if: {
				arg: 'isLoading',
				truthy: false
			},
			table: {
				category: componentName,
				subcategory: SubCategory.Ev,
				type: {
					detail: '(e: MouseEvent<HTMLButtonElement, MouseEvent>) => void',
					summary: 'MouseEventHandler<HTMLButtonElement>'
				}
			}
		},
		picture: {
			control: 'text',
			description: '프로필 사진',
			if: {
				arg: 'isLoading',
				truthy: false
			},
			table: {
				category: componentName,
				subcategory: SubCategory.Props
			}
		},
		platform: {
			control: 'select',
			description: '플랫폼',
			if: {
				arg: 'isLoading',
				truthy: false
			},
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
	component: AccountCard,
	parameters: getParameters('계정 카드 molecule 컴포넌트', '계정 정보를 표현하기 위한 컴포넌트'),
	tags: ['autodocs'],
	title
};

export default meta;

export const Playground: Story = {};

export const Info: Story = {
	argTypes: {
		email: { control: { disable: true } },
		name: { control: { disable: true } },
		picture: { control: { disable: true } },
		platform: { control: { disable: true } }
	},
	render: (props: AccountCardLoadedProps) => (
		<StorybookSection container subtitle="여러 데이터 지정 예시" title="Info">
			<AccountCard
				{...props}
				email="test@domain.tld"
				name="John Doe"
				picture="https://placehold.co/32?text=J"
				platform="github"
			/>
		</StorybookSection>
	)
};

export const IsLoading: Story = {
	argTypes: {
		isLoading: { control: { disable: true } }
	},
	render: (props: AccountCardLoadingProps) => (
		<StorybookSection container subtitle="로딩 예시" title="IsLoading">
			<AccountCard {...props} isLoading />
		</StorybookSection>
	)
};

export const Platform: Story = {
	argTypes: {
		platform: { control: { disable: true } }
	},
	render: (props: AccountCardLoadedProps) => (
		<StorybookSection subtitle="플랫폼별 예시" title="Platform">
			{platforms.map((platform) => (
				<AccountCard {...props} key={platform} platform={platform} />
			))}
		</StorybookSection>
	)
};

export const OnLogoutClick: Story = {
	args: {
		onLogoutClick: fn()
	},
	render: (props: AccountCardLoadedProps) => (
		<StorybookSection container subtitle="로그아웃 메서드 예시" title="OnLogoutClick">
			<AccountCard {...props} platform="github" />
		</StorybookSection>
	)
};

export const All: Story = {
	argTypes: {
		email: { control: { disable: true } },
		isLoading: { control: { disable: true } },
		name: { control: { disable: true } },
		picture: { control: { disable: true } },
		platform: { control: { disable: true } }
	},
	render: (props: AccountCardLoadedProps) => (
		<StorybookContainer>
			<StorybookSection subtitle="전체 컴포넌트 예시" title="All">
				<AccountCard {...props} isLoading />
			</StorybookSection>

			<StorybookSection title="">
				{platforms.map((platform) => (
					<AccountCard
						{...props}
						email="test@domain.tld"
						key={platform}
						name="John Doe"
						picture="https://placehold.co/32?text=J"
						platform={platform}
					/>
				))}
			</StorybookSection>

			<StorybookSection title="">
				{platforms.map((platform) => (
					<AccountCard
						{...props}
						email="test@domain.tld"
						key={platform}
						name="John Doe"
						onLogoutClick={fn()}
						picture="https://placehold.co/32?text=J"
						platform={platform}
					/>
				))}
			</StorybookSection>
		</StorybookContainer>
	)
};
