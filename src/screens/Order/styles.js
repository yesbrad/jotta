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
	/* border: 1px; */
`;

export const AddJotWrapper = styled.View`
	width: 100%;
	height: 50px;
	flex-direction: row;
	padding: 0 10px;
	margin-bottom: 30px;
`;

export const AddJotText = styled.TextInput`
	flex: 1;
	width: 100%;
	height: 100%;
	background: ${props => props.theme.lightestGray};
	border-radius: 30px;
	margin-right: 10px;
	padding-left:15px;
`;

export const AddJotButton = styled.TouchableOpacity`
	width: 50px;
	height: 50px;
	/* flex: 1; */
	background: ${props => props.theme.brandColor};;
	border-radius: 30px;
	justify-content: center;
	align-items: center;
`;

export const Text = styled.Text`
	font-size: 32px;
`;

export const Button = styled.TouchableOpacity`
	width: 100px;
	height: 50px;
	background: red;
`;

export const KeyboardAvoidingView = styled.KeyboardAvoidingView`
	flex: 1;
`;

export const NoJotWrapper = styled.View`
	width: 100%;
	height: 100%;
	flex: 1;
	align-items: center;
	justify-content: center;
	/* border: 1px; */
`;

export const NoJotText = styled.Text`
	/* border: 1px; */
	color: ${props => props.theme.lightGray};
`;
