import React from 'react';
import {Container, Heading, Wrapper, MoveIconWrapper} from './styles';

const JotItem = ({ item, index, drag, isActive }) => {
	return (
		<Container onLongPress={drag} isActive={isActive}>
			<Wrapper>
				<Heading>{item.jot}</Heading>
				<MoveIconWrapper></MoveIconWrapper>
			</Wrapper>
		</Container>
	);
};

export default JotItem;
