import React from 'react';
import {Container, Heading, Wrapper, MoveIconWrapper, IconMove} from './styles';

const JotItem = ({ item, index, drag, isActive }) => {
	return (
		<Container onLongPress={drag} isActive={isActive}>
			<Wrapper>
				<Heading>{item.jot}</Heading>
				<IconMove icon="ios-reorder" size={40} color="lightgray" />
			</Wrapper>
		</Container>
	);
};

export default JotItem;
