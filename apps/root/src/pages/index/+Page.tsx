/**
 * 인덱스 페이지 컴포넌트
 *
 * @author RWB
 * @since 2025.09.16 Tue 22:05:30
 */

import { Button } from '@oauth2/headless-ui-pack/components/button';
import { cn } from '@oauth2/headless-ui-pack/lib/utils';

import '@oauth2/headless-ui-pack/styles/globals';

/**
 * 인덱스 페이지 컴포넌트 JSX 반환 메서드
 *
 * @returns {React.JSX.Element} JSX
 */
export default function IndexPage(): React.JSX.Element {
	return (
		<div>
			<div className={cn()}>Hello World!</div>

			<Button>버튼 테스트</Button>
		</div>
	);
}
