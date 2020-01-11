import styled from 'styled-components/native';
import Icon from '../JIcon';

export const Container = styled.TouchableOpacity`
	width: 100%;
	height: 60px;

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
		box-shadow: 0 10px 10px rgba(0,0,0,0.2);
	`};

`;

export const Heading = styled.Text`
	font-size: 16px;
	margin-left: 25px;
`;

export const MoveIconWrapper = styled.View`
	width: 30px;
	height: 30px;
	background: ${props => props.theme.darkGray};
	border-radius: 15px;
`;

export const RightSideWrapper = styled.TouchableOpacity`
	max-width: 30px;
	height: 100%;
	flex: 1;
	/* border: 1px; */
	flex-direction: row;
	justify-content: space-between;
	align-items: flex-end;
`;

export const LeftSideWrapper = styled.View`
	max-width: 200px;
	height: 100%;
	flex: 1;
	/* border: 1px; */
	flex-direction: row;
	align-items: center;
`;


export const IconMove = styled(Icon)`
`;