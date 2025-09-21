/**
 * Storybook 컨테이너 atom 컴포넌트 Storybook
 *
 * @author RWB
 * @since 2025.09.21 Sun 17:41:27
 */

import type { Meta, StoryObj } from '@storybook/react-vite';

import { getArgType, getParameters, type StroybookName } from '../../../utils';
import type { StorybookContainerProps } from '.';
import StorybookContainer from '.';

type Story = StoryObj<StorybookContainerProps>;

const componentName = 'StorybookContainer';
const title: StroybookName = 'atom/StorybookContainer';
const defaultArgsTypes = getArgType(componentName);

const meta: Meta<StorybookContainerProps> = {
	args: {
		children: Array.from({ length: 10 }).map((_i, j) => (
			// biome-ignore lint/suspicious/noArrayIndexKey: for storybook docs
			<div className="flex items-center justify-center rounded border bg-accent p-4" key={j}>
				this is dummy content
			</div>
		))
	},
	argTypes: {
		...defaultArgsTypes
	},
	component: StorybookContainer,
	parameters: getParameters(
		'Storybook 컨테이너 atom 컴포넌트',
		'Storybook 문서에서 컴포넌트 예시별 배치를 위한 템플릿 컴포넌트'
	),
	tags: ['autodocs'],
	title
};

export default meta;

export const Playground: Story = {};
