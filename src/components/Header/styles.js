import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

export const Container = styled.View`
	width: 100%;
	height: 100%;
	background-color: purple;
`;

export const HeaderWrapper = styled.View`
	width: 100%;
	height: 60px;
	margin-top: ${getStatusBarHeight()};
	background-color: purple;
	align-items: center;
	justify-content: center;
`;

export const HeaderText = styled.Text`
	color: white;
	font-size: 24px;
	font-weight: 700;
`;

export const MainContainer = styled.View`
	width: 100%;
	height: 100%;
	flex: 1;
	background-color: white;
	overflow: hidden;
	border-top-left-radius: 30px;
	border-top-right-radius: 30px;
`;