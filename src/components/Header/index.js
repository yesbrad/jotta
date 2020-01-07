import React from 'react';
import {Container, MainContainer, CardContainer, HeaderWrapper, HeaderText, HeaderButtonContainer, HeaderTitleWrapper} from './styles';

const Header = ({children, leftButton, rightButton}) => {
	return (
		<Container>
			<HeaderWrapper>
				<HeaderButtonContainer>
					{leftButton && leftButton()}
				</HeaderButtonContainer>
				<HeaderTitleWrapper>
					<HeaderText>Jotta</HeaderText>
				</HeaderTitleWrapper>
				<HeaderButtonContainer>
					{rightButton && rightButton()}
				</HeaderButtonContainer>
			</HeaderWrapper>
			<MainContainer>
				{children}
			</MainContainer>
		</Container>
	);
};

export default Header;
