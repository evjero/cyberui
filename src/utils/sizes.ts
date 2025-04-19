export const SIZES = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'] as const;

export type Size = (typeof SIZES)[number];
