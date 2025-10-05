/**
 * 테마 프로바이더 organism 컴포넌트 Storybook
 *
 * @author RWB
 * @since 2025.10.05 Sun 11:16:48
 */

import { Button } from '@oauth2/headless-ui-pack/components/button';

import { themeStore } from '@oauth2/store/theme';
import { getParameters, type StroybookName } from '@oauth2/storybook-module/utils';

import type { Meta, StoryObj } from '@storybook/react-vite';

import ThemeProvider from '.';

type Story = StoryObj;

const title: StroybookName = 'organism/ThemeProvider';

function ChildComp(): React.JSX.Element {
	const { themeState, toogleThemeState } = themeStore();

	return <Button onClick={toogleThemeState}>{themeState} 테마</Button>;
}

const meta: Meta = {
	component: ThemeProvider,
	parameters: getParameters('테마 프로바이더 organism 컴포넌트', '테마 관리를 위한 테마 프로바이더 컴포넌트'),
	render: () => (
		<main className="flex w-full items-center justify-center">
			<ThemeProvider />
			<ChildComp />
		</main>
	),
	tags: ['autodocs'],
	title
};

export default meta;

export const Playground: Story = {};
