/**
 * 인증 버튼 atom 컴포넌트
 *
 * @author RWB
 * @since 2025.09.30 Tue 03:06:11
 */

import { cn } from '@oauth2/headless-ui-pack/lib/utils';

import type { AnchorHTMLAttributes, DetailedHTMLProps } from 'react';

import Icon from '../Icon';

const labels: Record<Platform, string> = {
	github: 'GitHub',
	google: 'Google',
	kakao: '카카오',
	naver: '네이버'
};

export interface AuthButtonProps
	extends Omit<DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, 'href'> {
	/**
	 * 플랫폼
	 */
	platform: Platform;
}

/**
 * 인증 버튼 atom 컴포넌트 반환 메서드
 *
 * @param {AuthButtonProps} param0 AuthButtonProps
 *
 * @returns {React.JSX.Element} JSX
 */
export default function AuthButton({ platform, className, ...props }: AuthButtonProps): React.JSX.Element {
	return (
		<a
			className={cn(
				'inline-flex items-center justify-center gap-3 rounded-md px-4 py-2 shadow transition-all duration-300 hover:opacity-75 hover:brightness-95',
				{
					'bg-[#02C759]': platform === 'naver',
					'bg-[#FEE500]': platform === 'kakao',
					'bg-black': platform === 'github',
					'bg-white': platform === 'google'
				},
				className
			)}
			data-component="AuthButton"
			data-platform={platform}
			href={`http://localhost:8080/oauth2/authorization/${platform}`}
			{...props}
		>
			<div className="aspect-square size-4">
				{platform === 'github' && <Icon fill="white" icon="GitHubIcon" />}
				{platform === 'google' && <Icon icon="GoogleIcon" />}
				{platform === 'kakao' && <Icon fill="black" icon="KakaoIcon" />}
				{platform === 'naver' && <Icon fill="white" icon="NaverIcon" />}
			</div>

			<p
				className={cn({
					'text-black': platform === 'google' || platform === 'kakao',
					'text-white': platform === 'github' || platform === 'naver'
				})}
			>
				{labels[platform]} 아이디로 로그인
			</p>
		</a>
	);
}
