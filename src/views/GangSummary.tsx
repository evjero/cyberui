import React, { JSX } from 'react';
import { Gang } from '../types/gang';

export type GangSummaryProps = {
	gang: Gang;
};

export function GangSummary(_props: GangSummaryProps): JSX.Element {
	// const { gang } = props;
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				flexWrap: 'nowrap',
				alignContent: 'flex-start',
				justifyContent: 'flex-start',
				alignItems: 'center',
				height: 650,
				width: 780
			}}
		>
			<div style={{ display: 'flex', flexDirection: 'row' }}>
				{/* <Box flex="0 1 auto">Protocol 6520-A44</Box>
				<Box flex="1 1 auto">
					<Label content="NAME:" />
					<Header size="h3">{gang.name}</Header>
				</Box> */}
			</div>
		</div>
	);
}
