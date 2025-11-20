/**
 * Storybook 테마 인덱스 모듈
 *
 * @author RWB
 * @since 2025.09.21 Sun 03:29:32
 */

import { ThemeEnum } from '@oauth2/constant/theme';

import { create } from 'storybook/theming';

export const baseTheme = create({
	base: ThemeEnum.Dark,
	fontBase: 'Pretendard, sans-serif'
});
