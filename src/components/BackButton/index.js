import React from 'react';
import {BackButtonContainer} from './styles';

const BackButton = ({ onPress }) => {
	return (
		<BackButtonContainer onPress={() => onPress()}>

		</BackButtonContainer>
	);
};

export default BackButton;
