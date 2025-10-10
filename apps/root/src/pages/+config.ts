/**
 * vike 전역 설정 모듈
 *
 * @author RWB
 * @since 2025.09.16 Tue 22:03:32
 */

import type { Config } from 'vike/types';
import vikeReact from 'vike-react/config';

// Default config (can be overridden by pages)
// https://vike.dev/config

export default {
	description: 'OAuth2 project',
	extends: vikeReact,
	prerender: true,
	title: 'OAuth2'
} satisfies Config;
