/**
 * Storybook 섹션 atom 컴포넌트 Storybook
 *
 * @author RWB
 * @since 2025.09.21 Sun 17:41:27
 */

import type { Meta, StoryObj } from '@storybook/react-vite';

import { getArgType, getParameters, type StroybookName, SubCategory } from '../../../utils';
import StorybookSection, { type StorybookSectionProps } from '.';

type Story = StoryObj<StorybookSectionProps>;

const componentName = StorybookSection.name;
const title: StroybookName = 'template/StorybookSection';
const defaultArgsTypes = getArgType(componentName);

const meta: Meta<StorybookSectionProps> = {
	args: {
		children: Array.from({ length: 6 }).map((_i, j) => (
			// biome-ignore lint/suspicious/noArrayIndexKey: for storybook
			<div className="flex w-full items-center justify-center rounded border bg-accent p-4" key={j}>
				Example
			</div>
		)),
		subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
		title: 'Lorem Ipsum'
	},
	argTypes: {
		container: {
			table: {
				category: componentName,
				subcategory: SubCategory.Props
			}
		},
		subtitle: {
			table: {
				category: componentName,
				subcategory: SubCategory.Props
			}
		},
		title: {
			table: {
				category: componentName,
				subcategory: SubCategory.Props
			}
		},
		vertical: {
			table: {
				category: componentName,
				subcategory: SubCategory.Props
			}
		},
		...defaultArgsTypes
	},
	component: StorybookSection,
	parameters: getParameters('Storybook 섹션 template 컴포넌트', 'Storybook'),
	tags: ['autodocs'],
	title
};

export default meta;

export const Playground: Story = {};

export const Title: Story = {
	argTypes: { title: { control: { disable: true } } },
	render: (props) => {
		const titleMock = [
			'Basic title',
			'This is component example title',
			'Extreamly very very very very very very very very very very very very looong title text'
		];

		return (
			<div className="flex w-full flex-col gap-16">
				{titleMock.map((i) => (
					<StorybookSection {...props} key={i} title={i} />
				))}
			</div>
		);
	}
};

export const Subtitle: Story = {
	argTypes: { subtitle: { control: { disable: true } } },
	render: (props) => {
		const subtitleMock = [
			'this is subtitle',
			'typography for subtitle text',
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, ad. Quam provident quis repellat nulla, accusamus itaque excepturi similique cupiditate impedit reprehenderit vel. Laudantium, illo! Minima obcaecati libero alias voluptatibus!'
		];

		return (
			<div className="flex w-full flex-col gap-16">
				{subtitleMock.map((i) => (
					<StorybookSection {...props} key={i} subtitle={i} />
				))}
			</div>
		);
	}
};

export const Vertical: Story = {
	args: {
		subtitle: 'this component working with vertical mode',
		title: 'Vertical test',
		vertical: true
	},
	argTypes: { vertical: { control: { disable: true } } }
};

export const Container: Story = {
	args: {
		container: true,
		subtitle: 'container mode using whole size',
		title: 'Container test'
	},
	argTypes: { container: { control: { disable: true } } }
};
