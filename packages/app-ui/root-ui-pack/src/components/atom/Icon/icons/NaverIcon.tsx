/**
 * 네이버 아이콘 컴포넌트
 *
 * @author RWB
 * @since 2025.09.26 Fri 03:23:42
 */

import type { BaseIconProps } from '.';

/**
 * 네이버 아이콘 컴포넌트 반환 메서드
 *
 * @param {BaseIconProps} param0 BaseIconProps
 *
 * @returns {React.JSX.Element} JSX
 */
export default function NaverIcon({ fill = '#02C759', ...props }: BaseIconProps): React.JSX.Element {
	return (
		<svg fill={fill} name="NaverIcon" viewBox="0 0 1548 1552" xmlns="http://www.w3.org/2000/svg" {...props}>
			<path d="m1049.7 0h498.2v1551.5h-475.5l-574.2-830.3v830.3h-498.2v-1551.5h475.9l573.8 830.8z" fillRule="evenodd" />
		</svg>
	);
}
