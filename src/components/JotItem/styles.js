import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
	width: 100%;
	height: 50px;
	/* margin-bottom: 15px; */
	/* padding: 0 20px; */
`;

export const Wrapper = styled.View`
		/* background: lightgray; */
		flex: 1;
		width: 100%;
		height: 100%;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 0 30px;
	
		${props => props.isActive &&	`
		background: purple;
	`};
`;

export const Heading = styled.Text`
	font-size: 16px;
`;

export const MoveIconWrapper = styled.View`
	width: 30px;
	height: 30px;
	background: darkgray;
	border-radius: 15px;
`;
