/**
 * 설정 인덱스 모듈
 *
 * @author RWB
 * @since 2025.10.29 Wed 01:15:42
 */

import type { QueryOptions } from '@tanstack/react-query';
import type { ConfigExternal, OutputClient, OutputOptions } from 'orval';

const baseDir = './generated';

const baseUrls: Record<ApiEnv, string> = {
	development: 'http://localhost:8080',
	production: 'https://api.itcode.dev'
};

const oas: Record<ApiEnv, string> = {
	development: `${baseUrls.development}/docs/openapi3.yaml`,
	production: `${baseUrls.production}/oauth2/docs/openapi3.yaml`
};

export type ApiEnv = 'development' | 'production';

/**
 * 설정 아이템 반환 메서드
 *
 * @param {OutputClient} client fetcher 종류
 * @param {Partial} override OutputOptions 오버라이딩
 *
 * @returns {OutputOptions} 설정 아이템
 */
export function getConfigItem(client: OutputClient, { override, ...overrides }: Partial<OutputOptions> = {}): OutputOptions {
	return {
		biome: true,
		clean: true,
		client,
		indexFiles: true,
		mode: 'tags-split',
		namingConvention: 'kebab-case',
		override: {
			namingConvention: {
				enum: 'PascalCase'
			},
			useTypeOverInterfaces: false,
			...override
		},
		schemas: `${baseDir}/${client}/schemas`,
		target: `${baseDir}/${client}`,
		tsconfig: './tsconfig.json',
		...overrides
	};
}

/**
 * 설정 반환 메서드
 *
 * @param {ApiEnv} env 환경
 *
 * @returns {ConfigExternal} 설정
 */
export function getConfig(env: ApiEnv): ConfigExternal {
	const input = oas[env];
	const baseUrl = baseUrls[env];

	const options: QueryOptions = {
		retry: 0
	};

	return {
		fetch: {
			input,
			output: getConfigItem('fetch', {
				baseUrl,
				override: {
					mutator: {
						alias: {
							'@oauth2/api/internal/fetcher': './src/fetcher/index.ts'
						},
						name: 'fetcher',
						path: './src/fetcher/index.ts'
					}
				}
			})
		},
		query: {
			input,
			output: getConfigItem('react-query', {
				baseUrl,
				override: {
					mutator: {
						alias: {
							'@oauth2/api/internal/fetcher': './src/fetcher/index.ts'
						},
						name: 'queryFetcher',
						path: './src/fetcher/index.ts'
					},
					query: {
						options
					}
				}
			})
		}
	};
}
