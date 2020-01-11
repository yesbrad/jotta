import React, { useEffect, useState } from 'react';
import {Container, Heading, Wrapper, MoveIconWrapper, IconMove, RightSideWrapper, LeftSideWrapper} from './styles';
import { ActionSheetIOS } from 'react-native';

const JotItem = ({ item, index, drag, isActive, isSpaced, onDeleteJot, OnEditJot }) => {
	const showActionSheet = () => {
		ActionSheetIOS.showActionSheetWithOptions(
			{
				options: ['Cancel', 'Delete', 'Edit'],
				destructiveButtonIndex: 1,
				cancelButtonIndex: 0,
			},
			(buttonIndex) => {
				if (buttonIndex === 1) {
					onDeleteJot();
				}

				if (buttonIndex === 2) {
					OnEditJot();
				}
			},
		);
	}

	return (
		<Container isSpaced={isSpaced} onLongPress={drag}>
				<Wrapper isActive={isActive}>
					<LeftSideWrapper>
						<IconMove icon="ios-reorder" size={40} color="lightgray" />
						<Heading isActive={isActive}>{item.jot}</Heading>
					</LeftSideWrapper>
					<RightSideWrapper onPress={showActionSheet}>
						<IconMove icon="ios-settings" size={30} color="lightgray" />
					</RightSideWrapper>
				</Wrapper>
			</Container>
	);
};

export default JotItem;
