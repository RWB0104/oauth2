/**
 * 노드 인덱스 모듈
 *
 * @author RWB
 * @since 2025.09.20 Sat 10:02:14
 */

import { existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import process from 'node:process';

/**
 * turborepo 프로젝트 루트 경로 반환
 *
 * @returns {string} 루트 경로
 */
export function getRootAtTurborepo(): string {
	return getRoot('turbo.json');
}

/**
 * 루트 경로 반환
 *
 * @param {string} target: 대상 파일
 *
 * @returns {string} 루트 경로
 */
export function getRoot(target: string): string {
	let currentDir = process.cwd();

	while (true) {
		const file = join(currentDir, target);

		// turbo.json 파일이 존재하는 경우
		if (existsSync(file)) {
			return currentDir;
		}

		const parentDir = dirname(currentDir);

		// 현재 경로와 부모 경로가 동일할 경우
		if (parentDir === currentDir) {
			throw new Error(`can't find ${target} file.`);
		}

		currentDir = parentDir;
	}
}
