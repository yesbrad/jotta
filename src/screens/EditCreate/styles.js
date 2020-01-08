import styled from 'styled-components/native';
import Slider from '@react-native-community/slider';

export const Container = styled.ScrollView`
	width: 100%;
	height: 100%;
	flex: 1;
`;

export const SettingWrapper = styled.View`
	width: 100%;
	height: 150px;
	/* border: 1px; */
	justify-content:center;
	align-items: center;
	padding: 30px;
`;

export const SettingTitle = styled.Text`
	width: 100%;
	text-align: left;
	font-size: 18px;
	margin-bottom: 15px;
	font-weight: 400;
	font-family: ${props => props.theme.mainFont};
	color: ${props => props.theme.darkGray};
`;

export const AddButtonWrapper = styled.View`
	width: 100%;
	height: 80px;
	padding: 10px 30px;
	margin-bottom: 30px;
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
	font-size: 18px;
	font-weight: 700;
`;

export const NameInput = styled.TextInput`
	width: 100%;
	height: 60px;
	border-radius: 40px;
	border: 1px;
	border-color: ${props => props.theme.lightGray};
	padding-left: 20px;
	color: ${props => props.theme.darkGray};
`;

export const KeyboardAvoidingView = styled.KeyboardAvoidingView`
	flex: 1;
`;

export const TimingSlider = styled(Slider)`
	width: 100%;
`;