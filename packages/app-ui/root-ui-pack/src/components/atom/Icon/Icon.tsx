/**
 * 아이콘 atom 컴포넌트
 *
 * @author RWB
 * @since 2025.09.26 Fri 02:12:30
 */

import type { SVGProps } from 'react';

import icons from './icons';

export type IconName = keyof typeof icons;

export interface IconProps extends SVGProps<SVGSVGElement> {
	/**
	 * 아이콘
	 */
	icon: IconName;
}

/**
 * 아이콘 atom 컴포넌트 반환 메서드
 *
 * @param {IconProps} param0 IconProps
 *
 * @returns {React.JSX.Element} JSX
 */
export default function Icon({ icon, ...props }: IconProps): React.JSX.Element {
	const IconComponent = icons[icon];

	return <IconComponent data-component="Icon" {...props} />;
}
