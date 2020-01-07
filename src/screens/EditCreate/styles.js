import styled from 'styled-components/native';

export const Container = styled.View`
	width: 100%;
	height: 100%;
	flex: 1;
`;

export const AddButtonWrapper = styled.View`
	width: 100%;
	height: 100px;
	padding: 10px 30px;
`;

export const AddButton = styled.TouchableOpacity`
	flex: 1;
	border-radius: 50px;
	background: ${props => props.theme.brandColor};
	align-items: center;
	justify-content: center;
`;

export const AddButtonText = styled.Text`
	color: ${props => props.theme.white};
`;

export const NameInput = styled.TextInput`
	width: 100%;
	height: 50px;
	background: ${props => props.theme.lightGray};
`;
