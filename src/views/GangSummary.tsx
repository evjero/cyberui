import * as React from 'react';
import { Box } from '../components/box/Box';
import { Flex } from '../components/flex/Flex';
import { Header } from '../components/header/Header';
import { Label } from '../components/label/Label';
import { Gang } from '../types/gang';

export type GangSummaryProps = {
	gang: Gang;
};

export function GangSummary(props: GangSummaryProps): JSX.Element {
	const { gang } = props;
	return (
		<Flex height={650} width={780} flexDirection="column" flexWrap="nowrap" alignContent="flex-start" justifyContent="flex-start" alignItems="center">
			<Flex flexDirection="row">
				<Box flex="0 1 auto">Protocol 6520-A44</Box>
				<Box flex="1 1 auto">
					<Label content="NAME:" />
					<Header size="h3">{gang.name}</Header>
				</Box>
			</Flex>
		</Flex>
	);
}
