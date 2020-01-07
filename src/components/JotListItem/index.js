import React from 'react';
import {Container, Heading} from './styles';

const JotListItem = ({jotList, uuid, onEditJotList, sortHandlers}) => {
	return (
		<Container key={uuid} onPress={() => onEditJotList(uuid)}>
			<Heading>{jotList.title}</Heading>
		</Container>
	);
};

export default JotListItem;
