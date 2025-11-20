/**
 * 인덱스 페이지 컴포넌트
 *
 * @author RWB
 * @since 2025.09.16 Tue 22:05:30
 */

import AuthButton from '@oauth2/root-ui-pack/components/atom/AuthButton';

import { Alert, AlertDescription, AlertTitle } from '@oauth2/headless-ui-pack/components/alert';
import { Card } from '@oauth2/headless-ui-pack/components/card';

import { PlatformEnum } from '@oauth2/constant/platform';

import { AlertCircleIcon } from 'lucide-react';

const platforms: Platform[] = [PlatformEnum.Github, PlatformEnum.Google, PlatformEnum.Kakao, PlatformEnum.Naver];

/**
 * 인덱스 페이지 컴포넌트 JSX 반환 메서드
 *
 * @returns {React.JSX.Element} JSX
 */
export default function IndexPage(): React.JSX.Element {
	return (
		<div className="flex h-dvh w-full items-center justify-center">
			<Card className="flex w-full max-w-lg animate-up flex-col gap-4 p-4">
				<div className="mb-4 flex flex-col items-center">
					<img
						alt="https://www.flaticon.com/kr/authors/iyahicon"
						className="mt-8 mb-10 drop-shadow"
						height={128}
						src="https://github.com/user-attachments/assets/bf01ea2a-d2f8-434f-91c3-050b70679efc"
						width={128}
					/>

					<h1 className="bg-gradient-to-b from-gradient-top to-gradient-bottom bg-clip-text font-bold font-header text-4xl text-transparent">
						OAUTH2
					</h1>
					<p className="text-muted-foreground text-sm">project.itcode.dev</p>
				</div>

				{platforms.map((platform) => (
					<AuthButton key={platform} platform={platform} />
				))}

				<hr />

				<Alert>
					<AlertCircleIcon />

					<AlertTitle>이 프로젝트는 OAuth2를 구현한 연습용 프로젝트입니다.</AlertTitle>

					<AlertDescription>
						<ul className="ml-4 list-disc">
							<li>
								이 프로젝트는 Spring Boot를 통해 OAuth2 인증하는 방법에 관한 블로그 게시글 프로젝트의
								일환입니다.
							</li>
							<li>
								해당 프로젝트엔 DB 통신이 존재하지 않으며,
								<span className="font-bold text-blue-400"> 어떠한 정보도 저장하거나 기록하지 않습니다.</span>
							</li>
							<li>자세한 내용은 오픈된 소스코드를 확인해주세요.</li>
						</ul>
					</AlertDescription>
				</Alert>
			</Card>
		</div>
	);
}
