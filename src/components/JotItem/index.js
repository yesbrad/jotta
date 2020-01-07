import React from 'react';
import {Container, Heading} from './styles';

const JotItem = ({key, index, data, disabled, active}) => {
	return (
		<Container onLongPress={drag} isActive={isActive}>
			<Heading>{data}</Heading>
		</Container>
	);
};

export default JotItem;
