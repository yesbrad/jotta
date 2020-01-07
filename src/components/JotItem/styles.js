import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
	width: 100%;
	height: 40px;
	background: lightgray;
	margin-bottom: 10px;

	${props => props.isActive &&	`
		background: purple;
	`};
`;

export const Heading = styled.Text`
	font-size: 16px;
`;
