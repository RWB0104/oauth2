/**
 * 하위 아이콘 컴포넌트 인덱스 모듈
 *
 * @author RWB
 * @since 2025.09.26 Fri 02:11:11
 */

import type { SVGProps } from 'react';

import GitHubIcon from './GitHubIcon';
import GoogleIcon from './GoogleIcon';
import KakaoIcon from './KakaoIcon';
import NaverIcon from './NaverIcon';

// biome-ignore lint/style/useNamingConvention: for icon name
export default { GitHubIcon, GoogleIcon, KakaoIcon, NaverIcon };

export type BaseIconProps = SVGProps<SVGSVGElement>;
