/**
 * 프리뷰리스 template 컴포넌트 Storybook
 *
 * @author RWB
 * @since 2025.09.21 Sun 03:33:50
 */

import type { Meta, StoryObj } from '@storybook/react-vite';

import type { PreviewlessProps } from '.';
import Previewless from '.';

type Story = StoryObj<PreviewlessProps>;

const meta: Meta<PreviewlessProps> = {
	component: Previewless,
	tags: ['autodocs'],
	title: 'template/Previewless'
};

export default meta;

export const Playground: Story = {};
