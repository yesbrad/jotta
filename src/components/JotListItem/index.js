import React from 'react';
import {Container, Heading, Wrapper, IconRight} from './styles';
import Swipeable from 'react-native-swipeable-row';

const JotListItem = ({jotList, uuid, onEditJotList, sortHandlers}) => {
	return (
		<Swipeable
			rightContent={<IconRight icon="ios-reorder" size={40} color="red" />}
			onRightActionRelease={() => alert("Ya Cunt")}
		>
			<Container key={uuid} onPress={() => onEditJotList(uuid)}>
				<Wrapper>
					<Heading>{jotList.title}</Heading>
					<IconRight icon="ios-arrow-forward" size={35} color="white" />
				</Wrapper>
			</Container>
		</Swipeable>
	);
};

export default JotListItem;
