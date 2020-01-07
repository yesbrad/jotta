import styled from 'styled-components/native';

export const Container = styled.View`
	width: 100%;
	height: 100%;
	flex: 1;
`;

export const JotWrapper = styled.View`
	width: 100%;
	height: 100%;
	flex: 1;
`;

export const AddJotWrapper = styled.View`
	width: 100%;
	height: 60px;
	flex-direction: row;
`;

export const AddJotText = styled.TextInput`
	flex: 1;
	width: 100%;
	height: 100%;
	background: lightgray;
	border-radius: 30px;
`;

export const AddJotButton = styled.TouchableOpacity`
	width: 60px;
	height: 60px;
	/* flex: 1; */
	background: purple;
	border-radius: 30px;
`;

export const Text = styled.Text`
	font-size: 32px;
`;

export const Button = styled.TouchableOpacity`
	width: 100px;
	height: 50px;
	background: red;
`;
