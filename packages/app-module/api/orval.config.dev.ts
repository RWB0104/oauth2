/**
 * orval DEV 설정 모듈
 *
 * @author RWB
 * @since 2025.11.04 Tue 01:56:57
 */

import { getConfig } from '@oauth2/api/internal/config';

import { defineConfig } from 'orval';

export default defineConfig(getConfig('development'));
