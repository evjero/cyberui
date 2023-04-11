/**
 * Tests parameter `prop` and returns `returnValue` if not `undefined` or `null`, otherwise returns `undefined`
 * @returns `returnValue` or `undefined`
 */
export const classNamesAttr = (prop: React.ReactNode, returnValue?: string | boolean): typeof returnValue => {
	return prop !== undefined && prop !== null ? returnValue : undefined;
};
