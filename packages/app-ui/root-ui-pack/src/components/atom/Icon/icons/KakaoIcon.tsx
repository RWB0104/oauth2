/**
 * 카카오 아이콘 컴포넌트
 *
 * @author RWB
 * @since 2025.09.26 Fri 02:10:26
 */

import type { BaseIconProps } from '.';

/**
 * 카카오 아이콘 컴포넌트 반환 메서드
 *
 * @param {BaseIconProps} param0 BaseIconProps
 *
 * @returns {React.JSX.Element} JSX
 */
export default function KakaoIcon({ fill = '#3C1E1E', ...props }: BaseIconProps): React.JSX.Element {
	return (
		<svg fill={fill} name="KakaoIcon" viewBox="0 0 99.61801 92.147011" xmlns="http://www.w3.org/2000/svg" {...props}>
			<g transform="matrix(1,0,0,-1,-362.26358,234.09895)">
				<g clipPath="url(#clipPath692)">
					<g transform="translate(163.2612,376.6777)">
						<path
							inkscape:connector-curvature="0"
							d="m 248.81039,-143.57875 c -26.953,0 -48.80801,-17.256 -48.80801,-38.555 0,-13.68101 9.05201,-25.69301 22.64601,-32.54901 l -4.599,-17.167 c -0.176,-0.527 -0.03,-1.085 0.352,-1.465 0.263,-0.265 0.614,-0.411 0.995,-0.411 0.294,0 0.586,0.117 0.85,0.322 l 19.775,13.36 c 2.872,-0.41 5.802,-0.644 8.789,-0.644 26.953,0 48.81,17.255 48.81,38.55401 0,21.299 -21.857,38.555 -48.81,38.555"
							fillOpacity={1}
							fillRule="nonzero"
						/>
					</g>
				</g>
			</g>
		</svg>
	);
}
