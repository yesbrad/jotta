import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

export const Container = styled.View`
	width: 100%;
	height: 100%;
	background-color: ${props => props.theme.brandColor};
`;

export const HeaderWrapper = styled.View`
	width: 100%;
	height: 60px;
	margin-top: ${getStatusBarHeight()};
	flex-direction: row;
`;

export const HeaderTitleWrapper = styled.View`
	width: 100%;
	height:100%;
	flex:1;
	align-items: center;
	justify-content: center;
`;

export const HeaderText = styled.Text`
	color: white;
	font-size: 24px;
	font-weight: 700;
	/* border:1px; */
`;

export const HeaderButtonContainer = styled.View`
	height: 100%;
	max-width: 60px;
	flex:1;
	/* border: 1px; */
	align-items: center;
	justify-content: center;
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