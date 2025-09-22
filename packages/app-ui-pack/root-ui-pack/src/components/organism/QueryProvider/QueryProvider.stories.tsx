/**
 * 쿼리 프로바이더 organism 컴포넌트 Storybook
 *
 * @author RWB
 * @since 2025.09.22 월 18:22:13
 */

import Previewless from '@oauth2/storybook-module/components/atom/Previewless';
import { getArgType, getParameters, type StroybookName, SubCategory } from '@oauth2/storybook-module/utils';

import type { Meta, StoryObj } from '@storybook/react-vite';

import type { QueryProviderProps } from '.';
import QueryProvider from '.';

type Story = StoryObj<QueryProviderProps>;

const componentName = QueryProvider.name;
const title: StroybookName = 'organism/QueryProvider';
const defaultArgsTypes = getArgType(componentName);

const meta: Meta<QueryProviderProps> = {
	args: {
		children: <Previewless />
	},
	argTypes: {
		children: defaultArgsTypes.id,
		client: {
			control: { disable: true },
			description: '쿼리 클라이언트 객체',
			table: {
				category: componentName,
				subcategory: SubCategory.Props,
				type: { detail: '@tanstack/query-client', summary: 'QueryClient' }
			}
		}
	},
	component: QueryProvider,
	parameters: getParameters('쿼리 프로바이더 organism 컴포넌트', '`react-query`를 래핑한 프로바이더 컴포넌트'),
	tags: ['autodocs'],
	title
};

export default meta;

export const Playground: Story = {};
