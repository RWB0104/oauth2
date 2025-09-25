/**
 * 아이콘 atom 컴포넌트 Storybook
 *
 * @author RWB
 * @since 2025.09.26 Fri 02:13:16
 */

import StorybookSection from '@oauth2/storybook-module/components/template/StorybookSection';
import { getArgType, getParameters, type StroybookName, SubCategory } from '@oauth2/storybook-module/utils';

import type { Meta, StoryObj } from '@storybook/react-vite';

import type { IconName, IconProps } from '.';
import Icon from '.';

type Story = StoryObj<IconProps>;

const icons: IconName[] = ['GitHubIcon', 'GoogleIcon', 'KakaoIcon'];

const componentName = Icon.name;
const title: StroybookName = 'atom/Icon';
const defaultArgsTypes = getArgType(componentName);

const meta: Meta<IconProps> = {
	args: {
		icon: 'GitHubIcon'
	},
	argTypes: {
		...defaultArgsTypes,
		icon: {
			table: {
				category: componentName,
				subcategory: SubCategory.Props
			}
		}
	},
	component: Icon,
	parameters: getParameters(
		'아이콘 atom 컴포넌트',
		'커스텀 SVG 아이콘 컴포넌트. `icon`을 통해 기 정의된 아이콘을 간편하게 사용 가능'
	),
	tags: ['autodocs'],
	title
};

export default meta;

export const Playground: Story = {
	args: {
		height: 128,
		width: 128
	}
};

export const All: Story = {
	render: (props) => (
		<StorybookSection subtitle="전체 아이콘 예시" title="All Icons">
			{icons.map((icon) => (
				<div className="flex flex-col items-center justify-center gap-2" key={icon}>
					<div className="flex aspect-square size-full items-center justify-center rounded-xl border p-8 transition-[padding] hover:p-4">
						<Icon {...props} icon={icon} />
					</div>

					<p className="text-sm">{icon}</p>
				</div>
			))}
		</StorybookSection>
	)
};
