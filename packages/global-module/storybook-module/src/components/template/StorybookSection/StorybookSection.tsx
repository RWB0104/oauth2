/**
 * Storybook 섹션 template 컴포넌트
 *
 * @author RWB
 * @since 2025.09.22 Mon 00:36:23
 */

import clsx from 'clsx';
import type { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface StorybookSectionProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	/**
	 * 타이틀
	 */
	title: string;

	/**
	 * 서브 타이틀
	 */
	subtitle?: string;

	/**
	 * 수직 여부
	 */
	vertical?: boolean;

	/**
	 * 컨테이너 여부
	 */
	container?: boolean;
}

/**
 * Storybook 섹션 template 컴포넌트 반환 메서드
 *
 * @param {StorybookSectionProps} param0 StorybookSectionProps
 *
 * @returns {React.JSX.Element} JSX
 */
export default function StorybookSection({
	title,
	subtitle,
	vertical,
	container,
	className,
	children,
	...props
}: StorybookSectionProps): React.JSX.Element {
	return (
		<div
			className={clsx(
				'flex flex-col gap-4',
				{
					'sm:flex-row': !vertical
				},
				className
			)}
			data-component="StorybookSection"
			{...props}
		>
			<div
				className={clsx('flex w-full shrink-0 flex-col gap-2', {
					'sm:w-48': !vertical
				})}
			>
				<h3 className="font-bold text-lg">{title}</h3>

				<p className="text-muted-foreground text-sm">{subtitle}</p>
			</div>

			<div
				className={clsx('grid flex-1 gap-4', {
					'sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6': !container
				})}
			>
				{children}
			</div>
		</div>
	);
}
