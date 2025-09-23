/**
 * vitest 설정 모듈
 *
 * @author RWB
 * @since 2025.09.21 Sun 03:03:10
 */

import { getVitestJsxConfig } from '@oauth2/test-config/vitest';

import { defineConfig } from 'vitest/config';

import pkg from './package.json' with { type: 'json' };

const config = getVitestJsxConfig(`${pkg.name}`);

export default defineConfig(config);
