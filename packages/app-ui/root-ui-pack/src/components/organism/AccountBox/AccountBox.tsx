/**
 * 계정 박스 organism 컴포넌트
 *
 * @author RWB
 * @since 2025.11.23 Sun 04:49:50
 */

import { cn } from '@oauth2/headless-ui-pack/lib/utils';

import { useGetMeApi } from '@oauth2/api/react-query/me-controller/me-controller';
import { tokenStore } from '@oauth2/store/token';

import { str2platform } from '@oauth2/util-module/tools/platform-tool';

import { navigate } from 'vike/client/router';

import AccountCard from '../../molecule/AccountCard';

/**
 * 계정 박스 organism 컴포넌트 반환 메서드
 *
 * @returns {React.JSX.Element} JSX
 */
export default function AccountBox(): React.JSX.Element {
	const { tokenState, setTokenState } = tokenStore();

	const { data, isError } = useGetMeApi({
		request: {
			headers: {
				// biome-ignore lint/style/useNamingConvention: header spec
				Authorization: `Bearer ${tokenState}`
			}
		}
	});

	const handleLogoutClick = () => {
		setTokenState(undefined);

		// biome-ignore lint/nursery/noFloatingPromises: need float
		navigate('/oauth2', { overwriteLastHistoryEntry: true });
	};

	// 에러가 발생했을 경우
	if (isError) {
		location.href = '/oauth2';
	}

	const wrapCls = cn('flex h-dvh w-full items-center justify-center');

	// 데이터가 유효하지 않을 경우
	if (data === undefined) {
		return (
			<div className={wrapCls} data-component="AccountBox">
				<AccountCard isLoading />
			</div>
		);
	}

	return (
		<div className={wrapCls} data-component="AccountBox">
			<AccountCard
				email={data.body.email}
				name={data.body.name}
				onLogoutClick={handleLogoutClick}
				picture={data.body.picture}
				platform={str2platform(data.body.platform)}
			/>
		</div>
	);
}
