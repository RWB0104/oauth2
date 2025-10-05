/**
 * 쿼리 프로바이더 organism 컴포넌트
 *
 * @author RWB
 * @since 2025.09.21 Sun 01:47:32
 */

import { QueryClient, QueryClientProvider, type QueryClientProviderProps } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const defaultClient = new QueryClient();

export type QueryProviderProps = Partial<QueryClientProviderProps>;

/**
 * 쿼리 프로바이더 organism 컴포넌트 반환 메서드
 *
 * @param {QueryProviderProps} param0 QueryProviderProps
 *
 * @returns {React.JSX.Element} JSX
 */
export default function QueryProvider({ client = defaultClient, children }: QueryProviderProps): React.JSX.Element {
	return (
		<QueryClientProvider client={client}>
			{children}

			<ReactQueryDevtools />
		</QueryClientProvider>
	);
}
