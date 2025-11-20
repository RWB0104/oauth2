/**
 * 콜백 페이지 컴포넌트
 *
 * @author RWB
 * @since 2025.10.05 Sun 23:41:09
 */

import { tokenStore } from '@oauth2/store/token';

import { useEffect } from 'react';
import { navigate } from 'vike/client/router';
import { usePageContext } from 'vike-react/usePageContext';

/**
 * 콜백 페이지 컴포넌트 반환 메서드
 *
 * @returns {React.JSX.Element} JSX
 */
export default function CallbackPage(): React.JSX.Element {
	const {
		urlParsed: { search }
	} = usePageContext();

	const { setTokenState } = tokenStore();

	useEffect(() => {
		// 토큰이 유효할 경우
		if (search?.token) {
			setTokenState(search.token);

			sessionStorage.setItem('access-token', search.token);

			// biome-ignore lint/nursery/noFloatingPromises: need float
			navigate('/oauth2/me', { overwriteLastHistoryEntry: true });
		}

		// 토큰이 유효하지 않을 경우
		else {
			location.replace('/error');

			setTokenState(undefined);

			// biome-ignore lint/nursery/noFloatingPromises: need float
			navigate('/oauth2/error', { overwriteLastHistoryEntry: true });
		}
	}, [search, setTokenState]);

	return (
		<div className="flex h-dvh w-full items-center justify-center bg-black/50">
			<div className="size-14 animate-spin rounded-full border-t-4 border-l-4" />
		</div>
	);
}
