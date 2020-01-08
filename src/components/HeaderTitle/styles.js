import styled from 'styled-components/native';
import Icon from '../JIcon';

export const Container = styled.TouchableOpacity`
	width: 100%;
	margin: 25px 0;
	padding: 0 25px;
`;

export const Title = styled.Text`
	font-family: ${props => props.theme.mainFont};
	font-size: 34px;
	text-align: left;
	font-weight:800;
	width: 100%;
`;