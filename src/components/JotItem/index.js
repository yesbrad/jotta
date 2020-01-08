import React, { useEffect, useState } from 'react';
import {Container, Heading, Wrapper, MoveIconWrapper, IconMove} from './styles';

const JotItem = ({ item, index, drag, isActive, isSpaced }) => {
	// const [isSpaced, SetIsSpaced] = useState(false);

	// useEffect(() => {
	// 		// SetIsSpaced(index % 4 === 3);
	// }, [index, isActive]);

	return (
		<Container isSpaced={isSpaced} onLongPress={drag}>
			<Wrapper isActive={isActive}>
				<Heading isActive={isActive}>{item.jot}</Heading>
				<IconMove icon="ios-reorder" size={40} color="lightgray" />
			</Wrapper>
		</Container>
	);
};

export default JotItem;
