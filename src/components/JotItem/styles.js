import styled from 'styled-components/native';
import Icon from '../JIcon';

export const Container = styled.TouchableOpacity`
	width: 100%;
	height: 50px;

	${props => props.isSpaced && `
		margin-bottom: 30px;
	`};
`;

export const Wrapper = styled.View`
	flex: 1;
	width: 100%;
	height: 100%;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 0 30px;
	color: red;
	padding-top: 20px;

	${props => props.isActive &&	`
		box-shadow: 0 10px 20px;
	`};

`;

export const Heading = styled.Text`
	font-size: 16px;


`;

export const MoveIconWrapper = styled.View`
	width: 30px;
	height: 30px;
	background: ${props => props.theme.darkGray};
	border-radius: 15px;
`;

export const IconMove = styled(Icon)`
`;