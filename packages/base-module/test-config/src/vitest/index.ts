import { getRootAtTurborepo } from '@oauth2/node';

import type { ViteUserConfig } from 'vitest/config';

const rootPath = getRootAtTurborepo();

/**
 * Vitest 설정 반환 메서드
 *
 * @param {string} name 이름
 *
 * @returns {ViteUserConfig} ViteUserConfig
 */
export function getVitestConfig(name: string): ViteUserConfig {
	return {
		test: {
			coverage: {
				clean: true,
				exclude: ['**/*.stories.ts', '**/*.stories.tsx'],
				include: ['src/**/*.ts', 'src/**/*.tsx'],
				provider: 'v8',
				reportsDirectory: `${rootPath}/coverage/${name}`,
				thresholds: {
					'100': true
				}
			},
			deps: {
				interopDefault: true
			},
			environment: 'jsdom',
			globals: true,
			name,
			root: '.',
			setupFiles: '@oauth2/test-config/vitest/setup'
		}
	};
}

/**
 * Vitest JSX 설정 반환 메서드
 *
 * @param {string} name 이름
 *
 * @returns {ViteUserConfig} ViteUserConfig
 */
export function getVitestJsxConfig(name: string): ViteUserConfig {
	const baseConfig = getVitestConfig(name);

	return {
		...baseConfig,
		esbuild: {
			jsx: 'automatic'
		}
	};
}
