/**
 * Storybook 컨테이너 atom 컴포넌트
 *
 * @author RWB
 * @since 2025.09.21 Sun 17:40:06
 */

import clsx from 'clsx';
import type { DetailedHTMLProps, HTMLAttributes } from 'react';

export type StorybookContainerProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

/**
 * Storybook 컨테이너 atom 컴포넌트 반환 메서드
 *
 * @param {StorybookContainerProps} param0 StorybookContainerProps
 *
 * @returns {React.JSX.Element} JSX
 */
export default function StorybookContainer({ className, ...props }: StorybookContainerProps): React.JSX.Element {
	return <section className={clsx('flex flex-col gap-16', className)} data-component="StorybookContainer" {...props} />;
}
