import React from 'react';
import {HeaderButtonContainer} from './styles';
//import Icon from 'react-native-vector-icons/Ionicons';
import Icon from '../JIcon';

const HeaderButton = ({ onPress, icon }) => {
	return (
		<HeaderButtonContainer onPress={() => onPress()}>
			<Icon icon={icon} size={40} color="white" />
		</HeaderButtonContainer>	
	);
};

export default HeaderButton;
