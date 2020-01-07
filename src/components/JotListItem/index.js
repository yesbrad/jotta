import React from 'react';
import {Container, Heading, Wrapper} from './styles';

const JotListItem = ({jotList, uuid, onEditJotList, sortHandlers}) => {
	return (
		<Container key={uuid} onPress={() => onEditJotList(uuid)}>
			<Wrapper>
				<Heading>{jotList.title}</Heading>
			</Wrapper>
		</Container>
	);
};

export default JotListItem;
