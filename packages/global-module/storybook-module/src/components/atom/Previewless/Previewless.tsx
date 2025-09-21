/**
 * 프리뷰리스 atom 컴포넌트
 *
 * @author RWB
 * @since 2025.09.21 Sun 03:24:01
 */

import { clsx } from 'clsx';
import type { DetailedHTMLProps, HTMLAttributes } from 'react';

export type PreviewlessProps = Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'children'>;

/**
 * 프리뷰리스 atom 컴포넌트 반환 메서드
 *
 * @param {PreviewlessProps} param0 PreviewlessProps
 *
 * @returns {React.JSX.Element} JSX
 */
export default function Previewless({ className, ...props }: PreviewlessProps): React.JSX.Element {
	return (
		<div
			className={clsx('flex min-h-50 w-full items-center justify-center rounded border bg-accent p-4', className)}
			data-component="Previewless"
			{...props}
		>
			This component preview is not support.
		</div>
	);
}
