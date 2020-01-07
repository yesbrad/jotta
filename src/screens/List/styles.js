import styled from 'styled-components/native';

export const Container = styled.View`
	width: 100%;
	height: 100%;
	flex: 1;
`;

export const ListContainer = styled.ScrollView`
	width: 100%;
	height: 100%;
	flex: 1;
`;

export const AddButton = styled.TouchableOpacity`
	width: 100%;
	height: 80px;
	background: ${props => props.theme.brandColor};;
`;

export const AddButtonHeader = styled.TouchableOpacity`
	width: 40px;
	height: 40px;
	background: ${props => props.theme.white};;
	border-radius: 20px;
`;
