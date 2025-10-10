/**
 * 루트 레이아웃 컴포넌트
 *
 * @author RWB
 * @since 2025.10.05 Sun 09:30:03
 */

import QueryProvider from '@oauth2/root-ui-pack/components/organism/QueryProvider';
import ThemeProvider from '@oauth2/root-ui-pack/components/organism/ThemeProvider';

import type { PropsWithChildren } from 'react';

/**
 * 루트 레이아웃 컴포넌트 반환 메서드
 *
 * @param {PropsWithChildren} param0 PropsWithChildren
 *
 * @returns {React.JSX.Element} JSX
 */
export default function RootLayout({ children }: PropsWithChildren): React.JSX.Element {
	return (
		<main data-component="RootLayout">
			<QueryProvider>
				<ThemeProvider>{children}</ThemeProvider>
			</QueryProvider>
		</main>
	);
}
