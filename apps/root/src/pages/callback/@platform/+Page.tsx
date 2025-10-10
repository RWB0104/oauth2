/**
 * 콜백 동적 페이지 컴포넌트
 *
 * @author RWB
 * @since 2025.10.05 Sun 23:41:09
 */

import { useCallback, useEffect } from 'react';
import { usePageContext } from 'vike-react/usePageContext';

/**
 * 콜백 동적 페이지 컴포넌트 반환 메서드 반환 메서드
 *
 * @returns {React.JSX.Element} JSX
 */
export default function CallbackPage(): React.JSX.Element {
	const {
		urlParsed: { search }
	} = usePageContext();

	const getMeApi = useCallback(async (token: string) => {
		const response = await fetch('http://localhost:8080/api/me', {
			headers: {
				// biome-ignore lint/style/useNamingConvention: just header name
				Authorization: `Bearer ${token}`
			},
			method: 'GET'
		});

		if (response.ok) {
			const json = await response.json();

			console.log(json);
		}
	}, []);

	useEffect(() => {
		const { token } = search;

		if (token) {
			getMeApi(token);
		}
	}, [search, getMeApi]);

	return <div>2342</div>;
}
