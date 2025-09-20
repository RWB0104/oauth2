/**
 * 쿼리 클라이언트 organism 컴포넌트
 *
 * @author RWB
 * @since 2025.09.21 Sun 01:47:32
 */

import { QueryClient, QueryClientProvider, type QueryClientProviderProps } from '@tanstack/react-query';

const defaultClient = new QueryClient();

export type QueryProviderProps = Partial<QueryClientProviderProps>;

/**
 * 쿼리 클라이언트 organism 컴포넌트 반환 메서드
 *
 * @param {QueryProviderProps} param0 QueryProviderProps
 *
 * @returns {React.JSX.Element} JSX
 */
export default function QueryProvider({ client = defaultClient, children }: QueryProviderProps): React.JSX.Element {
	return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}
