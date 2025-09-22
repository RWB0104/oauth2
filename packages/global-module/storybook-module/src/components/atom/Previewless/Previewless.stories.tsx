/**
 * 프리뷰리스 atom 컴포넌트 Storybook
 *
 * @author RWB
 * @since 2025.09.21 Sun 03:33:50
 */

import type { Meta, StoryObj } from '@storybook/react-vite';

import { getArgType, getParameters, type StroybookName } from '../../../utils';
import type { PreviewlessProps } from '.';
import Previewless from '.';

type Story = StoryObj<PreviewlessProps>;

const componentName = Previewless.name;
const title: StroybookName = 'atom/Previewless';
const defaultArgsTypes = getArgType(componentName);

const meta: Meta<PreviewlessProps> = {
	argTypes: {
		className: defaultArgsTypes.className,
		id: defaultArgsTypes.id
	},
	component: Previewless,
	parameters: getParameters('프리뷰리스 atom 컴포넌트', 'UI가 존재하지 않는 컴포넌트를 위한 Storybook 전용 더미 컴포넌트'),
	tags: ['autodocs'],
	title
};

export default meta;

export const Playground: Story = {};
