/**
 * 계정 카드 molecule 컴포넌트
 *
 * @author RWB
 * @since 2025.11.10 Mon 02:15:51
 */

import { Badge } from '@oauth2/headless-ui-pack/components/badge';
import { Button } from '@oauth2/headless-ui-pack/components/button';
import { Card } from '@oauth2/headless-ui-pack/components/card';
import { Skeleton } from '@oauth2/headless-ui-pack/components/skeleton';
import { cn } from '@oauth2/headless-ui-pack/lib/utils';

import { PlatformEnum } from '@oauth2/constant/platform';

import type { DetailedHTMLProps, HTMLAttributes, MouseEventHandler } from 'react';

import Icon from '../../atom/Icon';

interface AccountCardBaseProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	/**
	 * 로딩 여부
	 */
	isLoading?: boolean;
}

/**
 * 계정 카드 wrap 컴포넌트 반환 메서드
 *
 * @param {DetailedHTMLProps} props DetailedHTMLProps
 *
 * @returns {React.JSX.Element} JSX
 */
function AccountCardWrap(props: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>): React.JSX.Element {
	return (
		<Card
			className="flex w-full max-w-sm flex-col items-center overflow-hidden p-6 text-center"
			data-component="AccountCard"
			{...props}
		/>
	);
}

export interface AccountCardLoadingProps extends AccountCardBaseProps {
	/**
	 * 로딩 여부
	 */
	isLoading: true;
}

export interface AccountCardLoadedProps extends AccountCardBaseProps {
	/**
	 * 로딩 여부
	 */
	isLoading?: false;

	/**
	 * 플랫폼
	 */
	platform?: Platform;

	/**
	 * 프로필 사진
	 */
	picture?: string;

	/**
	 * 이름
	 */
	name?: string;

	/**
	 * 이메일
	 */
	email?: string;

	/**
	 * 로그아웃 클릭 이벤트 메서드
	 */
	onLogoutClick?: MouseEventHandler<HTMLButtonElement>;
}

export type AccountCardProps = AccountCardLoadingProps | AccountCardLoadedProps;

/**
 * 계정 카드 molecule 컴포넌트 반환 메서드
 *
 * @param {AccountCardProps} props AccountCardProps
 *
 * @returns {React.JSX.Element} JSX
 */
export default function AccountCard(props: AccountCardProps): React.JSX.Element {
	// 로딩 모드일 경우
	if (props.isLoading === true) {
		const { isLoading: loading, ...loadingProps } = props;

		return (
			<AccountCardWrap data-loading={loading} {...loadingProps}>
				<Skeleton className="size-24 rounded-full" />

				<div className="flex flex-col items-center gap-2">
					<Skeleton className="h-[1.5rem] w-40" />
					<Skeleton className="h-[1rem] w-30" />

					<Skeleton className="mt-4 h-[1.5rem] w-14" />
				</div>
			</AccountCardWrap>
		);
	}

	const { platform, picture, name, email, onLogoutClick, isLoading, ...loadedProps } = props;

	return (
		<AccountCardWrap data-loading={isLoading} {...loadedProps}>
			<div
				className={cn('relative box-content size-24 rounded-full border-4 border-background shadow-md', {
					'bg-linear-to-b from-gradient-top to-gradient-bottom': picture === undefined
				})}
			>
				{picture && (
					<img
						alt={name}
						className="size-24 rounded-full object-cover"
						data-component="AccountCard-img"
						src={picture}
					/>
				)}
			</div>

			<div>
				<h2 className="font-semibold text-2xl">{name ?? 'no provided'}</h2>
				<p className="text-gray-500 text-sm">{email ?? 'no provided'}</p>

				<Badge
					className={cn('mt-4 bg-blue-100 px-3 py-1 text-blue-400 shadow', {
						'bg-black text-white': platform === PlatformEnum.Github,
						'bg-kakao text-black': platform === PlatformEnum.Kakao,
						'bg-naver text-white': platform === PlatformEnum.Naver,
						'bg-white text-black': platform === PlatformEnum.Google
					})}
				>
					{platform === PlatformEnum.Github && <Icon fill="white" icon="GitHubIcon" />}
					{platform === PlatformEnum.Google && <Icon icon="GoogleIcon" />}
					{platform === PlatformEnum.Kakao && <Icon fill="black" icon="KakaoIcon" />}
					{platform === PlatformEnum.Naver && <Icon fill="white" icon="NaverIcon" />}

					{platform ?? 'unknown'}
				</Badge>
			</div>

			{onLogoutClick && (
				<Button
					className="mt-6 w-full"
					data-component="AccountCard-logout"
					onClick={onLogoutClick}
					type="button"
					variant="destructive"
				>
					로그아웃
				</Button>
			)}
		</AccountCardWrap>
	);
}
