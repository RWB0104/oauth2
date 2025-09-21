/**
 * Storybook 유틸 인덱스 모듈
 *
 * @author RWB
 * @since 2025.09.21 Sun 14:12:35
 */

import type { Parameters } from '@storybook/react-vite';
import type { InputType } from 'storybook/internal/csf';

type GetArgTypeArg = 'children' | 'className' | 'id';

export type ComponentGroup = 'atom' | 'molecule' | 'organism' | 'template';

export enum SubCategory {
	Props = 'Property',
	Ev = 'Event'
}

export type StroybookName = `${ComponentGroup}/${string}`;

/**
 * 기 정의된 Storybook ArgType 반환 메서드
 *
 * @param {string} category 카테고리
 *
 * @returns {Record} InputType
 */
export function getArgType(category: string): Record<GetArgTypeArg, InputType> {
	return {
		children: {
			control: { disable: true },
			description: '자식 노드',
			table: {
				category,
				subcategory: SubCategory.Props,
				type: { summary: 'React.ReactNode' }
			}
		},
		className: {
			control: { disable: true },
			description: '클래스',
			table: {
				category,
				subcategory: SubCategory.Props,
				type: { summary: 'string' }
			},
			type: 'string'
		},
		id: {
			control: { disable: true },
			description: '태그 고유 ID',
			table: {
				category,
				subcategory: SubCategory.Props
			},
			type: 'string'
		}
	};
}

/**
 * 파라미터 반환 메서드
 *
 * @param {string} subtitle 서브 타이틀
 * @param {string | string[]} body 내용
 * @param {Parameters} parameters 결합할 파라미터
 *
 * @returns {Parameters} 파라미터
 */
export function getParameters(subtitle: string, body?: string | string[], parameters?: Parameters): Parameters {
	return {
		...parameters,
		componentSubtitle: subtitle,
		docs: { description: { component: Array.isArray(body) ? body.join('<br />') : body } }
	};
}
