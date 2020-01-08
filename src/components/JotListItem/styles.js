import styled from 'styled-components/native';
import Icon from '../JIcon';

export const Container = styled.TouchableOpacity`
	width: 100%;
	height: 70px;
	padding: 8px 20px;
`;

export const Wrapper = styled.View`
	width:100%;
	height: 100%;
	flex: 1;
	background: ${props => props.theme.lightestGray};;
	align-items:center;
	justify-content: space-between;
	border-radius: 30px;
	padding: 0 20px;
	flex-direction: row;
`;

export const Heading = styled.Text`
	font-size: 16px;
`;

export const IconRight = styled(Icon)`
	
`;
