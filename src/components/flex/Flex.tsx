import classNames from 'classnames';
import * as React from 'react';
import { classNamesAttr } from '../../utils/classNamesHelper';

export type FlexProps = {
	/** Content */
	children?: React.ReactNode;
	/** Additional classes. */
	className?: string;
	/** Flexed divs can take the width of their container, regardless of children preset; defaulted to `true` */
	fluid?: boolean;
	/** Optional height in pixels */
	height?: React.CSSProperties['height'];
	/** Overflow (scroll) behavior; defaulted to 'auto' */
	overflow?: React.CSSProperties['overflow'];
	/**
	 * Flexed divs can display inline, similar to standard block displays
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/display#precomposed
	 */
	inline?: boolean;
	/**
	 * The direction contained elements should display in, typically `row` or `column`
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction
	 */
	flexDirection: React.CSSProperties['flexDirection'];
	/**
	 * Whether or not to wrap elements when they are too large for the width of the container; defaulted to `wrap`
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap
	 */
	flexWrap?: React.CSSProperties['flexWrap'];
	/**
	 * The white-space distribution around directly-contained elements; defaulted to `normal`
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/align-content
	 */
	alignContent?: React.CSSProperties['alignContent'];
	/**
	 * The main-axis alignment of all directly-contained elements; defaulted to `space-between`
	 *
	 * For `flexDirection: row`, the main-axis is **horizontal**, for `flexDirection: column`, the main-axis is vertical
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content
	 */
	justifyContent?: React.CSSProperties['justifyContent'];
	/**
	 * The cross-axis alignment of all directly-contained elements; defaulted to `normal`
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/align-items
	 */
	alignItems?: React.CSSProperties['alignItems'];
	/**
	 * The white-space distribution (in pixels) between child elements; defaulted to `16`
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/gap
	 */
	gap?: 0 | 8 | 16 | 24 | 32 | 64;
};

/**
 * A helpful opinioned wrapper for flexbox layouts
 *
 * Children will have `flex: auto` applied unless otherwise specified in children elements
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/flex#values
 */
export const Flex = React.forwardRef<HTMLDivElement, FlexProps>((props, ref): JSX.Element => {
	const { children, className, fluid, inline, ...styles } = props;
	const classes = classNames('cy', 'flex', classNamesAttr(fluid, 'fluid'), classNamesAttr(inline, 'inline'), className);
	return (
		<div className={classes} ref={ref} style={{ width: fluid == true || fluid == undefined ? '100%' : undefined, ...styles }}>
			{children}
		</div>
	);
});
Flex.defaultProps = {
	fluid: true,
	flexDirection: 'row',
	flexWrap: 'wrap',
	alignContent: 'normal',
	justifyContent: 'space-between',
	alignItems: 'normal',
	gap: 16
};
Flex.displayName = 'Flex';
