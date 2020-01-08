import React from 'react';
import {Container, Heading, Wrapper, IconRight} from './styles';

const JotListItem = ({jotList, uuid, onEditJotList, sortHandlers}) => {
	return (
		<Container key={uuid} onPress={() => onEditJotList(uuid)}>
			<Wrapper>
				<Heading>{jotList.title}</Heading>
				<IconRight icon="ios-arrow-forward" size={35} color="white" />
			</Wrapper>
		</Container>
	);
};

export default JotListItem;
